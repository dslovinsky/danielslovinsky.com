import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const host = process.env.CONTENTFUL_HOST;
const accessToken =
  host === 'preview.contentful.com' ? process.env.CONTENTFUL_PREVIEW_TOKEN : process.env.CONTENTFUL_DELIVERY_TOKEN;
const environment = process.env.CONTENTFUL_ENV || 'master';

if (!space || !accessToken) {
  throw new Error(
    'There was a problem loading the Contentful config 🔴 Please ensure this space exists on Contentful or double check your env variables',
  );
}

const contentfulClient = createClient({
  space,
  accessToken,
  host,
  environment,
});

export default contentfulClient;
