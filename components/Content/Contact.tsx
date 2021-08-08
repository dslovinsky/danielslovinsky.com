import {TextField, TextareaAutosize, Button} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';

import ErrorMessages from '@components/Dialogs/ErrorMessages';

import styles from 'styles/components/contact.module.scss';

type Data = {
  email: string;
  message: string;
  name: string;
  subject?: string;
};

const notEmpty = (obj: Object) => {
  // @see https://stackoverflow.com/a/59787784
  for (const _i in obj) return true;
  return false;
};

const onSubmit = (data: Data) => {
  console.log('data', data);
};

export default function Contact({...props}) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Data>({
    criteriaMode: 'all',
  });

  return (
    <div {...props} className={`${styles.section}`}>
      <h1 className="text-3xl my-8 font-bold self-center">— Contact Me —</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <p>
          Shoot me a message any time with comments, questions, offers, or just
          to say hi. While I'm primarily interested in full-time employment, I'm
          open to opportunities of any kind.
        </p>
        <div className={styles.toprow}>
          <TextField
            {...register('name', {
              required: 'A name is required',
              minLength: {
                value: 3,
                message: 'Name is too short',
              },
              maxLength: {
                value: 255,
                message: 'Name is too long',
              },
            })}
            placeholder="Name"
            className={errors.name ? styles.error_div : undefined}
          />
          <TextField
            {...register('email', {
              required: 'An email is required',
              minLength: {
                value: 4,
                message: 'Email is too short',
              },
              maxLength: {
                value: 255,
                message: 'Email is too long',
              },
              validate: (email) =>
                isEmail(email || '') || 'Please enter a valid email address',
            })}
            placeholder="Email"
            className={errors.email ? styles.error_div : undefined}
          />
        </div>
        <div className={styles.subject}>
          <TextField
            {...register('subject', {
              minLength: {
                value: 2,
                message: 'Subject is too short',
              },
              maxLength: {
                value: 255,
                message: 'Subject is too long',
              },
            })}
            className={errors.subject ? styles.error_div : undefined}
            placeholder="Subject"
          />
        </div>
        <div
          className={`${styles.message} ${
            errors.message ? styles.error : undefined
          }`}>
          <TextareaAutosize
            {...register('message', {
              required: 'A message is required',
              minLength: {
                value: 2,
                message: 'Message is too short',
              },
              maxLength: {
                value: 4400,
                message: "That's a lot to read! Please keep it more concise",
              },
            })}
            placeholder="Message"
            minRows={6}
          />
        </div>
        <Button
          className={`${styles.send} ${
            notEmpty(errors) ? styles.error_button : undefined
          }`}
          type="submit"
          disabled={notEmpty(errors)}>
          Send
        </Button>
        <div>
          {Object.keys(errors).map((key) => (
            <ErrorMessages key={key} errors={errors} name={key} />
          ))}
        </div>
      </form>
    </div>
  );
}
