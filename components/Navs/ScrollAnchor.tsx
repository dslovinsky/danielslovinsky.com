import {Link as AnchorLink} from 'react-scroll';

import styles from 'styles/components/scrollanchor.module.scss';

const sections = ['Home', 'About', 'Portfolio', 'Skills', 'Contact'];

export default function Anchor() {
  return (
    <ul className={styles.anchor}>
      {sections.map((sect) => (
        <li key={sect} className={styles.link}>
          <AnchorLink to={sect} spy={true} smooth={true} activeClass={styles.activeLink}>
            <p>{sect}</p>
          </AnchorLink>
        </li>
      ))}
    </ul>
  );
}
