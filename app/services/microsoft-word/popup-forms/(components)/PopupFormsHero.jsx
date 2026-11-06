// app/services/microsoft-word/popup-forms/(components)/PopupFormsHero.jsx
import Link from "next/link";

import styles from "@/styles/popupFormsHero.module.scss";

import PopupFormsCapabilities from "./PopupFormsCapabilities";

// ── Component ─────────────────────────────────────────────────────────────────
// Server component — only the expandable list on the right needs interactivity,
// so that part alone is split into a "use client" child (PopupFormsCapabilities).
const PopupFormsHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        {/* ── Left column ── */}
        <div className={styles.leftCol}>
          <h1 className={styles.heading}>
            Popup forms that guide, validate,{" "}
            <span className={styles.accent}>and protect.</span>
          </h1>

          <div className={styles.body}>
            <p>
              A popup form can be much more than a simple data entry box. A
              custom built popup form will guide your staff through exactly what
              the document requires, it checks answers in realtime, and writes
              the result straight into the document, with none of the guesswork
              or copy-paste errors that come with a blank template.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link href="#contact" className={`btn ${styles.ctaBtn}`}>
              Book a free consultation
            </Link>
            <Link
              href="/case-studies?site=word"
              className={styles.ctaSecondary}
            >
              See what we build
            </Link>
          </div>
        </div>

        <PopupFormsCapabilities />
      </div>
    </section>
  );
};

export default PopupFormsHero;
