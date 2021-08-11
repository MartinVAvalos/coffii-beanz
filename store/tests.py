from django.test import TestCase
from decouple import config
import recurly

RECURLY = config('RECURLY')
r = recurly.Client(RECURLY)
class UserTestCase(TestCase):
    def apiKey(self):
        print(RECURLY)
        print("Success")

    def create_user(TestCase):
        try:
            account_code = "test1@emailhere.com"

            account_create = {
                "code": account_code,
                "first_name": "Benjamin",
                "last_name": "Du Monde",
                "acquisition": {
                    "campaign": "podcast-marketing",
                    "channel": "social_media",
                    "subchannel": "twitter",
                    "cost": {"currency": "USD", "amount": 0.50},
                },
                "shipping_addresses": [
                    {
                        "nickname": "Home",
                        "street1": "1 Tchoupitoulas St",
                        "city": "New Orleans",
                        "region": "LA",
                        "country": "US",
                        "postal_code": "70115",
                        "first_name": "Aaron",
                        "last_name": "Du Monde",
                    }
                ],
            }
            account = r.create_account(account_create)
            print("Created Account %s" % account)
        except recurly.errors.ValidationError as e:
            # If the request was invalid, you may want to tell your user
            # why. You can find the invalid params and reasons in e.error.params
            print("ValidationError: %s" % e.error.message)
            print(e.error.params)