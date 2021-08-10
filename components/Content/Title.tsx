import {useRef} from 'react';
import Typed from 'react-typed';

import styles from 'styles/index.module.scss';

export default function Title({...props}) {
  const typedRef = useRef<any>(null); // ref type not provided

  return (
    <div {...props} className={styles.profile_container}>
      <div className={styles.profile}>
        <div className="text-7xl flex">
          <div>
            <h1 className="font-medium">Hi, I'm</h1>
          </div>
          &nbsp;
          <div className={`${styles.typed} flex flex-col font-bold antialiased`}>
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
        <h2 className="p-2 text-xl">
          <strong>Front-end Web Developer</strong> based in{' '}
          <strong>San Diego, CA</strong>
        </h2>
      </div>
    </div>
  );
}
