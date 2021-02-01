# Generated by Django 3.1.5 on 2021-01-29 18:52

from django.db import migrations
import streams.blocks
import wagtail.contrib.table_block.blocks
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('research', '0002_populate_project_types'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectpage',
            name='body',
            field=wagtail.core.fields.StreamField([('block_quote', wagtail.core.blocks.StructBlock([('quote', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'], required=True)), ('quote_author', wagtail.core.blocks.CharBlock(required=False)), ('author_title', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('link_url', wagtail.core.blocks.URLBlock(required=False)), ('link_text', wagtail.core.blocks.CharBlock(required=False))])), ('embedded_multimedia', wagtail.core.blocks.StructBlock([('multimedia_url', wagtail.core.blocks.URLBlock(required=True)), ('title', wagtail.core.blocks.CharBlock(required=False))])), ('embedded_video', wagtail.core.blocks.StructBlock([('video_url', wagtail.core.blocks.URLBlock(required=True)), ('caption', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('aspect_ratio', wagtail.core.blocks.ChoiceBlock(choices=[('none', 'None'), ('landscape', 'Landscape'), ('square', 'Square')]))])), ('image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('hide_image_caption', wagtail.core.blocks.BooleanBlock(required=False))])), ('inline_video', streams.blocks.InlineVideoBlock(page_type=['multimedia.MultimediaPage'])), ('paragraph', streams.blocks.ParagraphBlock()), ('table', wagtail.contrib.table_block.blocks.TableBlock()), ('text_background_block', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'])), ('poster_block', streams.blocks.PosterBlock(page_type=['publications.PublicationPage'], required=True)), ('recommended', streams.blocks.RecommendedBlock()), ('text_border_block', wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'], required=True)), ('border_colour', wagtail.core.blocks.CharBlock(required=False))])), ('igc_timeline', wagtail.core.blocks.StructBlock([('date', wagtail.core.blocks.CharBlock(required=True)), ('title', wagtail.core.blocks.CharBlock(required=False)), ('body', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'], required=False)), ('location', wagtail.core.blocks.CharBlock(required=False)), ('countries_represented', wagtail.images.blocks.ImageChooserBlock(required=False)), ('outcomes', wagtail.core.blocks.StreamBlock([('outcome', wagtail.core.blocks.StructBlock([('date', wagtail.core.blocks.DateBlock(required=False)), ('text', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'], required=False))]))], required=False)), ('witnesses', wagtail.core.blocks.StreamBlock([('witness_date', wagtail.core.blocks.StructBlock([('date', wagtail.core.blocks.DateBlock(required=False)), ('witnesses', wagtail.core.blocks.StreamBlock([('witnesses_full_session', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=False)), ('witness_transcript', wagtail.core.blocks.URLBlock(required=False)), ('witness_video', wagtail.core.blocks.URLBlock(required=False))])), ('witness', wagtail.core.blocks.StructBlock([('name', wagtail.core.blocks.CharBlock(required=False)), ('title', wagtail.core.blocks.CharBlock(required=False)), ('witness_transcript', wagtail.core.blocks.URLBlock(required=False)), ('witness_video', wagtail.core.blocks.URLBlock(required=False))]))]))]))], required=False))]))], blank=True),
        ),
    ]