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
    # path('/redirect/', views.loged,name='loged'),
    # path('login/activities', views.view_loged, name='view_loged'),
    ]