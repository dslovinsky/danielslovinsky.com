import Head from 'next/head';

import defaultSeoImage from 'assets/images/me.png';

import { DOMAIN } from 'utils/constants';

import type { IMetaSeoFields } from 'contentful/types';
import type { FC } from 'react';

const metas = {
  siteName: 'Daniel Slovinsky',
  defaultMetaDescription: 'US-based Front End Developer with a passion for cutting-edge tech and machine learning.',
  twitterHandle: '@danslovinsky',
};

interface SeoProps extends IMetaSeoFields {
  slug: string;
}

const SEO: FC<SeoProps> = ({ metaTitle, metaDescription, openGraphImage, indexable, slug }) => {
  const isHomePage = slug === '/';
  const seoTitle = isHomePage ? metaTitle : `${metaTitle} | ${metas.siteName}`;
  const seoDescription = metaDescription || metas.defaultMetaDescription;
  const seoImage = openGraphImage?.fields.file.url || defaultSeoImage.src;
  const seoUrl = isHomePage ? `https://${DOMAIN}` : `https://${DOMAIN}/${slug}`;

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="application-name" content={seoTitle} />
      <meta name="robots" content={`${indexable ? '' : 'no'}index, ${indexable ? '' : 'no'}follow`} />
      <link rel="canonical" href={seoUrl} />

      <meta property="og:site_name" content={metas.siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={metas.twitterHandle} />
      <meta name="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Head>
  );
};

export default SEO;
