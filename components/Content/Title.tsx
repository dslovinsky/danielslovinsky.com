import {useRef} from 'react';
import Typed from 'react-typed';

import styles from 'styles/index.module.scss';

export default function Title({...props}) {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const typedRef = useRef<any>(null); // ref type not provided

  return (
    <div {...props} className={styles.profile_container}>
      <div className={`${styles.profile} lg:w-auto`}>
        <div
          className={`${styles.name} text-5xl flex flex-col text-left mb-6 lg:mb-0 lg:flex-row m-6 ml-0 lg:m-0`}>
          <div>
            <h1 className="font-medium">Hi, I&apos;m&nbsp;</h1>
          </div>
          <div
            className={`${styles.typed} flex flex-col font-bold antialiased`}>
            <Typed
              onComplete={() => typedRef.current.start()}
              showCursor={false}
              strings={['Daniel']}
              typeSpeed={130}
            />
            <Typed
              showCursor={false}
              stopped
              strings={['Slovinsky']}
              typedRef={(ref: unknown) => (typedRef.current = ref)}
              typeSpeed={130}
            />
          </div>
        </div>
        <h2 className="text-center md:text-left p-2 text-base">
          <strong>Front-end Web Developer</strong> based in{' '}
          <strong>San Diego, CA</strong>
        </h2>
      </div>
    </div>
  );
}
