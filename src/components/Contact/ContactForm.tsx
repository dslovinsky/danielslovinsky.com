'use client';
import { type ChangeEvent, type FC, type FormEventHandler, useState } from 'react';

import { objectEntries } from 'utils/typeUtils';
import { type ValidatorFunction, required, validateEmail, validationGenerator } from 'utils/validators';

const inputClasses =
  'border-white-25 border-2 border-solid bg-transparent p-4 focus-within:border-white focus-visible:outline-none';

const defaultFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export type ContactFormData = typeof defaultFormData;

const ContactForm: FC = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState<Record<string, string[] | undefined>>({});
  const [status, setStatus] = useState<'Send Message' | 'Sending...' | 'Submission error' | 'Sent!'>('Send Message');

  const onSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    setFormData(defaultFormData);
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Sent!');
      } else {
        console.error(response.statusText);
        setStatus('Submission error');
      }
    } catch (error) {
      console.error(error);
      setStatus('Submission error');
    }
  };

  const handleChange = (
    { target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    validators?: ValidatorFunction[],
  ) => {
    if (status !== 'Send Message') {
      setStatus('Send Message');
    }
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setErrors(prev => ({
      ...prev,
      [name]: validators && validationGenerator(value, validators),
    }));
  };

  const errorsExist = Object.values(errors).some(error => error?.length);
  const fieldsNotFilled = Object.values(formData).some(value => !value);
  const submitDisabled = fieldsNotFilled || errorsExist;

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4" noValidate>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          className={inputClasses}
          onChange={e => handleChange(e, [required])}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          className={inputClasses}
          onChange={e => handleChange(e, [required, validateEmail])}
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          placeholder="Subject"
          className={`col-span-2 ${inputClasses}`}
          onChange={e => handleChange(e, [required])}
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Message"
          className={`col-span-2 min-h-[180px] ${inputClasses}`}
          onChange={e => handleChange(e, [required])}
        />
        <button
          type="submit"
          className="col-span-2 border-2 border-solid border-maya-blue px-10 py-4 uppercase disabled:cursor-not-allowed disabled:opacity-50"
          disabled={submitDisabled}
        >
          {status}
        </button>
      </form>
      <div className="flex flex-col">
        {objectEntries(errors).map(
          ([key, value]) =>
            value?.map(error => (
              <span key={`${key}-${error}`}>
                <span className="capitalize">{key} </span>
                {error}
              </span>
            )),
        )}
      </div>
    </div>
  );
};

export default ContactForm;
