/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  proseWrap: 'always',
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
  importOrder: [
    '^(react/(.*)$)|^(react$)|^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '^assets/(.*)$',
    '^graphql/(.*)$',
    '^molecules/(.*)$',
    '^components/(.*)$',
    '^templates/(.*)$',
    '^utils/(.*)$',
    '^theme/(.*)$',
    '^types/(.*)$',
    '^[./]',
  ],
  plugins: ['prettier-plugin-tailwindcss', '@trivago/prettier-plugin-sort-imports'],
};

module.exports = config;
