from todolists.api.views import TodolistViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', TodolistViewSet, basename='todolists')
urlpatterns = router.urls

# from django.urls import path
# from .views import (
#     TodolistIndexView,
#     TodolistShowView,
#     TodolistCreateView,
#     TodolistUpdateView,
#     TodolistDeleteView
# )

# urlpatterns = [
#     path('', TodolistIndexView.as_view()),
#     path('create/', TodolistCreateView.as_view()),
#     path('<pk>', TodolistShowView.as_view()),
#     path('<pk>/update/', TodolistUpdateView.as_view()),
#     path('<pk>/delete/', TodolistDeleteView.as_view())
# ]
