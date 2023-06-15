import { notFound } from 'next/navigation';

import { getAllPageSlugs, getPageData } from 'utils/fetchPageData';

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

const Page = async ({ params }: PageProps) => {
  const pageSlug = params?.slug?.join('/') || '/';

  const pageData = await getPageData(pageSlug);

  if (!pageData) {
    notFound();
  }

  return <div>{pageData.fields.internalName}</div>;
};

export default Page;
