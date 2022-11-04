#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import platform
import datetime
import hashlib

class LocalDBManagement():
    def __init__(self):
        # ===== 取得使用者系統類型 =====
        plf = platform.uname()
        OS = plf.system # Linux or Windows or Mac
        MACHINE = plf.machine # x86_64

        if OS == 'Windows':
            import sqlite3 as sqlcipher
        elif OS == 'Linux' or OS == 'Darwin':
            from pysqlcipher3 import dbapi2 as sqlcipher

        key = '$doveDatabase$'
        self.conn = sqlcipher.connect("doveDatabase.db",check_same_thread=False)
        # self.conn = sqlcipher.connect("doveDatabase.db")
        self.c = self.conn.cursor()
        self.c.execute("PRAGMA key='{}'".format(key))
        self.conn.commit()

    def connect_again(self):
        # ===== 取得使用者系統類型 =====
        plf = platform.uname()
        OS = plf.system # Linux or Windows or Mac
        MACHINE = plf.machine # x86_64

        if OS == 'Windows':
            import sqlite3 as sqlcipher
        elif OS == 'Linux' or OS == 'Darwin':
            from pysqlcipher3 import dbapi2 as sqlcipher

        key = '$doveDatabase$'
        # self.conn = sqlcipher.connect("doveDatabase.db",check_same_thread=False)
        self.conn = sqlcipher.connect("doveDatabase.db")
        self.c = self.conn.cursor()
        self.c.execute("PRAGMA key='{}'".format(key))
        self.conn.commit()

