# Generated by Django 4.0.1 on 2022-01-26 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=40)),
                ('reference', models.CharField(max_length=255)),
                ('auteur', models.CharField(max_length=255)),
                ('description', models.TextField(max_length=1000)),
                ('photo_url', models.TextField(max_length=2000)),
            ],
        ),
    ]
