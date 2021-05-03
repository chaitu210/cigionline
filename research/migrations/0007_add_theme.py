# Generated by Django 3.1.7 on 2021-04-19 18:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('research', '0006_add_featured_pages'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectpage',
            name='theme',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='core.theme'),
        ),
    ]