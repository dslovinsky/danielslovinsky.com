import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link as AnchorLink} from 'react-scroll';

import styles from 'styles/components/backtotop.module.scss';

export default function BackToTop() {
  return (
    <div className={styles.top_button}>
      <AnchorLink to="Home" smooth={true}>
        <FontAwesomeIcon icon="chevron-up" height={16} width={16} />
        <p>Back to Top</p>
      </AnchorLink>
    </div>
  );
}
