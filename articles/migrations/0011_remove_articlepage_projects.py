# Generated by Django 3.1.6 on 2021-02-12 14:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0010_article_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='articlepage',
            name='projects',
        ),
    ]