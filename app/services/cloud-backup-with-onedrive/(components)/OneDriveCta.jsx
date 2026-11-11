// app/services/cloud-backup-with-onedrive/(components)/OneDriveCta.jsx
import Link from "next/link";

// SCSS module (source: styles/oneDriveCta.module.scss)
import styles from "@/styles/oneDriveCta.module.scss";

// What the health check reviews
const checks = [
  "Unlicensed and orphaned OneDrive accounts",
  "Known Folder Move coverage across every device",
  "Sharing links and external access",
  "Recovery windows against your record-keeping obligations",
];

const OneDriveCta = () => {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.band}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Free health check</span>
          <h2 id="cta-heading" className={styles.heading}>
            Could you restore your files today?
          </h2>
          <p className={styles.body}>
            We&rsquo;ll review your OneDrive and Microsoft 365 setup, show you
            exactly how far back you can recover, and flag anything at risk from
            the 2026 changes. Straight answers from people who&rsquo;ve worked
            with Microsoft since 2000.
          </p>
          <div className={styles.actions}>
            <Link href="#contact" className={`btn ${styles.cta}`}>
              Book a health check
            </Link>
            <a href="tel:1300102810" className={styles.phone}>
              Call 1300 102 810
            </a>
          </div>
        </div>

        <div className={styles.checks}>
          <span className={styles.checksLabel}>What we check</span>
          <ul className={styles.list}>
            {checks.map((check) => (
              <li key={check} className={styles.listItem}>
                <span className={styles.tick} aria-hidden="true">
                  &#10003;
                </span>
                {check}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OneDriveCta;
