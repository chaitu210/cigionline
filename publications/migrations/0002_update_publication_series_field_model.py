# Generated by Django 3.1.7 on 2021-03-03 03:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicationpage',
            name='publication_series',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='publications.publicationseriespage'),
        ),
    ]