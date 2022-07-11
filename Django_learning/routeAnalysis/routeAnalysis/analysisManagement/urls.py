from django.urls import path
from . import views
from django.conf.urls import include

urlpatterns = [
    path('analysisManagement/', include('analysisManagement.urls')),
]

urlpatterns = [
    path('', views.index, name='index'),
    path('analysisModels/', views.chooseModels, name='chooseModels'),
    path('analysisModels/test', views.chooseModelsForm, name='chooseModelsForm'),
    # path('analysisModels/', views.chooseModelsForm, name='chooseModelsForm'),
    path('analysisModels/<str:option>/<str:pigeonId>/<str:routeId>', views.routeAnalysis, name='routeAnalysis'),
]