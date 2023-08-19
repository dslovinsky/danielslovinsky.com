import type { FC } from 'react';

const SkillBar: FC<ComponentSkillBarFragment> = ({ skills }) =>
  skills.map(skill => (
    <div key={skill.id}>
      <div>{skill.name}</div>
      <div>{skill.logo}</div>
    </div>
  ));

export default SkillBar;
