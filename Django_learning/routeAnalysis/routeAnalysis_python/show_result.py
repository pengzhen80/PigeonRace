import matplotlib.pyplot as plt
import numpy as np

from gpx_management import gpx_reader_multiFiles, gpx_reader_multiFiles_withFileName
from routeAnalysisTools import RouteAnalysisManagement

import os
if __name__ == '__main__':
    filenames = []
    filepath = './路徑分析材料-gpx檔案/天津天野公棚_2021決賽_2727'
    filenames_subline = os.listdir(filepath)
    print(filenames_subline)
    for name in filenames_subline:
        filenames.append(filepath+'/'+name)

    gpx_data = gpx_reader_multiFiles_withFileName(filenames)

    routeAnalysisManager = RouteAnalysisManagement()
    pointsForRE = routeAnalysisManager.Analysis_multiPigeon_sameSession_makeRouteForREff_withFileName(
        gpx_data)
    # num_efficiency = routeAnalysisManager.Analysis_multiPigeon_sameSession_routeEfficiency_multi(
    #     pointsForRE)
    # print(num_efficiency)

    # plt.plot(range(len(num_efficiency)), num_efficiency)
    # plt.savefig("天津天野公棚_2021決賽_2727"+".png")
    pie_labels = [0,0.8,0.85,0.9,0.95,1]
    num_efficiency,num_efficiency_pie = routeAnalysisManager.Analysis_multiPigeon_sameSession_routeEfficiency_multi_pie(pointsForRE,pie_labels)

    # Creating plot
    fig = plt.figure(figsize =(10, 7))
    pie_labels_normalized = []
    for i in range(len(pie_labels)-1):
        pie_labels_normalized.append(str(pie_labels[i])+'~'+str(str(pie_labels[i+1])))
    # plt.pie(num_efficiency_pie, labels = pie_labels_normalized)
    # plt.savefig("斗六創新會_2022陸上資格賽_2252"+'_pie'+".png")
    # show plot
    # plt.show()

    # Creating explode data
    # explode = (0.1, 0.0, 0.2, 0.3, 0.0, 0.0)
    
    # Creating color parameters
    colors = ( "orange", "cyan", "brown",
            "grey", "indigo", "beige")
    
    # Wedge properties
    wp = { 'linewidth' : 1, 'edgecolor' : "green" }
    
    # Creating autocpt arguments
    def func(pct, allvalues):
        absolute = int(pct / 100.*np.sum(allvalues))
        return "{:.1f}%".format(pct, absolute)
    
    # Creating plot
    fig, ax = plt.subplots(figsize =(10, 7))
    wedges, texts, autotexts = ax.pie(num_efficiency_pie,
                                    autopct = lambda pct: func(pct, num_efficiency_pie),
                                    # explode = explode,
                                    labels = pie_labels_normalized,
                                    shadow = True,
                                    colors = colors,
                                    startangle = 90,
                                    wedgeprops = wp,
                                    textprops = dict(color ="magenta"))
    
    # Adding legend
    ax.legend(wedges, pie_labels_normalized,
            title ="spans",
            loc ="center left",
            bbox_to_anchor =(1, 0, 0.5, 1))
    
    plt.setp(autotexts, size = 8, weight ="bold")
    ax.set_title("route efficiency pie chart")
    
    # show plot
    plt.savefig("天津天野公棚_2021決賽_2727"+'_pie'+'_per'+".png")