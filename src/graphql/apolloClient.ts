import { type DocumentNode, type OperationVariables, HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache, registerApolloClient } from '@apollo/client-integration-nextjs';

import { DATO_GRAPHQL_URI } from 'utils/constants';

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
    new ApolloClient({
      cache: new InMemoryCache(),
      link,
    }),
);

const graphqlQuery = async <T = Record<string, unknown>>(
  query: DocumentNode,
  variables?: OperationVariables,
): Promise<T> => {
  const client = getClient();
  const { data, error } = await client.query<T>({
    query,
    variables,
  });

  if (error) {
    console.error(error);
    throw error;
  }

  if (!data) {
    throw new Error('No data returned from GraphQL query');
  }

  return data;
};

export default graphqlQuery;
