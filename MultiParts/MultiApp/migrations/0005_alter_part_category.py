# Generated by Django 5.1 on 2024-11-01 16:57

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MultiApp', '0004_alter_part_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='part',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='MultiApp.category'),
        ),
    ]
