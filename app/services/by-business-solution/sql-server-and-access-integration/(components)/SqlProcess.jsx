// app/services/by-business-solution/sql-server-and-access-integration/(components)/SqlProcess.jsx

// Compiled CSS module (source: styles/sqlProcess.module.scss)
import styles from "../../../../../styles/sqlProcess.module.scss";
// Genuinely sequential, so this is the one numbered list on the page
const steps = [
  {
    title: "Database review",
    body: "We look at your Access database, its size, how many people use it and any performance or corruption problems, then agree the scope with you.",
  },
  {
    title: "Migrate the data",
    body: "We move your tables to SQL Server, on your own server or Azure SQL, with data conversion and testing along the way.",
  },
  {
    title: "Relink and test",
    body: "Your existing Access forms and reports are relinked to the SQL Server tables and the whole system is tested before your team switches over.",
  },
  {
    title: "Secure and tune",
    body: "We set up authentication, roles, encryption, backups and maintenance jobs, and tune queries for your busiest forms and reports.",
  },
  {
    title: "Train and support",
    body: "We document the setup, train your staff and stay on hand for ongoing maintenance and support.",
  },
];

// id="how-it-works" is the target of the hero's secondary button
const SqlProcess = () => {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>How we work</span>
          <h2 className={styles.heading}>
            How we upgrade Access to SQL Server
          </h2>
        </header>

        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              {/* Visual number only; the <ol> already conveys order */}
              <span className={styles.stepNum} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default SqlProcess;
