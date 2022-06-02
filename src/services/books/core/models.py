from django.db import models

# Create your models here.


class Book(models.Model):
    title = models.CharField(max_length=40)
    reference = models.CharField(max_length=255)
    auteur = models.CharField(max_length=255)
    description = models.TextField(max_length=1000)
    photo_url = models.TextField(max_length=2000)
