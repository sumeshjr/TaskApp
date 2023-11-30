from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserLogin
        fields='__all__'
        
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model=Task
        fields='__all__'