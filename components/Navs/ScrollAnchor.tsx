import {Link as AnchorLink} from 'react-scroll';

import styles from 'styles/components/scrollanchor.module.scss';

const sections = ['About', 'Portfolio', 'Skills', 'Other Work', 'Contact'];

export default function Anchor() {
  return (
    <ul className={styles.anchor}>
      {sections.map((num) => (
        <li className={styles.link}>
          <AnchorLink to={num} spy={true} smooth={true}>
            <p>{num}</p>
          </AnchorLink>
        </li>
      ))}
    </ul>
  );
}
