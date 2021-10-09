from rest_framework import serializers
from .models import CustomGroup, CustomUser


class GroupSerializer(serializers.ModelSerializer):
    """
    Serializer for groups
    """

    user_amount = serializers.IntegerField(source='users.count', read_only=True)

    class Meta:
        model = CustomGroup
        fields = ('id', 'name', 'description', 'user_amount')


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for users
    """

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'created', 'group')

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['group'] = GroupSerializer(instance.group).data
        return response
