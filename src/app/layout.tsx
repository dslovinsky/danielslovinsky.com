import 'styles/global.css';
import { Inter, Titillium_Web } from 'next/font/google';

import { name } from 'utils/constants';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const titilliumWeb = Titillium_Web({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titillium',
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${name}`,
    default: name,
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className={`${inter.variable} ${titilliumWeb.variable}`}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
