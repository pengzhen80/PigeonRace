#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import platform

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
        self.conn = sqlcipher.connect("doveDatabase.db")
        self.c = self.conn.cursor()
        self.c.execute("PRAGMA key='{}'".format(key))

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

        self.c.execute("""CREATE TABLE IF NOT EXISTS TrainRecord_filters
                    (trainRecordId               VARCHAR  PRIMARY KEY  NOT NULL,
                    startIndex                 VARCHAR  NOT NULL,
                    endIndex             VARCHAR,
                    updateTime               VARCHAR);""")

        # Create Index
        # self.c.execute("""CREATE INDEX IF NOT EXISTS UserIdx1        ON User(accName)""")
        # self.c.execute("""CREATE INDEX IF NOT EXISTS UserLogIdx1     ON UserLog(logTime, mxID)""")

    def update_trainRecord_filtered(self,trainRecordId,startIndex,endIndex,updateTime):
        data = (trainRecordId,startIndex,endIndex,updateTime)
        res_select = self.c.execute("""SELECT * from TrainRecord_filters WHERE trainRecordId = ?""",(trainRecordId,))
        if(res_select.fetchone()==None):
            self.c.execute("""INSERT INTO TrainRecord_filters VALUES
                (?,?,?,?)""",data)
        else:
            data = (startIndex,endIndex,updateTime,trainRecordId)
            self.c.execute("""UPDATE TrainRecord_filters
                SET startIndex=?, endIndex=?, updateTime=?
                WHERE trainRecordId=?""",data)


    def test_selectUsers(self):
        # self.c.execute("""INSERT INTO TrainRecord_filters VALUES
        #         ('20221027', 1, 10,'20221027T14:29:00')""")
        res = self.c.execute("""SELECT * from TrainRecord_filters""")
        print(res.fetchall())
        # print(res.fetchone()==None)
        # if(res == None):
        #     self.c.execute("""INSERT INTO TrainRecord_filters VALUES
        #         ('20221027', 1, 10,'20221027T14:29:00')""")
        #     res = self.c.execute("""SELECT * from TrainRecord_filters""")
        #     print(res.fetchone())
# Create View
# c.execute("""CREATE VIEW Topic_StraihtSpeed_View AS
#              SELECT *
#              FROM TrainRecord tr, Module m, LocusRaw lr, Dove d
#              WHERE tr.trainRecordID=lr.trainRecordID and tr.moduleID=m.moduleID
#                and tr.moduleID=lr.moduleID and tr.doveID=d.doveID;""")


# c.execute("""PRAGMA synchronous=OFF""")

        self.conn.commit()
        self.conn.close()

if __name__ == '__main__':
    localdbManager = LocalDBManagement()