import format from 'date-fns/format';

const parseTitle = str => str.replace(/\s+/g, '-').toLowerCase();

export const generatePermalink = title => {
  return `${format(new Date(), 'YYMMDD')}-${parseTitle(title)}`;
};

const generateFeaturedImageName = title => {
  return `/content/images/featured-${title}.jpg`;
};

const generatePaths = (title, template) =>
  template === 'page'
    ? [`${title}.html`]
    : [`/${template}/${title}.html`, `/${template}`];

export default { generatePermalink, generateFeaturedImageName, generatePaths };
