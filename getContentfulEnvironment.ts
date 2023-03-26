import { strict as assert } from 'assert';

import { loadEnvConfig } from '@next/env';
import { createClient } from 'contentful-management';

import type { EnvironmentGetter } from 'contentful-typescript-codegen';

loadEnvConfig(process.cwd());

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const mgmtToken = process.env.CONTENTFUL_MGMT_TOKEN;
const env = process.env.CONTENTFUL_ENV;

assert(mgmtToken);
assert(spaceId);
assert(env);

const getContentfulEnvironment: EnvironmentGetter = async () => {
  const contentfulClient = createClient({
    accessToken: mgmtToken,
  });

  const space = await contentfulClient.getSpace(spaceId);

  return await space.getEnvironment(env);
};

module.exports = getContentfulEnvironment;
