import Image from 'next/image';

import SectionHeading from 'molecules/SectionHeading';

import type { FC } from 'react';

const SkillBar: FC<ComponentSkillBarFragment> = ({ heading, skills }) => (
  <div className="flex flex-col items-center gap-6 md:gap-10">
    {heading && <SectionHeading heading={heading} />}
    <div className="flex flex-wrap justify-center">
      {skills.map(({ id, name, logo }) => (
        <div key={id}>
          {logo?.url && <Image src={logo.url} alt={logo.alt || name || ''} width={64} height={64} />}
          <div>{name}</div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillBar;
