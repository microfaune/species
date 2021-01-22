from django.shortcuts import render
from .models import Bird
from django.http import JsonResponse
from django.core import serializers
from django.http import HttpResponse

from rest_framework import viewsets
from .serializers import BirdSerializer, AudioSerializer


##### API with Django Rest Framework
class BirdView(viewsets.ModelViewSet):
    serializer_class = BirdSerializer
    queryset = Bird.objects.all()
