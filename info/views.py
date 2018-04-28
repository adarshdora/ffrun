from .models import Information
from django.shortcuts import render, render_to_response
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.core import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core import serializers


def post_tab(request):
    if request.method == 'POST':
        name = request.POST['data1']
        story = request.POST['data2']
        Information.objects.create(
            name=name,
            story=story
        )
        return HttpResponse('')
    elif request.method == 'GET':
        post_data = Information.objects.reverse()
        data = serializers.serialize("json", post_data)
        return HttpResponse(data, content_type='application/json')


def info_data(request):
    return render(request, "info/index.html")





