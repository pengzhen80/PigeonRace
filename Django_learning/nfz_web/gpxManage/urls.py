from django.urls import path
from . import views
from django.conf.urls import include

urlpatterns = [
    path('gpxManage/', include('gpxManage.urls')),
]

urlpatterns = [
    path('', views.index, name='index'),
    path('link_db/', views.link_testdb, name='link_testdb'),
    path('link_db/', views.link_realdb, name='link_realdb'),
    path('link_db/', views.link_test, name='link_test'),
]