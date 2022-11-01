import dbm
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import redirect
import json

from .apiManagement import DBManagement
dbManager = DBManagement()

# from .redis_client import Redis_Client
# redis_client = Redis_Client()

from .localDBManagement import LocalDBManagement
localdbManager = LocalDBManagement()
localdbManager.table_createTable()
# localdbManager.update_trainRecord_filtered('20221027', 1, 10,'20221027T14:29:00')
# localdbManager.update_trainRecord_filtered('20221028', 1, 10,'20221027T14:29:00')
localdbManager.test_selectUsers()
# Create your views here.

from .hotTopicsManagement import HotTopicsManagement
hotTopicsManager = HotTopicsManagement()


def index(request):
    """View function for home page of site."""
    # data = dbManager.logIn()
    # context ={'result' : data}
    return render(request, 'login.html', context={})


def login(request):
    context = {'status': '', 'activities': ''}
    # print('method',request.method)
    if request.method == 'POST':
        print('login')
        data = request.POST
        username = data.get('username')
        password = data.get('password')
        # print(username,password)
        res = dbManager.logIn(username, password)
        if (res['status'] == 'ok'):
            context['status'] = 'ok'
            # context['activities'] = json.dumps(dbManager.getActivities())
            # return render(request, 'login/index.html', context=context)
            # print(dbManager.getAllRouteSummaryData())
            rankStraightSpeed,rankRouteEfficiency = hotTopicsManager.init_routeSummary(dbManager.getAllRouteSummaryData(),localdbManager.search_allFilteredRecords())
            print(len(rankStraightSpeed),len(rankRouteEfficiency))
            return render(request, 'login/home.html', context={'rankRouteEfficiency':json.dumps(rankRouteEfficiency),'rankStraightSpeed':json.dumps(rankStraightSpeed)})
        else:
            context['status'] = 'failed'
            return render(request, 'login.html', context=context)
    
    return render(request, 'login/home.html', context=context)

# def view_loged(request):
#     return render(request, 'login/index.html', context={})
def activity(request):
    context = {'status': '', 'activities': ''}
    context['status'] = 'ok'
    context['activities'] = json.dumps(dbManager.getActivities())
    return render(request, 'login/activity.html', context=context)

def view_tracks(request, activityIds):
    context = {
        'activityIds': activityIds
    }

    # activityId_list = activityIds.split(',')
    # for activityId in activityId_list:
    #     dbManager.api_readModule(activityId)

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
            context[routeId+'pigeonNumber'] = dbManager.read_routes_summaryData_byId(routeId)
            # print(context[routeId+'pigeonNumber'])
            context[routeId+'filter'] = localdbManager.search_filteredStateByRecordId(routeId)

    # print(context)
    return JsonResponse(context)

def localDB_updateFilteredRoute(request):
    context={}
    if request.method == 'POST':
        # print(type(request.body))
        # print(request.body.decode("utf-8"))
        routeIds = request.body.decode("utf-8")
        print(routeIds)
        filteredRoute = json.loads(routeIds)
        print(filteredRoute['trainRecordId'])
        localdbManager.update_trainRecord_filtered(filteredRoute['trainRecordId'],filteredRoute['startIndex'],filteredRoute['endIndex'],filteredRoute['updateTime'],filteredRoute['realDistance'],filteredRoute['realSpeed'],filteredRoute['straightDistance'],filteredRoute['straightSpeed'],filteredRoute['routeEfficiency'])
        # routeId_list = routeIds.split(',')
        # for routeId in routeId_list:
        #     context[routeId] = dbManager.read_routes_by_routeId(routeId)
        #     context[routeId+'pigeonNumber'] = dbManager.read_routes_summaryData_byId(routeId)
            # print(context[routeId+'pigeonNumber'])
    # print(context)
    return JsonResponse(context)