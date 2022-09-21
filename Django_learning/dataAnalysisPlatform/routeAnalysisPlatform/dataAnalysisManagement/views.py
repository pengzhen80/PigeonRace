import dbm
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import redirect
import json

from .apiManagement import DBManagement

dbManager = DBManagement()
# Create your views here.


def index(request):
    """View function for home page of site."""
    # data = dbManager.logIn()
    # context ={'result' : data}
    return render(request, 'login.html', context={})


def login(request):
    context = {'status': '', 'activities': ''}
    # print('method',request.method)
    # print(request)
    if request.method == 'POST':
        print('login')
        data = request.POST
        username = data.get('username')
        password = data.get('password')
        # print(username,password)
        res = dbManager.logIn(username, password)
        if (res['status'] == 'ok'):
            context['status'] = 'ok'
            context['activities'] = json.dumps(dbManager.getActivities())
            # print(context['activities'])
    # print(context['activities'] )
            return render(request, 'login/index.html', context=context)

# def view_loged(request):
#     return render(request, 'login/index.html', context={})


def view_tracks(request, activityIds):
    context = {
        'activityIds': activityIds
    }

    # activityId_list = activityIds.split(',')
    # for activityId in activityId_list:
    #     context[activityId] = dbManager.read_routes_summaryData(activityId)

    return render(request, 'login/tracks.html', context=context)


def tracksSummary(request):
    context={}
    if request.method == 'POST':
        # print(type(request.body))
        # print(request.body.decode("utf-8"))
        activityIds = request.body.decode("utf-8")
        activityId_list = activityIds.split(',')
        for activityId in activityId_list:
            context[activityId] = dbManager.read_routes_summaryData(activityId)

    return JsonResponse(context)

def showFigures(request,routeIds):
    context = {
        'routeIds': routeIds
    }
    return render(request, 'login/figures.html', context=context)

def tracksData(request):
    context={}
    if request.method == 'POST':
        # print(type(request.body))
        # print(request.body.decode("utf-8"))
        routeIds = request.body.decode("utf-8")
        routeId_list = routeIds.split(',')
        for routeId in routeId_list:
            context[routeId] = dbManager.read_routes_by_routeId(routeId)
    # print(context)
    return JsonResponse(context)