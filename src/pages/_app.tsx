import setupGoober from 'quarks/gooberConfig';

import type { AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => {
  setupGoober();

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
