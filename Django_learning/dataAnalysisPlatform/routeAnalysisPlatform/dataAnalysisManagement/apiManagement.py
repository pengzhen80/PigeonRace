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
        self.shedsMapToPaths = None
        self.shedAndPathMapToPathId = None
        # self.activitys = [{"activity_id":"","activity_name":"","release_date":"","release_time":""}]
        self.activitys=[]
        
    def logIn(self):
        url = 'http://skyleader3.yuansan.com/api/SkyLeader/Login'

        myobj = {"account": "pengzhenguo2021@gmail.com","password": "www1339"}
        # myobj = {"account": "mx01","password": "80443914"}

        x = requests.post(url, data=myobj)
        # res = json.loads(x.text)
        # print(type(res),res)
        res = x.json()
        # print(res,type(res))
        res=json.loads(res)
        # print(res,type(res),res['mxid'])
        status= res['status']
        print(status)
        if(status == 'ok'):
            self.mxid = res['mxid']
            print(self.mxid)
            self.getActivitityID()
        return res;
        # result = res['results']
        # if(result == False):
        #     print("insert failed")
        #     return False
        # return True

    def getActivitityID(self):
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
            self.getActivitity(activity['activity_id'],self.mxid,activity['activity_name'],activity['release_date'],activity['release_time'])
            
        return res;
    
    def getActivitity(self,activity_id,mxid,activity_name,release_date,release_time):
        url = 'http://skyleader3.yuansan.com/api/SkyLeader/readActivity'

        myobj = {
            "activity_id": activity_id,
            "mxid": mxid,
            "activity_name": activity_name,
            "release_date": release_date,
            "release_time": release_time
        }

        x = requests.post(url, data=myobj)
        # res = json.loads(x.text)
        # print(type(res),res)
        res = x.json()
        # print(res,type(res))
        res=json.loads(res)
        print(res,type(res))
        # self.activitys.append(res)
        # self.activitys += self.activitys+res
        # print(self.activitys)
        return res;
        

    def Set_Server(self,option = 'test'):
        if option == 'test':
            self.server = 'test'
        elif option == 'real':
            self.server = 'real'
        else:
            raise('no such option')
            return False
        return True
    ## dbname = test,formal
    # def connectToDB(self,dbname = 'test'):
    #     # self.db = sqlite3.connect(dbname)
    #     if dbname == 'test':
    #         self.server = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000'
    #     else:
    #         self.db = None

    def insert_single(self, nfzid="5834f1287869a9a48be75adb7be005be", nfzTitle="G345-洛南-扬州-V2_1km", nfzType="石家庄邯郸地区共用河南放飞", latitude="{33.5242461414517,33.5275826390726,33.52759645296828}", longitude="{109.90774501058173,109.91745473343512,109.90615135869226}", countryCode="CN", note="Oliver"):
        url_head = ''
        if(self.server == 'test'):
            url_head = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000/'
        else:
            url_head = 'http://www.skyracing.com.cn:8000/'
        url = url_head +'cloudNfz'

        myobj = {'querytype': 'insert', 'nfzid': nfzid, 'nfzTitle': nfzTitle, 'nfzType': nfzType,
            'latitude': latitude, 'longitude': longitude, 'countryCode': countryCode, 'note': note}

        x = requests.post(url, data=myobj)
        res = json.loads(x.text)
        result = res['results']
        if(result == False):
            print("insert failed")
            return False
        return True

    def delete(self, nfzid="5834f1287869a9a48be75adb7be005be"):
        url_head = ''
        if(self.server == 'test'):
            url_head = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000/'
        else:
            url_head = 'http://www.skyracing.com.cn:8000/'
        url = url_head+'cloudNfz'
        myobj = {'querytype': 'delete', 'nfzid': nfzid}

        x = requests.post(url, data=myobj)
        # print(type(x.text))
        res = json.loads(x.text)
        result = res['results']
        print('delete result:',result)
        if(result == False):
            print("delete failed")
            return False
        return True

    def search_AllNFZ(self):
        # cursor = self.db.execute('SELECT * FROM gpx_data WHERE id = ?', (id,))
        # result = cursor.fetchone()
        url_head = ''
        if(self.server == 'test'):
            url_head = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000/'
        else:
            url_head = 'http://www.skyracing.com.cn:8000/'
        url = url_head+'cloudGetNfzInfoJson'
        print(url)
        myobj = {'querytype': 'nfz', 'countrycode': 'CN'}

        x = requests.post(url, data=myobj)
        # print(type(x.text))
        res = json.loads(x.text)
        # print(type(res['results']))
        result = res['results']
        # for data in result:
        #     print(data)
        return result

    def search_byNfzid(self, nfzid='1c7a8f1e0170c85ab61df65e6ec434a5'):
        url_head = ''
        if(self.server == 'test'):
            url_head = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000/'
        else:
            url_head = 'http://www.skyracing.com.cn:8000/'
        url = url_head+'cloudGetNfzInfoJson'
        myobj = {'querytype': 'nfzcoord', 'nfzid': nfzid}

        x = requests.post(url, data=myobj)
        # print(type(x.text))
        res = json.loads(x.text)
        result = res['results']
        print(result)
        # for data in result:
        #     print(data)
        return result

    def getAllShedWithPaths(self):
        datas = self.search_AllNFZ()
        # groupDataByShed():
        result = []
        res_map_shed_path = defaultdict(list)
        res_map_shedAndpath_pathid = defaultdict(list)

        for a, b, c in datas:
            res_map_shed_path[c].append(b)
            res_map_shedAndpath_pathid[c+b].append(a)
        result = res_map_shed_path
        # for key in result:
        #     print(result[key])
        self.shedsMapToPaths = result
        self.shedAndPathMapToPathId = res_map_shedAndpath_pathid

        return result
    def getPathsByShedId(self, shedid):
        if shedid in self.shedsMapToPaths.keys():
            return self.shedsMapToPaths[shedid]
        else:
            return []

    def deleteByShedAndPath(self, shedid, path):
        if shedid+path in self.shedAndPathMapToPathId.keys():
            id = self.shedAndPathMapToPathId[shedid+path]
            if self.delete(id):
                self.shedsMapToPaths[shedid].remove(path)
                self.shedAndPathMapToPathId.pop(shedid+path)
                return True
            return False
        else:
            print('no such shed and path')
            return False
    def insertByShedAndPath(self, shedid, path,points,note):
        print(shedid,path,len(points),note)
        ###make id 
        now = datetime.now()
        current_time = now.strftime("%Y%m%d%H%M%S")
        # print("Current Time =", current_time)
        id = current_time+path

        # 建立 MD5 物件
        md_object = hashlib.md5()
        # 要計算 MD5 雜湊值的資料
        data = id
        # 更新 MD5 雜湊值
        md_object.update(data.encode("utf-8"))
        # 取得 MD5 雜湊值
        id = md_object.hexdigest()
        print("id:",id)

        #make latitude
        latitude = "{"
        longitude = "{"
        for point in points:
            # print('point:',point)
            latitude += str(point[0])+","
            longitude += str(point[1])+","
        latitude = latitude[:-1]
        longitude = longitude[:-1]
        latitude += "}"
        longitude += "}"

        # print('latitude',latitude)
        # print('longitude',longitude)

        if self.insert_single(nfzid=id, nfzTitle=path, nfzType=shedid, latitude=latitude, longitude=longitude, countryCode="CN", note=note):
            self.shedsMapToPaths[shedid].append(path)
            self.shedAndPathMapToPathId[shedid+path].append(id)
            return True
        return False

    def insertByShedAndPath_web(self, shedid, path,latitude_list,longitude_list,note):
        print(shedid,path,len(latitude_list),len(longitude_list),note)
        ###make id 
        now = datetime.now()
        current_time = now.strftime("%Y%m%d%H%M%S")
        # print("Current Time =", current_time)
        id = current_time+path

        # 建立 MD5 物件
        md_object = hashlib.md5()
        # 要計算 MD5 雜湊值的資料
        data = id
        # 更新 MD5 雜湊值
        md_object.update(data.encode("utf-8"))
        # 取得 MD5 雜湊值
        id = md_object.hexdigest()
        print("id:",id)

        #make latitude
        latitude = "{"
        longitude = "{"
        for lat in latitude_list:
            # print('point:',point)
            latitude += str(lat)+","
        for lon in longitude_list:
            longitude += str(lon)+","
        latitude = latitude[:-1]
        longitude = longitude[:-1]
        latitude += "}"
        longitude += "}"

        # print('latitude',latitude)
        # print('longitude',longitude)

        if self.insert_single(nfzid=id, nfzTitle=path, nfzType=shedid, latitude=latitude, longitude=longitude, countryCode="CN", note=note):
            self.shedsMapToPaths[shedid].append(path)
            return True
        return False
        
    ### check if the db has the house (house === shed)
    def hasShed(self,houseId):
        # print(self.shedsMapToPaths.keys())
        # print('check houseID',houseId in self.shedsMapToPaths.keys())
        return houseId in self.shedsMapToPaths.keys()

    def removeShed(self,houseId):
        flag = True 
        if houseId in self.shedsMapToPaths.keys():
            paths = copy.deepcopy(self.shedsMapToPaths[houseId])
            # print('len of paths : ',len(paths))
            print('paths:',paths,'  ',len(paths))
            # for tmp_p in paths:
            #     print('path:',tmp_p)
            #     result = self.deleteByShedAndPath(houseId,tmp_p)
            #     if result == False:
            #         flag = False
            #     time.sleep(1)
            for i in range(len(paths)):
                result = self.deleteByShedAndPath(houseId,paths[i])
                if result == False:
                    flag = False
                # time.sleep(1)
            
            if flag == True:
                self.shedsMapToPaths.pop(houseId)
                return True
        else:
            print('no such house')
            return False

    def updatePathName(self,shedId,oldPathName,newPathName):
        url_head = ''
        if(self.server == 'test'):
            url_head = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000/'
        else:
            url_head = 'http://www.skyracing.com.cn:8000/'
        url = url_head+'cloudNfz'
        nfzid = self.shedAndPathMapToPathId[shedId+oldPathName]
        myobj = {'querytype': 'updateNfzTitle', 'nfzid': nfzid,'nfzTitle':newPathName}

        print(nfzid,shedId,oldPathName,newPathName)
        x = requests.post(url, data=myobj)
        # print(type(x.text))
        res = json.loads(x.text)
        result = res['results']
        print('update pathname result:',result)
        if(result == False):
            print("update pathname failed")
            return False
        ### update pathname local
        self.shedsMapToPaths[shedId].remove(oldPathName)
        self.shedsMapToPaths[shedId].append(newPathName)

        self.shedAndPathMapToPathId.pop(shedId+oldPathName)
        self.shedAndPathMapToPathId[shedId+newPathName] = nfzid
        return True

    def deleteShedDirectly(self,shedId):
        url_head = ''
        if(self.server == 'test'):
            url_head = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000/'
        else:
            url_head = 'http://www.skyracing.com.cn:8000/'
        url = url_head+'cloudNfz'

        myobj = {'querytype': 'deleteByOrg', 'nfzType': shedId}

        x = requests.post(url, data=myobj)
        # print(type(x.text))
        res = json.loads(x.text)
        result = res['results']
        print('deleteShedDirectly result:',result)
        if(result == 0):
            print("delete shed failed")
            return 0
            
        ### deleteShedDirectly local
        self.shedsMapToPaths.pop(shedId)
        return result

    def renameShed(self,shedIdOld,shedIdNew):
        #step1: send request to server to rename
        #step2: if success, update local
        #step3: local update include : shedsMapToPaths, shedAndPathMapToPathId

        url_head = ''
        if(self.server == 'test'):
            url_head = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000/'
        else:
            url_head = 'http://www.skyracing.com.cn:8000/'
        url = url_head+'cloudNfz'

        myobj = {'querytype': 'updateOrg', 'nfzOrgOld': shedIdOld,'nfzOrgNew':shedIdNew}

        x = requests.post(url, data=myobj)
        # print(type(x.text))
        res = json.loads(x.text)
        result = res['results']
        print('renameShed result:',result)
        if(result == 0):
            print("rename shed failed")
            return 0
        
        ### renameShed local
        self.shedsMapToPaths[shedIdNew] = self.shedsMapToPaths[shedIdOld]
        self.shedsMapToPaths.pop(shedIdOld)
        paths = self.shedsMapToPaths[shedIdNew]

        for path in paths:
            self.shedAndPathMapToPathId[shedIdNew+path] = self.shedAndPathMapToPathId[shedIdOld+path]
            self.shedAndPathMapToPathId.pop(shedIdOld+path)

        return result
    
if __name__ == '__main__':
    dbManager = DBManagement()
    # dbManager.getAllShedWithPaths()
    # dbManager.insert_single()
    # dbManager.delete("5834f1287869a9a48be75adb7be005be")
    # dbManager.search_byNfzid("6271242f819a1584ba22f2debae2aaa2")
    # dbManager.insertByShedAndPath('id','path')

