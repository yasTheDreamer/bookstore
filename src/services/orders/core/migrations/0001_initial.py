# Generated by Django 4.0.1 on 2022-01-26 04:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField()),
                ('book_id', models.IntegerField()),
                ('quantity', models.IntegerField()),
            ],
        ),
    ]
