from django.urls import path
from . import views
from django.conf.urls import include

urlpatterns = [
    path('gpxManage/', include('gpxManage.urls')),
]

urlpatterns = [
    path('', views.index, name='index'),
    path('link_db/<str:dbName>', views.link_db, name='link_db'),
    ###paths filter by , 
    path('link_db/delete_shed/<str:shedId>', views.delete_shed, name='delete_shed'),
    path('link_db/decodePathLine_toPolygon/<str:pathName>/<str:pathLine>', views.decodePathLine_toPolygon, name='decodePathLine_toPolygon'),
    path('link_db/showPath/<str:pathName>', views.showPath, name='showPath'),
    path('link_db/<str:shedId>/<str:paths>', views.delete_paths, name='delete_paths'),
    path('link_db/<str:shedId>/<str:paths>/<str:points>/<str:note>', views.insert_path, name='insert_path'),
    path('link_db/<int:option>/<str:pathName>', views.showPath, name='showPath'),
]