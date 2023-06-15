import contentfulClient from 'contentful/client';

import type { ITemplatePageFields } from 'contentful/types';

export const getAllPageSlugs = async () => {
  const { items: allPageSlugs } = await contentfulClient.getEntries<ITemplatePageFields>({
    content_type: 'templatePage',
    select: ['fields.slug'],
  });

  return allPageSlugs.map(({ fields: { slug } }) => slug);
};

export const getPageData = async (slug: string) => {
  const {
    items: [pageData],
  } = await contentfulClient.getEntries<ITemplatePageFields>({
    content_type: 'templatePage',
    limit: 1,
    // Contentful only allows up to a depth of 10 nested entries
    // see @https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/links/retrieval-of-linked-items
    include: 10,
    'fields.slug': slug,
  });

  return pageData;
};
