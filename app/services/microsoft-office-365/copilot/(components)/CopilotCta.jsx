// app/services/microsoft-office-365/copilot/(components)/CopilotCta.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

// Import compiled CSS module (not the .scss source)
import styles from "../../../../../styles/copilotCta.module.css";

// ─────────────────────────────────────────────
// What the free assessment covers
// ─────────────────────────────────────────────
const includes = [
  "Review your Microsoft 365 setup",
  "Confirm Copilot readiness",
  "Identify highest-value teams and roles",
  "Provide a clear deployment cost estimate",
];

const CopilotCta = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.card}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Get started</span>

          <h2 className={styles.headline}>
            Free Copilot assessment... No strings attached.
          </h2>

          <p className={styles.body}>
            We&rsquo;ll look at your Microsoft 365 environment, let you know if
            you&rsquo;re ready for Copilot as is, and lay out the deployment
            costs. No sales pitch, just straightforward advice from people
            who&rsquo;ve been working with Microsoft tech for 25+ years.
          </p>

          <ul className={styles.list}>
            {includes.map((item) => (
              <li key={item} className={styles.listItem}>
                <span className={styles.check} aria-hidden="true">
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Link href="#contact" className={styles.btnPrimary}>
              Get a Free Assessment
            </Link>
            <a href="tel:1300102810" className={styles.btnSecondary}>
              Call 1300 102 810
            </a>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  </section>
);

export default CopilotCta;
