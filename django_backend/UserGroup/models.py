from django.db import models


# Create your models here.

class CustomUser(models.Model):
    username = models.CharField(max_length=45, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    group = models.ForeignKey('CustomGroup', on_delete=models.RESTRICT, null=True, blank=True, related_name='users')

    class Meta:
        ordering = ['pk']


class CustomGroup(models.Model):
    name = models.CharField(max_length=45)
    description = models.TextField(blank=True, null=True)

    class Meta:
        ordering = ['pk']
