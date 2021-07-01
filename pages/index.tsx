import {NextSeo} from 'next-seo';

import Resume from '@components/Content/Resume';
import Profile from '@components/Content/Profile';
import GoL from '@components/Animations/GoL';
import useWindowDimensions from '@utils/useWindowDimensions';
// import GoLSquares from '@components/Animations/GoLSquares';

import styles from 'styles/index.module.scss';

export default function Home() {
  const {width, height} = useWindowDimensions();

  const calcW = Math.ceil(width / 100) * 10;
  const calcH = Math.ceil(height / 100) * 10;

  return (
    <>
      <NextSeo title="Website coming soon... | Daniel Slovinsky" />
      <main className={styles.main}>
        {width && <GoL key={`${calcW}${calcH}`} cols={calcW} rows={calcH} />}
        <Profile />
        <Resume />
      </main>
    </>
  );
}