# Create table
    def table_createTable(self):
        self.c.execute("""CREATE TABLE IF NOT EXISTS Dove
                    (doveID               VARCHAR  PRIMARY KEY  NOT NULL,
                    mxID                 VARCHAR  NOT NULL,
                    doveName             VARCHAR,
                    RFID                 VARCHAR,
                    URing                VARCHAR,
                    photo                BLOB,
                    eye                  BLOB,
                    sex                  VARCHAR,
                    age                  REAL,   
                    bodyLength           REAL,
                    wingLength           REAL,
                    weight               REAL,
                    color                VARCHAR,
                    breed                VARCHAR,
                    desc                 TEXT,
                    father               VARCHAR,
                    mother               VARCHAR,
                    fatherFather         VARCHAR,
                    fatherMother         VARCHAR,
                    motherFather         VARCHAR,
                    motherMother         VARCHAR,
                    note                 TEXT,
                    FOREIGN KEY(mxID)             REFERENCES User(mxID));""")

        self.c.execute("""CREATE TABLE IF NOT EXISTS Dove_flights
                    (doveID               VARCHAR  PRIMARY KEY  NOT NULL,
                    mxID                 VARCHAR  NOT NULL,
                    
                    realDistance       TEXT,
                    realSpeed          TEXT,
                    straightDistance     TEXT,
                    averageStraightSpeed   TEXT,
                    routeEfficiency      TEXT,
                    time                TEXT,
                    FOREIGN KEY(mxID)             REFERENCES User(mxID));""")


        self.c.execute("""CREATE TABLE IF NOT EXISTS TrainRecord_filters_summary
                    (trainRecordId               VARCHAR  PRIMARY KEY  NOT NULL,
                    startIndex                 VARCHAR  NOT NULL,
                    endIndex             VARCHAR,
                    updateTime               VARCHAR,
                    realDistance               REAL,
                    realSpeed                  REAL,
                    straightDistance           REAL,
                    straightSpeed              REAL,
                    routeEfficiency            REAL,
                    settingTime                VARCHAR 
                    );""")

        # Create Index
        # self.c.execute("""CREATE INDEX IF NOT EXISTS UserIdx1        ON User(accName)""")
        # self.c.execute("""CREATE INDEX IF NOT EXISTS UserLogIdx1     ON UserLog(logTime, mxID)""")
        self.conn.commit()

    def alter_table_newColumn(self,tableName,columnName,columeType):
        # data = (tableName,columnName,columeType)
        new_column  = "ALTER TABLE "+tableName+" ADD COLUMN "+ columnName+" "+columeType
        self.c.execute(new_column)
        self.conn.commit()
    
    def alter_table_dropColumn(self,tableName,columnName):
        # data = (tableName,columnName,columeType)
        drop_column  = "ALTER TABLE "+tableName+" DROP COLUMN "+ columnName
        self.c.execute(drop_column)

    def update_tableTrainRecord_filters_summary_newColumn_settingTime(self,trainRecordId,data):
        data = data.replace('T',' ')
        params = (data,trainRecordId)
        self.c.execute("""UPDATE TrainRecord_filters_summary SET settingTime = ? WHERE trainRecordId = ?""",params)
        self.conn.commit()

    def search_filteredStateByRecordId(self,trainRecordId):
        res_select = self.c.execute("""SELECT * from TrainRecord_filters_summary WHERE trainRecordId = ?""",(trainRecordId,))
        self.conn.commit()
        return res_select.fetchone()

    def search_allFilteredRecords(self):
        res = self.c.execute("""SELECT * from TrainRecord_filters_summary""")
        self.conn.commit()
        return res.fetchall()

    def update_trainRecord_filtered(self,trainRecordId,startIndex,endIndex,updateTime,realDistance,realSpeed,straightDistance,straightSpeed,routeEfficiency,settingTime):
        # if(self.c.connection)
        settingTime = settingTime.replace('T',' ')
        data = (trainRecordId,startIndex,endIndex,updateTime,realDistance,realSpeed,straightDistance,straightSpeed,routeEfficiency,settingTime)
        res_select = self.c.execute("""SELECT * from TrainRecord_filters_summary WHERE trainRecordId = ?""",(trainRecordId,))
        if(res_select.fetchone()==None):
            self.c.execute("""INSERT INTO TrainRecord_filters_summary VALUES
                (?,?,?,?,?,?,?,?,?,?)""",data)
            self.conn.commit()
        else:
            data = (startIndex,endIndex,updateTime,realDistance,realSpeed,straightDistance,straightSpeed,routeEfficiency,settingTime,trainRecordId)
            self.c.execute("""UPDATE TrainRecord_filters_summary
                SET startIndex=?, endIndex=?, updateTime=? ,realDistance = ? , realSpeed = ? , straightDistance =?,straightSpeed=?,routeEfficiency=?,settingTime=?
                WHERE trainRecordId=?""",data)
            self.conn.commit()

    def create_Dove(self,doveID,mxID,doveName,RFID,URing,photo,eye,sex,age,bodyLength,wingLength,weight,color,breed,desc,father,mother,fatherFather,fatherMother,motherFather,motherMother,note):
        # if(self.c.connection)
        if doveID == None:
            now = datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
            doveIdRaw = "{}{}".format(doveName, now)
            doveID = hashlib.md5(doveIdRaw.encode()).hexdigest()
            pass
    
        data = (doveID,mxID,doveName,RFID,URing,photo,eye,sex,age,bodyLength,wingLength,weight,color,breed,desc,father,mother,fatherFather,fatherMother,motherFather,motherMother,note)
        res_select = self.c.execute("""SELECT * from Dove WHERE doveID = ?""",(doveID,))
        if(res_select.fetchone()==None):
            self.c.execute("""INSERT INTO Dove VALUES
                (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)""",data)
            self.conn.commit()
        else:
            data = (sex,age,bodyLength,wingLength,weight,doveName)
            self.c.execute("""UPDATE Dove
                SET sex=?, age=?, bodyLength=? ,wingLength = ? , weight = ?
                WHERE doveName=?""",data)
            self.conn.commit()


    def test_selectUsers(self):
        # self.c.execute("""INSERT INTO TrainRecord_filters VALUES
        #         ('20221027', 1, 10,'20221027T14:29:00')""")
        # res = self.c.execute("""SELECT * from TrainRecord_filters_summary""")
        res = self.c.execute("""SELECT * from Dove""")
        self.conn.commit()
        print(res.fetchall())
        # print(res.fetchone()==None)
        # if(res == None):
        #     self.c.execute("""INSERT INTO TrainRecord_filters VALUES
        #         ('20221027', 1, 10,'20221027T14:29:00')""")
        #     res = self.c.execute("""SELECT * from TrainRecord_filters""")
        #     print(res.fetchone())
    
    # def test_
# Create View
# c.execute("""CREATE VIEW Topic_StraihtSpeed_View AS
#              SELECT *
#              FROM TrainRecord tr, Module m, LocusRaw lr, Dove d
#              WHERE tr.trainRecordID=lr.trainRecordID and tr.moduleID=m.moduleID
#                and tr.moduleID=lr.moduleID and tr.doveID=d.doveID;""")


# c.execute("""PRAGMA synchronous=OFF""")

        # self.conn.commit()
        # self.conn.close()

if __name__ == '__main__':
    localdbManager = LocalDBManagement()