from django.urls import path
from django.views.generic.base import RedirectView

from . import views

# router = DefaultRouter()
# router.register('profile', views.RecurlyProfile, basename='profile')

urlpatterns = [
    path(r'login', views.loginexample, name='login'),
    path(r'logout', views.logoutexample, name='logout'),
    path(r'dashboard', views.dashboardexample, name='dashboard'),
    path('', RedirectView.as_view(pattern_name='dashboard', permanent=False)),
]