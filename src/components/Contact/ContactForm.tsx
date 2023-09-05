'use client';
import type { FC, FormEventHandler } from 'react';

const onSubmit: FormEventHandler<HTMLFormElement> = async e => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: formData,
  });

  console.log(response);
};

const inputClasses =
  'border-white-25 border-2 border-solid bg-transparent p-4 focus-within:border-white focus-visible:outline-none';

const ContactForm: FC = () => (
  <form onSubmit={onSubmit} className="grid w-full grid-cols-2 gap-4">
    <input type="text" name="name" placeholder="Name" className={inputClasses} />
    <input type="email" name="email" placeholder="Email" className={inputClasses} />
    <input type="text" name="subject" placeholder="Subject" className={`col-span-2 ${inputClasses}`} />
    <textarea name="message" placeholder="Message" className={`col-span-2 min-h-[180px] ${inputClasses}`} />
    <button type="submit" className="col-span-2 border-2 border-solid border-maya-blue px-10 py-4 uppercase">
      Send Message
    </button>
  </form>
);

export default ContactForm;
