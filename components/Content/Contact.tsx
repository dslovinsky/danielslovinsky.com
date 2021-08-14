import {TextField, TextareaAutosize, Button} from '@material-ui/core';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';

import ErrorMessages from '@components/Dialogs/ErrorMessages';
import {Email} from '@interfaces/email';

import styles from 'styles/components/contact.module.scss';

const notEmpty = (obj: Record<string, unknown>) => {
  // @see https://stackoverflow.com/a/59787784
  for (const _i in obj) return true;
  return false;
};

export default function Contact({...props}) {
  const {
    formState: {errors},
    handleSubmit,
    register,
    reset,
  } = useForm<Email>({
    criteriaMode: 'all',
  });

  const [sent, setSent] = useState(false);

  const onSubmit = async (data: Email) => {
    try {
      const result = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (result.status === 200) {
        setSent(true);
        reset();
      }
    } catch (e) {
      console.error('ERROR:', e);
    }
  };

  return (
    <div {...props} className={`${styles.section} flex flex-col`}>
      <h1 className="text-3xl my-8 font-bold self-center">— Contact Me —</h1>
      <form
        className={`${styles.form} flex flex-col self-center m-3 md:px-2`}
        onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center my-3 lg:m-6">
          Shoot me a message any time with comments, questions, offers, or just
          to say hi. While I&apos;m primarily interested in full-time
          employment, I&apos;m open to opportunities of any kind.
        </p>
        <div
          className={`${styles.toprow} flex justify-between flex-col md:flex-row`}>
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
            onChange={() => setSent(false)}
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
            className={`${
              errors.subject ? styles.error_div : undefined
            } w-full`}
            placeholder="Subject"
          />
        </div>
        <div
          className={`${styles.message} ${
            errors.message ? styles.error : undefined
          } relative`}>
          <TextareaAutosize
            {...register('message', {
              required: 'A message is required',
              minLength: {
                value: 2,
                message: 'Message is too short',
              },
              maxLength: {
                value: 4400,
                message: 'That\'s a lot to read! Please keep it more concise',
              },
            })}
            placeholder="Message"
            className="text-white block p-2.5 w-full"
            minRows={6}
          />
        </div>
        <Button
          className={`${styles.send} ${
            notEmpty(errors) || sent ? styles.error_button : undefined
          }`}
          type="submit"
          disabled={notEmpty(errors) || sent}>
          {sent ? 'Message sent!' : 'Send'}
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
