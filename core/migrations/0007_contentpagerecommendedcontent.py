# Generated by Django 3.1.1 on 2020-10-08 23:57

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailcore', '0052_pagelogentry'),
        ('core', '0006_auto_20200929_0851'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContentPageRecommendedContent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('content_page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='recommended', to='core.contentpage')),
                ('recommended_content_page', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='wagtailcore.page', verbose_name='Recommended Content')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
    ]
