import {NextSeo} from 'next-seo';
// import {useWindowSize} from '@react-hook/window-size'

import Resume from 'components/Content/Resume';
import Profile from 'components/Content/Profile';
import GoL from '@components/Animations/GoL';

import styles from 'styles/index.module.scss';

export default function Home() {
  // const [width, height] = useWindowSize();
  const width = 1800;
  const height = 900;

  return (
    <>
      <NextSeo title="Website coming soon... | Daniel Slovinsky" />
      <main className={styles.main}>
        <GoL rows={Math.floor(height/10)} cols={Math.floor(width/10)} />
        <Profile />
        <Resume />
      </main>
    </>
  );
}
