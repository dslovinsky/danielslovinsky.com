import dom from 'fontawesome/fontawesome';
import Head from 'next/head';

export default function DefaultHead() {
  return (
    <Head>
      <link
        key="favicon"
        rel="icon"
        type="image/ico"
        href="/icons/favicon.ico"
      />
      <link
        key="preconnect-google-fonts"
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        key="preconnect-fonts-gstatic"
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        key="google-fonts"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <link key="custom-fonts" href="/fonts/custom.css" rel="stylesheet" />
      <style key="fontawesome" dangerouslySetInnerHTML={{__html: dom.css()}} />
      <noscript>You need to enable Javascript to use this app.</noscript>
    </Head>
  );
}
