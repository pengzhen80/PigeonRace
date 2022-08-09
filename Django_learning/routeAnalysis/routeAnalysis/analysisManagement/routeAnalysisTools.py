import statistics
from geopy import distance

class RouteAnalysisManagement():
    def __init__(self):
        pass

    # points: time,speed
    def Analysis_singleRoute_timeSpeed_datas(self, points):
        timeSpeedList = []
        for i in range(len(points)-1):
            if(i % 2 == 0):
                timeSpeedList.append([points[i], float(points[i+1])])

        result_avarage = self.analysis_singleRoute_timeSpeed_datas_averageSpeed(
            timeSpeedList)
        result_median = self.analysis_singleRoute_timeSpeed_datas_medianSpeed(
            timeSpeedList)
        result_min = self.analysis_singleRoute_timeSpeed_datas_min(timeSpeedList)
        result_max = self.analysis_singleRoute_timeSpeed_datas_max(timeSpeedList)
        return result_avarage,result_median,result_min,result_max

    def analysis_singleRoute_timeSpeed_datas_averageSpeed(self, timeSpeedList):
        result = 0
        sum_speed = 0
        for timeSpeed in timeSpeedList:
            sum_speed += timeSpeed[1]
        result = sum_speed/len(timeSpeedList)

        return result

    def analysis_singleRoute_timeSpeed_datas_medianSpeed(self, timeSpeedList):
        result = 0
        speed_list = []
        for timeSpeed in timeSpeedList:
            speed_list.append(timeSpeed[1])
        result = statistics.median(speed_list)

        return result

    def analysis_singleRoute_timeSpeed_datas_min(self, timeSpeedList):
        min = 0
        for timeSpeed in timeSpeedList:
            if timeSpeed[1]!= 0:
                min = timeSpeed[1]
                break
        for timeSpeed in timeSpeedList:
            if timeSpeed[1]== 0:
                continue
            if timeSpeed[1]<min:
                min = timeSpeed[1]

        return min
    
    def analysis_singleRoute_timeSpeed_datas_max(self, timeSpeedList):
        max = timeSpeedList[0][1]
        for timeSpeed in timeSpeedList:
            if timeSpeed[1]>max:
                max = timeSpeed[1]

        return max

    def Analysis_multiPigeon_sameSession_datas(self, timeSpan,total_distance,points):
        timeSpeedList = []
        route_points = []
        for i in range(len(points)-1):
            if(i % 5 == 0):
                timeSpeedList.append([points[i], float(points[i+1])])
                # print(points[i+2],points[i+3])
                route_points.append((points[i+2],points[i+3]))
        result_min = self.analysis_singleRoute_timeSpeed_datas_min(timeSpeedList)
        result_max = self.analysis_singleRoute_timeSpeed_datas_max(timeSpeedList)
        result_routeEfficiency = self.Analysis_multiPigeon_sameSession_routeEfficiency_single(route_points,total_distance)
        return float(total_distance)/float(timeSpan),result_min,result_max,result_routeEfficiency

    def Analysis_multiPigeon_sameSession_routeEfficiency_single(self,points,total_distance):
        start_point = points[0]
        end_point = points[len(points)-1]
        bee_distance = distance.distance(start_point,end_point).meters
        print(bee_distance,total_distance)
        return bee_distance/float(total_distance)
