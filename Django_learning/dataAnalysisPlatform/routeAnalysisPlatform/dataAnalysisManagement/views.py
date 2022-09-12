from django.shortcuts import render

from .apiManagement import DBManagement

dbManager = DBManagement()
# Create your views here.
def index(request):
    """View function for home page of site."""
    context ={'result' : dbManager.logIn()}
    
    return render(request, 'index.html', context=context)
