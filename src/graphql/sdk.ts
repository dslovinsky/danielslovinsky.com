import { gql } from '@apollo/client';

import type * as Apollo from '@apollo/client';

export const FileFragmentDoc = gql`
  fragment file on FileField {
    id
    alt
    blurhash
    height
    width
    url
  }
`;
export const SeoFragmentDoc = gql`
  fragment seo on SeoRecord {
    id
    indexable
    metaTags {
      title
      description
      image {
        ...file
      }
    }
    canonicalUrl
  }
  ${FileFragmentDoc}
`;
export const TemplatePageFragmentDoc = gql`
  fragment templatePage on TemplatePageRecord {
    id
    slug
    seo {
      ...seo
    }
  }
  ${SeoFragmentDoc}
`;
export const AllTemplatePageSlugsDocument = gql`
  query AllTemplatePageSlugs {
    allTemplatePages {
      slug
    }
  }
`;
export type AllTemplatePageSlugsQueryResult = Apollo.QueryResult<
  AllTemplatePageSlugsQuery,
  AllTemplatePageSlugsQueryVariables
>;
export const TemplatePageDocument = gql`
  query TemplatePage($slug: String) {
    templatePage(filter: { slug: { eq: $slug } }) {
      ...templatePage
    }
  }
  ${TemplatePageFragmentDoc}
`;
export type TemplatePageQueryResult = Apollo.QueryResult<TemplatePageQuery, TemplatePageQueryVariables>;
