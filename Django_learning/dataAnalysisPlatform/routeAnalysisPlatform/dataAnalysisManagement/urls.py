from django.urls import path
from . import views
from django.conf.urls import include

urlpatterns = [
    path('dataAnalysisManagement/', include('dataAnalysisManagement.urls')),
]

urlpatterns = [
    path('', views.index, name='index'),
    ]