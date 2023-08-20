/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      inter: ['var(--font-inter)'],
      titillium: ['var(--font-titillium)'],
    },
    extend: {
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
};
