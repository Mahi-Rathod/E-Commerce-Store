# Generated by Django 5.0.3 on 2024-03-11 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='image',
            field=models.ImageField(default='', upload_to='BackEnd/images'),
        ),
    ]
