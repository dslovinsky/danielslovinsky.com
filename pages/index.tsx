import {NextSeo} from 'next-seo';

import Resume from '@components/Content/Resume';
import Profile from '@components/Content/Profile';
// import GoL from '@components/Animations/GoL';
// import GoLSquares from '@components/Animations/GoLSquares';
import CanvasGoL from '@components/Animations/CanvasGoL';
import useWindowDimensions from '@utils/useWindowDimensions';

import styles from 'styles/index.module.scss';

export default function Home() {
  const {width, height} = useWindowDimensions();

  const calcW = Math.ceil(width / 100) * 10;
  const calcH = Math.ceil(height / 100) * 10;

  return (
    <>
      <NextSeo title="Website coming soon... | Daniel Slovinsky" />
      <main className={styles.main}>
        {width && <CanvasGoL key={`${calcW}${calcH}`} cols={calcW} rows={calcH} resolution={10} />}
        <Profile />
        <Resume />
      </main>
    </>
  );
}
