import { name } from 'utils/constants';

import colors from 'theme/colors';

import type { Metadata } from 'next';

const getMetadata = ({ metaTags, indexable, canonicalUrl }: SeoFragment, slug: string): Metadata => {
  const title = slug === 'home' ? { absolute: metaTags?.title || 'Daniel Slovinsky' } : metaTags?.title;
  const description =
    metaTags?.description ||
    "I learn fast, move fast, and have years of experience developing applications using cutting-edge technology. See what I've done and contact me for inquiries.";
  const openGraphImage = metaTags?.image;
  const ogImage = {
    url: openGraphImage?.url || 'https://www.datocms-assets.com/105128/1692011061-me.png',
    width: openGraphImage?.width || 256,
    height: openGraphImage?.height || 256,
    alt: openGraphImage?.alt || name,
  };
  const images = openGraphImage ? [ogImage] : undefined;

  return {
    title,
    description,
    robots: {
      index: indexable || false,
      follow: indexable || false,
    },
    openGraph: {
      title: metaTags?.title || name,
      description,
      type: 'website',
      locale: 'en_US',
      url: 'https://danielslovinsky.com',
      siteName: name,
      images,
    },
    alternates: {
      canonical: canonicalUrl || undefined,
    },
    authors: [{ name }],
    colorScheme: 'dark',
    themeColor: colors['black-pearl'],
  };
};

export default getMetadata;
