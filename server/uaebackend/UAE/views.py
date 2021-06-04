from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import JsonResponse
import datetime

# Create your views here.

@api_view(["GET"])  
def homePage(request):
    '''Method to get response from home page'''

    presentTime=datetime.datetime.now()
    print("home Page api called ")
    res={"response":"Welcome to Home Page...","time":presentTime}
    return JsonResponse(res,safe=False)