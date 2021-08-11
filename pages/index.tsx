import {NextSeo} from 'next-seo';

import GoL from '@components/Animations/GoL';
import About from '@components/Content/About';
import Title from '@components/Content/Title';
import Skills from '@components/Content/Skills';
import Contact from '@components/Content/Contact';
import Portfolio from '@components/Content/Portfolio';
import NavBar from '@components/Navs/NavBar';
import ScrollAnchor from '@components/Navs/ScrollAnchor';
import BackToTop from '@components/Navs/BackToTop';
import useWindowDimensions from '@utils/useWindowDimensions';

import styles from 'styles/index.module.scss';

export default function Home() {
  const {width, height} = useWindowDimensions();

  // calculate dimensions of canvas to determine if it needs to rerender on window size change
  const calcW = Math.ceil(width / 100) * 10;
  const calcH = Math.ceil(height / 100) * 10;

  return (
    <>
      <NextSeo title="Daniel Slovinsky | Front-end Web Developer" />
      <main className={styles.main}>
        <NavBar />
        <ScrollAnchor />
        {process.env.NODE_ENV === 'production' && width ? (
          <GoL
            key={`${calcW}${calcH}`}
            width={calcW}
            height={calcH}
            resolution={10}
            streak={0.5}
            className="h-screen"
          />
        ) : (
          <div className="h-screen" />
        )}
        <Title id="Home" className="h-screen" />
        <About id="About" />
        <Portfolio id="Portfolio" />
        <Skills id="Skills" />
        <Contact id="Contact" />
        <BackToTop />
      </main>
    </>
  );
}
