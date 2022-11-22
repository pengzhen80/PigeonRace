from django import forms
from django.forms import ModelForm
from .models import Pigeon,TrainRecord_filters_summary

class PigeonForm(ModelForm):
    class Meta:
        model = Pigeon
        #  fields = "__all__"
        fields = ('doveName','sex','age','bodyLength','wingLength','weight','photo')

        labels={
            # "doveID":"",
            # "mxId":"",
            "doveName":"",
            "sex":"",
            "age":"",
            "bodyLength":"",
            "wingLength":"",
            "weight":'',
            # "photo":"",
        }
        widgets={
            "doveName":forms.TextInput(attrs={'class':'form-control','placeholder':'doveName'}),
            "sex":forms.TextInput(attrs={'class':'form-control','placeholder':'sex'}),
            "age":forms.TextInput(attrs={'class':'form-control','placeholder':'age'}),
            "bodyLength":forms.TextInput(attrs={'class':'form-control','placeholder':'bodyLength'}),
            "wingLength":forms.TextInput(attrs={'class':'form-control','placeholder':'wingLength'}),
            "weight":forms.TextInput(attrs={'class':'form-control','placeholder':'weight'}),
        }   


class TrainRecord_filters_summaryForm(ModelForm):
    class Meta:
        model = TrainRecord_filters_summary
        #  fields = "__all__"
        fields = ('startIndex','endIndex','updateTime','realDistance','realSpeed','straightDistance','straightSpeed','routeEfficiency','settingTime')

        labels={
            "realDistance":"",
            "realSpeed":"",
            "straightDistance":"",
            "straightSpeed":"",
            "routeEfficiency":"",
            "settingTime":'',
        }
        widgets={
            "realDistance":forms.TextInput(attrs={'class':'form-control','placeholder':'realDistance'}),
            "realSpeed":forms.TextInput(attrs={'class':'form-control','placeholder':'realSpeed'}),
            "straightDistance":forms.TextInput(attrs={'class':'form-control','placeholder':'straightDistance'}),
            "straightSpeed":forms.TextInput(attrs={'class':'form-control','placeholder':'straightSpeed'}),
            "routeEfficiency":forms.TextInput(attrs={'class':'form-control','placeholder':'routeEfficiency'}),
            "settingTime":forms.TextInput(attrs={'class':'form-control','placeholder':'settingTime'}),
        }