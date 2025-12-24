import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import noInlineStyles from 'eslint-plugin-no-inline-styles';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import preferArrow from 'eslint-plugin-prefer-arrow';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['**/next-env.d.ts', 'src/types/graphql.ts', '.next/**', 'node_modules/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      'no-inline-styles': noInlineStyles,
      'prefer-arrow': preferArrow,
      'no-relative-import-paths': noRelativeImportPaths,
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'mdx/code-blocks': false,
      'mdx/language-mapper': {},
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'array-callback-return': [
        'error',
        {
          allowImplicit: true,
          checkForEach: true,
        },
      ],
      // standard rules
      'arrow-body-style': ['error', 'as-needed'],
      curly: 'error',
      'eol-last': ['error', 'always'],
      eqeqeq: ['error', 'smart'],
      'func-style': ['error', 'expression'],
      'newline-before-return': 'warn',
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-lonely-if': 'error',
      'no-nested-ternary': 'error',
      'no-undef': 'off',
      'no-use-before-define': 'off',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',

      'prefer-const': [
        'error',
        {
          destructuring: 'all',
        },
      ],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
      'spaced-comment': ['error', 'always'],

      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-shadow': [
        'error',
        {
          builtinGlobals: false,
        },
      ],
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',

      // Import rules
      'import/first': 'error',
      'import/default': 'error',
      'import/prefer-default-export': 'warn',
      'import/no-named-as-default-member': 'warn',
      'import/no-named-default': 'error',
      'import/newline-after-import': 'warn',

      'import/no-duplicates': [
        'error',
        {
          'prefer-inline': true,
        },
      ],

      // JSX rules
      'jsx-quotes': ['error', 'prefer-double'],

      // Custom plugin rules
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        {
          allowSameFolder: false,
          rootDir: 'src',
        },
      ],
      'no-inline-styles/no-inline-styles': 2,
      'prefer-arrow/prefer-arrow-functions': [
        'warn',
        {
          singleReturnOnly: true,
        },
      ],

      // React rules
      'react/prop-types': 'off',
      'react/display-name': 0,
      'react/react-in-jsx-scope': 0,
      'react-hooks/exhaustive-deps': 'off',
      'react/jsx-filename-extension': [
        2,
        {
          extensions: ['.tsx', '.jsx', '.mdx'],
        },
      ],
      'react/require-default-props': [
        0,
        {
          forbidDefaultForRequired: true,
        },
      ],
      'react/no-unused-prop-types': 1,
      'react/no-array-index-key': 'warn',
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'ignore',
          propElementValues: 'always',
        },
      ],
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
];
