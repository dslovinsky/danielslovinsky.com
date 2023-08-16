import { HttpLink } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { NextSSRApolloClient, NextSSRInMemoryCache } from '@apollo/experimental-nextjs-app-support/ssr';

import { DATO_GRAPHQL_URI } from 'utils/constants';

import type { QueryOptions } from '@apollo/client';

const link = new HttpLink({
  uri: DATO_GRAPHQL_URI,
  credentials: 'same-origin',
  headers: {
    authorization: `Bearer ${process.env.DATO_API_TOKEN}`,
    'X-Environment': process.env.DATO_ENV || 'main',
    'X-Exclude-Invalid': 'true',
    ...(process.env.DATO_PREVIEW === 'true' ? { 'X-Include-Drafts': 'true' } : {}), // query will fail with any value other than 'true'
  },
});

const { getClient } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link,
    }),
);

const graphqlQuery = async <T>(query: QueryOptions['query'], variables?: QueryOptions['variables']) => {
  const client = getClient();
  const { data, loading, error } = await client.query<T>({
    query,
    variables,
  });

  if (error) {
    console.error(error);
  }

  return { ...data, loading, error };
};

export default graphqlQuery;
