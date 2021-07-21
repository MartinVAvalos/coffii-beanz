from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE

class User(AbstractUser):
    pass