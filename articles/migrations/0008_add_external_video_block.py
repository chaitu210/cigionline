# Generated by Django 3.1.5 on 2021-01-29 21:44

from django.db import migrations
import streams.blocks
import wagtail.contrib.table_block.blocks
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0007_add_poster_block'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articlepage',
            name='body',
            field=wagtail.core.fields.StreamField([('block_quote', wagtail.core.blocks.StructBlock([('quote', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'], required=True)), ('quote_author', wagtail.core.blocks.CharBlock(required=False)), ('author_title', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('link_url', wagtail.core.blocks.URLBlock(required=False)), ('link_text', wagtail.core.blocks.CharBlock(required=False))])), ('embedded_multimedia', wagtail.core.blocks.StructBlock([('multimedia_url', wagtail.core.blocks.URLBlock(required=True)), ('title', wagtail.core.blocks.CharBlock(required=False))])), ('embedded_video', wagtail.core.blocks.StructBlock([('video_url', wagtail.core.blocks.URLBlock(required=True)), ('caption', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('aspect_ratio', wagtail.core.blocks.ChoiceBlock(choices=[('none', 'None'), ('landscape', 'Landscape'), ('square', 'Square')]))])), ('image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('hide_image_caption', wagtail.core.blocks.BooleanBlock(required=False))])), ('inline_video', streams.blocks.InlineVideoBlock(page_type=['multimedia.MultimediaPage'])), ('paragraph', streams.blocks.ParagraphBlock()), ('table', wagtail.contrib.table_block.blocks.TableBlock()), ('text_background_block', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'])), ('accordion', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('text', wagtail.core.blocks.RichTextBlock(features=['bold', 'h3', 'h4', 'italic', 'link', 'ol', 'ul'], required=True))])), ('autoplay_video', wagtail.core.blocks.StructBlock([('video', streams.blocks.VideoBlock(required=False)), ('caption', wagtail.core.blocks.CharBlock(required=False))])), ('chart', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('hide_image_caption', wagtail.core.blocks.BooleanBlock(required=False))])), ('embedded_tiktok', wagtail.core.blocks.URLBlock(help_text='Paste the link to the video here. It should look like this: https://www.tiktok.com/@who/video/6805515697175792901', required=True)), ('external_quote', wagtail.core.blocks.StructBlock([('quote', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'], required=True)), ('source', wagtail.core.blocks.CharBlock(required=False))])), ('external_video', streams.blocks.ExternalVideoBlock()), ('highlight_title', streams.blocks.HighlightTitleBlock()), ('image_full_bleed', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('hide_image_caption', wagtail.core.blocks.BooleanBlock(required=False))])), ('image_scroll', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('hide_image_caption', wagtail.core.blocks.BooleanBlock(required=False))])), ('poster_block', wagtail.core.blocks.PageChooserBlock(page_type=['publications.PublicationPage'], required=True)), ('pull_quote_left', wagtail.core.blocks.StructBlock([('quote', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'], required=True)), ('quote_author', wagtail.core.blocks.CharBlock(required=False)), ('author_title', wagtail.core.blocks.CharBlock(required=False))])), ('pull_quote_right', wagtail.core.blocks.StructBlock([('quote', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'], required=True)), ('quote_author', wagtail.core.blocks.CharBlock(required=False)), ('author_title', wagtail.core.blocks.CharBlock(required=False))])), ('recommended', streams.blocks.RecommendedBlock()), ('text_border_block', wagtail.core.blocks.StructBlock([('text', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'], required=True)), ('border_colour', wagtail.core.blocks.CharBlock(required=False))])), ('tool_tip', wagtail.core.blocks.StructBlock([('anchor', wagtail.core.blocks.CharBlock(required=True)), ('text', wagtail.core.blocks.RichTextBlock(features=['bold', 'italic', 'link'], required=True)), ('name', wagtail.core.blocks.CharBlock(required=False)), ('title', wagtail.core.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False))])), ('tweet', wagtail.core.blocks.StructBlock([('tweet_url', wagtail.core.blocks.URLBlock(help_text='The URL of the tweet. Example: https://twitter.com/CIGIonline/status/1188821562440454144', required=True, verbose_name='Tweet URL'))]))], blank=True),
        ),
    ]