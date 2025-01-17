from core.models import BasicPage
from home.models import HomePage
from django.template import Context, Template
from wagtail.tests.utils import WagtailPageTests
from wagtail.tests.utils.form_data import nested_form_data

from .models import (
    ProjectListPage,
    ProjectPage,
    ResearchLandingPage,
    TopicListPage,
    TopicPage,
)


class ProjectListPageTests(WagtailPageTests):
    def test_projectlistpage_parent_page_types(self):
        self.assertAllowedParentPageTypes(
            ProjectListPage,
            {HomePage},
        )

    def test_projectlistpage_child_page_types(self):
        self.assertAllowedSubpageTypes(
            ProjectListPage,
            {ProjectPage},
        )


class ProjectPageTests(WagtailPageTests):
    def test_projectpage_parent_page_types(self):
        self.assertAllowedParentPageTypes(
            ProjectPage,
            {BasicPage, ProjectListPage},
        )

    def test_projectpage_child_page_types(self):
        self.assertAllowedSubpageTypes(
            ProjectPage,
            {},
        )


class ResearchLandingPageTests(WagtailPageTests):
    def test_researchlandingpage_parent_page_types(self):
        self.assertAllowedParentPageTypes(
            ResearchLandingPage,
            {HomePage},
        )

    def test_researchlandingpage_child_page_types(self):
        self.assertAllowedSubpageTypes(
            ResearchLandingPage,
            {},
        )


class TopicListPageTests(WagtailPageTests):
    def test_topiclistpage_parent_page_types(self):
        """
        Verify allowed parent page types.
        """
        self.assertAllowedParentPageTypes(
            TopicListPage,
            {HomePage},
        )

    def test_topiclistpage_child_page_types(self):
        """
        Verify allowed child page types.
        """
        self.assertAllowedSubpageTypes(
            TopicListPage,
            {TopicPage},
        )

    def test_can_create_under_homepage(self):
        """
        Test that a TopicListPage can be created as a child of a HomePage.
        """
        home_page = HomePage.objects.get()
        self.assertCanCreate(home_page, TopicListPage, nested_form_data({
            'title': 'Topics',
        }))

    def test_cannot_create_second_topiclistpage(self):
        """
        Test that a TopicListPage cannot be created if a TopicListPage already
        exists.
        """
        home_page = HomePage.objects.get()
        # Create the first TopicListPage
        self.assertCanCreate(home_page, TopicListPage, nested_form_data({
            'title': 'Topics',
        }))
        try:
            self.assertCanCreate(home_page, TopicListPage, nested_form_data({
                'title': 'Topics 2',
            }))
            self.fail('Expected to error')
        except AssertionError as ae:
            if str(ae) == 'Creating a page research.topiclistpage didnt redirect the user to the explorer, but to [(\'/admin/\', 302)]':
                pass
            else:
                raise ae


class TopicPageTests(WagtailPageTests):
    def test_topicpage_parent_page_types(self):
        """
        Verify allowed parent page types.
        """
        self.assertAllowedParentPageTypes(
            TopicPage,
            {TopicListPage},
        )

    def test_topicpage_child_page_types(self):
        """
        Verify allowed child page types.
        """
        self.assertAllowedSubpageTypes(
            TopicPage,
            {},
        )


class HighlightedTopicsTests(WagtailPageTests):
    TEMPLATE = Template('{% load topic_tags %} {% highlighted_topics %}')

    def test_if_no_topics_template_should_be_empty(self):
        rendered = self.TEMPLATE.render(Context({}))

        self.assertEqual(' \n\n\n<ul class="highlighted-topics-list">\n  \n</ul>\n', rendered)

    def test_correct_number_of_topics_render(self):
        for n in range(5):
            TopicPage.objects.create(path='/topic{0}'.format(n), depth=1, title='topic{0}'.format(n), slug='topic{0}'.format(n), archive=0, live=True)
        rendered = self.TEMPLATE.render(Context({}))

        self.assertIn('topic4', rendered)
        self.assertNotIn('topic5', rendered)

    def test_topics_not_live_do_not_render(self):
        TopicPage.objects.create(path='/topic1', depth=1, title='topic1', slug='topic1', archive=0, live=False)
        rendered = self.TEMPLATE.render(Context({}))

        self.assertNotIn('topic1', rendered)

    def test_topics_archived_do_not_render(self):
        TopicPage.objects.create(path='/topic1', depth=1, title='topic1', slug='topic1', archive=1, live=True)
        rendered = self.TEMPLATE.render(Context({}))

        self.assertNotIn('topic1', rendered)


