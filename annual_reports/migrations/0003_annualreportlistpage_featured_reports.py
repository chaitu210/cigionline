# Generated by Django 3.1.7 on 2021-03-11 02:36

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('annual_reports', '0002_annualreportlistpage_submenu'),
    ]

    operations = [
        migrations.AddField(
            model_name='annualreportlistpage',
            name='featured_reports',
            field=wagtail.core.fields.StreamField([('featured_report', wagtail.core.blocks.PageChooserBlock(page_type=['annual_reports.AnnualReportPage'], required=True))], blank=True),
        ),
    ]