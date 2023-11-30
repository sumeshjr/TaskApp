from django.contrib import admin
from django.urls import path , include
from . import views

urlpatterns = [
   path('reg/',views.regUser),
   path('log/',views.login),
   path('add/',views.addTask),
   path('view/',views.viewTask),
   path('update/',views.updateTask),
   path('delete/',views.deleteTask),
   path('mytask/',views.myTask),
   path('update/',views.updateTask),
   path('search/',views.searchTask),
   
   

]
