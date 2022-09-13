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
    context= {'status':'','activities':''}
    # print('method',request.method)
    # print(request)
    if request.method == 'POST':
        print('login')
        data = request.POST
        username = data.get('username')
        password = data.get('password')
        # print(username,password)
        res = dbManager.logIn(username,password)
        if(res['status'] == 'ok'):
            context['status'] = 'ok'
            context['activities'] = json.dumps(dbManager.getActivities())
            print(context['activities'])
    # print(context['activities'] )
            return render(request, 'login/index.html', context=context)   

# def view_loged(request):
#     return render(request, 'login/index.html', context={})    