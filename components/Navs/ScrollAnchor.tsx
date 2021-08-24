import {Link as AnchorLink} from 'react-scroll';

import styles from 'styles/components/scrollanchor.module.scss';

const sections = ['Home', 'About', 'Portfolio', 'Skills', 'Contact'];

export default function Anchor({onClick}: {onClick?: () => void}) {
  return (
    <ul
      className={`${styles.anchor} static top-24 font-medium z-20 text-sm md:fixed lg:text-base`}>
      {sections.map((sect) => (
        <li key={sect} className={styles.link}>
          <AnchorLink
            onClick={onClick}
            to={sect}
            spy={true}
            smooth={true}
            activeClass={styles.activeLink}>
            <p className="cursor-pointer p-3 text-center">{sect}</p>
          </AnchorLink>
        </li>
      ))}
    </ul>
  );
}
