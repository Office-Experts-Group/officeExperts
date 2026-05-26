// app/services/power-query/(components)/PageSegmentMain.jsx

import Link from "next/link";

import styles from "../../../../styles/querySegmentMain.module.scss";
import WhatWeDo from "../(svgs)/WhatWeDo";

const QuerySegmentMain = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left column: headline + body ── */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>Power Query Consulting</span>
          <h2 className={styles.headline}>
            Stop cleaning data manually.{" "}
            <span className={styles.accent}>Automate it once.</span>
          </h2>
          <div className={styles.body}>
            <p>
              Too many businesses spend hours every week doing the same thing...
              Pulling data from different places, cleaning it, reformatting it,
              and pasting it into a report that will be out of date before
              anyone reads it. Power Query eliminates that entirely.
            </p>
            <p>
              At Office Experts Group, we build Power Query solutions that
              connect directly to your data sources and transform everything
              automatically on a schedule. Your reports are always current,
              always consistent, and no longer dependent on someone doing it by
              hand.
            </p>
          </div>

          {/* Stat strip */}
          <div className={styles.statStrip}>
            <div className={styles.stat}>
              <span className={styles.statValue}>25+</span>
              <span className={styles.statLabel}>Years established</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Australian owned</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>1,000+</span>
              <span className={styles.statLabel}>Projects delivered</span>
            </div>
          </div>

          <Link href="#contact" className="btn">
            Talk to a consultant
          </Link>
        </div>

        <WhatWeDo />
      </div>
    </section>
  );
};

export default QuerySegmentMain;
