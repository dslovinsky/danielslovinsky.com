import {NextSeo} from 'next-seo';

import Resume from '@components/Content/Resume';
import Profile from '@components/Content/Profile';
import CanvasGoL from '@components/Animations/CanvasGoL';
import useWindowDimensions from '@utils/useWindowDimensions';

import styles from 'styles/index.module.scss';

export default function Home() {
  const {width, height} = useWindowDimensions();

  // calculate dimensions of canvas to determine if it needs to rerender on window size change
  const calcW = Math.ceil(width / 100) * 10;
  const calcH = Math.ceil(height / 100) * 10;

  return (
    <>
      <NextSeo title="Website coming soon... | Daniel Slovinsky" />
      <main className={styles.main}>
        {width && (
          <CanvasGoL
            key={`${calcW}${calcH}`}
            width={calcW}
            height={calcH}
            resolution={10}
          />
        )}
        <Profile />
        <Resume />
      </main>
    </>
  );
}
