from .models import Pigeon
from rest_framework import serializers

class PigeonSerializer(serializers.ModelSerializer):
     class Meta:
         model = Pigeon
         fields = '__all__'


