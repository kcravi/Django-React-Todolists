from rest_framework import viewsets
from todolists.models import Todolists
from .serializers import TodolistSerializer

class TodolistViewSet(viewsets.ModelViewSet):
    # A viewset for viewing and editing user instances.
    serializer_class = TodolistSerializer
    queryset = Todolists.objects.all()

# from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView,
#     UpdateAPIView,
#     DestroyAPIView
# )

# class TodolistIndexView(ListAPIView):
#     queryset = Todolists.objects.all()
#     serializer_class = TodolistSerializer
#
# class TodolistShowView(RetrieveAPIView):
#     queryset = Todolists.objects.all()
#     serializer_class = TodolistSerializer
#
# class TodolistCreateView(CreateAPIView):
#     queryset = Todolists.objects.all()
#     serializer_class = TodolistSerializer
#
# class TodolistUpdateView(UpdateAPIView):
#     queryset = Todolists.objects.all()
#     serializer_class = TodolistSerializer
#
# class TodolistDeleteView(DestroyAPIView):
#     queryset = Todolists.objects.all()
#     serializer_class = TodolistSerializer
