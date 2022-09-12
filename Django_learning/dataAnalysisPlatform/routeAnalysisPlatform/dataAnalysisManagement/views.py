import dbm
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import redirect

from .apiManagement import DBManagement

dbManager = DBManagement()
# Create your views here.
def index(request):
    """View function for home page of site."""
    # data = dbManager.logIn()
    # context ={'result' : data}
    if request.method == 'POST':
        print('index:')
        # print(type(request.body))
        print(request.body.decode("utf-8"))
        return render(request, 'login/index.html', context={})
    
    return render(request, 'login.html', context={})

def login(request):
    if request.method == 'POST':
        print('login')
        print('decode data')
        # print(type(request.body))
        print(request.body.decode("utf-8"))
        # return render(request, 'login/index.html', context={})
    #     do_something()

    # context = {
    #     'shedsMapToPaths': json.dumps(dbManager.shedsMapToPaths),
    #     'pathName': pathName,
    #     'polygon': json.dumps(originGpxManager.GetPolygon(pathName)),
    # }
    return JsonResponse({'result':'success'})
    # return render(request, 'login/index.html', context={})
    # return redirect(view_loged)

def view_loged(request):
    return render(request, 'login/index.html', context={})