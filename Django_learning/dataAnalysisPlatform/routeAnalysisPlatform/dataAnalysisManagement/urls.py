from django.urls import path
from . import views
from django.conf.urls import include
# from django.views.generic import RedirectView

urlpatterns = [
    path('dataAnalysisManagement/', include('dataAnalysisManagement.urls')),
]

urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login, name='login'),
    path('login/activity', views.activity, name='activity'),
    path('login/pigeon', views.pigeonManagement, name='pigeonManagement'),
    path('login/pigeonCreate', views.pigeonCreate, name='pigeonCreate'),
    path('login/pigeonUpdate/<str:doveID>', views.pigeonUpdate, name='pigeonUpdate'),
    path('login/pigeon/<str:pigeonNumber>', views.pigeon, name='pigeon'),
    path('login/tracks/<str:activityIds>', views.view_tracks, name='view_tracks'),
    path('login/tracks/activityIds/TracksSummary/<str:routeIds>', views.showFigures, name='showFigures'),
    path('login/tracks/activityIds/TracksSummary/trackSimulator/<str:routeIds>', views.trackSimulator, name='trackSimulator'),
    path('login/tracks/activityIds/TracksSummary/showRealtimeDistance/<str:routeIds>', views.showRealtimeDistance, name='showRealtimeDistance'),
    path('login/tracks/activityIds/TracksSummary/figures/updateFilteredRoute', views.localDB_updateFilteredRoute, name='localDB_updateFilteredRoute'),
    ]