// /services/microsoft-word/custom-toolbars-and-ribbons/(components)/ToolbarsIntro.jsx
import Link from "next/link";

// Fade-up on scroll, shared across the site group
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Word window illustration with a custom Formatting tab
import { RibbonSVG } from "../(svgs)/RibbonSVG";

import styles from "@/styles/toolbarsIntro.module.scss";

const ToolbarsIntro = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Copy ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Custom Built</p>
          <h2 className={styles.heading}>
            Enhanced Toolbars &amp; Ribbons for{" "}
            <span className={styles.accent}>Seamless Document Control</span>
          </h2>
          <p className={styles.text}>
            Our team of Word design experts will deliver your{" "}
            <Link href="/services/microsoft-word/corporate-global-template-solution">
              document templates
            </Link>{" "}
            with levels of automation that can include custom toolbars and
            ribbons that will improve your staff productivity, bringing cost
            savings, while improving consistency and overall quality of your
            business documentation.
          </p>
          <a href="#contact" className="btn">
            Discuss your Word ribbon
          </a>
        </div>
      </AnimateOnScroll>

      {/* ── Illustration ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <div className={styles.visual}>
          <RibbonSVG />
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ToolbarsIntro;
