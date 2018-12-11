from rest_framework import serializers
from todolists.models import Todolists

class TodolistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todolists
        fields = ('id', 'title', 'body')
