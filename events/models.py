from core.models import (
    BasicPageAbstract,
    ContentPage,
    FeatureablePageAbstract,
    SearchablePageAbstract,
    ShareablePageAbstract,
)
from django.db import models
from modelcluster.fields import ParentalKey
from wagtail.admin.edit_handlers import (
    FieldPanel,
    InlinePanel,
    MultiFieldPanel,
    PageChooserPanel,
    StreamFieldPanel,
)
from wagtail.core.fields import StreamField
from wagtail.core.models import Orderable, Page
from wagtail.documents.blocks import DocumentChooserBlock
from django.utils import timezone
from wagtail.search import index
import datetime
import pytz
import re


class EventListPage(BasicPageAbstract, Page):
    max_count = 1
    parent_page_types = ['home.HomePage']
    subpage_types = ['events.EventPage']
    templates = 'events/event_list_page.html'

    content_panels = [
        BasicPageAbstract.title_panel,
        BasicPageAbstract.hero_link_panel,
        BasicPageAbstract.body_panel,
        BasicPageAbstract.images_panel,
        MultiFieldPanel(
            [
                InlinePanel(
                    'featured_events',
                    max_num=6,
                    min_num=0,
                    label='Event',
                ),
            ],
            heading='Featured Events',
            classname='collapsible collapsed',
        ),
    ]
    settings_panels = Page.settings_panels + [
        BasicPageAbstract.submenu_panel,
    ]

    search_fields = Page.search_fields + BasicPageAbstract.search_fields

    def get_featured_events(self):
        featured_event_ids = self.featured_events.order_by('sort_order').values_list('event_page', flat=True)[:6]
        pages = Page.objects.specific().prefetch_related(
            'topics',
        ).in_bulk(featured_event_ids)
        return [pages[x] for x in featured_event_ids]

    def get_context(self, request):
        context = super().get_context(request)
        context['featured_events'] = self.get_featured_events()
        return context

    class Meta:
        verbose_name = 'Event List Page'


class EventListPageFeaturedEvent(Orderable):
    event_list_page = ParentalKey(
        'events.EventListPage',
        related_name='featured_events',
    )
    event_page = models.ForeignKey(
        'wagtailcore.Page',
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name='+',
        verbose_name='Event',
    )

    panels = [
        PageChooserPanel(
            'event_page',
            ['events.EventPage'],
        ),
    ]


