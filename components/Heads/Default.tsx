import Head from 'next/head';

//no real need for this file yet, but will need it later
export default function DefaultHead() {
  return (
    <Head>
      <noscript>You need to enable Javascript to use this app.</noscript>
    </Head>
  );
}
