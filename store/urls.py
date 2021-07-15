from django.urls import path

from . import views

# router = DefaultRouter()
# router.register('profile', views.RecurlyProfile, basename='profile')

urlpatterns = [
    path(r'dashboard', views.landing),
    # path(r'', views.index),
]