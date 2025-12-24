/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import type { Config } from 'tailwindcss';

import colors from './src/theme/colors';
import { fontFamily, fontSize, letterSpacing, lineHeight } from './src/theme/typography';

const config: Config = {
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

export default config;
