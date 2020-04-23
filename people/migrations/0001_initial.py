# Generated by Django 3.0.5 on 2020-04-17 20:47

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields
import wagtail.core.blocks
import wagtail.core.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtaildocs', '0010_document_file_hash'),
        ('research', '0002_topicpage_archive'),
        ('wagtailcore', '0045_assign_unlock_grouppagepermission'),
        ('wagtailimages', '0001_squashed_0021'),
    ]

    operations = [
        migrations.CreateModel(
            name='PeoplePage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
            ],
            options={
                'verbose_name': 'Person List Page',
                'verbose_name_plural': 'Person List Pages',
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='PersonListPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('subtitle', wagtail.core.fields.RichTextField(blank=True)),
                ('person_list_page_type', models.IntegerField(choices=[(0, 'Default'), (1, 'Experts'), (2, 'Staff')], default=0)),
            ],
            options={
                'verbose_name': 'Person List Page',
                'verbose_name_plural': 'Person List Pages',
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='PersonType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='PersonPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('address_city', models.CharField(blank=True, max_length=255)),
                ('address_country', models.CharField(blank=True, max_length=255)),
                ('address_line1', models.CharField(blank=True, max_length=255)),
                ('address_line2', models.CharField(blank=True, max_length=255)),
                ('address_postal_code', models.CharField(blank=True, max_length=32)),
                ('address_province', models.CharField(blank=True, max_length=255)),
                ('archive', models.IntegerField(choices=[(0, 'No'), (1, 'Yes')], default=0)),
                ('board_position', models.CharField(blank=True, max_length=255)),
                ('body', wagtail.core.fields.StreamField([('paragraph', wagtail.core.blocks.RichTextBlock())], blank=True, verbose_name='Full Biography')),
                ('education', wagtail.core.fields.StreamField([('education', wagtail.core.blocks.StructBlock([('degree', wagtail.core.blocks.CharBlock(required=True)), ('school', wagtail.core.blocks.CharBlock(required=True)), ('school_website', wagtail.core.blocks.URLBlock(required=False)), ('year', wagtail.core.blocks.IntegerBlock(required=False))]))], blank=True)),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('expertise', wagtail.core.fields.StreamField([('expertise', wagtail.core.blocks.CharBlock(required=True))], blank=True)),
                ('first_name', models.CharField(blank=True, max_length=255)),
                ('languages', wagtail.core.fields.StreamField([('language', wagtail.core.blocks.CharBlock(required=True))], blank=True)),
                ('last_name', models.CharField(blank=True, max_length=255)),
                ('linkedin_url', models.URLField(blank=True)),
                ('phone_number', models.CharField(blank=True, max_length=32)),
                ('position', models.CharField(blank=True, max_length=255)),
                ('short_bio', wagtail.core.fields.RichTextField(blank=True, verbose_name='Short Biography')),
                ('twitter_username', models.CharField(blank=True, max_length=255)),
                ('website', models.URLField(blank=True)),
                ('curriculum_vitae', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtaildocs.Document')),
                ('image_media', models.ForeignKey(blank=True, help_text="A high resolution image that is downloadable from the expert's page.", null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image', verbose_name='Media Photo')),
                ('image_square', models.ForeignKey(blank=True, help_text='For circular profile images that are used throughout the website.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image', verbose_name='Square Image')),
                ('person_types', modelcluster.fields.ParentalManyToManyField(blank=True, to='people.PersonType')),
                ('topics', modelcluster.fields.ParentalManyToManyField(blank=True, to='research.TopicPage')),
            ],
            options={
                'verbose_name': 'Person Page',
                'verbose_name_plural': 'Person Pages',
            },
            bases=('wagtailcore.page',),
        ),
    ]