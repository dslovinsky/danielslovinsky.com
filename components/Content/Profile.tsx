// import Image from 'next/image';
// import me from 'public/photos/me.png';
import {useRef} from 'react';
import Typed from 'react-typed';

import styles from 'styles/index.module.scss';

export default function Profile() {
  const typedRef = useRef<any>(null); // ref type not provided

  return (
    <div className={styles.profile_container}>
      <div className={styles.profile}>
        {/* <div className={styles.photo_container}>
          <Image
            src={me}
            alt="Daniel Slovinsky"
            className={styles.photo}
            height={200}
            width={200}
          />
        </div> */}
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
              typeSpeed={100}
            />
            <Typed
              showCursor={false}
              stopped
              strings={['Slovinsky']}
              typedRef={(ref: unknown) => (typedRef.current = ref)}
              typeSpeed={100}
            />
          </div>
        </div>
        <h2 className="p-2 text-xl">
          <strong>Front-end Web Developer</strong> based in{' '}
          <strong>San Diego, CA</strong>
        </h2>
        {/* <p className="max-w-5xl p-4 text-center">
          Driven, self-taught web developer focused on creating elegant,
          efficient solutions that require minimal maintenance. Looking for
          opportunities that allow me to build upon my experience with modern
          web development tools and expand into new areas.
        </p> */}
      </div>
    </div>
  );
}
