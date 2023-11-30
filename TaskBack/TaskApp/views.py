from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from .serializers import TaskSerializer,UserSerializer
from .models import UserLogin,Task
from django.db.models import Q
from django.http import JsonResponse

# Create your views here.
@csrf_exempt
def regUser(request):
    if request.method=='POST':
        reg=json.loads(request.body)
        regSer=UserSerializer(data=reg)
        if regSer.is_valid():
            regSer.save()
            return HttpResponse(json.dumps({"status":"Success"}))
        else :
            return HttpResponse(json.dumps({"status":"Failed"}))
        
        
@csrf_exempt
def login(request):
    if request.method=='POST':
        rec_data=json.loads(request.body)
        getUsername=rec_data['username']
        getPass=rec_data['password']
        data=list(UserLogin.objects.filter(Q(username__exact=getUsername)&Q(password__exact=getPass)).values())
        return HttpResponse(json.dumps(data))
    

@csrf_exempt
def addTask(request):
    if request.method=='POST':
        received=json.loads(request.body)
        taskSer=TaskSerializer(data=received)
        if taskSer.is_valid():
            taskSer.save()
            return HttpResponse (json.dumps({"status":"Success"}))
        
        else:
            return HttpResponse(json.dumps({"status":"Failed"}))
        
@csrf_exempt
def viewTask(request):
    if request.method=='POST':
        task=Task.objects.all()
        taskSer=TaskSerializer(task,many=True)
        return HttpResponse(json.dumps(taskSer.data))

@csrf_exempt
def updateTask(request):
    if request.method=="POST":
        update=json.loads(request.body)
        getUserid=update["userid"]
        getName=update["name"]
        data=list(Task.objects.filter(Q(userid__exact=getUserid)).update(name=getName))
        return HttpResponse(json.dumps(data))



    
@csrf_exempt
def myTask(request):
    if request.method=='POST':
        search=json.loads(request.body)
        getUserid=search["userid"]
        data=list(Task.objects.filter(Q(userid__exact=getUserid)).values())
        return HttpResponse(json.dumps(data))
    

from django.http import JsonResponse

@csrf_exempt
def updateTask(request):
    if request.method == "POST":
        try:
            update_data = json.loads(request.body)
            task_id = update_data.get("task_id")
            is_completed = update_data.get("is_completed")

            task = Task.objects.get(id=task_id)
            task.is_completed = is_completed
            task.save()

            response_data = {"success": True, "message": "Task updated successfully"}
            return HttpResponse(json.dumps(response_data))
        except Task.DoesNotExist:
            response_data = {"success": False, "message": "Task not found"}
            return JsonResponse(response_data, status=404)
        except Exception as e:
            print(f"Error updating task: {e}")
            response_data = {"success": False, "message": "Internal Server Error"}
            return JsonResponse(response_data)


@csrf_exempt
def deleteTask(request):
    if request.method == 'POST':
        try:
            delete_data = json.loads(request.body)
            task_id = delete_data.get('taskid')

            # Check if the task exists
            task = Task.objects.get(id=task_id)

            # Delete the task
            task.delete()

            response_data = {"status": "Success", "message": "Task deleted successfully"}
            return JsonResponse(response_data)
        except Task.DoesNotExist:
            response_data = {"status": "Failed", "message": "Task not found"}
            return JsonResponse(response_data, status=404)
        except Exception as e:
            print(f"Error deleting task: {e}")
            response_data = {"status": "Failed", "message": "Internal Server Error"}
            return JsonResponse(response_data, status=500)



@csrf_exempt
def searchTask(request):
    if request.method == 'POST':
        try:
            search_data = request.POST.get('search_keyword', '')

            # Perform a case-insensitive search on the 'name' and 'description' fields
            tasks = Task.objects.filter(Q(name__icontains=search_data) | Q(description__icontains=search_data))

            # Serialize the tasks to JSON
            task_list = [{"id": task.id, "name": task.name, "description": task.description} for task in tasks]

            return JsonResponse({"status": "Success", "tasks": task_list})
        except Exception as e:
            print(f"Error searching tasks: {e}")
            return JsonResponse({"status": "Failed", "message": "Internal Server Error"}, status=500)
