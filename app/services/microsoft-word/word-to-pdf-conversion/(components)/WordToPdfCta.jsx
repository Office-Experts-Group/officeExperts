// app/word-to-pdf-conversion/(components)/WordToPdfCta.jsx

import Link from "next/link";
import styles from "../../../styles/wordToPdfCta.module.css";

const WordToPdfCta = () => {
  return (
    <section className={styles.section} style={{ scrollMarginTop: "150px" }}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Get Started</span>
          <h2 className={styles.heading}>
            Need a Word document turned into a fillable PDF form?
          </h2>
          <p className={styles.body}>
            Send through a sample file and let us know whether you need a
            fillable form, a more reliable template, or a straight conversion.
            We'll come back with an honest assessment and a fixed price before
            any work begins.
          </p>
          <div className={styles.ctas}>
            <Link href="#contact" className={styles.ctaPrimary}>
              Request a free quote
            </Link>
            <Link href="/fill-in-forms" className={styles.ctaSecondary}>
              See our fill-in form service
            </Link>
          </div>
        </div>

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
            Fixed-price quotes, no per-file surprises
          </li>
          <li className={styles.trustItem}>
            <span className={styles.trustCheck} aria-hidden="true">
              ✓
            </span>
            No uploading to third-party conversion tools
          </li>
          <li className={styles.trustItem}>
            <span className={styles.trustCheck} aria-hidden="true">
              ✓
            </span>
            Fillable PDF forms and document conversion both handled in-house
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WordToPdfCta;
