import {useMediaQuery} from '@material-ui/core';
import {NextSeo} from 'next-seo';

import GoL from '@components/Animations/GoL';
import About from '@components/Content/About';
import Contact from '@components/Content/Contact';
import Portfolio from '@components/Content/Portfolio';
import Skills from '@components/Content/Skills';
import Title from '@components/Content/Title';
import BackToTop from '@components/Navs/BackToTop';
import NavBar from '@components/Navs/NavBar';
import ScrollAnchor from '@components/Navs/ScrollAnchor';
import useWindowDimensions from '@hooks/useWindowDimensions';

import styles from 'styles/index.module.scss';

export default function Home() {
  const {width, height} = useWindowDimensions();

  // calculate dimensions of canvas to determine if it needs to rerender on window size change
  const calcW = Math.ceil(width / 100) * 10;
  const calcH = Math.ceil(height / 100) * 10;

  const isDesktop = useMediaQuery('(min-width: 768px');

  return (
    <>
      <NextSeo title="Daniel Slovinsky | Front-end Web Developer" />
      <main
        className={`${styles.main} flex flex-col overflow-x-hidden relative items-center`}>
        <NavBar displayMenu={!isDesktop} anchorLinks />
        {isDesktop && <ScrollAnchor />}
        {width && (
          <GoL
            key={`${calcW}${calcH}`}
            width={calcW}
            height={calcH}
            resolution={10}
            streak={0.5}
            className="absolute"
          />
        )}
        <div className={styles.sections}>
          <Title id="Home" />
          <About id="About" />
          <Portfolio id="Portfolio" />
          <Skills id="Skills" />
          <Contact id="Contact" />
          <BackToTop />
        </div>
      </main>
    </>
  );
}
