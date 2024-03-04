import { gql } from '@apollo/client';
import type * as Apollo from '@apollo/client';

export const ButtonFragmentDoc = gql`
  fragment button on ButtonRecord {
    __typename
    id
    url
    label
    iconLabel
    endIcon
  }
`;
export const HeaderFragmentDoc = gql`
  fragment header on ComponentHeaderRecord {
    __typename
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
    __typename
    id
    alt
    height
    width
    url
  }
`;
export const SeoFragmentDoc = gql`
  fragment seo on SeoRecord {
    __typename
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
export const SectionFragmentDoc = gql`
  fragment section on SectionRecord {
    __typename
    id
    idLink
    topPadding
    bottomPadding
  }
`;
export const ButtonGroupFragmentDoc = gql`
  fragment buttonGroup on ButtonGroupRecord {
    __typename
    id
    buttons {
      ...button
    }
  }
  ${ButtonFragmentDoc}
`;
export const ComponentHeroFragmentDoc = gql`
  fragment componentHero on ComponentHeroRecord {
    __typename
    id
    sectionOptions {
      ...section
    }
    eyebrow
    heading
    body {
      value
      blocks {
        ...buttonGroup
      }
    }
    mediaReference {
      ...file
    }
  }
  ${SectionFragmentDoc}
  ${ButtonGroupFragmentDoc}
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
export const ProjectFragmentDoc = gql`
  fragment project on ProjectRecord {
    __typename
    id
    name
    featuredImage {
      ...file
    }
    skills {
      ...skill
    }
    summary {
      value
    }
    link
  }
  ${FileFragmentDoc}
  ${SkillFragmentDoc}
`;
export const ComponentProjectSliderFragmentDoc = gql`
  fragment componentProjectSlider on ComponentProjectSliderRecord {
    __typename
    id
    sectionOptions {
      ...section
    }
    heading
    projects {
      ...project
    }
  }
  ${SectionFragmentDoc}
  ${ProjectFragmentDoc}
`;
export const ComponentContactFragmentDoc = gql`
  fragment componentContact on ComponentContactRecord {
    __typename
    id
    sectionOptions {
      ...section
    }
    heading
    body {
      value
      blocks {
        ...buttonGroup
      }
    }
  }
  ${SectionFragmentDoc}
  ${ButtonGroupFragmentDoc}
`;
export const TemplatePageFragmentDoc = gql`
  fragment templatePage on TemplatePageRecord {
    __typename
    id
    slug
    seo {
      ...seo
    }
    components {
      ...componentHero
      ...componentSkillBar
      ...componentProjectSlider
      ...componentContact
    }
  }
  ${SeoFragmentDoc}
  ${ComponentHeroFragmentDoc}
  ${ComponentSkillBarFragmentDoc}
  ${ComponentProjectSliderFragmentDoc}
  ${ComponentContactFragmentDoc}
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
