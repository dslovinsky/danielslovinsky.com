import {TextField} from '@material-ui/core';

import styles from 'styles/components/contact.module.scss';

export default function Contact({...props}) {
  return (
    <div {...props} className={`${styles.section} h-screen`}>
      <h1 className="text-3xl my-8 font-bold self-center">— Contact Me —</h1>
      <form className={styles.form}>
        <TextField placeholder="Name" />
        <TextField placeholder="Email" />
        <TextField placeholder="Subject" />
        <TextField placeholder="Message" />
      </form>
    </div>
  );
}
