import {NextSeo} from 'next-seo';
import {useMediaQuery} from '@material-ui/core';

import Contact from '@components/Content/Contact';
import NavBar from '@components/Navs/NavBar';

import styles from 'styles/index.module.scss';

export default function ContactPage() {
  const overMedium = useMediaQuery('(min-width: 576px');

  return (
    <main className={`${styles.main} flex flex-col overflow-x-hidden relative`}>
      <NextSeo title="Contact Me | Daniel Slovinsky | Front-end Web Developer" />
      <NavBar displayMenu={!overMedium} />
      <Contact />
    </main>
  );
}
