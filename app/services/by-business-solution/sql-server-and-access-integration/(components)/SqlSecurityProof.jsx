// app/services/by-business-solution/sql-server-and-access-integration/(components)/SqlSecurityProof.jsx

// Compiled CSS module (source: styles/sqlSecurityProof.module.scss)
import styles from "@/styles/sqlSecurityProof.module.scss";
// Dark band: a practical example on the left, a sourced statistic on the right
const SqlSecurityProof = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Security in practice</span>
          <h2 className={styles.heading}>
            Access control belongs{" "}
            <span className={styles.accent}>on the server</span>
          </h2>
          <p className={styles.lead}>
            If someone copies an Access file from your network, they can walk
            away with your data. With SQL Server, only authorised users can
            query or update information, and all access is controlled at the
            server level.
          </p>
        </div>

        <figure className={styles.proof}>
          {/* Decorative: the same figure is stated in the sentence below */}
          <p className={styles.stat} aria-hidden="true">
            US$4.99m
          </p>
          {/* A paraphrase of IBM's headline finding, not a direct quotation */}
          <p className={styles.quote}>
            The global average cost of a data breach is now US$4.99 million, a
            12% increase on the year before and a record high.
          </p>
          <figcaption className={styles.cite}>
            Source:{" "}
            <a
              href="https://www.ibm.com/reports/data-breach"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              IBM, Cost of a Data Breach Report
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default SqlSecurityProof;
