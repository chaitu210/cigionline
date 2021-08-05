# Generated by Django 3.2.4 on 2021-07-15 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0006_add_event_time_zone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventpage',
            name='time_zone',
            field=models.CharField(blank=True, choices=[('America/Toronto', 'EST/EDT'), ('America/Los_Angeles', 'PST/PDT')], default=('America/Toronto', 'EST/EDT'), max_length=64),
        ),
    ]