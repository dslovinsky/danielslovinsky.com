import dom from 'fontawesome/fontawesome';
import Head from 'next/head';

export default function DefaultHead() {
  return (
    <Head>
      <style key="fontawesome" dangerouslySetInnerHTML={{__html: dom.css()}} />
    </Head>
  );
}
