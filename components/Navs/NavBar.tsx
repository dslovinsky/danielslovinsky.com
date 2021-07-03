import Link from 'next/link';
import Image from 'next/image';

import styles from 'styles/components/navbar.module.scss';

const links = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/daniel-slovinsky/',
    iconPath: '/icons/linkedin.svg',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Quickthorpe',
    iconPath: '/icons/github.svg',
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
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.url}>
              <a className={styles.social}>
                <div>
                  <Image
                    height={24}
                    width={24}
                    src={link.iconPath}
                    alt={link.name}
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
