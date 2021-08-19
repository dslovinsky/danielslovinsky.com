import Image from 'next/image';

import styles from 'styles/components/skills.module.scss';

const skillSet = [
  {
    name: 'Javascript',
    iconPath: 'javascript.svg',
  },
  {
    name: 'Typescript',
    iconPath: 'typescript.svg',
  },
  {
    name: 'React',
    iconPath: 'react.svg',
  },
  {
    name: 'Next.js',
    iconPath: 'nextjs.svg',
    className: styles.nextjs,
  },
  {
    name: 'CSS',
    iconPath: 'css3.svg',
  },
  {
    name: 'SASS',
    iconPath: 'sass.svg',
  },
  {
    name: 'Tailwind',
    iconPath: 'tailwind.svg',
  },
  {
    name: 'Material-UI',
    iconPath: 'material-ui.svg',
  },
  {
    name: 'Google Maps API',
    iconPath: 'google-maps.svg',
  },
  // {
  //   name: 'Cypress',
  //   iconPath: 'cypress.svg',
  // },
  // {
  //   name: 'Jest',
  //   iconPath: 'jest.svg',
  // },
];

export default function Skills({...props}) {
  return (
    <div {...props} className={`${styles.section} flex flex-col pt-12`}>
      <h1 className="text-3xl my-8 font-bold self-center">— Skills —</h1>
      <div
        className={`${styles.skills_container} flex flex-wrap justify-evenly md:justify-around`}>
        {skillSet.map(({name, iconPath, className}) => (
          <div
            key={name}
            className={`${styles.skill} flex items-center flex-col justify-center m-1 md:py-2`}>
            <div className="mt-3 mx-3 mb-2 h-16 md:my-2 md:mx-8 lg:mx-9">
              <Image
                src={`/icons/skills/${iconPath}`}
                width={85}
                height={85}
                alt={name}
                className={className}
                unoptimized
              />
            </div>
            <p className="font-semibold text-sm text-center">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
