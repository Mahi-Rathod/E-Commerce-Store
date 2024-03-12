from django.shortcuts import render
from .serializer import *
from rest_framework import viewsets
from .models import * 

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer
    
def viewFunction(request):
    data = request.data;
    print(data)