from ctypes import pointer
import os
from locale import normalize
from re import X
import matplotlib.pyplot as plt
import seaborn as sns
# plt.plot(line_X_bearing, line_Y_bearing)
# plt.plot(line_X_bearing, line_Y_firstBearing)
# plt.plot(line_X_bearing, line_Y_secodeBearing)
# plt.savefig("out.png")

from gpx_management import gpx_reader_multiFiles
from geopy.distance import distance


class RouteSimilarity:
    def __init__(self, gpxDatas, indexOfBaseRoute):
        self.x = []
        self.normalizeGpxData(gpxDatas)
        # self.getThreshold(indexOfBaseRoute)
        # print(len(self.x))
        # sns.displot(self.x,kde = True)
        # # Saving the Seaborn Figure:
        # plt.savefig('similaityThreshold_meter.png')
        pass

    def normalizeGpxData(self, gpxDatas):
        self.gpxDatas = []
        for route in gpxDatas:
            normalized_route = []
            for point in route:
                tmp_point = []
                tmp_point.append(point.latitude)
                tmp_point.append(point.longitude)
                normalized_route.append(tmp_point)
            self.gpxDatas.append(normalized_route)
        pass

    def getThreshold(self, indexOfBaseRoute):
        # step1: for a point in focal route
        # step2: get min distance from focal point to base route 
        # step3: put distance to x list
        # step4: draw a plot
        baseRoute = self.gpxDatas[indexOfBaseRoute]
        for index_route in range(len(self.gpxDatas)):
            route = None
            if(index_route == indexOfBaseRoute):
                continue
            else:
                route = self.gpxDatas[index_route]
            for point in route:
                minDis = self.distanceFromPointToRoute(point,baseRoute)
                self.x.append(minDis)
        pass

    def getSimilarity(self, indexOfBaseRoute,threshold):
        # step1: for a point in focal route
        # step2: get min distance from focal point to base route and min index of the distacne
        # step3:
        baseRoute = self.gpxDatas[indexOfBaseRoute]
        for index_route in range(len(self.gpxDatas)):
            route = None
            if(index_route == indexOfBaseRoute):
                continue
            else:
                route = self.gpxDatas[index_route]
            count_inThreshold = 0
            for point in route:
                minDis = self.distanceFromPointToRoute(point,baseRoute)
                if(minDis < threshold):
                    count_inThreshold += 1
            print('similarity',count_inThreshold/len(route))
        pass
    
    def distanceFromPointToRoute(self,point,route):
        min_distance = distance(point,route[0]).meters
        min_index = 0
        for i in range(len(route)):
            cur_point = route[i]
            cur_distance = distance(point,cur_point).meters
            if(cur_distance<min_distance):
                min_index = i
                min_distance = cur_distance
        return min_distance

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
    routeSimilartyInstance = RouteSimilarity(gpx_data, 6)
    routeSimilartyInstance.getSimilarity(6,10000)
    # print(len(gpx_data))
