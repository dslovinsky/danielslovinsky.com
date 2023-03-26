import type { AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
  </>
);

export default MyApp;
