from django.shortcuts import render
from django.http import HttpResponse
from .models import Todolists

# Create your views here.
def index(request):
    # return HttpResponse("Hello from views")
    todolists = Todolists.objects.all()[:10]

    context = {
        "title": "Todo-Lists",
        "todolists": todolists
    }
    return render(request, 'todolists/index.html', context)

def show(request, todolist_id):
    todolist = Todolists.objects.get(id=todolist_id)

    context = {
        "todolist": todolist
    }

    return render(request, 'todolists/show.html', context)
