import {NextSeo} from 'next-seo';

import Contact from '@components/Content/Contact';
import NavBar from '@components/Navs/NavBar';

import styles from 'styles/index.module.scss';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <NextSeo title="Contact Me | Daniel Slovinsky | Front-end Web Developer" />
      <NavBar />
      <Contact />
    </main>
  );
}
