import SectionHeading from 'molecules/SectionHeading';
import StructuredText from 'molecules/StructuredText';

import ContactForm from 'components/Contact/ContactForm';

import type { FC } from 'react';

const Contact: FC<ComponentContactFragment> = ({ heading, body }) => (
  <div className="mx-auto flex max-w-3xl flex-col items-center">
    {heading && <SectionHeading heading={heading} alignOnDesktop="center" />}
    {body && <StructuredText data={body} className="mb-6 mt-10 flex flex-col items-center gap-y-10 text-center" />}
    <ContactForm />
  </div>
);

export default Contact;
