import 'styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter, Titillium_Web } from 'next/font/google';

import Header from 'components/Header';

import { name } from 'utils/constants';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  // referencing a fallback variable breaks it - must be hard-coded
  fallback: [
    '-apple-system',
    'system-ui',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ],
});

const titilliumWeb = Titillium_Web({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titillium',
  fallback: [
    '-apple-system',
    'system-ui',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    template: `%s | ${name}`,
    default: name,
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className={`${inter.variable} ${titilliumWeb.variable}`}>
    <head>
      <SpeedInsights />
      <Analytics />
    </head>
    <body>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
