import contentfulClient from 'contentful/client';

import Layout from 'components/layouts/Layout';

import type { Entry } from 'contentful';
import type { ITemplatePage, ITemplatePageFields } from 'contentful/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const { items: allPageSlugs } = await contentfulClient.getEntries<ITemplatePageFields>({
    content_type: 'templatePage',
    // Contentful only allows up to 1000 entries to be queried at once
    // see @https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
    limit: 1000,
    select: ['fields.slug'],
  });

  const paths = allPageSlugs.map(page => {
    const slug = page.fields.slug;

    return {
      params: {
        // since this file uses catch-all routes, returning an empty array generates the homepage
        // see @https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes
        slug: slug === '/' ? [] : slug.split('/'),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Entry<ITemplatePage>> = async ({ params }) => {
  const pageSlug = (params?.slug as string[])?.join('/') || '/';

  const { items } = await contentfulClient.getEntries<ITemplatePage>({
    content_type: 'templatePage',
    limit: 1,
    // Contentful only allows up to a depth of 10 nested entries
    // see @https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/links/retrieval-of-linked-items
    include: 10,
    'fields.slug': pageSlug,
  });

  return {
    props: {
      ...items[0],
    },
    revalidate: 600,
  };
};

const TemplatePage: NextPage<ITemplatePage> = ({ fields: { internalName, seo, slug } }) => (
  <Layout seo={seo} slug={slug}>
    <h1>{internalName || 'home'}</h1>
  </Layout>
);

export default TemplatePage;
