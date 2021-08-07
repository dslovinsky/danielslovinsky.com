import {TextField, TextareaAutosize, Button} from '@material-ui/core';
import {FormEvent} from 'react';

import styles from 'styles/components/contact.module.scss';

const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log('sent')
}

export default function Contact({...props}) {
  return (
    <div {...props} className={`${styles.section} h-screen`}>
      <h1 className="text-3xl my-8 font-bold self-center">— Contact Me —</h1>
      <form className={styles.form} onSubmit={onSubmit}>
      <p>
        Shoot me a message any time with comments, questions, offers, or just to
        say hi. While I'm primarily interested in full-time employment, I'm open
        to opportunities of any kind.
      </p>
        <div className={styles.toprow}>
          <TextField placeholder="Name" />
          <TextField placeholder="Email" />
        </div>
        <div className={styles.subject}>
          <TextField placeholder="Subject" />
        </div>
        <div className={styles.message}>
          <TextareaAutosize placeholder="Message" minRows={6} />
        </div>
        <Button className={styles.send} type="submit">Send</Button>
      </form>
    </div>
  );
}
