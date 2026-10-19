// app/services/by-business-solution/sql-server-and-access-integration/(components)/SqlFaq.jsx

// Compiled CSS module (source: styles/sqlFaq.module.scss)
import styles from "../../../../../styles/sqlFaq.module.scss";
// Shared with page.js, which uses the same list for FAQPage schema
import { sqlFaqs } from "../(data)/sqlFaqData";

// Native <details> keeps this a server component with no client JavaScript,
// and the answers are in the initial HTML even while collapsed.
const SqlFaq = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Common questions</span>
          <h2 className={styles.heading}>
            SQL Server and Access{" "}
            <span className={styles.accent}>questions answered</span>
          </h2>
        </header>

        <div>
          {sqlFaqs.map(({ question, answer }) => (
            <details key={question} className={styles.item}>
              <summary className={styles.question}>{question}</summary>
              <p className={styles.answer}>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SqlFaq;
