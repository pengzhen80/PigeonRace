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
# localdbManager.alter_table_dropColumn('TrainRecord_filters_summary','settingTime')
# localdbManager.alter_table_newColumn('Dove','age','REAL')
# localdbManager.update_trainRecord_filtered('20221027', 1, 10,'20221027T14:29:00')
# localdbManager.update_trainRecord_filtered('20221028', 1, 10,'20221027T14:29:00')
# localdbManager.update_Dove(doveID='1',mxID='1',doveName='1',RFID=None,URing=None,photo=None,eye=None,sex="male",age=5,bodyLength=30,wingLength=20,weight=400,color='gray',breed=None,desc=None,father=None,mother=None,fatherFather=None,fatherMother=None,motherFather=None,motherMother=None,note=None)
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
            rankStraightSpeed,rankRouteEfficiency,pigeonToTrain = hotTopicsManager.init_routeSummary(dbManager.getAllRouteSummaryData(),localdbManager.search_allFilteredRecords())
            # print(rankStraightSpeed)
            return render(request, 'login/home.html', context={'rankRouteEfficiency':json.dumps(rankRouteEfficiency),'rankStraightSpeed':json.dumps(rankStraightSpeed),'pigeonToTrain':pigeonToTrain})
        else:
            context['status'] = 'failed'
            return render(request, 'login.html', context=context)
    rankStraightSpeed,rankRouteEfficiency,pigeonToTrain = hotTopicsManager.init_routeSummary(dbManager.getAllRouteSummaryData(),localdbManager.search_allFilteredRecords())
    return render(request, 'login/home.html', context={'rankRouteEfficiency':json.dumps(rankRouteEfficiency),'rankStraightSpeed':json.dumps(rankStraightSpeed),'pigeonToTrain':pigeonToTrain})


# def view_loged(request):
#     return render(request, 'login/index.html', context={})
def activity(request):
    context = {'status': '', 'activities': ''}
    context['status'] = 'ok'
    context['activities'] = json.dumps(dbManager.getActivities())
    return render(request, 'login/activity.html', context=context)

def pigeonManagement(request):
    context={}
    if request.method == 'POST':
        # print(type(request.body))
        # print(request.body.decode("utf-8"))
        pigeonData = request.body.decode("utf-8")
        # print(pigeonData)
        pigeonData = json.loads(pigeonData)
        option = pigeonData['option']
        print(pigeonData['option'])
        if(option == 'create'):
            doveName = pigeonData['doveName']
            sex = pigeonData['sex']
            age = pigeonData['age']
            weight = pigeonData['weight']
            bodyLength = pigeonData['bodyLength']
            wingLength = pigeonData['wingLength']
            print(doveName,sex,age,weight,bodyLength,wingLength)
            localdbManager.create_Dove(doveID=None,mxID=dbManager.getMxid(),doveName=doveName,RFID=None,URing=None,photo=None,eye=None,sex=sex,age=age,bodyLength=bodyLength,wingLength=wingLength,weight=weight,color=None,breed=None,desc=None,father=None,mother=None,fatherFather=None,fatherMother=None,motherFather=None,motherMother=None,note=None)
        return JsonResponse(context)
    return render(request, 'login/pigeon_management.html', context={})

def pigeon(request,pigeonNumber):
    ##1 search all trainRecordId in apimanagement by pigeonNumber
    ##2 search filtered trainRecord in localDB by trainRecordIds
    ##3 send to pigeon page
    trainRecordId_list = dbManager.getRouteSummaryData_by_recordname(pigeonNumber)
    # print(trainRecordId_list)
    localFilteredRecords = []

    for trainRecordId in trainRecordId_list:
        # localdbManager.update_table_newColumn_newValue('TrainRecord_filters_summary',trainRecordId[0],'settingTime',trainRecordId[1])
        localdata = localdbManager.search_filteredStateByRecordId(trainRecordId[0])
        print(localdata)
        if localdata:
            localFilteredRecords.append(localdata)
    print(localFilteredRecords)
    return render(request, 'login/pigeon_pigeonNumber.html', context={'pigeonNumber':pigeonNumber,'localFilteredRecords':json.dumps(localFilteredRecords)})

def view_tracks(request, activityIds):
    context = {
        'activityIds': activityIds,
        'trackSummarys':[]
    }
    
    activityId_list = activityIds.split(',')
    for activityId in activityId_list:
        context['trackSummarys'].extend(dbManager.read_routes_summaryData(activityId))
    print(context['trackSummarys'])
    context['trackSummarys'] = json.dumps(context['trackSummarys'])
    return render(request, 'login/tracks.html', context=context)


# def tracksSummary(request):
#     context={}
#     if request.method == 'POST':
#         # print(type(request.body))
#         # print(request.body.decode("utf-8"))
#         activityIds = request.body.decode("utf-8")
#         activityId_list = activityIds.split(',')
#         for activityId in activityId_list:
#             context[activityId] = dbManager.read_routes_summaryData(activityId)

#     return JsonResponse(context)

# def showFigures(request,routeIds):
#     context = {
#         'routeIds': routeIds
#     }
#     return render(request, 'login/figures.html', context=context)
def showFigures(request,routeIds):
    context = {
        'routeIds': routeIds,
        'trackDatas':[],
        'trackSummarys':[],
        'trackFiltered':[]
    }
    # routeIds = request.body.decode("utf-8")
    routeId_list = routeIds.split(',')
    for routeId in routeId_list:
        context['trackDatas'].append({routeId:dbManager.read_routes_by_routeId(routeId)})
        context['trackSummarys'].append({routeId:dbManager.read_routes_summaryData_byId(routeId)})
        context['trackFiltered'].append({routeId:localdbManager.search_filteredStateByRecordId(routeId)})
    context['trackDatas'] = json.dumps(context['trackDatas'])
    context['trackSummarys'] = json.dumps(context['trackSummarys'])
    context['trackFiltered'] = json.dumps(context['trackFiltered'])
    print(context['trackSummarys'])
    return render(request, 'login/figures.html', context=context)

# def tracksData(request):
#     context={}
#     if request.method == 'POST':
#         # print(type(request.body))
#         # print(request.body.decode("utf-8"))
#         routeIds = request.body.decode("utf-8")
#         routeId_list = routeIds.split(',')
#         for routeId in routeId_list:
#             context[routeId] = dbManager.read_routes_by_routeId(routeId)
#             context[routeId+'pigeonNumber'] = dbManager.read_routes_summaryData_byId(routeId)
#             # print(context[routeId+'pigeonNumber'])
#             context[routeId+'filter'] = localdbManager.search_filteredStateByRecordId(routeId)

#     # print(context)
#     return JsonResponse(context)

def localDB_updateFilteredRoute(request):
    context={}
    if request.method == 'POST':
        # print(type(request.body))
        # print(request.body.decode("utf-8"))
        routeIds = request.body.decode("utf-8")
        print(routeIds)
        filteredRoute = json.loads(routeIds)
        print(filteredRoute['trainRecordId'])
        # localdbManager.update_trainRecord_filtered(filteredRoute['trainRecordId'],filteredRoute['startIndex'],filteredRoute['endIndex'],filteredRoute['updateTime'],filteredRoute['realDistance'],filteredRoute['realSpeed'],filteredRoute['straightDistance'],filteredRoute['straightSpeed'],filteredRoute['routeEfficiency'],filteredRoute['settingTime'])
    return JsonResponse(context)