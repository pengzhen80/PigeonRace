import dbm
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import redirect
import json
from django.core.files.base import ContentFile
from  django.core.files.images import ImageFile
from .models import Pigeon,TrainRecord_filters_summary
from .forms import PigeonForm
from django.http import HttpResponseRedirect
import datetime
import hashlib

from .apiManagement import DBManagement
dbManager = DBManagement()

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
        if(username == ''):
            username = 'pengzhen@minxincorp.com'
        if(password==''):
            password = 'minxin'
        # print(username,password)
        res = dbManager.logIn(username, password)
        if (res['status'] == 'ok'):
            context['status'] = 'ok'
            filter_summary = TrainRecord_filters_summary.objects.values_list()
            rankStraightSpeed,rankRouteEfficiency,pigeonToTrain = hotTopicsManager.init_routeSummary(dbManager.getAllRouteSummaryData(),filter_summary)
            return render(request, 'login/home.html', context={'rankRouteEfficiency':json.dumps(rankRouteEfficiency),'rankStraightSpeed':json.dumps(rankStraightSpeed),'pigeonToTrain':pigeonToTrain})
        else:
            context['status'] = 'failed'
            return render(request, 'login.html', context=context)
    rankStraightSpeed,rankRouteEfficiency,pigeonToTrain = hotTopicsManager.init_routeSummary(dbManager.getAllRouteSummaryData(),TrainRecord_filters_summary.objects.values_list())
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
        pigeonData = request.body.decode("utf-8")
        pigeonData = json.loads(pigeonData)
        option = pigeonData['option']
        print(pigeonData['option'])
        if(option == 'delete'):
            doveID_list = pigeonData['doveID']
            print(doveID_list)
            for doveID in doveID_list:
                # localdbManager.delete_DoveByDoveId(doveID=doveID)
                print(doveID)
        return JsonResponse(context)
    pigeons = Pigeon.objects.all()
    number = len(pigeons)
    return render(request, 'login/pigeon_management.html', context={'pigeons':pigeons,'number':number})

def pigeonCreate(request):
    # context={}
    submitted = False
    print(request.method)
    if request.method == 'POST':
        form = PigeonForm(request.POST,request.FILES)
        print(form.is_valid())
        if form.is_valid():
            now = datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
            doveIdRaw = "{}{}".format(form['doveName'], now)
            doveID = hashlib.md5(doveIdRaw.encode()).hexdigest()
            new_model = form.save(commit=False)
            new_model.doveID = doveID
            new_model.mxId = dbManager.getMxid()
            new_model.save()
            return HttpResponseRedirect('/login/pigeonCreate?submitted=True')
    else:
        form = PigeonForm
        if 'submitted' in request.GET:
            submitted = True
    return render(request, 'login/pigeon_create.html', context={'option':'create','form':form,'submitted':submitted})

def pigeonUpdate(request,doveID):
    pigeon = Pigeon.objects.get(pk=doveID)
    submitted = False
    # print(pigeon)
    form = PigeonForm(request.POST or None,instance=pigeon)    
    if form.is_valid():  
        form.save()
        return redirect('pigeonManagement')
    return render(request, 'login/pigeon_update.html', context={'form':form,'pigeon':pigeon})
     
def pigeon(request,pigeonNumber):
    ##1 search all trainRecordId in apimanagement by pigeonNumber
    ##2 search filtered trainRecord in localDB by trainRecordIds
    ##3 if in filtered trainRecord then get all trainRecord raw data by apimanagement
    ##34 send filtered trainRecord and trainRecord raw data to pigeon page
    trainRecordId_list = dbManager.getRouteSummaryData_by_recordname(pigeonNumber)
    # print(trainRecordId_list)
    localFilteredRecords = []
    trainRecordRawData = []

    for trainRecordId in trainRecordId_list:
        # localdbManager.update_table_newColumn_newValue('TrainRecord_filters_summary',trainRecordId[0],'settingTime',trainRecordId[1])
        # localdata = localdbManager.search_filteredStateByRecordId(trainRecordId[0])
        localdata = TrainRecord_filters_summary.objects.filter(trainRecordId=trainRecordId[0]).values_list()
        print(len(localdata))
        if len(localdata)>0:
            localFilteredRecords.append(list(localdata)[0])
            trainRecordRawData.append({trainRecordId[0]:dbManager.read_routes_by_routeId(trainRecordId[0])})
    # print(localFilteredRecords)
    trainRecordRawData = json.dumps(trainRecordRawData)
    return render(request, 'login/pigeon_pigeonNumber.html', context={'pigeonNumber':pigeonNumber,'localFilteredRecords':json.dumps(localFilteredRecords),'trainRecordRawData':trainRecordRawData})

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
        # context['trackFiltered'].append({routeId:localdbManager.search_filteredStateByRecordId(routeId)})
        filteredTrack = TrainRecord_filters_summary.objects.filter(trainRecordId=routeId).values_list()
        if(len(filteredTrack) == 0) :
            pass
        else:
            print(len(filteredTrack))
            print(filteredTrack[0])
            print(filteredTrack[0][0])
            context['trackFiltered'].append({routeId:list(filteredTrack)})

        
    context['trackDatas'] = json.dumps(context['trackDatas'])
    context['trackSummarys'] = json.dumps(context['trackSummarys'])
    if(len(context['trackFiltered'])==0):
        pass
    else:
        print(context['trackFiltered'])
        context['trackFiltered'] = json.dumps(context['trackFiltered'])
    # print(context['trackSummarys'])
    return render(request, 'login/track_filter.html', context=context)

