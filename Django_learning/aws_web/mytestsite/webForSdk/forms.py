from django import forms
from django.forms import ModelForm
from .models import TextToTranslate

class TextToTranslateForm(ModelForm):
    class Meta:
        model = TextToTranslate
        #  fields = "__all__"
        fields = ('title','content','tanslatedContent')

        labels={
            "title":"",
            "content":"",
        }
        widgets={
            "title":forms.TextInput(attrs={'class':'form-control','placeholder':'title'}),
        }   


