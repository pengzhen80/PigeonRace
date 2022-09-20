from asyncio import shield
from cgi import test
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


class DBManagement ():
    def __init__(self):
        self.mxid = ''
        # self.activitys = [{"activity_id":"","activity_name":"","release_date":"","release_time":""}]
        self.activities = []

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
        self.activities += self.activities+res
        # print(self.activitys)
        for activity in self.activities:
            self.api_getActivitity(activity['activity_id'], self.mxid, activity['activity_name'],
                                   activity['release_date'], activity['release_time'])
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
            print(trainRecord['trainrecordid'])
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
        print('activity:', res)
        # self.activitys.append(res)
        # self.activitys += self.activitys+res
        # print(self.activitys)
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
        print('routes', res)
        # self.activitys.append(res)
        # self.activitys += self.activitys+res
        # print(self.activitys)
        return res

    def api_readModule(self, activity_id):
        dataList = []
        with open('csvfiles/gpsId_ringId.csv', newline='') as csvfile:
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

        for data in dataList:
            print(data)
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
                print('module_id:', module['moduleid'])
                self.api_readTrainRecord(activity_id, module['moduleid'])
        return

    def getActivities(self):
        return self.activities


if __name__ == '__main__':
    dbManager = DBManagement()
    # dbManager.getAllShedWithPaths()
    # dbManager.insert_single()
    # dbManager.delete("5834f1287869a9a48be75adb7be005be")
    # dbManager.search_byNfzid("6271242f819a1584ba22f2debae2aaa2")
    # dbManager.insertByShedAndPath('id','path')
