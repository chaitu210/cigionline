# Generated by Django 3.2.3 on 2021-06-29 18:06

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields
import streams.blocks
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.documents.blocks
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0001_initial'),
        ('menus', '0003_increase_menu_item_title_length'),
        ('wagtailcore', '0062_comment_models_and_pagesubscription'),
        ('core', '0013_use_custom_image_model'),
    ]

    operations = [
        migrations.CreateModel(
            name='SlidePage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('background_colour', models.CharField(blank=True, choices=[('WHITE', 'WHITE'), ('BLACK', 'BLACK'), ('RED', 'RED')], max_length=16)),
                ('body', wagtail.core.fields.StreamField([('video', wagtail.core.blocks.StructBlock([('video_url', wagtail.core.blocks.CharBlock()), ('video_image', wagtail.images.blocks.ImageChooserBlock())])), ('text', wagtail.core.blocks.RichTextBlock()), ('separator', wagtail.core.blocks.StructBlock([]))], blank=True)),
                ('timeline', wagtail.core.fields.StreamField([('slide', wagtail.core.blocks.StructBlock([('year', wagtail.core.blocks.CharBlock()), ('text', wagtail.core.blocks.RichTextBlock()), ('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('video_url', wagtail.core.blocks.CharBlock(required=False)), ('video_image', wagtail.images.blocks.ImageChooserBlock(required=False))]))], blank=True, help_text='Only for timeline slide.')),
                ('theme', models.CharField(choices=[('SLIDE-1', 'SLIDE-1'), ('SLIDE-2', 'SLIDE-2'), ('SLIDE-3', 'SLIDE-3'), ('SLIDE-4', 'SLIDE-4'), ('SLIDE-5', 'SLIDE-5')], max_length=16, null=True)),
                ('title_override', wagtail.core.fields.RichTextField(blank=True, help_text='The title will be replaced by this field. Leave empty to use title field.')),
                ('walls_embed', models.CharField(blank=True, help_text='Only for social slide.', max_length=16, null=True)),
                ('image_background', models.ForeignKey(blank=True, help_text='Background image', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='images.cigionlineimage', verbose_name='Background Image')),
            ],
            options={
                'verbose_name': 'Twentieth Page Slide',
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='TwentiethPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('body', wagtail.core.fields.StreamField([('block_quote', wagtail.core.blocks.StructBlock([('quote', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'], required=True)), ('quote_author', wagtail.core.blocks.CharBlock(required=False)), ('author_title', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('link_url', wagtail.core.blocks.URLBlock(required=False)), ('link_text', wagtail.core.blocks.CharBlock(required=False))])), ('embedded_multimedia', wagtail.core.blocks.StructBlock([('multimedia_url', wagtail.core.blocks.URLBlock(required=True)), ('title', wagtail.core.blocks.CharBlock(required=False))])), ('embedded_video', wagtail.core.blocks.StructBlock([('video_url', wagtail.core.blocks.URLBlock(required=True)), ('caption', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('aspect_ratio', wagtail.core.blocks.ChoiceBlock(choices=[('none', 'None'), ('landscape', 'Landscape'), ('square', 'Square')]))])), ('image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('hide_image_caption', wagtail.core.blocks.BooleanBlock(required=False))])), ('inline_video', streams.blocks.InlineVideoBlock(page_type=['multimedia.MultimediaPage'])), ('paragraph', streams.blocks.ParagraphBlock()), ('table', streams.blocks.TableStreamBlock()), ('text_background_block', streams.blocks.TextBackgroundBlock(features=['bold', 'italic', 'link']))], blank=True)),
                ('hero_link', wagtail.core.fields.StreamField([('hero_link', wagtail.core.blocks.StructBlock([('hero_link_text', wagtail.core.blocks.CharBlock(required=True)), ('hero_link_url', wagtail.core.blocks.CharBlock(required=True)), ('hero_link_icon', wagtail.core.blocks.CharBlock(help_text='Use a font-awesome icon name such as fa-envelope', required=False))])), ('hero_document', wagtail.core.blocks.StructBlock([('hero_link_text', wagtail.core.blocks.CharBlock(required=True)), ('hero_link_document', wagtail.documents.blocks.DocumentChooserBlock(required=True)), ('hero_link_icon', wagtail.core.blocks.CharBlock(help_text='Use a font-awesome icon name such as fa-envelope', required=False))]))], blank=True, help_text='Text with link to url, email or document and optional icon that appears below the page title in the hero section.')),
                ('subtitle', wagtail.core.fields.RichTextField(blank=True)),
                ('feature_subtitle', models.CharField(blank=True, max_length=255)),
                ('feature_title', models.CharField(blank=True, max_length=255)),
                ('search_terms', wagtail.core.fields.StreamField([('search_term', wagtail.core.blocks.CharBlock())], blank=True, help_text='A list of search terms for which this page will be elevated in the search results.')),
                ('social_title', models.CharField(blank=True, max_length=255)),
                ('social_description', models.CharField(blank=True, max_length=255)),
                ('image_feature', models.ForeignKey(blank=True, help_text='Image used when featuring on landing pages such as the home page', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='images.cigionlineimage', verbose_name='Feature image')),
                ('image_hero', models.ForeignKey(blank=True, help_text='A large image to be displayed prominently on the page.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='images.cigionlineimage', verbose_name='Hero Image')),
                ('image_social', models.ForeignKey(blank=True, help_text='An image that is used when sharing on social media.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='images.cigionlineimage', verbose_name='Social image')),
                ('submenu', models.ForeignKey(blank=True, help_text='Select a submenu to appear in the right section of the hero.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='menus.menu', verbose_name='Submenu')),
            ],
            options={
                'verbose_name': 'Twentieth Page',
            },
            bases=('wagtailcore.page', models.Model),
        ),
        migrations.CreateModel(
            name='TwentiethPageSlide',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('slide', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='core.slidepage', verbose_name='Slide')),
                ('twentieth_page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='slides', to='core.twentiethpage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
    ]
