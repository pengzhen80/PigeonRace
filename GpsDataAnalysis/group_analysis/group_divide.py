###sperate group to sub group, print every sub's group member
###show the result with filtered bar plot
from geopy import distance
def distance_twoPoints(Alatitude,Alongitude,Blatitude,Blongtitude):
    A = (Alatitude, Alongitude)
    B = (Blatitude, Blongtitude)
    dis = distance.distance(A, B).km*1000
    return dis

def group_analysis_divideGroup(route_list):
    ###make route_list to a data list without name
    route_data_list = []
    for route in route_list:
        route_data_list.append(route['data'])

    group_centers = []
    group_centers.append(0)

    ungroups = []
    for i in range(1,len(route_list)):
        ungroups.append((i))
    
    group_list_byTime = []
    ###group
    for center in group_centers:
        for ungroup in ungroups:
            dis = distance_twoPoints(route_data_list[center][0]['latitude'])