def trackSimulator(request,routeIds):
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
        # context['trackFiltered'].append({routeId:localdbManager.search_filteredStateByRecordId(routeId)})
        filteredTrack = TrainRecord_filters_summary.objects.filter(trainRecordId=routeId).values_list()
        if(len(filteredTrack) == 0) :
            pass
        else:
            print(len(filteredTrack))
            print(filteredTrack[0])
            print(filteredTrack[0][0])
            context['trackFiltered'].append({routeId:list(filteredTrack)})

        
    context['trackDatas'] = json.dumps(context['trackDatas'])
    context['trackSummarys'] = json.dumps(context['trackSummarys'])
    if(len(context['trackFiltered'])==0):
        pass
    else:
        print(context['trackFiltered'])
        context['trackFiltered'] = json.dumps(context['trackFiltered'])
    # print(context['trackSummarys'])
    return render(request, 'login/track_simulator.html', context=context)

def showRealtimeDistance(request,routeIds):
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
        # context['trackFiltered'].append({routeId:localdbManager.search_filteredStateByRecordId(routeId)})
        filteredTrack = TrainRecord_filters_summary.objects.filter(trainRecordId=routeId).values_list()
        if(len(filteredTrack) == 0) :
            pass
        else:
            print(len(filteredTrack))
            print(filteredTrack[0])
            print(filteredTrack[0][0])
            context['trackFiltered'].append({routeId:list(filteredTrack)})

        
    context['trackDatas'] = json.dumps(context['trackDatas'])
    context['trackSummarys'] = json.dumps(context['trackSummarys'])
    if(len(context['trackFiltered'])==0):
        pass
    else:
        print(context['trackFiltered'])
        context['trackFiltered'] = json.dumps(context['trackFiltered'])
    # print(context['trackSummarys'])
    return render(request, 'login/track_pairfly.html', context=context)

def localDB_updateFilteredRoute(request):
    context={}
    if request.method == 'POST':
        # print(type(request.body))
        # print(request.body.decode("utf-8"))
        routeIds = request.body.decode("utf-8")
        print(routeIds)
        filteredRoute = json.loads(routeIds)
        print(len(TrainRecord_filters_summary.objects.filter(trainRecordId=filteredRoute['trainRecordId'])))
        # localdbManager.update_trainRecord_filtered(filteredRoute['trainRecordId'],filteredRoute['startIndex'],filteredRoute['endIndex'],filteredRoute['updateTime'],filteredRoute['realDistance'],filteredRoute['realSpeed'],filteredRoute['straightDistance'],filteredRoute['straightSpeed'],filteredRoute['routeEfficiency'],filteredRoute['settingTime'])
        if(len(TrainRecord_filters_summary.objects.filter(trainRecordId=filteredRoute['trainRecordId']))==0):
            newRow = TrainRecord_filters_summary(trainRecordId=filteredRoute['trainRecordId'],startIndex=filteredRoute['startIndex'],endIndex=filteredRoute['endIndex'],updateTime=filteredRoute['updateTime'],realDistance=filteredRoute['realDistance'],realSpeed=filteredRoute['realSpeed'],straightDistance=filteredRoute['straightDistance'],straightSpeed=filteredRoute['straightSpeed'],routeEfficiency=filteredRoute['routeEfficiency'],settingTime=filteredRoute['settingTime'])
            newRow.save()
        else:
            print(TrainRecord_filters_summary.objects.filter(trainRecordId=filteredRoute['trainRecordId']).update(startIndex=filteredRoute['startIndex'],endIndex=filteredRoute['endIndex'],updateTime=filteredRoute['updateTime'],realDistance=filteredRoute['realDistance'],realSpeed=filteredRoute['realSpeed'],straightDistance=filteredRoute['straightDistance'],straightSpeed=filteredRoute['straightSpeed'],routeEfficiency=filteredRoute['routeEfficiency'],settingTime=filteredRoute['settingTime']))
    return JsonResponse(context)
   