from locale import normalize
import matplotlib.pyplot as plt
# plt.plot(line_X_bearing, line_Y_bearing)
# plt.plot(line_X_bearing, line_Y_firstBearing)
# plt.plot(line_X_bearing, line_Y_secodeBearing)
# plt.savefig("out.png")

from gpx_management import gpx_reader_multiFiles
from geopy.distance import distance

class RouteEfficiency:
    def __init__(self,gpxDatas):
        self.normalizeGpxData(gpxDatas)
        self.getEfficiency()
        pass  
    
    def normalizeGpxData(self,gpxDatas):
        self.gpxDatas = []
        for route in gpxDatas:
            normalized_route = []
            for point in route:
                tmp_point = {}
                tmp_point['lat'] = point.latitude
                tmp_point['lon'] = point.longitude
                # tmp_point['dis'] = point['distance']           
                normalized_route.append(tmp_point)
            self.gpxDatas.append(normalized_route) 
        pass

    def getEfficiency(self):    
        ## step1: get distance of beeLine
        ## step2: get distance of focal route
        ## step3: get efficiency of route
        for route in self.gpxDatas:
            baseLine_startPoint = [route[0]['lat'],route[0]['lon']]
            baseLine_endPoint = [route[-1]['lat'],route[-1]['lon']]
            baseLineDistance = distance(baseLine_startPoint, baseLine_endPoint).km
            distanceOfRoute = 0
            for i_point in range(len(route)-1):
                tmp_dis = distance([route[i_point]['lat'],route[i_point]['lon']], [route[i_point+1]['lat'],route[i_point+1]['lon']]).km
                distanceOfRoute+= tmp_dis
            print(baseLineDistance,distanceOfRoute,'efficiency is ',baseLineDistance/distanceOfRoute)
        pass


import os
if __name__ == '__main__':
    # filenames = ['./gpxfiles/2021-02-0142906.gpx']
    filenames = []
    # path = './gpxfiles/gpx_tw'
    path = './gpxfiles/sub_lines'
    filenames_subline = os.listdir(path)
    for name in filenames_subline:
        filenames.append(path+'/'+name)
    # filenames.append('./gpxfiles/sub_lines/'+filenames_subline[0])
    # print(filenames)
    gpx_data = gpx_reader_multiFiles(filenames)
    RouteEfficiency(gpx_data)
    # print(len(gpx_data))