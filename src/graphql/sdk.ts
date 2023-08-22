import { gql } from '@apollo/client';

import type * as Apollo from '@apollo/client';

export const ButtonFragmentDoc = gql`
  fragment button on ButtonRecord {
    id
    url
    label
    iconLabel
    endIcon
  }
`;
export const HeaderFragmentDoc = gql`
  fragment header on ComponentHeaderRecord {
    id
    links {
      ...button
    }
    mobileBottomLinks {
      ...button
    }
  }
  ${ButtonFragmentDoc}
`;
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
export const SectionFragmentDoc = gql`
  fragment section on SectionRecord {
    id
    idLink
    topPadding
    bottomPadding
  }
`;
export const ComponentSkillBarFragmentDoc = gql`
  fragment componentSkillBar on ComponentSkillBarRecord {
    __typename
    id
    heading
    skills {
      ...skill
    }
    sectionOptions {
      ...section
    }
  }
  ${SkillFragmentDoc}
  ${SectionFragmentDoc}
`;
export const ComponentHeroFragmentDoc = gql`
  fragment componentHero on ComponentHeroRecord {
    id
    sectionOptions {
      ...section
    }
    eyebrow
    heading
    body {
      value
    }
  }
  ${SectionFragmentDoc}
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
      ...componentHero
    }
  }
  ${SeoFragmentDoc}
  ${ComponentSkillBarFragmentDoc}
  ${ComponentHeroFragmentDoc}
`;
export const GlobalHeaderDocument = gql`
  query globalHeader {
    componentHeader {
      ...header
    }
  }
  ${HeaderFragmentDoc}
`;
export type GlobalHeaderQueryResult = Apollo.QueryResult<GlobalHeaderQuery, GlobalHeaderQueryVariables>;
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
