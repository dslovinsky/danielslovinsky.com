/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import type { CodegenConfig } from '@graphql-codegen/cli';

import { DATO_GRAPHQL_URI } from './src/utils/constants';

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
    'src/graphql/documents.ts': {
      plugins: [
        {
          'typescript-react-apollo': {
            withHooks: false,
            useTypeImports: true,
            withResultType: false,
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
