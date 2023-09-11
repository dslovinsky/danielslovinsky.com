/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import { DATO_GRAPHQL_URI } from './src/utils/constants';

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [DATO_GRAPHQL_URI]: {
        headers: {
          authorization: `Bearer ${process.env.DATO_API_TOKEN}`,
          'X-Environment': process.env.DATO_ENV || 'main',
        },
      },
    },
  ],
  documents: 'src/**/*.graphql',
  generates: {
    'src/types/graphql.ts': {
      config: {
        declarationKind: 'interface',
        inlineFragmentTypes: 'combine',
        scalars: {
          BooleanType: 'boolean',
          CustomData: 'Record<string, unknown>',
          Date: 'string',
          DateTime: 'string',
          FloatType: 'number',
          IntType: 'number',
          ItemId: 'string',
          JsonField: 'unknown',
          MetaTagAttributes: 'Record<string, string>',
          UploadId: 'string',
        },
      },
      plugins: [
        {
          typescript: {
            disableDescriptions: true,
          },
        },
        {
          'typescript-operations': {
            globalNamespace: true,
          },
        },
      ],
    },
    'src/graphql/sdk.ts': {
      plugins: [
        {
          'typescript-react-apollo': {
            withHooks: false,
            useTypeImports: true,
          },
        },
      ],
    },
  },
  hooks: {
    afterAllFileWrite: ['eslint --fix', 'prettier --write'],
  },
};

export default config;