class TopicsTagTests(WagtailPageTests):
    TEMPLATE = Template('{% load topic_tags %} {% topics test_topics %}')

    def test_if_no_topics_template_should_be_empty(self):
        test_topics = TopicPage.objects.all()
        rendered = self.TEMPLATE.render(Context({'test_topics': test_topics}))

        self.assertEqual(' \n\n<ul class="topics">\n  \n</ul>\n', rendered)

    def test_correct_number_of_topics_render(self):
        for n in range(5):
            TopicPage.objects.create(path='/topic{0}'.format(n), depth=1, title='topic{0}'.format(n), slug='topic{0}'.format(n), archive=0, live=True)
        test_topics = TopicPage.objects.all()
        rendered = self.TEMPLATE.render(Context({'test_topics': test_topics}))

        self.assertIn('topic4', rendered)
        self.assertNotIn('topic5', rendered)

    def test_topics_not_live_should_not_render(self):
        TopicPage.objects.create(path='/topic1', depth=1, title='topic1', slug='topic1', archive=1, live=False)
        test_topics = TopicPage.objects.all()

        rendered = self.TEMPLATE.render(Context({'test_topics': test_topics}))
        self.assertNotIn('topic1', rendered)

    def test_topics_archived_should_render(self):
        TopicPage.objects.create(path='/topic1', depth=1, title='topic1', slug='topic1', archive=1, live=True)
        test_topics = TopicPage.objects.all()

        rendered = self.TEMPLATE.render(Context({'test_topics': test_topics}))
        self.assertIn('topic1', rendered)


# class TopicPageViewSetTests(WagtailPageTests):
#     fixtures = ['topics.json']
#     limit = 40
#
#     def get_api_url(self):
#         return f'/api/topics/?limit={self.limit}&offset=0&fields=title,url'
#
#     def verify_res_items(self, responseItems, expectedItems):
#         for i in range(len(expectedItems)):
#             self.assertEqual(responseItems[i]['title'], expectedItems[i]['title'])
#             self.assertEqual(responseItems[i]['url'], expectedItems[i]['url'])
#
#     def test_query_returns_200(self):
#         res = self.client.get(self.get_api_url())
#         self.assertEqual(res.status_code, 200)
#         resJson = res.json()
#         self.assertEqual(resJson['meta']['total_count'], 31)
#         self.assertEqual(len(resJson['items']), 31)
#
#         self.verify_res_items(resJson['items'], [{
#             'title': 'Africa',
#             'url': '/topics/africa/'
#         }, {
#             'title': 'Artificial Intelligence',
#             'url': '/topics/artificial-intelligence/',
#         }, {
#             'title': 'Big Data',
#             'url': '/topics/big-data/',
#         }, {
#             'title': 'Central Banking',
#             'url': '/topics/central-banking/',
#         }, {
#             'title': 'China',
#             'url': '/topics/china/',
#         }, {
#             'title': 'Cybersecurity',
#             'url': '/topics/cybersecurity/',
#         }, {
#             'title': 'Democracy',
#             'url': '/topics/democracy/',
#         }, {
#             'title': 'Digital Currency',
#             'url': '/topics/digital-currency/',
#         }, {
#             'title': 'Emerging Technology',
#             'url': '/topics/emerging-technology/',
#         }, {
#             'title': 'Financial Systems',
#             'url': '/topics/financial-systems/',
#         }, {
#             'title': 'Future of Work',
#             'url': '/topics/future-of-work/',
#         }, {
#             'title': 'G20/G7',
#             'url': '/topics/g20-g7/',
#         }, {
#             'title': 'Gender',
#             'url': '/topics/gender/',
#         }, {
#             'title': 'IMF',
#             'url': '/topics/imf/',
#         }, {
#             'title': 'India',
#             'url': '/topics/india/',
#         }, {
#             'title': 'Innovation',
#             'url': '/topics/innovation/',
#         }, {
#             'title': 'Innovation Economy',
#             'url': '/topics/innovation-economy/',
#         }, {
#             'title': 'Intellectual Property',
#             'url': '/topics/intellectual-property/',
#         }, {
#             'title': 'Internet Governance',
#             'url': '/topics/internet-governance/',
#         }, {
#             'title': 'Investor State Arbitration',
#             'url': '/topics/investor-state-arbitration/',
#         }, {
#             'title': 'Monetary Policy',
#             'url': '/topics/monetary-policy/',
#         }, {
#             'title': 'NAFTA/CUSMA',
#             'url': '/topics/nafta-cusma/',
#         }, {
#             'title': 'Patents',
#             'url': '/topics/patents/',
#         }, {
#             'title': 'Platform Governance',
#             'url': '/topics/platform-governance/',
#         }, {
#             'title': 'Productivity',
#             'url': '/topics/productivity/',
#         }, {
#             'title': 'Sovereign Debt',
#             'url': '/topics/sovereign-debt/',
#         }, {
#             'title': 'Standards',
#             'url': '/topics/standards/',
#         }, {
#             'title': 'Surveillance & Privacy',
#             'url': '/topics/surveillance-privacy/',
#         }, {
#             'title': 'Systemic Risk',
#             'url': '/topics/systemic-risk/',
#         }, {
#             'title': 'Trade',
#             'url': '/topics/trade/',
#         }, {
#             'title': 'WTO',
#             'url': '/topics/wto/',
#         }])
