import js from '@eslint/js';
import nextConfig from 'eslint-config-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import noInlineStyles from 'eslint-plugin-no-inline-styles';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import preferArrow from 'eslint-plugin-prefer-arrow';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// Shared rules across all file types
const globalRules = {
  'array-callback-return': [
    'error',
    {
      allowImplicit: true,
      checkForEach: true,
    },
  ],
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
};

// Shared plugin configuration
const sharedPlugins = {
  import: importPlugin,
  'no-inline-styles': noInlineStyles,
  'prefer-arrow': preferArrow,
  'no-relative-import-paths': noRelativeImportPaths,
};

// Shared language options
const sharedLanguageOptions = {
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.es2021,
  },
  ecmaVersion: 2022,
  sourceType: 'module',
};

// Shared settings
const sharedSettings = {
  react: {
    version: 'detect',
  },
  'mdx/code-blocks': false,
  'mdx/language-mapper': {},
};

// Import rules
const importRules = {
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
};

// Custom plugin rules
const customPluginRules = {
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
};

// React rules
const reactRules = {
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
  'jsx-quotes': ['error', 'prefer-double'],
};

export default [
  // Global ignores
  {
    ignores: ['**/next-env.d.ts', 'src/types/graphql.ts', '.next/**', 'node_modules/**', 'eslint.config.mjs'],
  },

  // Base configs
  js.configs.recommended,

  // Next.js config (includes react, react-hooks, jsx-a11y rules)
  ...nextConfig,

  // JavaScript/JSX files configuration
  {
    name: 'JS/JSX Config',
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: sharedPlugins,
    languageOptions: {
      ...sharedLanguageOptions,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: sharedSettings,
    rules: {
      ...globalRules,
      ...importRules,
      ...customPluginRules,
      ...reactRules,
    },
  },

  // TypeScript files configuration with type-aware linting
  {
    name: 'TS/TSX Config',
    files: ['**/*.{ts,tsx,mts}'],
    plugins: {
      ...sharedPlugins,
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      ...sharedLanguageOptions,
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: sharedSettings,
    rules: {
      ...globalRules,
      ...importRules,
      ...customPluginRules,
      ...reactRules,
      // Disable base rules that are replaced by TypeScript-specific ones
      'no-unused-vars': 'off',
      'no-shadow': 'off',
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
    },
  },

  // Prettier config must be last to override any formatting rules
  eslintConfigPrettier,
];
