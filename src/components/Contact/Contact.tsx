import SectionHeading from 'molecules/SectionHeading';
import StructuredText from 'molecules/StructuredText';

import type { FC } from 'react';

const Contact: FC<ComponentContactFragment> = ({ heading, body }) => (
  <div className="flex flex-col items-center">
    {heading && <SectionHeading heading={heading} alignOnDesktop="center" />}
    <div>{body && <StructuredText data={body} className="mt-10 flex flex-col items-center gap-y-10" />}</div>
  </div>
);

export default Contact;
