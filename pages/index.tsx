import {NextSeo} from 'next-seo';

import styles from 'styles/index.module.scss';

export default function Home() {
  return (
    <>
      <NextSeo title="Website coming soon... | Daniel Slovinsky" />
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className={`${styles.placeholder} font-bold my-8 text-4xl`}>Website coming soon...</h1>
        <img alt="Site under construction" src="construction.svg" width="512px" height="319px" />
      </div>
    </>
  );
}
