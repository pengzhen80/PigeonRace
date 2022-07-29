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
        'linkDb':dbName,
        'shedsMapToPaths': json.dumps(dbManager.shedsMapToPaths),
    }
    # print(context)
    # Render the HTML template index.html with the data in the context variable
    return render(request, 'link_db/link_db.html', context=context)


# def delete_paths(request, shedId, paths):
#     print('delete_paths')
#     # filter paths
#     print('shedId:', shedId)
#     print('paths:', paths)
#     path_list = paths.split(',')
#     response_SuccessPaths = ''
#     for path in path_list:
#         if dbManager.deleteByShedAndPath(shedId, path):
#             print('delete path success',path)
#             response_SuccessPaths += path +','
#         else:
#             print('delete path failed',paths)
#     # todo : return the response
#     if(len(response_SuccessPaths)>0):
#         response_SuccessPaths = response_SuccessPaths[:-1]
#         return JsonResponse({'result': 'success','pathnames': response_SuccessPaths}) 
#     return JsonResponse({'result': 'fail','pathname': ''}) 
def delete_path(request, shedId, path):
    print('delete_path')
    # filter paths
    print('shedId:', shedId)
    print('paths:', path)
    if dbManager.deleteByShedAndPath(shedId, path):
        print('delete path success',path)
        return JsonResponse({'result': 'success','pathname': path}) 
    else:
        print('delete path failed',path)
    return JsonResponse({'result': 'fail','pathname': path}) 


def insert_path(request, shedId, pathOriginalName, pathCurrentName, note):
    print('insert_path')
    pathPolygon = originGpxManager.GetPolygon(pathOriginalName)

    if dbManager.insertByShedAndPath(shedId, pathCurrentName, pathPolygon, note):
        print('insert success')
        return JsonResponse({'result': 'success','pathname': pathCurrentName})

    return JsonResponse({'result': 'failed','pathname':pathCurrentName})


# def delete_shed(request, shedId):
#     print('delete_shed')
#     # filter paths
#     print('shedId:', shedId)
#     if dbManager.removeShed(shedId):
#         print('delete success')
#         pass
#         # todo : return the response
#     context = {
#         'shedsMapToPaths': json.dumps(dbManager.shedsMapToPaths),
#     }
#     return render(request, 'link_db/link_db.html', context=context)
def delete_shed(request, shedId):
    print('delete_shed')
    # filter paths
    print('shedId:', shedId)
    result = dbManager.deleteShedDirectly(shedId)
    if result>0:
        print('delete success')
        return JsonResponse({'result':'success','deletecount': result})
    return JsonResponse({'result':'fail','deletecount': result})

def decodePathLine_toPolygon(request, pathName, pathLine):
    print('decodePathLine_toPolygon')
    print(pathName)
    # filter paths
    # print(len(pathLine), type(pathLine))
    # normalize points to array
    # points_list = pathLine.split(',')
    # print(len(points_list), type(points_list))

    # originGpxManager.DecodeData(pathName, points_list)

    if request.method == 'POST':
        print('decode data')
        # print(type(request.body))
        # print(request.body.decode("utf-8"))
        points = request.body.decode("utf-8")
        points_list = points.split(',')
        originGpxManager.DecodeData(pathName, points_list)

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

def updatePathName(request,option,shedId,oldPathName,newPathName,note):
    ### update pathname
    print('updatePathName',option)
    if option == 'updatePathName':
        if dbManager.updatePathName(shedId,oldPathName,newPathName):
            return JsonResponse({'result':'success','oldpathname': oldPathName,'newpathname':newPathName})
        return JsonResponse({'result':'fail','oldpathname': oldPathName,'newpathname':newPathName})
    
    return JsonResponse({'result':'fail'})