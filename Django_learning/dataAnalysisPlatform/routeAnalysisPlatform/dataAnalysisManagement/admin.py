from django.contrib import admin

# Register your models here.
from .models import Pigeon
from .models import TrainRecord_filters_summary

admin.site.register(Pigeon)
admin.site.register(TrainRecord_filters_summary)