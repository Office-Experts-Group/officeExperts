import React from "react";
import Link from "next/link";

import IntroDropdowns from "./IntroDropdowns";
import Counter from "./Counter";

import styles from "../../../../../styles/bpaIntro.module.css";

const BPAIntro = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.grid} ${styles.gridVisible}`}>
        <div className={styles.leftCol}>
          <div className={styles.eyebrow}>Office Experts</div>
          <h2 className={styles.headline}>
            Your processes are only as fast as the{" "}
            <span className={styles.accentWord}>slowest manual step.</span>
          </h2>
          <div className={styles.body}>
            <p>
              Most Australian businesses are running a mix of legacy automation
              and newer Microsoft 365 tools, but the two worlds can struggle to
              combine. This alone is at best inconvenient and at worst, a
              critical error waiting to happen.
            </p>
            <p>
              We map your end-to-end processes and build automated solutions
              that fills those gaps. With tools like{" "}
              <Link
                href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate"
                className={styles.bodyLink}
              >
                Power Automate
              </Link>{" "}
              to route and act, and Copilot to make approvals intelligent. The
              results are not just faster processes , it&rsquo;s processes that
              now run entirely in the background, freeing you to focus on other
              tasks.
            </p>
          </div>

          {/* Stat strip lives here in the server component */}
          <div className={styles.statStrip}>
            <div className={styles.stat}>
              <Counter target={1000} suffix="+" />
              <span className={styles.statLabel}>Processes automated</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <Counter target={25} suffix="+" />
              <span className={styles.statLabel}>Years Established</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <Counter target={100} suffix="%" />
              <span className={styles.statLabel}>Australian owned</span>
            </div>
          </div>
        </div>
        <IntroDropdowns />
      </div>
    </section>
  );
};

export default BPAIntro;
