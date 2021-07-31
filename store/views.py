from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
import json
from rest_framework import status

from django.contrib.auth import logout
from django.conf import settings
from django.http import HttpResponseRedirect
from urllib.parse import urlencode
from decouple import config
# from django.http.response import HttpResponse, HttpResponseNotFound

def loginexample(request):
    user = request.user
    if user.is_authenticated:
        return {"message": "Cheeks"}
    else:
        return render(request, 'store/example.html')

def logoutexample(request):
    logout(request)
    domain = config('DOMAIN')
    client_id = config('CLIENT_ID')
    return_to = 'http://localhost:8000' # this can be current domain
    return redirect(f'https://{domain}/v2/logout?client_id={client_id}&returnTo={return_to}')


@login_required
def dashboardexample(request):
    try:
        return render(request, "store/dashboardexample.html", status=status.HTTP_200_OK)
    except:
            return render("<h1>404 Page Not Found</h1>", status=status.HTTP_404_NOT_FOUND)


# Prod
@login_required
def dashboard(request):
    try:
        return render(request, "store/index.html", status=status.HTTP_200_OK)
    except:
            return render("<h1>404 Page Not Found</h1>", status=status.HTTP_404_NOT_FOUND)



# @login_required
# def dashboard(request):
#     user = request.user
#     auth0user = user.social_auth.get(provider='auth0')
#     userdata = {
#         'user_id': auth0user.uid,
#         'name': user.first_name,
#         'picture': auth0user.extra_data['picture'],
#         'email': auth0user.extra_data['email']
#     }

#     return render(request, 'dashboard.html', {
#         'auth0User': auth0user,
#         'userdata': json.dumps(userdata, indent=4)
#     })