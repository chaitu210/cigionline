# Generated by Django 3.2.4 on 2021-07-27 18:24

from django.db import migrations, models
import streams.blocks
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0016_alter_twentiethpagesingleton_body'),
    ]

    operations = [
        migrations.AddField(
            model_name='basicpage',
            name='search_result_description',
            field=models.CharField(blank=True, help_text='Text that is displayed when this page appears in search results', max_length=1024, null=True),
        ),
        migrations.AddField(
            model_name='contentpage',
            name='search_result_description',
            field=models.CharField(blank=True, help_text='Text that is displayed when this page appears in search results', max_length=1024, null=True),
        ),
        migrations.AddField(
            model_name='twentiethpage',
            name='search_result_description',
            field=models.CharField(blank=True, help_text='Text that is displayed when this page appears in search results', max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='twentiethpagesingleton',
            name='body',
            field=wagtail.core.fields.StreamField([('block_quote', wagtail.core.blocks.StructBlock([('quote', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'], required=True)), ('quote_author', wagtail.core.blocks.CharBlock(required=False)), ('author_title', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('link_url', wagtail.core.blocks.URLBlock(required=False)), ('link_text', wagtail.core.blocks.CharBlock(required=False))])), ('embedded_multimedia', wagtail.core.blocks.StructBlock([('multimedia_url', wagtail.core.blocks.URLBlock(required=True)), ('title', wagtail.core.blocks.CharBlock(required=False))])), ('embedded_video', wagtail.core.blocks.StructBlock([('video_url', wagtail.core.blocks.URLBlock(required=True)), ('caption', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('aspect_ratio', wagtail.core.blocks.ChoiceBlock(choices=[('none', 'None'), ('landscape', 'Landscape'), ('square', 'Square')]))])), ('image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('hide_image_caption', wagtail.core.blocks.BooleanBlock(required=False))])), ('inline_video', streams.blocks.InlineVideoBlock(page_type=['multimedia.MultimediaPage'])), ('paragraph', streams.blocks.ParagraphBlock()), ('table', streams.blocks.TableStreamBlock()), ('text_background_block', streams.blocks.TextBackgroundBlock(features=['bold', 'italic', 'link'])), ('gallery', wagtail.core.blocks.StructBlock([('timeline', wagtail.core.blocks.StreamBlock([('slide', wagtail.core.blocks.StructBlock([('year', wagtail.core.blocks.CharBlock()), ('text', wagtail.core.blocks.RichTextBlock()), ('image', wagtail.images.blocks.ImageChooserBlock())]))], required=False))]))]),
        ),
    ]
