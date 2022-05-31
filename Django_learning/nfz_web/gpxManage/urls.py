from django.urls import path
from . import views
from django.conf.urls import include

urlpatterns = [
    path('gpxManage/', include('gpxManage.urls')),
]

urlpatterns = [
    path('', views.index, name='index'),
]