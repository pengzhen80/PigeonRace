# from msilib.schema import ListView
from django.shortcuts import render
from matplotlib.style import context

# Create your views here.
# from .models import Book, Author, BookInstance, Genre
from .dbManagement import DBManagement
import json


def index(request):
    """View function for home page of site."""

    # if(request.GET.get('linkDB')):
    #     dbManager = DBManagement()
    #     dbManager.getAllShedWithPaths()
    #     print('dbManager.shedsMapToPaths:', dbManager.shedsMapToPaths)

    context = {
        'shedsMapToPaths': json.dumps({'1': ['1', '2', '3'], '2': ['4', '5', '6']}),
    }

    # print(context)
    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)


dbManager = DBManagement()


def link_db(request, dbName):
    """View function for home page of site."""
    if dbName == 'test':
        dbManager.Set_Server('test')
    else:
        dbManager.Set_Server('real')
        # print('dbManager.shedsMapToPaths:', dbManager.shedsMapToPaths)
    dbManager.getAllShedWithPaths()
    # print('dbManager.shedsMapToPaths:', dbManager.shedsMapToPaths)
    print('get all sheds')
    context = {
        'shedsMapToPaths': json.dumps(dbManager.shedsMapToPaths),
    }
    # print(context)
    # Render the HTML template index.html with the data in the context variable
    return render(request, 'link_db/link_db.html', context=context)


def delete_paths(request, shedId, paths):
    # filter paths
    print('shedId:', shedId)
    print('paths:', paths)
    path_list = paths.split(',')
    response_count_success = 0
    response_failedPaths = []
    for path in path_list:
        print('path:', path)
        if dbManager.deleteByShedAndPath(shedId, path):
            response_count_success += 1
        else:
            response_failedPaths.append(path)
    # todo : return the response
    context = {
        'shedsMapToPaths': json.dumps(dbManager.shedsMapToPaths),
    }
    return render(request, 'link_db/link_db.html', context=context)


def insert_path(request, shedId, paths, points, note):
    print(len(points), type(points))
    # normalize points to array
    points_list = points.split(',')
    latitude_list = []
    longitude_list = []
    for i in range(0, len(points_list)-1):
        if i % 2 == 0:
            latitude_list.append(points_list[i])
        else:
            longitude_list.append(points_list[i])

    if dbManager.insertByShedAndPath_web(shedId, paths, latitude_list, longitude_list, note):
        print('insert success')
        pass

    context = {
        'shedsMapToPaths': json.dumps(dbManager.shedsMapToPaths),
    }

    return render(request, 'link_db/link_db.html', context=context)


def delete_shed(request, shedId):
    # filter paths
    print('shedId:', shedId)
    if dbManager.removeShed(shedId):
        print('delete success')
        pass
        # todo : return the response
    context = {
        'shedsMapToPaths': json.dumps(dbManager.shedsMapToPaths),
    }
    return render(request, 'link_db/link_db.html', context=context)
