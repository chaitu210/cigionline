# Generated by Django 3.1.4 on 2020-12-19 17:39

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('people', '0016_change_tweet_block_to_url'),
        ('core', '0021_homepagefeaturedmultimedia'),
    ]

    operations = [
        migrations.CreateModel(
            name='HomePageFeaturedExperts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('featured_expert', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='people.personpage', verbose_name='Expert')),
                ('home_page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='featured_experts', to='core.homepage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
    ]