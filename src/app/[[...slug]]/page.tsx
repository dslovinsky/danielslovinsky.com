import { notFound } from 'next/navigation';

// import Swapi from 'components/Swapi';
// import GameOfLife from 'components/animations/GameOfLife';

import { getAllPageSlugs, getPageData } from 'utils/fetchPageData';

import type { Metadata } from 'next';

export const generateStaticParams = async () => {
  const allPageSlugs = await getAllPageSlugs();

  const paths = allPageSlugs.map(slug => ({
    // since this file uses catch-all routes, returning an empty array generates the homepage
    // see @https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes
    slug: slug === '/' ? undefined : slug.split('/'),
  }));

  return paths;
};

interface PageProps {
  params: {
    slug: string[];
  };
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const pageSlug = params?.slug?.join('/') || '/';

  const {
    fields: {
      seo: {
        fields: { metaTitle, metaDescription, openGraphImage, indexable },
      },
    },
  } = await getPageData(pageSlug);

  return {
    title: {
      absolute: metaTitle,
    },
    description: metaDescription,
    robots: {
      index: indexable,
      follow: indexable,
    },
    openGraph: {
      title: openGraphImage?.fields.title,
      description: openGraphImage?.fields.description,
      images: [
        {
          url: openGraphImage?.fields.file.url || '',
          width: openGraphImage?.fields.file.details.image?.width,
          height: openGraphImage?.fields.file.details.image?.height,
        },
      ],
    },
  };
};

const Page = async ({ params }: PageProps) => {
  const pageSlug = params?.slug?.join('/') || '/';

  const pageData = await getPageData(pageSlug);

  if (!pageData) {
    notFound();
  }

  return (
    <div>
      {pageData.fields.internalName}
      {/* <GameOfLife width={50} height={50} /> */}
      {/* <Swapi /> */}
    </div>
  );
};

export default Page;
