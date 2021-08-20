const languages = ['en', 'fr'];
export const lightBackgroundSlugs = ['messageslidepage', 'tabbedslidepage', 'outputsandactivitiesslidepage'];

export const locationUrl = window.location.href;
const splitUrl = locationUrl.split('/');

export const language = splitUrl.filter((slug) => languages.indexOf(slug) > -1)[0];

export const siteUrl = splitUrl.slice(0, splitUrl.indexOf(language)).join('/');
export const currentSlug = splitUrl.slice(splitUrl.indexOf(language) + 1, splitUrl.length)[0];
