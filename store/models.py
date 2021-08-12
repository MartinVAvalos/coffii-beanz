from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE
from uuid import uuid4

class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    
# "acquisition"
# "shipping_addresses"