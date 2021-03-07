# Generated by Django 3.1.7 on 2021-03-02 18:38

from django.db import migrations


def populate_themes(apps, schema_editor):
    DEFAULT_THEMES = [
        (1073, 'After-COVID Series'),
        (1080, 'AI Series'),
        (1058, 'Big Tech'),
        (1088, 'Big Tech S3'),
        (948, 'CIGI Campus'),
        (950, 'CIGI Trust'),
        (963, 'Cyber Series'),
        (951, 'Data Series'),
        (942, 'GCIG'),
        (1075, 'Health Security Series'),
        (1074, 'IGC'),
        (1056, 'Indigenous Lands Series'),
        (935, 'Innovation Series'),
        (941, 'Longform'),
        (960, 'Longform 2'),
        (964, 'Longform 2 Dark Mode'),
        (962, 'Narrow Theme'),
        (1057, 'Platform Governance Series'),
        (1063, 'Wide Landscape'),
        (958, 'Women and Trade Series'),
        (1062, 'WTO Series'),
    ]
    Theme = apps.get_model('core', 'Theme')
    for drupal_id, theme_name in DEFAULT_THEMES:
        theme = Theme(name=theme_name, drupal_taxonomy_id=drupal_id)
        theme.save()


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20210302_1216'),
    ]

    operations = [
        migrations.RunPython(populate_themes),
    ]