// /app/services/microsoft-excel/data-manipulation/(components)/DataManipulationCta.jsx

import Link from "next/link";
import styles from "@/styles/dataManipulationCta.module.scss";

const DataManipulationCta = () => {
  return (
    <section className={styles.dataManipulationCta}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Get Started</span>
          <h2 className={styles.heading}>
            Have a data processing problem you want to automate?
          </h2>
          <p className={styles.body}>
            Tell us what you’re working with and where you would like to be. We
            review every enquiry and come back with an honest assessment of what
            we think will work best.
          </p>
          <div className={styles.ctas}>
            <Link href="/contact-us" className="btn">
              Request a free quote
            </Link>
            <a
              href="/microsoft-support-and-training-australia"
              className={styles.ctaSecondary}
            >
              Ongoing Excel support
            </a>
          </div>
        </div>

        {/* Supporting trust signals */}
        <ul className={styles.trustList} aria-label="Why choose us">
          <li className={styles.trustItem}>
            <span className={styles.trustCheck} aria-hidden="true">
              ✓
            </span>
            Australian-owned, established 2000
          </li>
          <li className={styles.trustItem}>
            <span className={styles.trustCheck} aria-hidden="true">
              ✓
            </span>
            Fixed-scope projects or hourly rates, no invoice surprises
          </li>
          <li className={styles.trustItem}>
            <span className={styles.trustCheck} aria-hidden="true">
              ✓
            </span>
            Built against your real data, not a demo environment
          </li>
          <li className={styles.trustItem}>
            <span className={styles.trustCheck} aria-hidden="true">
              ✓
            </span>
            Full documentation and handover included
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DataManipulationCta;
