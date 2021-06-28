import styles from 'styles/index.module.scss';

type Job = {
  title: string;
  employer: string;
  dates: string;
  location: string;
  duties: string[];
};

type School = {
  name: string;
  degree: string;
  dates: string;
};

const jobs: Job[] = [
  {
    title: 'Front-end Web Developer',
    employer: 'Verd.es',
    dates: '2020-present',
    location: 'San Diego, CA',
    duties: [
      'Develop and maintain a website that allows users in Spain to find nearby marijuana dispensaries',
      'Optimized webpages to improve speed by over 90%',
      'Work with a small team to share ideas and exchange code feedback',
      'Use an array of tools including Next.js, React, TypeScript, JavaScript, and Tailwind',
    ],
  },
  {
    title: 'English Teacher',
    employer: 'Buwon Middle School',
    dates: '2018-2020',
    location: 'Incheon, South Korea',
    duties: [
      'Taught 29 classes of 34-36 male students over 20 class hours per week schedule alongside multiple co-teachers',
      'Taught additional after-school and weekend classes for parents, teachers, and students from San Gok Girls Middle School',
      'Created custom lesson plans from scratch for each lesson taught',
      'Assisted co-teachers and other Buwon Middle School faculty with their English education curriculum',
    ],
  },
  {
    title: 'SEO Analyst',
    employer: 'Radd Interactive',
    dates: '2016-2018',
    location: 'San Diego, CA',
    duties: [
      'Analyzed online search patterns and evaluate competition in client markets to create an effective SEO strategy',
      "Adapted clients' websites to capitalize on organic traffic and improve SERP rank",
      'Wrote custom macros in VBA for company-wide usage',
    ],
  },
  {
    title: 'Quality Assurance/Social Media Analyst',
    employer: 'Social Intelligence Corp.',
    dates: '2014-2016',
    location: 'Santa Barbara, CA',
    duties: [
      'Trained and assisted analysts with new report types and provided feedback in weekly meetings',
      'Reviewed reports to maintain highest possible accuracy and ensure all information is up-to-date',
      'Performed background checks on job applicants, investigated insurance claims, and carried out due diligence on high-profile individuals',
      'Compiled reports for clients based on findings within a strict deadline',
    ],
  },
];

const schools: School[] = [
  {
    name: 'University of California, Santa Barbara',
    degree: "Bachelor's Degree in Communication",
    dates: '2011-2014',
  },
];

export default function Resume() {
  return (
    <div className={styles.resume}>
      <div className={styles.experience}>
        <h1>— Experience —</h1>
        {jobs.map(({title, employer, dates, location, duties}) => (
          <div>
            <h2>{title}</h2>
            <h3>{employer}</h3>
            <h3>{dates}</h3>
            <h3>{location}</h3>
            {duties.map((duty) => (
              <p>- {duty}</p>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.education}>
        <h1>— Education —</h1>
        {schools.map(({name, degree, dates}) => (
          <div>
            <h2>{name}</h2>
            <h3>{degree}</h3>
            <h3>{dates}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
