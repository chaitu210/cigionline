# Generated by Django 3.1.7 on 2021-04-12 16:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_contentpage_authors_editors_orderable'),
        ('articles', '0006_article_landing_page_basicpage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articlelandingpagefeaturedarticle',
            name='article_page',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='core.contentpage', verbose_name='Article'),
        ),
    ]