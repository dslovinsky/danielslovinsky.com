import {IconName} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';

import styles from 'styles/components/navbar.module.scss';

const links = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/daniel-slovinsky/',
    icon: 'linkedin-in' as IconName,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Quickthorpe',
    icon: 'github' as IconName,
  },
];

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.home_link}>
          <div>
            <Image
              height={44}
              width={44}
              src="/icons/initialsLogo.svg"
              alt="Home"
            />
          </div>
        </a>
      </Link>
      <ul>
        {links.map(({name, url, icon}) => (
          <li key={name}>
            <Link href={url}>
              <a className={styles.social}>
                <div>
                  <FontAwesomeIcon
                    icon={['fab', icon]}
                    width={22}
                    height={22}
                    title={name}
                  />
                </div>
              </a>
            </Link>
          </li>
        ))}
        <li>
          <Link href="/contact">
            <a>
              <div className={styles.contact}>
                <span>Contact</span>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
