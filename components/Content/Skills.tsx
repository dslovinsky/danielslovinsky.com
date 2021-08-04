import styles from 'styles/components/skills.module.scss';

const skillSet = [
  {
    name: 'Javascript',
  },
  {
    name: 'Typescript',
  },
  {
    name: 'React',
  },
  {
    name: 'Next.js',
  },
  {
    name: 'CSS',
  },
  {
    name: 'SASS',
  },
  {
    name: 'Tailwind',
  },
];

export default function Skills({...props}) {
  return (
    <div {...props} className={`${styles.section} h-screen`}>
      <h1 className="text-3xl my-8 font-bold self-center">— Skills —</h1>
      <div className={styles.skills_container}>
        {skillSet.map(({name}) => (
          <div id={name} className={styles.skill}>{name}</div>
        ))}
      </div>
    </div>
  );
}
