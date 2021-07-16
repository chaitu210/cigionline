# Generated by Django 3.2.4 on 2021-07-08 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0010_articlepage_cigi_people_mentioned_orderable'),
    ]

    operations = [
        migrations.AddField(
            model_name='articlepage',
            name='hide_excerpt',
            field=models.BooleanField(default=False, help_text='For "CIGI in the News" only: when enabled, hide excerpt and display full article instead', verbose_name='Hide Excerpt'),
        ),
    ]