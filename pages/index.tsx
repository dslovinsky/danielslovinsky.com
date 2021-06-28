import {NextSeo} from 'next-seo';
import Resume from 'components/Content/Resume';
import Profile from 'components/Content/Profile';

import styles from 'styles/index.module.scss';

export default function Home() {
  return (
    <>
      <NextSeo title="Website coming soon... | Daniel Slovinsky" />
      <main className={styles.main}>
        <Profile />
        <Resume />
      </main>
    </>
  );
}
