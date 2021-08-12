import {IconName} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Menu, useMediaQuery} from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react';

import ScrollAnchor from '@components/Navs/ScrollAnchor';

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

const SocialLinks = () => (
  <>
    {links.map(({name, url, icon}) => (
      <li key={name} className={styles.social_item}>
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
  </>
);

export default function NavBar({...props}) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement>();

  const isMobile = useMediaQuery('(max-width: 768px');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <nav {...props} className={styles.navbar}>
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
        <SocialLinks />
        <li>
          <Link href="/contact">
            <a>
              <div className={styles.contact}>
                <span>Contact</span>
              </div>
            </a>
          </Link>
        </li>
        {isMobile && (
          <li>
            <button onClick={handleClick} className={styles.bars}>
              <FontAwesomeIcon icon="bars" height={16} width={14} />
            </button>
            <Menu
              open={!!anchorEl}
              onClose={handleClose}
              anchorEl={anchorEl}
              transitionDuration={0}
              className={styles.menu}>
              <SocialLinks />
              <ScrollAnchor onClick={handleClose} />
            </Menu>
          </li>
        )}
      </ul>
    </nav>
  );
}
