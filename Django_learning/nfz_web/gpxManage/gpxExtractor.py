#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import glob
import math
import numpy as np
import os

from bs4 import BeautifulSoup
from geopy.distance import geodesic, distance

from .WGS84ToGCJ02 import transform


def createDirectory(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)


def computeBearing(pointA, pointB):
    """
    Calculates the bearing between two points.
    The formulae used is the following:
        θ = atan2(sin(Δlong).cos(lat2),
                  cos(lat1).sin(lat2) − sin(lat1).cos(lat2).cos(Δlong))
    :Parameters:
      - `pointA: The tuple representing the latitude/longitude for the
        first point. Latitude and longitude must be in decimal degrees
      - `pointB: The tuple representing the latitude/longitude for the
        second point. Latitude and longitude must be in decimal degrees
    :Returns:
      The bearing in degrees
    :Returns Type:
      float
    """
    if (type(pointA) != tuple) or (type(pointB) != tuple):
        raise TypeError("Only tuples are supported as arguments")

    lat1 = math.radians(pointA[0])
    lat2 = math.radians(pointB[0])

    diffLong = math.radians(pointB[1] - pointA[1])

    x = math.sin(diffLong) * math.cos(lat2)
    y = math.cos(lat1) * math.sin(lat2) - (math.sin(lat1)
                                           * math.cos(lat2) * math.cos(diffLong))

    initial_bearing = math.atan2(x, y)

    # Now we have the initial bearing but math.atan2 return values
    # from -180° to + 180° which is not what we want for a compass bearing
    # The solution is to normalize the initial bearing as shown below
    initial_bearing = math.degrees(initial_bearing)
    compass_bearing = (initial_bearing + 360) % 360

    return initial_bearing, compass_bearing


def computeOffset(coordsLIST, kilometers, outputFile=""):
    """
    output: coordsLIST, type: list< list<float> >
    """
    pathLIST1 = []
    pathLIST2 = []
    polygon = []
    zoneLIST1 = []
    zoneLIST2 = []
    vd = distance(kilometers=kilometers)
    for i in range(len(coordsLIST)):
        tmpLat = float(coordsLIST[i][0])
        tmpLng = float(coordsLIST[i][1])
        if len(coordsLIST)-1 != i:
            bearing = computeBearing((tmpLat, tmpLng), (float(
                coordsLIST[i+1][0]), float(coordsLIST[i+1][1])))[0]
        else:
            pass
        pathLIST1.append(vd.destination(point=(tmpLat, tmpLng),
                         bearing=bearing+90).format_decimal().split(", "))
        pathLIST2.append(vd.destination(point=(tmpLat, tmpLng),
                         bearing=bearing-90).format_decimal().split(", "))
        if outputFile != "":
            zoneLIST1.append(",".join(pathLIST1[-1]))
            zoneLIST2.append(",".join(pathLIST2[-1]))

    if outputFile != "":
        zoneFile = open(outputFile, "w")
        zoneFile.write("\n".join(zoneLIST1))
        zoneFile.write("\n")
        zoneLIST2.reverse()
        zoneFile.write("\n".join(zoneLIST2))
        zoneFile.close()

    pathLIST1 = np.array(pathLIST1, dtype=float).tolist()
    polygon.extend(pathLIST1)
    pathLIST2.reverse()
    pathLIST2 = np.array(pathLIST2, dtype=float).tolist()
    polygon.extend(pathLIST2)
    return polygon


def coords2track(coordsLIST, kilometers, outputFile=""):
    """
    output: coordsLIST, type: list< list<float> >
    """
    tmpLat = None
    tmpLng = None

    trackLIST = []
    coordsCount = 0
    distanceSum = 0.0
    for lat, lng in coordsLIST:
        if tmpLat == None and tmpLng == None or coordsCount == len(coordsLIST)-1:
            # trackLIST.append("{lat:" + lat + ",lng:" + lng + "}")
            trackLIST.append("{}, {}".format(lat, lng))
        else:
            distanceSum += geodesic((float(tmpLat), float(tmpLng)),
                                    (float(lat), float(lng))).kilometers
            if distanceSum > kilometers:
                # trackLIST.append("{lat:" + lat + ",lng:" + lng + "}")
                trackLIST.append("{}, {}".format(lat, lng))
                distanceSum = 0
        # print(lat, lng, distanceSum)
        tmpLat = lat
        tmpLng = lng
        coordsCount += 1

    if outputFile != "":
        trackFILE = open("{}_{}km.track".format(filePath, kilometers), "w")
        trackFILE.write("\n".join(trackLIST))
        trackFILE.close()

    trackLIST = [x.split(",") for x in trackLIST if x != '']
    trackLIST = np.array(trackLIST, dtype=float).tolist()

    return trackLIST


def gpx2coords(gpxFILE, writeFile=False):
    """
    output: coordsLIST, type: list< list<string> >
    """
    coordsLIST = []
    with open(gpxFILE) as gpx:
        soup = BeautifulSoup(gpx.read(), "lxml")
        trkptLIST = soup.findAll("trkpt")
        if len(trkptLIST) == 0:
            trkptLIST = soup.findAll("wpt")
            if len(trkptLIST) == 0:
                trkptLIST = soup.findAll("rtept")

        for t in trkptLIST:
            coordsLIST.append([t["lat"], t["lon"]])

    if writeFile:
        coordsFILE = open("{}.coords".format(
            gpxFILE[:gpxFILE.rfind(".")]), "w")
        for lat, lng in coordsLIST:
            coordsFILE.write("{},{}\n".format(lat, lng))
        coordsFILE.close()

    coordsLIST = np.array(coordsLIST, dtype=float).tolist()

    return coordsLIST


