import { extractCss } from 'goober';
import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  const css = extractCss();

  return (
    <Html lang="en">
      <Head>
        <link key="favicon" rel="icon" type="image/ico" href="/icons/favicon.ico" />
        <style id="_goober" dangerouslySetInnerHTML={{ __html: ' ' + css }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
