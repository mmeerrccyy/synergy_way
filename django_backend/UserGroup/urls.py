from django.urls import path
from . import views

urlpatterns = [
    path('user/', views.UserAPIView.as_view()),
    path('user/create/', views.UserCreateAPIView.as_view()),
    path('user/<int:pk>/update/', views.UserUpdateAPIView.as_view()),
    path('user/<int:pk>/delete/', views.UserDeleteAPIView.as_view()),
    path('group/', views.GroupAPIView.as_view()),
    path('group/create/', views.GroupCreateAPIView.as_view()),
    path('group/<int:pk>/update/', views.GroupUpdateAPIView.as_view()),
    path('group/<int:pk>/delete/', views.GroupDeleteAPIView.as_view()),
]