def produceHtmlFile(coordsLIST, polygon, outputFile="", mapType="gmap"):
    if outputFile == "":
        return None

    if mapType == "gmap":
        template = open("./coords.OSM.template", "r").read()
    else:
        template = open("./coords.Amap.template", "r").read()
        coordsLIST = [transform(x[0], x[1]) for x in coordsLIST]
        polygon = [transform(x[0], x[1]) for x in polygon]
        coordsLIST = np.array(coordsLIST)[:, [1, 0]].tolist()
        polygon = np.array(polygon)[:, [1, 0]].tolist()

    with open(outputFile, "w") as html:
        template = template.replace(
            "<%title%>", outputFile[outputFile.rfind("/"):outputFile.rfind(".")])
        template = template.replace("<%roadcoords%>", str(coordsLIST))
        template = template.replace("<%polylinecoords%>", str(polygon))
        html.write(template)

    return template


class OriginGpxdataManagement:
    def __init__(self):
        self.gpxdata = []
        # element: {name: "", polygon: [], originPath: [],filterPath :[]}
            # parse .gpx to .coords
            # coordsLIST = gpx2coords(gpxFILE)

            # # filter .coords to _1km.track
            # kilometers = 1
            # trackLIST = coords2track(coordsLIST, kilometers)

            # # calculate track offset (polygon coords) by kilometers
            # polygon = computeOffset(
            #     trackLIST, kilometers=0.2, outputFile="{}_{}km.zone".format(fileName, kilometers))
            # # if "CN" in gpxFILE:
            #     cell['name'] = fileName.split('/')[-1]
            #     cell['polygon'] = polygon
            #     cell['originPath'] = coordsLIST
            #     cell['filterPath'] = trackLIST
            #     self.gpxdata.append(cell)
        return None

    def DecodeData(self, pathName, pathLine):
        # normalize pathLine:
        coordsLIST = []
        for i in range(len(pathLine)):
            if(i % 2 == 0):
                coordsLIST.append([pathLine[i], pathLine[i+1]])

        # filter .coords to _1km.track
        kilometers = 1
        trackLIST = coords2track(coordsLIST, kilometers)

        # calculate track offset (polygon coords) by kilometers
        polygon = computeOffset(trackLIST, kilometers=0.2)

        cell={}
        cell['name'] = pathName
        cell['polygon'] = polygon
        cell['pathLine_origin'] = coordsLIST
        cell['pathLine_filter'] = trackLIST

        for i in range(len(self.gpxdata)):
            if self.gpxdata[i]['name'] == pathName:
                self.gpxdata[i]['polygon'] = polygon
                return None
        self.gpxdata.append(cell)

        return None

    def GetPolygon(self,pathName):
        for cell in self.gpxdata:
            if cell['name'] == pathName:
                return cell['polygon']
        print('no such pathname')
        return None

    def GetPathLine_origin(self,pathName):
        for cell in self.gpxdata:
            if cell['name'] == pathName:
                return cell['pathLine_origin']
        print('no such pathname')
        return None

    def GetPathLine_filter(self,pathName):
        for cell in self.gpxdata:
            if cell['name'] == pathName:
                return cell['pathLine_filter']
        print('no such pathname')
        return None
    

if __name__ == "__main__":     
    gpxdata = OriginGpxdataManagement()
    datas = gpxdata.GetData()
    print(len(datas))
    for data in datas:
        print(data['name'])
        # print(data['polygon'])
        # print(data['originPath'])
        # print(data['filterPath'])

# if __name__ == "__main__":
#     filePath = "./gpxfiles"
#     print(glob.iglob("{}/**/*.gpx".format(filePath)))
#     for gpxFILE in glob.iglob("{}/**/*.gpx".format(filePath), recursive=True):
#         createDirectory("./NFZ_Coords" + gpxFILE[1:gpxFILE.rfind("/")])
#         fileName = "./NFZ_Coords" + gpxFILE[1:gpxFILE.rfind(".")]

#         print(gpxFILE, fileName)

#         # parse .gpx to .coords
#         coordsLIST = gpx2coords(gpxFILE)

#         # filter .coords to _1km.track
#         kilometers = 1
#         trackLIST = coords2track(coordsLIST, kilometers)

#         # calculate track offset (polygon coords) by kilometers
#         polygon = computeOffset(
#             trackLIST, kilometers=0.2, outputFile="{}_{}km.zone".format(fileName, kilometers))
#         # if "CN" in gpxFILE:
#         #     html = produceHtmlFile(coordsLIST, polygon, "{}_{}km_Amap.html".format(fileName, kilometers), mapType="amap")
#         # else:
#         #     html = produceHtmlFile(coordsLIST, polygon, "{}_{}km.html".format(fileName, kilometers))
#         # print(polygon)
