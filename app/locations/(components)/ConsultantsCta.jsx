// app/locations/(components)/ConsultantsCta.jsx
import React from "react";
import Link from "next/link";

// Client wrapper that handles the scroll-in animation
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/consultantsCta.module.scss";

const ConsultantsCta = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
      <div className={styles.grid}>
        {/* ── Left: message and main action ── */}
        <div>
          <span className={styles.eyebrow}>Get started</span>

          <h2 className={styles.headline}>
            Need Microsoft expertise in your area?
          </h2>

          <p className={styles.body}>
            Contact us today to discover how our local and remote services can
            help your business get the most from Microsoft Office applications.
          </p>

          <Link href="#contact" className={styles.btn}>
            Get a free consultation
          </Link>
        </div>

        {/* ── Right: direct contact details ── */}
        <div className={styles.panel}>
          <a href="tel:1300102810" className={styles.row}>
            <span className={styles.rowLabel}>Call</span>
            <span className={styles.rowValue}>1300 102 810</span>
          </a>

          <a href="mailto:consult@officeexperts.com.au" className={styles.row}>
            <span className={styles.rowLabel}>Email</span>
            <span className={styles.rowValue}>
              consult@officeexperts.com.au
            </span>
          </a>
        </div>
      </div>
    </AnimateOnScroll>
  </section>
);

export default ConsultantsCta;
