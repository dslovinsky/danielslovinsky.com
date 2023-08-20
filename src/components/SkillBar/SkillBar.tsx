import Image from 'next/image';

import type { FC } from 'react';

const SkillBar: FC<ComponentSkillBarFragment> = ({ skills }) => (
  <div>
    {skills.map(({ id, name, logo }) => (
      <div key={id}>
        <div>{name}</div>
        {logo?.url && <Image src={logo.url} alt={logo.alt || name || ''} width={64} height={64} />}
      </div>
    ))}
  </div>
);

export default SkillBar;