class EventPage(
    BasicPageAbstract,
    ContentPage,
    FeatureablePageAbstract,
    ShareablePageAbstract,
):
    class EventAccessOptions(models.IntegerChoices):
        PRIVATE = (0, 'Private')
        PUBLIC = (1, 'Public')

    class EventTypes(models.TextChoices):
        CIGI_SPONSORED = ('cigi_sponsored', 'CIGI Sponsored')
        CINEMA_SERIES = ('cinema_series', 'Cinema Series')
        COMMUNITY_EVENT = ('community_event', 'Community Event')
        CONFERENCE = ('conference', 'Conference')
        GLOBAL_POLICY_FORUM = ('global_policy_forum', 'Global Policy Forum')
        NOON_LECTURE_SERIES = ('noon_lecture_series', 'Noon Lecture Series')
        PANEL_DISCUSSION = ('panel_discussion', 'Panel Discussion')
        PUBLICATION_LAUNCH = ('publication_launch', 'Publication Launch')
        ROUNDTABLE = ('roundtable', 'Roundtable')
        SEMINAR = ('seminar', 'Seminar')
        SIGNATURE_LECTURE = ('signature_lecture', 'Signature Lecture')
        VIRTUAL_EVENT = ('virtual_event', 'Virtual Event')
        WORKSHOP = ('workshop', 'Workshop')

    class InvitationTypes(models.IntegerChoices):
        RSVP_REQUIRED = (0, 'RSVP Required')
        INVITATION_ONLY = (1, 'Invitation Only')
        NO_RSVP = (2, 'No RSVP Required')

    class EventTimeZones(models.TextChoices):
        # use this function to determine timezone offsets at current time; unnecessary for those not subjected to DST
        def tz_offset(tz):
            offset = datetime.datetime.now(pytz.timezone(tz)).strftime('%z')
            return f'(UTC{offset[:3]}:{offset[3:]})'

        HAWAII = ('US/Hawaii', '(UTC-10:00) Hawaiian Time')
        LOS_ANGELES = ('America/Los_Angeles', f'{tz_offset("America/Los_Angeles")} Pacific Time')
        DENVER = ('America/Denver', f'{tz_offset("America/Denver")} Mountain Time')
        CHICAGO = ('America/Chicago', f'{tz_offset("America/Chicago")} Central Time')
        TORONTO = ('America/Toronto', f'{tz_offset("America/Toronto")} Eastern Time')
        CARACAS = ('America/Caracas', '(UTC-04:30) Venezuela Time')
        HALIFAX = ('America/Halifax', f'{tz_offset("America/Halifax")} Atlantic Time')
        SAO_PAULO = ('America/Sao_Paulo', '(UTC-03:00) E. South America Time')
        CAPE_VERDE = ('Atlantic/Cape_Verde', '(UTC-01:00) Cape Verde Time')
        LONDON = ('Europe/London', f'{tz_offset("Europe/London")} GMT')
        BERLIN = ('Europe/Berlin', f'{tz_offset("Europe/Berlin")} Central Europe Time')
        BEIRUT = ('Asia/Beirut', f'{tz_offset("Asia/Beirut")} Middle East Time')
        MOSCOW = ('Europe/Moscow', '(UTC+03:00) Russian Time')
        TEHRAN = ('Asia/Tehran', f'{tz_offset("Asia/Tehran")} Iran Time')
        DUBAI = ('Asia/Dubai', '(UTC+04:00) Arabian Time')
        KABUL = ('Asia/Kabul', '(UTC+04:30) Afghanistan Time')
        ASHGABAT = ('Asia/Ashgabat', '(UTC+05:00) West Asia Time')
        KOLKATA = ('Asia/Kolkata', '(UTC+05:30) India Time')
        KATHMANDU = ('Asia/Kathmandu', '(UTC+05:45) Nepal Time')
        YANGON = ('Asia/Yangon', '(UTC+06:30) Myanmar Time')
        BANGKOK = ('Asia/Bangkok', '(UTC+07:00) SE Asia Time')
        SHANGHAI = ('Asia/Shanghai', '(UTC+08:00) China Time')
        TOKYO = ('Asia/Tokyo', '(UTC+09:00) Tokyo Time')
        SYDNEY = ('Australia/Sydney', f'{tz_offset("Australia/Sydney")} AUS Eastern Time')
        AUCKLAND = ('Pacific/Auckland', f'{tz_offset("Pacific/Auckland")} New Zealand Time')

    embed_youtube = models.URLField(blank=True)
    event_access = models.IntegerField(choices=EventAccessOptions.choices, default=EventAccessOptions.PUBLIC, null=True, blank=False)
    event_end = models.DateTimeField(blank=True, null=True)
    event_type = models.CharField(
        blank=False,
        max_length=32,
        null=True,
        choices=EventTypes.choices,
    )
    flickr_album_url = models.URLField(blank=True)
    invitation_type = models.IntegerField(choices=InvitationTypes.choices, default=InvitationTypes.RSVP_REQUIRED)
    location_address1 = models.CharField(blank=True, max_length=255, verbose_name='Address (Line 1)')
    location_address2 = models.CharField(blank=True, max_length=255, verbose_name='Address (Line 2)')
    location_city = models.CharField(blank=True, max_length=255, verbose_name='City')
    location_country = models.CharField(blank=True, max_length=255, verbose_name='Country')
    location_name = models.CharField(blank=True, max_length=255)
    location_postal_code = models.CharField(blank=True, max_length=32, verbose_name='Postal Code')
    location_province = models.CharField(blank=True, max_length=255, verbose_name='Province/State')
    multimedia_page = models.ForeignKey(
        'wagtailcore.Page',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name='Multimedia',
    )
    registration_url = models.URLField(blank=True, max_length=512)
    related_files = StreamField(
        [
            ('file', DocumentChooserBlock()),
        ],
        blank=True,
    )
    time_zone = models.CharField(
        blank=True,
        max_length=64,
        choices=EventTimeZones.choices,
        default=EventTimeZones.TORONTO,
    )
    twitter_hashtag = models.CharField(blank=True, max_length=64)
    website_button_text = models.CharField(
        blank=True,
        max_length=64,
        help_text='Override the button text for the event website. If empty, the button will read "Event Website".'
    )
    website_url = models.URLField(blank=True, max_length=512)

    # Reference field for the Drupal-Wagtail migrator. Can be removed after.
    drupal_node_id = models.IntegerField(blank=True, null=True)

    @property
    def multimedia_url(self):
        if self.multimedia_page:
            return self.multimedia_page.url
        return ''

    def is_past(self):
        now = timezone.now()
        if self.event_end:
            return self.event_end < now
        else:
            return self.publishing_date < now

    @property
    def time_zone_label(self):
        if self.time_zone in self.EventTimeZones.values:
            '''
            timezone name set to short code based on self.time_zone value; in case no name is available,
            "%Z" returns offset: (eg "+0430" for Iran Time, together with offset this becomes "+0430 (UTC+0430)");
            use regex matching to remove the short code and only display offset in this case.
            '''
            tz = re.sub(r'[-+]\d{4} ',
                        '',
                        f'{datetime.datetime.now(pytz.timezone(self.time_zone)).strftime("%Z")} ')
            offset = datetime.datetime.now(pytz.timezone(self.time_zone)).strftime('%z')
            # return string format: "TZ (OFFSET)"" eg. "EDT (UTC-04:00)"
            return f'{tz}(UTC{offset[:3]}:{offset[3:]})'
        return self.time_zone

    content_panels = [
        BasicPageAbstract.title_panel,
        BasicPageAbstract.body_panel,
        BasicPageAbstract.images_panel,
        FieldPanel('publishing_date', heading='Event start'),
        FieldPanel('event_end'),
        FieldPanel('time_zone'),
        MultiFieldPanel(
            [
                FieldPanel('event_type'),
                FieldPanel('event_access'),
                FieldPanel('invitation_type'),
                FieldPanel('website_url'),
                FieldPanel('website_button_text'),
                FieldPanel('registration_url'),
            ],
            heading='Event Details',
            classname='collapsible collapsed',
        ),
        MultiFieldPanel(
            [
                InlinePanel('authors'),
            ],
            heading='Speakers',
            classname='collapsible collapsed',
        ),
        MultiFieldPanel(
            [
                FieldPanel('location_name'),
                FieldPanel('location_address1'),
                FieldPanel('location_address2'),
                FieldPanel('location_city'),
                FieldPanel('location_province'),
                FieldPanel('location_postal_code'),
                FieldPanel('location_country'),
            ],
            heading='Location',
            classname='collapsible collapsed',
        ),
        MultiFieldPanel(
            [
                FieldPanel('embed_youtube'),
                StreamFieldPanel('related_files'),
            ],
            heading='Media',
            classname='collapsible collapsed',
        ),
        MultiFieldPanel(
            [
                FieldPanel('twitter_hashtag'),
                FieldPanel('flickr_album_url'),
            ],
            heading='Event Social Media',
            classname='collapsible collapsed',
        ),
        ContentPage.recommended_panel,
        MultiFieldPanel(
            [
                FieldPanel('topics'),
                FieldPanel('projects'),
                PageChooserPanel(
                    'multimedia_page',
                    ['multimedia.MultimediaPage'],
                ),
            ],
            heading='Related',
            classname='collapsible collapsed',
        ),
    ]
    promote_panels = Page.promote_panels + [
        FeatureablePageAbstract.feature_panel,
        ShareablePageAbstract.social_panel,
        SearchablePageAbstract.search_panel,
    ]

    search_fields = BasicPageAbstract.search_fields \
        + ContentPage.search_fields \
        + [
            index.FilterField('publishing_date'),
        ]

    parent_page_types = ['events.EventListPage']
    subpage_types = []
    templates = 'events/event_page.html'

    class Meta:
        verbose_name = 'Event'
        verbose_name_plural = 'Events'
