import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Daniel Slovinsky',
    default: 'Daniel Slovinsky',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
