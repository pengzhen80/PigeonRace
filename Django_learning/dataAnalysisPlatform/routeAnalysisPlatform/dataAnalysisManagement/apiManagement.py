from asyncio import shield
from cgi import test
from locale import normalize
from operator import mod
from re import T
from unittest import result
from requests import delete
import requests
import json
from collections import defaultdict
from datetime import datetime
import hashlib
import copy
import csv
from datetime import datetime, tzinfo
from dateutil import tz
import pytz


class DBManagement ():
    def __init__(self):
        self.mxid = ''
        # self.activitys = [{"activity_id":"","activity_name":"","release_date":"","release_time":""}]
        self.activities = []
        self.routes = {}
        self.routes_summarydata = {}
        self.modules ={}
        self.gpsIdringId = self.readfile_gpsIdringId()

    def readfile_gpsIdringId(self):
        dataList = []
        with open('csvfiles/gpsId_ringId_train.csv', newline='') as csvfile:
            spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')

            for row in spamreader:
                cell = {}
                # print(', '.join(row))
                # print(type(row),len(row))
                rowList = row[0].split(',')
                cell['gpsId'] = rowList[0]
                cell['ringId'] = rowList[1]
                # print(cell)
                dataList.append(cell)
        return dataList

    def logIn(self, username, password):
        # Init
        self.mxid = ''
        self.activities = []
        url = 'http://skyleader3.yuansan.com/api/SkyLeader/Login'

        myobj = {"account": username, "password": password}
        # myobj = {"account": "mx01","password": "80443914"}

        x = requests.post(url, data=myobj)
        # res = json.loads(x.text)
        # print(type(res),res)
        res = x.json()
        # print(res,type(res))
        res = json.loads(res)
        # print(res,type(res),res['mxid'])
        status = res['status']
        # print(status)
        if (status == 'ok'):
            self.mxid = res['mxid']
            # print(self.mxid)
            self.api_getActivitityID()
        return res
        # result = res['results']
        # if(result == False):
        #     print("insert failed")
        #     return False
        # return True

    def api_getActivitityID(self):
        url = 'http://skyleader3.yuansan.com/api/SkyLeader/readActivityId'

        myobj = {"mxid": self.mxid,
                 "release_date": "string",
                 "release_time": "string"
                 }

        x = requests.post(url, data=myobj)
        # res = json.loads(x.text)
        # print(type(res),res)
        res = x.json()
        # print(res,type(res))
        res = json.loads(res)
        # print(res,type(res))
        # self.activitys.append(res)
        # self.activities = self.activities+res
        # print(self.activities)
        for activity in res:
            if(self.api_getActivitity(activity['activity_id'], self.mxid, activity['activity_name'],activity['release_date'], activity['release_time'])):          
                self.activities = self.activities + [activity]
                self.api_readModule(activity['activity_id'])
        return res

    def api_readTrainRecord(self, activity_id, module_id):
        url = 'http://skyleader3.yuansan.com/api/SkyLeader/readTrainRecord'

        myobj = {
            "mxid": self.mxid,
            "moduleid": module_id,
            "activity_id": activity_id,
        }

        x = requests.post(url, data=myobj)
        res = x.json()
        # print(res,type(res))
        res = json.loads(res)
        for trainRecord in res:
            self.data_routes_summaryData_add(activity_id,module_id,trainRecord['trainrecordid'],trainRecord)
            # print(trainRecord['trainrecordid'])
            self.api_readCloudLocusText(
                activity_id, module_id, trainRecord['trainrecordid'])
        return res

    def api_getActivitity(self, activity_id, mxid, activity_name, release_date, release_time):
        url = 'http://skyleader3.yuansan.com/api/SkyLeader/readActivity'

        myobj = {
            "activity_id": activity_id,
            "mxid": mxid,
            "activity_name": activity_name,
            "release_date": release_date,
            "release_time": release_time
        }

        x = requests.post(url, data=myobj)
        res = x.json()
        res = json.loads(res)
        # print('activity:', res)

        return res

    def api_readCloudLocusText(self, activity_id, module_id, trainRecord_id):
        url = 'http://skyleader3.yuansan.com/api/SkyLeader/readCloudLocusText'

        myobj = {
            "moduleid": module_id,
            "trainrecordid": trainRecord_id,
            "activity_id": activity_id
        }

        x = requests.post(url, data=myobj)
        res = x.json()
        res = json.loads(res)
        # print('routes', res)

        def normalize_data(data):
            data = data[1:]
            data = data[:-1]
            data_list = data.split(',')
            return data_list

        for route in res:
            print(route.keys())
            # print(route['updatetimestamp'])
            # print(route['utc'])
            fixed_list = normalize_data(route['fix']);
            latitude_list = normalize_data(route['latitude'])
            longitude_list = normalize_data(route['longitude'])
            distance_list = normalize_data(route['realdistance'])
            elevation_list = normalize_data(route['gpsheight'])
            speed_list = normalize_data(route['gpsspeed'])
            heading_list = normalize_data(route['direction'])
            time_list = normalize_data(route['utc'])

            self.data_routes_addRoute(fixed_list,activity_id,module_id,trainRecord_id,latitude_list,longitude_list,elevation_list,distance_list,speed_list,heading_list,time_list)
        return res

    def api_readModule(self, activity_id):
        # dataList = []
        # with open('csvfiles/gpsId_ringId_train.csv', newline='') as csvfile:
        #     spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')

        #     for row in spamreader:
        #         cell = {}
        #         # print(', '.join(row))
        #         # print(type(row),len(row))
        #         rowList = row[0].split(',')
        #         cell['gpsId'] = rowList[0]
        #         cell['ringId'] = rowList[1]
        #         # print(cell)
        #         dataList.append(cell)

        for data in self.gpsIdringId:
            # print(data)
            url = 'http://skyleader3.yuansan.com/api/SkyLeader/readCloudModule'

            myobj = {
                "activity_id": activity_id,
                "mxid": self.mxid,
                "ringid": data['ringId'],
                "laserid": data['gpsId']
            }

            x = requests.post(url, data=myobj)
            res = x.json()
            res = json.loads(res)
            # print('module:', res)
            for module in res:
                # print('module_id',module['modlueid'])
                # print(module)
                self.modules[module['moduleid']] = module
                # print('module_id:', module['moduleid'])
                self.api_readTrainRecord(activity_id, module['moduleid'])
        return

    def data_routes_addRoute(self,fixed_list,activity_id,module_id,trainRecord_id,latitudes,longitudes,elevations,distances,speeds,headings,times):
        route_key = activity_id+module_id+trainRecord_id
        route_data = []
        
        api_locations = []
        for i in range(len(fixed_list)):
            # print(fixed_list[i])
            if(fixed_list[i]!='No-Fixed'):
                cell = {}
                cell['latitude'] = latitudes[i]
                cell['longitude']= longitudes[i]
                cell['elevation']= elevations[i]
                cell['distance']= distances[i]
                cell['speed']= speeds[i]
                cell['heading']= headings[i]
                cell['time']= times[i]
                route_data.append(cell)

                # api_locations.append({"latitude":latitudes[i],"longitude":longitudes[i]})
        # print(len(route_data))

        # url = 'https://api.open-elevation.com/api/v1/lookup?'
        # myobj = {
        #         "locations":api_locations
        # }
        # x = requests.post(url, data=json.dumps(myobj))
        # print(type(x))
        # print(x.text)
        # res = x.json()
        # res = json.loads(res)
        # print(res)

        self.routes[route_key] = route_data
        # print('route_key',route_key)
    
    def data_routes_summaryData_add(self,activity_id,module_id,trainrecord_id,data):
        normalized_data = data
        normalized_data['gps_id'] = self.modules[module_id]['laserid']
        self.routes_summarydata[activity_id+module_id+trainrecord_id] = normalized_data

    def read_routes_summaryData(self,activity_id):
        keys = self.routes_summarydata.keys()
        results = []
        for key in keys:
            if activity_id in key:
                results.append(self.routes_summarydata[key])
        return results
    
    def read_routes_summaryData_byId(self,id):
        return self.routes_summarydata[id]
    
    def read_routes_by_routeId(self,routeId):
        # print('route_key read:',routeId)
        return self.routes[routeId]

    def getActivities(self):
        return self.activities

    # def getTrainRecordBy


if __name__ == '__main__':
    dbManager = DBManagement()
    # dbManager.getAllShedWithPaths()
    # dbManager.insert_single()
    # dbManager.delete("5834f1287869a9a48be75adb7be005be")
    # dbManager.search_byNfzid("6271242f819a1584ba22f2debae2aaa2")
    # dbManager.insertByShedAndPath('id','path')
