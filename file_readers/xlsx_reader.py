from cProfile import label
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

from matplotlib.collections import LineCollection
from matplotlib.colors import ListedColormap, BoundaryNorm
# import perfplot

df_file = pd.read_excel("./files_xlsx/pbio.3000299.s012.xlsx")
# 印出前四筆資料
print(df_file)

# get solo flight data,Partner_ID

solo_flights_data = df_file.loc[(df_file['Partner_ID'] == 0) & (
    df_file['%TotalFlightTime'] == 100)]
print(solo_flights_data)
solo_flights_distance_wingbeat = solo_flights_data[[
    'RouteAccuracy', 'WingbeatFrequency_median_Hz']]
print(solo_flights_distance_wingbeat)
plt.figure(figsize=(100, 10))
# plt.plot(range(len(solo_flights_distance_wingbeat.index)), solo_flights_distance_wingbeat['Distance_total_m'],label='Distance_total_m')
# plt.plot(range(len(solo_flights_distance_wingbeat.index)),solo_flights_distance_wingbeat['WingbeatFrequency_median_Hz']*1000*1.5,label='WingbeatFrequency_median_Hz*1500')
# plt.legend(loc='best')
# plt.savefig("test"+".png")

### make color of up to red and down to blue of distance
# for i in range(len(solo_flights_distance_wingbeat.index)-1):
#     if solo_flights_distance_wingbeat['Distance_total_m'][i+1] > solo_flights_distance_wingbeat['Distance_total_m'][i]:
#         solo_flights_distance_wingbeat['Distance_total_m'][i] = 1
#     else:
#         solo_flights_distance_wingbeat['Distance_total_m'][i] = 0

x = range(len(solo_flights_distance_wingbeat.index))
y = solo_flights_distance_wingbeat['RouteAccuracy']*5
for x1, x2, y1,y2 in zip(x, x[1:], y, y[1:]):
    if y1 > y2:
        plt.plot([x1, x2], [y1, y2], 'b')
    elif y1 < y2:
        plt.plot([x1, x2], [y1, y2], 'r')
    else:
        plt.plot([x1, x2], [y1, y2], 'g')

y = solo_flights_distance_wingbeat['WingbeatFrequency_median_Hz']
for x1, x2, y1,y2 in zip(x, x[1:], y, y[1:]):
    if y1 > y2:
        plt.plot([x1, x2], [y1, y2], 'b')
    elif y1 < y2:
        plt.plot([x1, x2], [y1, y2], 'r')
    else:
        plt.plot([x1, x2], [y1, y2], 'g')

# plt.legend(loc='best')
plt.savefig("test_withcolor"+".png")