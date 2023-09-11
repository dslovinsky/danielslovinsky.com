import Image from 'next/image';

import SectionHeading from 'molecules/SectionHeading';

import type { FC } from 'react';

const SkillBar: FC<ComponentSkillBarFragment> = ({ heading, skills }) => (
  <div className="flex flex-col items-center gap-6 md:gap-10">
    {heading && <SectionHeading heading={heading} />}
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 md:gap-x-24 md:gap-y-10">
      {skills.map(({ id, name, logo }) => (
        <div key={id} className="flex flex-col items-center gap-y-2">
          {logo?.url && (
            <div className="relative flex h-16 w-16">
              <Image
                src={logo.url}
                alt={logo.alt || `${name || ''} logo`}
                height={64}
                width={64}
                className="max-h-full"
              />
            </div>
          )}
          <div>{name}</div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillBar;
