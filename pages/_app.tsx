import Head from '@components/Heads/Default';
import {AppProps} from 'next/app';
import {DefaultSeo} from 'next-seo';

import '../styles/global.scss';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head />
      <DefaultSeo title="Daniel Slovinsky" />
      <Component {...pageProps} />
    </>
  );
}
