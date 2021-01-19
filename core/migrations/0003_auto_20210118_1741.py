# Generated by Django 3.1.5 on 2021-01-18 22:41

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('people', '0001_initial'),
        ('core', '0002_auto_20210118_1741'),
    ]

    operations = [
        migrations.AddField(
            model_name='contentpageeditor',
            name='editor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='content_pages_as_editor', to='people.personpage', verbose_name='Editor'),
        ),
        migrations.AddField(
            model_name='contentpageauthor',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='content_pages_as_author', to='people.personpage', verbose_name='Author'),
        ),
        migrations.AddField(
            model_name='contentpageauthor',
            name='content_page',
            field=modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='authors', to='core.contentpage'),
        ),
    ]