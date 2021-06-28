import Image from 'next/image';
import me from 'public/photos/me.png';
import styles from 'styles/index.module.scss';

export default function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile}>
        <div className={styles.photo_container}>
          <Image
            src={me}
            alt="Daniel Slovinsky"
            className={styles.photo}
            height={200}
            width={200}
          />
        </div>
        <h1 className="text-2xl">Daniel Slovinsky</h1>
        <h2>Front-end Web Developer at Verd.es</h2>
        <h2>San Diego, CA</h2>
        <p className="max-w-5xl p-4 text-center">
          Driven, self-taught web developer focused on creating elegant,
          efficient solutions that require minimal maintenance. Looking for
          opportunities that allow me to build upon my experience with modern
          web development tools and expand into new areas.
        </p>
      </div>
    </div>
  );
}
