# Generated by Django 5.1 on 2024-11-01 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultiApp', '0002_category_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='part',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
