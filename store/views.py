from django.http.response import HttpResponse, HttpResponseNotFound
from django.shortcuts import render

# Prod
def landing(request):
    try:
        return render(request, "store/index.html")
    except:
            return HttpResponseNotFound("<h1>404 Page Not Found</h1>")