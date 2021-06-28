import styles from 'styles/index.module.scss';

export default function Resume() {
  return (
    <div>
      <div className={styles.experience}>
        <h1>Experience</h1>
        <div className={styles.verdes}>
          <h2>Front-end Web Developer</h2>
          <h3>Verd.es</h3>
          <h3>2020-present</h3>
          <h3>San Diego, CA</h3>
          <p>
            Develop and maintain a website that allows users in Spain to find
            nearby marijuana dispensaries
          </p>
          <p>Optimized webpages to improve speed by over 90%.</p>
          <p>
            Work with a small team to share ideas and exchange code feedback
          </p>
          <p>
            Use an array of tools including Next.js, React, TypeScript,
            JavaScript, and Tailwind
          </p>
        </div>
        <div className={styles.buwon}>
          <h2>English Teacher</h2>
          <h3>Buwon Middle School</h3>
          <h3>2018-2020</h3>
          <h3>Incheon, South Korea</h3>
          <p>
            Taught 29 classes of 34-36 male students over 20 class hours per
            week schedule alongside multiple co-teachers.
          </p>
          <p>
            Taught additional after-school and weekend classes for parents,
            teachers, and students from San Gok Girls Middle School.
          </p>
          <p>
            Created custom lesson plans from scratch for each lesson taught.
          </p>
          <p>
            Assisted co-teachers and other Buwon Middle School faculty with
            their English education curriculum
          </p>
        </div>
        <div className={styles.radd}>
          <h2>English Teacher</h2>
          <h3>SEO Analyst</h3>
          <h3>2016-2018</h3>
          <h3>San Diego, CA</h3>
          <p>
            Analyzed online search patterns and evaluate competition in client
            markets to create an effective SEO strategy
          </p>
          <p>
            Adapted clients' websites to capitalize on organic traffic and
            improve SERP rank
          </p>
          <p>Wrote custom macros in VBA for company-wide usage</p>
        </div>
        <div className={styles.social_intel}>
          <h2>Quality Assurance/Social Media Analyst</h2>
          <h3>Social Intelligence Corp.</h3>
          <h3>2014-2016</h3>
          <h3>Santa Barbara, CA</h3>
          <p>
            Trained and assisted analysts with new report types and provided
            feedback in weekly meetings
          </p>
          <p>
            Reviewed reports to maintain highest possible accuracy and ensure
            all information is up-to-date
          </p>
          <p>
            Performed background checks on job applicants, investigated
            insurance claims, and carried out due diligence on high-profile
            individuals.
          </p>
          <p>
            Compiled reports for clients based on findings within a strict
            deadline.
          </p>
        </div>
      </div>
      <div className={styles.education}>
        <div>
          <h2>University of California, Santa Barbara</h2>
          <h3>Bachelor's Degree in Communication</h3>
          <h3>2011-2014</h3>
        </div>
      </div>
    </div>
  );
}
