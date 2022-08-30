import csv
from time import time
import matplotlib.pyplot as plt

dataList = []
with open('02_02_B67_01_Acc.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')    
    
    for row in spamreader:
        cell = {}
        # print(', '.join(row))
        # print(type(row),len(row))
        rowList = row[0].split(',')
        cell['time'] = float(rowList[0])
        print(cell['time'])
        cell['a_x'] = float(rowList[1])
        cell['a_y'] = float(rowList[2])
        cell['a_z'] = float(rowList[3])
        dataList.append(cell)

# for data in dataList:
#     print(data)
    
def draw_threeAxis(dataList):
    data_time = []
    data_a_x = []
    data_a_y = []
    data_a_z = []
    # for data in dataList:
    #     data_time.append(data['time'])
    #     data_a_x.append(data['a_x'])
    #     data_a_y.append(data['a_y'])
    #     data_a_z.append(data['a_z'])
    
    for data in dataList:
        if(data['time']>=400 and data['time']<=403):
            data_time.append(data['time'])
            data_a_x.append(data['a_x'])
            data_a_y.append(data['a_y'])
            data_a_z.append(data['a_z'])
    print(len(data_time),len(data_a_x))
        
    # plt.plot(data_time,data_a_x)
    # plt.plot(data_time,data_a_y)
    plt.plot(data_time,data_a_z)
    plt.savefig('threeAxis_z_3s.png')
    # plt.show()
draw_threeAxis(dataList)
    
# def calculateAccel(accelList):
    