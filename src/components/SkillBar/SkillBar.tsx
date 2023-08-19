import type { FC } from 'react';

const SkillBar: FC<ComponentSkillBarFragment> = ({ skills }) =>
  skills.map(skill => (
    <div key={skill.id}>
      <div className="bg-slate-400">{skill.name}</div>
      <div>{skill.logo}</div>
    </div>
  ));

export default SkillBar;
