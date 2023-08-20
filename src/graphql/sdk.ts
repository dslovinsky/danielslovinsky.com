import { gql } from '@apollo/client';

import type * as Apollo from '@apollo/client';

export const FileFragmentDoc = gql`
  fragment file on FileField {
    id
    alt
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
export const SkillFragmentDoc = gql`
  fragment skill on SkillRecord {
    __typename
    id
    name
    logo {
      ...file
    }
  }
  ${FileFragmentDoc}
`;
export const ComponentSkillBarFragmentDoc = gql`
  fragment componentSkillBar on ComponentSkillBarRecord {
    __typename
    id
    skills {
      ...skill
    }
  }
  ${SkillFragmentDoc}
`;
export const TemplatePageFragmentDoc = gql`
  fragment templatePage on TemplatePageRecord {
    id
    slug
    seo {
      ...seo
    }
    components {
      ...componentSkillBar
    }
  }
  ${SeoFragmentDoc}
  ${ComponentSkillBarFragmentDoc}
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
