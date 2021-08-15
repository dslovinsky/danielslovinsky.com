import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link as AnchorLink} from 'react-scroll';

import styles from 'styles/components/backtotop.module.scss';

export default function BackToTop() {
  return (
    <div
      className={`${styles.top_button} absolute bottom-3.5 left-3.5 hover:bg-white active:`}>
      <AnchorLink
        to="Home"
        smooth={true}
        className="flex p-2 items-center cursor-pointer">
        <FontAwesomeIcon icon="chevron-up" height={16} width={16} />
        <p className="font-medium pl-2 text-sm">Back to Top</p>
      </AnchorLink>
    </div>
  );
}
