import { notFound } from 'next/navigation';

import graphqlQuery from 'graphql/apolloClient';
import { AllTemplatePageSlugsDocument, TemplatePageDocument } from 'graphql/sdk';

// import type { Metadata } from 'next';

export const generateStaticParams = async () => {
  const { allTemplatePages } = await graphqlQuery<AllTemplatePageSlugsQuery>(AllTemplatePageSlugsDocument);

  const paths = allTemplatePages.map(({ slug }) => ({
    // since this file uses catch-all routes, returning an empty array generates the homepage
    // see @https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes
    slug: slug === 'home' ? undefined : slug?.split('/'),
  }));

  return paths;
};

interface PageProps {
  params: {
    slug: string[];
  };
}

// export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
//   const pageSlug = params?.slug?.join('/') || '/';

//   const {
//     fields: {
//       seo: {
//         fields: { metaTitle, metaDescription, openGraphImage, indexable },
//       },
//     },
//   } = await getPageData(pageSlug);

//   return {
//     title: {
//       absolute: metaTitle,
//     },
//     description: metaDescription,
//     robots: {
//       index: indexable,
//       follow: indexable,
//     },
//     openGraph: {
//       title: openGraphImage?.fields.title,
//       description: openGraphImage?.fields.description,
//       images: [
//         {
//           url: openGraphImage?.fields.file.url || '',
//           width: openGraphImage?.fields.file.details.image?.width,
//           height: openGraphImage?.fields.file.details.image?.height,
//         },
//       ],
//     },
//   };
// };

const Page = async ({ params }: PageProps) => {
  const slug = params?.slug?.join('/') || 'home';

  const { templatePage } = await graphqlQuery<TemplatePageQuery>(TemplatePageDocument, { slug });

  if (!templatePage) {
    notFound();
  }

  return <div>{templatePage?.seo[0].canonicalUrl}</div>;
};

export default Page;
