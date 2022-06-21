# from msilib.schema import ListView
from django.shortcuts import render
from matplotlib.style import context

# Create your views here.
# from .models import Book, Author, BookInstance, Genre
from .dbManagement import DBManagement
from .gpxExtractor import OriginGpxdataManagement
import json
from django.http import JsonResponse


dbManager = DBManagement()
originGpxManager = OriginGpxdataManagement()


def index(request):
    """View function for home page of site."""

    # if(request.GET.get('linkDB')):
    #     dbManager = DBManagement()
    #     dbManager.getAllShedWithPaths()
    #     print('dbManager.shedsMapToPaths:', dbManager.shedsMapToPaths)
    print('request path is', request.path,
          request.path_info, request.content_params)

    context = {
        'shedsMapToPaths': json.dumps({'1': ['1', '2', '3'], '2': ['4', '5', '6']}),
    }

    # print(context)
    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)


def link_db(request, dbName):
    print('link_db')
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
    print('delete_paths')
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


def insert_path(request, shedId, pathOriginalName, pathCurrentName, note):
    print('insert_path')
    pathPolygon = originGpxManager.GetPolygon(pathOriginalName)
    # print(len(points), type(points))
    # # normalize points to array
    # points_list = points.split(',')
    # print(len(points_list))
    # latitude_list = []
    # longitude_list = []
    # for i in range(0, len(points_list)-1):
    #     if i % 2 == 0:
    #         latitude_list.append(points_list[i])
    #     else:
    #         longitude_list.append(points_list[i])

    if dbManager.insertByShedAndPath(shedId, pathCurrentName, pathPolygon, note):
        print('insert success')
        return JsonResponse({'result': 'success','pathname': pathCurrentName})
    # context = {
    #     'shedsMapToPaths': json.dumps(dbManager.shedsMapToPaths),
    # }

    # return render(request, 'link_db/link_db.html', context=context)
    return JsonResponse({'result': 'failed','pathname':pathCurrentName})


def delete_shed(request, shedId):
    print('delete_shed')
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


def decodePathLine_toPolygon(request, pathName, pathLine):
    print('decodePathLine_toPolygon')
    # filter paths
    print(len(pathLine), type(pathLine))
    # normalize points to array
    points_list = pathLine.split(',')
    print(len(points_list), type(points_list))

    originGpxManager.DecodeData(pathName, points_list)

    # if request.method == 'GET':
    #     do_something()

    # context = {
    #     'shedsMapToPaths': json.dumps(dbManager.shedsMapToPaths),
    #     'pathName': pathName,
    #     'polygon': json.dumps(originGpxManager.GetPolygon(pathName)),
    # }
    # return render(request, 'link_db/link_db.html', context=context)
    return JsonResponse({'result':'success','pathname': pathName})


def showPath(request, pathName):
    print('showPath')
    # filter paths
    print('pathname:', pathName)
    pathLine_origin = originGpxManager.GetPathLine_origin(pathName)
    pathLine_filter = originGpxManager.GetPathLine_filter(pathName)
    pathPolygon = originGpxManager.GetPolygon(pathName)

    context = {
        'pathName': pathName,
        'pathLine_origin': json.dumps(pathLine_origin),
        'pathLine_filter': json.dumps(pathLine_filter),
        'pathPolygon': json.dumps(pathPolygon),
    }

    return render(request, 'link_db/showPath.html', context=context)
