from django.db import models

class UserLogin(models.Model):
    id=models.AutoField(primary_key=True)
    username=models.CharField(default="",max_length=100)
    password=models.TextField(default="",max_length=100)
   

class Task(models.Model):
    userid=models.IntegerField()
    name=models.CharField(default="",max_length=100)
    description=models.TextField(default="")
    priority = models.CharField(default="", max_length=10)
    date = models.DateField(null=True, blank=True)
    is_completed = models.BooleanField(default=False)
   