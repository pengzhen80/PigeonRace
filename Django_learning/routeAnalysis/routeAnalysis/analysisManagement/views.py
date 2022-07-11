from django.shortcuts import render
from django.shortcuts import redirect

# Create your views here.
import json
from django.http import JsonResponse

from .routeAnalysisTools import RouteAnalysisManagement

routeAnalysisManager = RouteAnalysisManagement()
# Create your views here.


def index(request):
    """View function for home page of site."""
    context = {
        'shedsMapToPaths': json.dumps({'1': ['1', '2', '3'], '2': ['4', '5', '6']}),
    }

    # print(context)
    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)


def chooseModels(request):
    # print('chooseModels')
    if request.method == 'POST':
        option = request.body.decode("utf-8")
        print(option)
        if(option == 'singleRoute'):
            print('goto page singleRoute')
    context = {
        'shedsMapToPaths': json.dumps({'1': ['1', '2', '3'], '2': ['4', '5', '6']}),
    }
    # return render(request, 'analysisModels/singleRoute.html', context=context)
    return redirect(chooseModelsForm)
    # return JsonResponse({'result': 'success'})


def chooseModelsForm(request):
    context = {
        'shedsMapToPaths': json.dumps({'1': ['1', '2', '3'], '2': ['4', '5', '6']}),
    }
    return render(request, 'analysisModels/singleRoute.html', context=context)

def routeAnalysis(request,option,pigeonId,routeId):
    print(option,pigeonId,routeId)
    myReponse = {'result':'fail'}
    if(option == 'singleRoute'):
        if request.method == 'POST':
            points = request.body.decode("utf-8")
            points_list = points.split(',')
            print(points_list)
            num_average,num_median,num_min,num_max = routeAnalysisManager.Analysis_singleRoute_timeSpeed_datas(points_list)
            myReponse = {'result':'success','num_average': num_average,'num_median':num_median,'num_min':num_min,'num_max':num_max}
    return JsonResponse(myReponse)