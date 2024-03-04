import type { FC } from 'react';

import SectionHeading from 'molecules/SectionHeading';
import StructuredText from 'molecules/StructuredText';

import ContactAnimation from 'components/Contact/ContactAnimation';
import ContactForm from 'components/Contact/ContactForm';

const Contact: FC<ComponentContactFragment> = ({ heading, body }) => (
  <div className="mt-24">
    <ContactAnimation />
    <div className="mx-auto flex max-w-3xl flex-col items-center">
      {heading && <SectionHeading heading={heading} alignOnDesktop="center" />}
      {body && <StructuredText data={body} className="mb-6 mt-10 flex flex-col items-center gap-y-10 text-center" />}
      <ContactForm />
    </div>
  </div>
);

export default Contact;
