import Image from 'next/image';
import selfPhoto from 'public/photos/me.png';

import styles from 'styles/components/about.module.scss';

export default function About({...props}) {
  return (
    <div {...props} className={`${styles.section} flex flex-col items-center pt-12 z-10`}>
      <h1 className="text-3xl my-8 font-bold">— About Me —</h1>
      <div className={`${styles.card} flex p-6 items-center flex-col`}>
        <div className={`${styles.photo_container} flex rounded-full bg-white`}>
          <Image
            src={selfPhoto}
            alt="Photo of Daniel Slovinsky"
            title="Photo by Jun Woo Kim"
            className="rounded-full"
            height={200}
            width={200}
          />
        </div>
        <div
          className={`${styles.paragraphs} flex flex-col justify-between py-4 text-center`}>
          <p>
            Ever since I discovered how to automate parts of a previous job, I
            have become obsessed with streamlining and optimizing tasks and
            business operations to create smooth and efficient user experiences.
          </p>
          <p>
            As a driven, self-taught web developer, I&apos;ve picked up many
            skills in a short time to best put that dedication into practice.
          </p>
          <p>
            But learning is as much my passion as coding is, and I&apos;m always
            looking for more opportunities to work with new teams, build upon my
            experience with modern web development tools, and expand into new
            areas.
          </p>
        </div>
      </div>
    </div>
  );
}
