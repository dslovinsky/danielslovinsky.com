import {IconName} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Menu} from '@material-ui/core';
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
            <div className="flex items-center justify-center h-11 w-11">
              <FontAwesomeIcon
                icon={['fab', icon]}
                width={22}
                height={22}
                title={name}
                className="text-white h-auto"
              />
            </div>
          </a>
        </Link>
      </li>
    ))}
  </>
);

export default function NavBar({
  displayMenu,
  anchorLinks,
  ...props
}: {
  displayMenu: boolean;
  anchorLinks?: boolean;
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement>();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <nav
      {...props}
      className={`${styles.navbar} flex fixed w-full z-20 p-3 md:absolute md:px-9 md:py-6`}>
      <Link href="/">
        <a className={`${styles.home_link} ml-3 mr-auto`}>
          <div className="h-12">
            <Image
              height={44}
              width={44}
              src="/icons/initialsLogo.svg"
              alt="Home"
            />
          </div>
        </a>
      </Link>
      <ul className="flex items-center">
        <SocialLinks />
        <li className="flex mx-3">
          <Link href="/contact">
            <a>
              <div className={`${styles.contact} px-4 py-2`}>
                <span className="font-bold">Contact</span>
              </div>
            </a>
          </Link>
        </li>
        {displayMenu && (
          <li className="flex mx-3">
            <button
              onClick={handleClick}
              className={`${styles.bars} rounded h-11 w-11`}>
              <FontAwesomeIcon icon="bars" height={16} width={14} />
            </button>
            <Menu
              open={!!anchorEl}
              onClose={handleClose}
              anchorEl={anchorEl}
              transitionDuration={0}
              className={styles.menu}>
              <SocialLinks />
              {anchorLinks && <ScrollAnchor onClick={handleClose} />}
            </Menu>
          </li>
        )}
      </ul>
    </nav>
  );
}
