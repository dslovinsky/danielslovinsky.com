/* eslint-disable @typescript-eslint/no-var-requires */
const { default: colors } = require('./src/theme/colors');
const { fontFamily, fontSize, lineHeight, letterSpacing } = require('./src/theme/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors,
    fontFamily,
    fontSize,
    lineHeight,
    letterSpacing,
    extend: {
      spacing: {
        18: '4.5rem',
      },
      maxWidth: {
        column: '1362px',
      },
      screens: {
        sm: '480px',
        lg: '992px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
