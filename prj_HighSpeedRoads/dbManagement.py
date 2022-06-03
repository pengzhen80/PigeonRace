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
        self.server = None
        self.shedsMapToPaths = None
        self.shedAndPathMapToPathId = None

    def Set_Server(self,option = 'test'):
        if option == 'test':
            self.server = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000/cloudNfz'
        elif option == 'real':
            self.server = 'http://www.skyracing.com.cn:8000/'
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
            url_head = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000/cloudNfz'
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
            url_head = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000/cloudNfz'
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
            url_head = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000/cloudNfz'
        else:
            url_head = 'http://www.skyracing.com.cn:8000/'
        url = url_head+'cloudGetNfzInfoJson'
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
            url_head = 'http://vmskyracingdev.chinanorth.cloudapp.chinacloudapi.cn:8000/cloudNfz'
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


if __name__ == '__main__':
    dbManager = DBManagement()
    # dbManager.getAllShedWithPaths()
    # dbManager.insert_single()
    # dbManager.delete("5834f1287869a9a48be75adb7be005be")
    # dbManager.search_byNfzid("6271242f819a1584ba22f2debae2aaa2")
    # dbManager.insertByShedAndPath('id','path')
