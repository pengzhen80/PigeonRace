from django.shortcuts import render
import json
from django.http import JsonResponse

# Create your views here.
def index(request):
    """View function for home page of site."""
    context = {
        'shedsMapToPaths': json.dumps({'1': ['1', '2', '3'], '2': ['4', '5', '6']}),
    }

    # print(context)
    # Render the HTML template index.html with the data in the context variable
    return render(request, './food_html/index.html', context=context)