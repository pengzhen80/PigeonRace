from django.shortcuts import render
import json
from django.http import JsonResponse
from .translator import TransByGoogle

transByGoogle = TransByGoogle()
transByGoogle.test()

# Create your views here.
def index(request):
    """View function for home page of site."""
    context = {
        'shedsMapToPaths': json.dumps({'1': ['1', '2', '3'], '2': ['4', '5', '6']}),
    }

    # print(context)
    # Render the HTML template index.html with the data in the context variable
    return render(request, './index.html', context=context)

def tanslator(request):
    context={}
    if request.method == 'POST':
        data = request.body.decode("utf-8")
        data = json.loads(data)
        print(data,len(data))
        
        title = data['title']
        content = data['content']
        context['title'] = transByGoogle.detect(title,'ko')
        context['content'] = transByGoogle.detect(content,'ko')
    print(context)
    return JsonResponse(context)