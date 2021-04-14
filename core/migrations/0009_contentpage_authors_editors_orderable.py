# Generated by Django 3.1.7 on 2021-03-24 14:41

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('people', '0005_update_table_stream_block'),
        ('core', '0008_update_table_stream_block'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contentpage',
            name='authors',
        ),
        migrations.RemoveField(
            model_name='contentpage',
            name='editors',
        ),
        migrations.CreateModel(
            name='ContentPageEditor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('hide_link', models.BooleanField(default=False)),
                ('content_page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='editors', to='core.contentpage')),
                ('editor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='content_pages_as_editor', to='people.personpage', verbose_name='Editor')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ContentPageAuthor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('hide_link', models.BooleanField(default=False)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='content_pages_as_author', to='people.personpage', verbose_name='Author')),
                ('content_page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='authors', to='core.contentpage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
    ]
