// app/popup-forms/(components)/PopupFormsHero.jsx
import Link from "next/link";

import styles from "../../../styles/popupFormsHero.module.css";

import PopupFormsCapabilities from "./PopupFormsCapabilities";

// ── Component ─────────────────────────────────────────────────────────────────
// Server component — only the expandable list on the right needs interactivity,
// so that part alone is split into a "use client" child (PopupFormsCapabilities).
const PopupFormsHero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* ── Left column ── */}
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>
            Popup forms that{" "}
            <span className={styles.accent}>guide, validate, and protect.</span>
          </h2>

          <div className={styles.body}>
            <p>
              A popup form can be much more than a simple data entry box. A
              custom built popup form will guide your staff through exactly what
              the document requires, it checks answers in realtime, and writes
              the result straight into the document, with none of the guesswork
              or copy-paste errors that come with a blank template.
            </p>
            <p>
              We design and build custom VBA popup forms for SMB's and
              organisations who rely on consistent and accurate documents. The
              automation of this process is an investment that will save time
              and money over a relatively short period.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link href="#contact" className={`btn ${styles.ctaBtn}`}>
              Book a free consultation
            </Link>
            <Link
              href="https://www.officeexperts.com.au/case-studies?site=word"
              className={styles.ctaSecondary}
            >
              See what we build
            </Link>
          </div>

          {/* Stat pills */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>25+</span>
              <span className={styles.statLabel}>Years experience</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Custom built</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNum}>AU-wide</span>
              <span className={styles.statLabel}>Remote &amp; on-site</span>
            </div>
          </div>
        </div>

        <PopupFormsCapabilities />
      </div>
    </section>
  );
};

export default PopupFormsHero;
