import Link from 'next/link';

import styles from 'styles/components/navbar.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.home_link}>
          <div>
            <img
              height={48}
              width={48}
              src="https://via.placeholder.com/48?text=home"
              alt="Home"
            />
          </div>
        </a>
      </Link>
      <Link href="/contact">
        <a className={styles.contact}>
          <div>
            <span>Contact</span>
          </div>
        </a>
      </Link>
    </nav>
  );
}
