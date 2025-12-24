import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import graphqlQuery from 'graphql/apolloClient';
import { AllTemplatePageSlugsDocument, TemplatePageDocument } from 'graphql/documents';

import TemplatePage from 'templates/Page';

import getMetadata from 'utils/getMetadata';

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
  params: Promise<{
    slug: string[];
  }>;
}

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const params = await props.params;
  const slug = params?.slug?.join('/') || 'home';

  const { templatePage } = await graphqlQuery<TemplatePageQuery>(TemplatePageDocument, { slug });

  if (!templatePage) {
    notFound();
  }

  const [seo] = templatePage?.seo || [];

  return getMetadata(seo, slug);
};

const Page = async (props: PageProps) => {
  const params = await props.params;
  const slug = params?.slug?.join('/') || 'home';

  const { templatePage } = await graphqlQuery<TemplatePageQuery>(TemplatePageDocument, { slug });

  if (!templatePage) {
    notFound();
  }

  return <TemplatePage {...templatePage} />;
};

export default Page;
