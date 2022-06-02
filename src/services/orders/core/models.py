from django.db import models

# Create your models here.


class Order(models.Model):
    user_id = models.IntegerField()
    book_id = models.IntegerField()
    quantity = models.IntegerField()
