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
        result_min = self.analysis_singleRoute_timeSpeed_datas_min(
            timeSpeedList)
        result_max = self.analysis_singleRoute_timeSpeed_datas_max(
            timeSpeedList)
        return result_avarage, result_median, result_min, result_max

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
            if timeSpeed[1] != 0:
                min = timeSpeed[1]
                break
        for timeSpeed in timeSpeedList:
            if timeSpeed[1] == 0:
                continue
            if timeSpeed[1] < min:
                min = timeSpeed[1]

        return min

    def analysis_singleRoute_timeSpeed_datas_max(self, timeSpeedList):
        max = timeSpeedList[0][1]
        for timeSpeed in timeSpeedList:
            if timeSpeed[1] > max:
                max = timeSpeed[1]

        return max

    def Analysis_multiPigeon_sameSession_datas(self, timeSpan, total_distance, points):
        timeSpeedList = []
        route_points = []
        for i in range(len(points)-1):
            if(i % 5 == 0):
                timeSpeedList.append([points[i], float(points[i+1])])
                # print(points[i+2],points[i+3])
                route_points.append((points[i+2], points[i+3]))
        result_min = self.analysis_singleRoute_timeSpeed_datas_min(
            timeSpeedList)
        result_max = self.analysis_singleRoute_timeSpeed_datas_max(
            timeSpeedList)
        result_routeEfficiency = self.Analysis_multiPigeon_sameSession_routeEfficiency(
            route_points, total_distance)
        return float(total_distance)/float(timeSpan), result_min, result_max, result_routeEfficiency

    def Analysis_multiPigeon_sameSession_routeEfficiency_single(self, points, total_distance):
        start_point = points[0]
        end_point = points[len(points)-1]
        bee_distance = distance.distance(start_point, end_point).meters
        print(bee_distance, total_distance)
        return bee_distance/float(total_distance)

    def Analysis_multiPigeon_sameSession_routeEfficiency_multi(self, routeList):
        routes_efficiency = []
        route_count = 0
        for route in routeList:
            print(route['name'])
            if len(route['points']) <= 1:
                continue
            start_point = route['points'][0]
            end_point = route['points'][len(route['points'])-1]
            bee_distance = distance.distance(start_point, end_point).meters
            route_count += 1
            print(route_count,bee_distance, route['total_distance'])
            routes_efficiency.append(bee_distance/float(route['total_distance']))
        return routes_efficiency
    
    def Analysis_multiPigeon_sameSession_routeEfficiency_multi_pie(self, routeList,numbers):
        routes_efficiency_pie = {}
        for i in range(len(numbers)-1):
            routes_efficiency_pie[str(numbers[i])+'~'+str(str(numbers[i]+1))] = 0
        
        routes_efficiency = []
        route_count = 0
        for route in routeList:
            print(route['name'])
            if len(route['points']) <= 1:
                continue
            start_point = route['points'][0]
            end_point = route['points'][len(route['points'])-1]
            bee_distance = distance.distance(start_point, end_point).meters
            route_count += 1
            tmp_eff = bee_distance/float(route['total_distance'])
            print(route_count,bee_distance, route['total_distance'])
            routes_efficiency.append(tmp_eff)
            for i in range(len(numbers)-1):
                if(tmp_eff >= numbers[i] and tmp_eff < numbers[i+1]):
                    routes_efficiency_pie[str(numbers[i])+'~'+str(str(numbers[i]+1))] += 1
                    break
        
        routes_efficiency_pie_normalized = []
        for i in range(len(numbers)-1):
            routes_efficiency_pie_normalized.append(routes_efficiency_pie[str(numbers[i])+'~'+str(str(numbers[i]+1))])
        return routes_efficiency,routes_efficiency_pie_normalized

    def Analysis_multiPigeon_sameSession_makeRouteForREff(self, routeList):
        routes_normalized = []
        for route in routeList:
            route_normalized = {}
            route_normalized['points'] = []
            total_distance = 0
            for point in route:
                route_normalized['points'].append(
                    (point['latitude'], point['longitude']))
                total_distance += float(point['distance'])
            route_normalized['total_distance'] = total_distance
            routes_normalized.append(route_normalized)
        return routes_normalized

    def Analysis_multiPigeon_sameSession_makeRouteForREff_withFileName(self, routeList):
        routes_normalized = []
        for route in routeList:
            route_normalized = {}
            route_normalized['name'] = route['filename']
            route_normalized['points'] = []
            total_distance = 0
            for point in route['points']:
                route_normalized['points'].append(
                    (point['latitude'], point['longitude']))
                total_distance += float(point['distance'])
            route_normalized['total_distance'] = total_distance
            routes_normalized.append(route_normalized)
        return routes_normalized
