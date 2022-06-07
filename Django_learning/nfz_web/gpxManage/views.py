# from msilib.schema import ListView
from django.shortcuts import render
from matplotlib.style import context

# Create your views here.
# from .models import Book, Author, BookInstance, Genre
from .dbManagement import DBManagement
import json


def index(request):
    """View function for home page of site."""

    # if(request.GET.get('linkDB')):
    #     dbManager = DBManagement()
    #     dbManager.getAllShedWithPaths()
    #     print('dbManager.shedsMapToPaths:', dbManager.shedsMapToPaths)

    context = {
        'shedsMapToPaths': json.dumps({'1': ['1', '2', '3'], '2': ['4', '5', '6']}),
    }

    # print(context)
    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index_test.html', context=context)


def link_testdb(request):
    """View function for home page of site."""
    dbManager = DBManagement()
    dbManager.Set_Server('test')
    dbManager.getAllShedWithPaths()
    # print('dbManager.shedsMapToPaths:', dbManager.shedsMapToPaths)
    print('get all sheds')
    context = {
        'shedsMapToPaths': json.dumps(dbManager.shedsMapToPaths),
    }
    # print(context)
    # Render the HTML template index.html with the data in the context variable
    return render(request, 'link_db/link_db.html', context=context)


def link_realdb(request):
    """View function for home page of site."""
    dbManager = DBManagement()
    dbManager.Set_Server('real')
    dbManager.getAllShedWithPaths()
    # print('dbManager.shedsMapToPaths:', dbManager.shedsMapToPaths)
    context = {
        'shedsMapToPaths': json.dumps(dbManager.shedsMapToPaths),
    }

    # print(context)
    # Render the HTML template index.html with the data in the context variable
    return render(request, 'link_db/link_db.html', context=context)

def link_test(request):
    """View function for home page of site."""
    print('get a request')
    context = {
        'shedsMapToPaths': json.dumps({'1': ['1', '2', '3'], '2': ['4', '5', '6']}),
    }
    # print(context)
    # Render the HTML template index.html with the data in the context variable
    return render(request, 'link_db/db_deletePath.html', context=context)