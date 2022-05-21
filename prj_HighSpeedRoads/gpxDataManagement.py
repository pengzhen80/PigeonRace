import os
import xml.etree.ElementTree as ET
import math
from geopy.distance import distance

def distance_gps(coord1, coord2):
    return distance(coord1, coord2).meters

def haversine(coord1, coord2):
    R = 6372800  # Earth radius in meters
    lat1, lon1 = coord1
    lat2, lon2 = coord2
    
    phi1, phi2 = math.radians(lat1), math.radians(lat2) 
    dphi       = math.radians(lat2 - lat1)
    dlambda    = math.radians(lon2 - lon1)
    
    a = math.sin(dphi/2)**2 + \
        math.cos(phi1)*math.cos(phi2)*math.sin(dlambda/2)**2
    
    result = 2*R*math.atan2(math.sqrt(a), math.sqrt(1 - a))
    print(result)
    return result


class GpxdataManagement:
    def __init__(self):
        self.allgpxDatas = []
        self.gpxDatas = []
        self.names = []
        # def readAllFiles_in_folder(pathOfGpxFiles):
        #     for root, dirs, files in os.walk(pathOfGpxFiles):
        #         for file in files:
        #             if file.endswith(".gpx"):
        #                 print(file)
        # readAllFiles_in_folder('./gpxfiles/OriginGPX/CN/NFZ/')

    def decode_dir(self,path):
        # filenames = os.listdir(path)
        # file_paths = []
        # for name in filenames:
        #     file_paths.append(path+name)
        # print(file_paths)
        # self.gpxDatas =  self.gpx_reader_multiFiles(file_paths)

        filenames = os.listdir(path)
        file_paths = []
        for name in filenames:
            # file_paths.append(path+name)
            file_ele = {}
            file_ele['name'] = name.split('.')[0]

            allData = self.gpx_reader(path+name)
            file_ele['data'] = self.gpx_filter_deletePoints(allData,1000)
            self.gpxDatas.append(file_ele)
            self.names.append(name.split('.')[0])

            ##make all points map
            ele_allPoints = {}
            ele_allPoints['name'] = name.split('.')[0]
            ele_allPoints['data'] = self.gpx_filter_AllPoints(allData)
            self.allgpxDatas.append(ele_allPoints)
            
            

        print(len(self.gpxDatas))

    # get all data from a gpx file
    def gpx_reader(self, path):
        result = []
        gpx_file = open(path, 'r')

        gpx_xml = ET.parse(gpx_file)
        # print(gpx_xml)
        root = gpx_xml.getroot()
        for trk in root:
            # print(trk.tag)
            for name in trk:
                # print(name.tag)
                for trkpt in name:
                    cell = {}
                    # print(trkpt.attrib['lat'],trkpt.attrib['lon'])
                    cell['latitude'] = float(trkpt.attrib['lat'])
                    # print(cell.latitude)
                    # print(cell.latitude)
                    cell['longitude'] = float(trkpt.attrib['lon'])
                    # print(cell.longitude)
                    # print(trkpt.tag)
                    for ele in trkpt:
                        # if ele.tag == ''
                        # print(ele.tag)
                        if ele.tag == '{http://www.topografix.com/GPX/1/1}ele':
                            cell['time'] = ele.text
                        if ele.tag == '{http://www.topografix.com/GPX/1/1}name':
                            # print(ele.text)
                            cell['speed'] = ele.text
                    result.append(cell)

        # print(len(result))
        return result

    ###start from the first point,delete points distance less than threshold
    def gpx_filter_deletePoints(self,datas,distance):
        result = []
        reference = [datas[0]['latitude'],datas[0]['longitude']]
        result.append(reference)
        for data in datas:
            data =[float(data['latitude']),float(data['longitude'])]
            if distance_gps(reference,data) >= distance:
                reference = data
                result.append(reference)
        print(len(result))
        return result

    def gpx_filter_AllPoints(self,datas):
        result = []
        for data in datas:
            data =[float(data['latitude']),float(data['longitude'])]
            result.append(data)
        print(len(result))
        return result

    # def gpx_reader_multiFiles(self, paths):
    #     result = []
    #     for path in paths:
    #         features = self.gpx_reader(path)
    #         # print(features)
    #         result.append(features)
    #     print(len(result))
    #     return result
    def get_pathNames(self):
        return self.names
    def get_datas(self):
        return self.gpxDatas
    def get_data_by_name(self,name):
        for data in self.gpxDatas:
            if data['name'] == name:
                return data['data']
    def getDataByName_toPath(self,name):
        result = []
        for data in self.gpxDatas:
            if data['name'] == name:
                for point in data['data']:
                    tmp_tuple = (point[0],point[1])
                    result.append(tmp_tuple)
        # print(result)
        return result
    
    def getAllDataByName_toPath(self,name):
        result = []
        for data in self.allgpxDatas:
            if data['name'] == name:
                for point in data['data']:
                    tmp_tuple = (point[0],point[1])
                    result.append(tmp_tuple)
        # print(result)
        return result

if __name__ == '__main__':
    gpxManager = GpxdataManagement()
    gpx_data = gpxManager.decode_dir('./gpxfiles/OriginGPX/CN/NFZ/')
    gpxManager.getDataByName_toPath('G207-涞源-襄阳-V2.gpx')
