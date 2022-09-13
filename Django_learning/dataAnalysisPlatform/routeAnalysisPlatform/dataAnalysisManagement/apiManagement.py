from asyncio import shield
from cgi import test
from re import T
from unittest import result
from requests import delete
import requests
import json
from collections import defaultdict
from datetime import datetime
import hashlib
import copy

class DBManagement ():
    def __init__(self):
        self.mxid = ''
        # self.activitys = [{"activity_id":"","activity_name":"","release_date":"","release_time":""}]
        self.activitys=[]
    
    def logIn(self,username,password):
        #Init
        self.mxid='' 
        self.activitys = []
        url = 'http://skyleader3.yuansan.com/api/SkyLeader/Login'

        myobj = {"account": username,"password": password}
        # myobj = {"account": "mx01","password": "80443914"}

        x = requests.post(url, data=myobj)
        # res = json.loads(x.text)
        # print(type(res),res)
        res = x.json()
        # print(res,type(res))
        res=json.loads(res)
        # print(res,type(res),res['mxid'])
        status= res['status']
        # print(status)
        if(status == 'ok'):
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

        myobj = { "mxid": self.mxid,
            "release_date": "string",
            "release_time": "string"
        }

        x = requests.post(url, data=myobj)
        # res = json.loads(x.text)
        # print(type(res),res)
        res = x.json()
        # print(res,type(res))
        res=json.loads(res)
        # print(res,type(res))
        # self.activitys.append(res)
        self.activitys += self.activitys+res
        # print(self.activitys)
        for activity in self.activitys:
            self.api_getActivitity(activity['activity_id'],self.mxid,activity['activity_name'],activity['release_date'],activity['release_time'])
            
        return res
    
    def api_getActivitity(self,activity_id,mxid,activity_name,release_date,release_time):
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
        res=json.loads(res)
        # print(res,type(res))
        # self.activitys.append(res)
        # self.activitys += self.activitys+res
        # print(self.activitys)
        return res
    
    def getActivities(self):
        return self.activitys
    
if __name__ == '__main__':
    dbManager = DBManagement()
    # dbManager.getAllShedWithPaths()
    # dbManager.insert_single()
    # dbManager.delete("5834f1287869a9a48be75adb7be005be")
    # dbManager.search_byNfzid("6271242f819a1584ba22f2debae2aaa2")
    # dbManager.insertByShedAndPath('id','path')

