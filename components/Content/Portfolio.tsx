import Image from 'next/image';
import Link from 'next/link';
import verdes from 'public/photos/verdes.png';

import styles from 'styles/components/portfolio.module.scss';

export default function Portfolio({...props}) {
  return (
    <div {...props} className={`${styles.section}`}>
      <h1 className="text-3xl my-8 font-bold self-center">— Portfolio —</h1>
      <div className={`${styles.card}`}>
        <div className={`${styles.site_image}`}>
          <Link href="https://verd.es/">
            <a>
              <Image
                src={verdes}
                alt="Verd.es"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        </div>
        <div className={styles.paragraphs}>
          <div>
            <Link href="https://verd.es/">
              <a>
                <h3 className="text-3xl md:text-4xl font-bold underline">Verd.es</h3>
              </a>
            </Link>
          </div>
          <ul>
            <li>
              <p>
                I work with a small team to create a service that provides users
                in Spain with locations and information about nearby marijuana
                dispensaries
              </p>
            </li>
            <li>
              <p>
                I refactored all existing pages to improve speed by over 90% and
                added all new pages.
              </p>
            </li>
            <li>
              <p>
                I take full advantage of React's state management capabilities
                to provide complex functionality while minimizing rerenders.
              </p>
            </li>
            <li>
              <p>
                <span className="underline">Tools used</span>: Next.js, React,
                TypeScript, JavaScript, Tailwind, GoogleMaps API, and more
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.card} flex justify-center p-6`}>
        <p>More to come . . .</p>
      </div>
    </div>
  );
}
