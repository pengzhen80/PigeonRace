from fileinput import filename
import os

def func_makeRouteFromOut(DIR_NAME= './groupdatas/20221026_上午'):
    route_list = []
    for file in os.listdir(DIR_NAME):
        # print(file)
        rawdata = []
        if (file.endswith('.out')):
            file_handler = open(os.path.join(DIR_NAME, file))
            lines = file_handler.readlines()
            # print(lines)
            for line in lines:
                # print(type(line))
                # print(line)
                # print(line.split(','))
                data_list = line.split(',')
                if(data_list[1]!='No-Fixed'):
                    rawdata.append({'utc':data_list[0],'latitude':data_list[2],'longitude':data_list[3],'elevation':data_list[4]})
        # print(rawdata)
        route_list.append({'name':file,'data':rawdata})
    return route_list

def func_normalizeRouteName(routelist):
    for route in routelist:
        # print(route['name'].split('.'))
        # print(route['name'].split('.')[0][-8:])
        route['name'] = route['name'].split('.')[0][-8:]
        # print(route['name'])
    return routelist

if __name__ == '__main__':
    routelist = func_makeRouteFromOut()
    routelist = func_normalizeRouteName(routelist)
    for route in routelist:
        print(route['name'],len(route['data']))