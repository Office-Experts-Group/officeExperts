// /services/microsoft-word/custom-toolbars-and-ribbons/(components)/ToolbarsLifecycle.jsx

// Fade-up on scroll, shared across the site group
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Draft > edit > approve > publish track with the supporting custom components
import { LifecycleSVG } from "../(svgs)/LifecycleSVG";

import styles from "@/styles/toolbarsLifecycle.module.scss";

const ToolbarsLifecycle = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Document lifecycle</p>
          <h2 className={styles.heading}>
            Custom Document Components for{" "}
            <span className={styles.accent}>Tailored Solutions</span>
          </h2>
          <p className={styles.text}>
            Our custom components streamline the entire document lifecycle,
            from drafting and editing through to approval and publishing.
            Automated features such as pre-populated templates, standardised
            headers and footers, and context-sensitive toolbars mean your staff
            can create polished, professional documents.
          </p>
        </header>
      </AnimateOnScroll>

      {/* ── Lifecycle diagram ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <div className={styles.card}>
          <LifecycleSVG />
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ToolbarsLifecycle;
