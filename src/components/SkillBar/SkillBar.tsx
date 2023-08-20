import Image from 'next/image';

import type { FC } from 'react';

const SkillBar: FC<ComponentSkillBarFragment> = ({ heading, skills }) => (
  <div>
    <h2>{heading}</h2>
    {skills.map(({ id, name, logo }) => (
      <div key={id}>
        <div>{name}</div>
        {logo?.url && <Image src={logo.url} alt={logo.alt || name || ''} width={64} height={64} />}
      </div>
    ))}
  </div>
);

export default SkillBar;
