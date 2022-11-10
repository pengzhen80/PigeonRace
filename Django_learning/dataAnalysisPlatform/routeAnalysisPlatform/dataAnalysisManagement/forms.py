from django import forms
from django.forms import ModelForm
from .models import Pigeon

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