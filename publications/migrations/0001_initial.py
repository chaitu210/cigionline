# Generated by Django 3.0.7 on 2020-07-27 17:28

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields
import wagtail.contrib.table_block.blocks
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.documents.blocks
import wagtail.images.blocks


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailimages', '0022_uploadedimage'),
        ('wagtailcore', '0045_assign_unlock_grouppagepermission'),
        ('wagtaildocs', '0010_document_file_hash'),
        ('research', '0003_topicpage_drupal_taxonomy_id'),
        ('menus', '0002_populate_menus'),
    ]

    operations = [
        migrations.CreateModel(
            name='PublicationPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('body', wagtail.core.fields.StreamField([('paragraph', wagtail.core.blocks.RichTextBlock()), ('image', wagtail.images.blocks.ImageChooserBlock()), ('block_quote', wagtail.core.blocks.StructBlock([('quote', wagtail.core.blocks.RichTextBlock(required=True)), ('quote_author', wagtail.core.blocks.CharBlock(required=False)), ('author_title', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False))])), ('table', wagtail.contrib.table_block.blocks.TableBlock())], blank=True)),
                ('subtitle', wagtail.core.fields.RichTextField(blank=True)),
                ('feature_subtitle', models.CharField(blank=True, max_length=255)),
                ('feature_title', models.CharField(blank=True, max_length=255)),
                ('publishing_date', models.DateField()),
                ('social_title', models.CharField(blank=True, max_length=255)),
                ('social_description', models.CharField(blank=True, max_length=255)),
                ('authors', wagtail.core.fields.StreamField([('author', wagtail.core.blocks.PageChooserBlock(page_type=['people.PersonPage'], required=True)), ('external_author', wagtail.core.blocks.CharBlock(required=True))], blank=True)),
                ('book_excerpt', wagtail.core.fields.RichTextField(blank=True, verbose_name='Excerpt')),
                ('book_format', models.CharField(blank=True, choices=[('HC', 'Hardcover'), ('PB', 'Paperback'), ('TP', 'Trade PB')], help_text='Select the formation of this book/publication.', max_length=2, verbose_name='Format')),
                ('book_pages', models.IntegerField(blank=True, help_text='Enter the number of pages in the book.', null=True, verbose_name='Pages')),
                ('book_publisher', models.CharField(blank=True, max_length=255)),
                ('book_publisher_url', models.URLField(blank=True)),
                ('book_purchase_links', wagtail.core.fields.StreamField([('purchase_link', wagtail.core.blocks.StructBlock([('link_text', wagtail.core.blocks.CharBlock(required=True)), ('url', wagtail.core.blocks.URLBlock(required=True))]))], blank=True)),
                ('editorial_reviews', wagtail.core.fields.StreamField([('editorial_review', wagtail.core.blocks.RichTextBlock())], blank=True)),
                ('editors', wagtail.core.fields.StreamField([('editor', wagtail.core.blocks.PageChooserBlock(page_type=['people.PersonPage'], required=True)), ('external_editor', wagtail.core.blocks.CharBlock(required=True))], blank=True)),
                ('embed_youtube', models.URLField(blank=True, help_text='Enter the YouTube URL (https://www.youtube.com/watch?v=4-Xkn1U1DkA) or short URL (https://youtu.be/o5acQ2GxKbQ) to add an embedded video.', verbose_name='YouTube Embed')),
                ('isbn', models.CharField(blank=True, help_text='Enter the print ISBN for this book.', max_length=32, verbose_name='ISBN')),
                ('isbn_ebook', models.CharField(blank=True, help_text='Enter the ISBN for the eBook version of this publication.', max_length=32, verbose_name='eBook ISBN')),
                ('isbn_hardcover', models.CharField(blank=True, help_text='Enter the ISBN for the hardcover version of this publication.', max_length=32, verbose_name='Hardcover ISBN')),
                ('pdf_downloads', wagtail.core.fields.StreamField([('pdf_download', wagtail.core.blocks.StructBlock([('file', wagtail.documents.blocks.DocumentChooserBlock(required=True)), ('button_text', wagtail.core.blocks.CharBlock(help_text='Optional text to replace the button text. If left empty, the button will read "Download PDF".', required=False))], label='PDF Download'))], blank=True, verbose_name='PDF Downloads')),
                ('drupal_node_id', models.IntegerField(blank=True, null=True)),
                ('book_excerpt_download', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtaildocs.Document', verbose_name='Excerpt Download')),
                ('image_cover', models.ForeignKey(blank=True, help_text='An image of the cover of the publication.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image', verbose_name='Cover image')),
                ('image_feature', models.ForeignKey(blank=True, help_text='Image used when featuring on landing pages such as the home page', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image', verbose_name='Feature image')),
                ('image_hero', models.ForeignKey(blank=True, help_text='A large image to be displayed prominently on the page.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image', verbose_name='Hero Image')),
                ('image_poster', models.ForeignKey(blank=True, help_text='A poster image which will be used in the highlights section of the homepage.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image', verbose_name='Poster image')),
                ('image_social', models.ForeignKey(blank=True, help_text='An image that is used when sharing on social media.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image', verbose_name='Social image')),
                ('submenu', models.ForeignKey(blank=True, help_text='Select a submenu to appear in the right section of the hero.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='menus.Menu', verbose_name='Submenu')),
                ('topics', modelcluster.fields.ParentalManyToManyField(blank=True, to='research.TopicPage')),
            ],
            options={
                'verbose_name': 'Publication',
                'verbose_name_plural': 'Publications',
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='PublicationListPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('body', wagtail.core.fields.StreamField([('paragraph', wagtail.core.blocks.RichTextBlock()), ('image', wagtail.images.blocks.ImageChooserBlock()), ('block_quote', wagtail.core.blocks.StructBlock([('quote', wagtail.core.blocks.RichTextBlock(required=True)), ('quote_author', wagtail.core.blocks.CharBlock(required=False)), ('author_title', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False))])), ('table', wagtail.contrib.table_block.blocks.TableBlock())], blank=True)),
                ('subtitle', wagtail.core.fields.RichTextField(blank=True)),
                ('image_hero', models.ForeignKey(blank=True, help_text='A large image to be displayed prominently on the page.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image', verbose_name='Hero Image')),
                ('submenu', models.ForeignKey(blank=True, help_text='Select a submenu to appear in the right section of the hero.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='menus.Menu', verbose_name='Submenu')),
            ],
            options={
                'verbose_name': 'Publication List Page',
            },
            bases=('wagtailcore.page',),
        ),
    ]
