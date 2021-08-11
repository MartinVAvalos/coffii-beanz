from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE

class User(AbstractUser):
    pass

# "code": account_code,
# "first_name": "Benjamin",
# "last_name": "Du Monde",
# "acquisition": {
#     "campaign": "podcast-marketing",
#     "channel": "social_media",
#     "subchannel": "twitter",
#     "cost": {"currency": "USD", "amount": 0.50},
# },