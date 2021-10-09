from rest_framework import generics
from .models import CustomUser, CustomGroup
from .serializers import UserSerializer, GroupSerializer


# Create your views here.


class UserAPIView(generics.ListAPIView):
    """
    List User API VIew
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class UserCreateAPIView(generics.CreateAPIView):
    """
    Creating User API VIew
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class UserUpdateAPIView(generics.RetrieveUpdateAPIView):
    """
    Update User API VIew
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class UserDeleteAPIView(generics.DestroyAPIView):
    """
    Creating User API VIew
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class GroupAPIView(generics.ListAPIView):
    """
    List Group API VIew
    """
    queryset = CustomGroup.objects.all()
    serializer_class = GroupSerializer


class GroupCreateAPIView(generics.CreateAPIView):
    """
    Creating User API VIew
    """
    queryset = CustomGroup.objects.all()
    serializer_class = GroupSerializer


class GroupUpdateAPIView(generics.RetrieveUpdateAPIView):
    """
    Update User API VIew
    """
    queryset = CustomGroup.objects.all()
    serializer_class = GroupSerializer


class GroupDeleteAPIView(generics.DestroyAPIView):
    """
    Creating User API VIew
    """
    queryset = CustomGroup.objects.all()
    serializer_class = GroupSerializer
