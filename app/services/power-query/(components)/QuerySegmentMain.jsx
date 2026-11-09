// app/services/power-query/(components)/PageSegmentMain.jsx

import Link from "next/link";

import styles from "@/styles/querySegmentMain.module.scss";
import WhatWeDo from "../(svgs)/WhatWeDo";

const QuerySegmentMain = () => {
  return (
    <>
      <div className={styles.heroPad}></div>
      <section className={styles.section}>
        <div className={styles.inner}>
          {/* ── Left column: headline + body ── */}
          <div className={styles.leftCol}>
            <span className={styles.eyebrow}>Power Query Consulting</span>
            <h1 className={styles.headline}>
              Stop cleaning data manually.{" "}
              <span className={styles.accent}>Automate it once.</span>
            </h1>
            <div className={styles.body}>
              <p>
                Too many businesses spend hours every week doing the same
                thing... Pulling data from different places, cleaning it,
                reformatting it, and pasting it into a report that will be out
                of date before anyone reads it. Power Query eliminates that
                entirely.
              </p>
              <p>
                At Office Experts Group, we build Power Query solutions that
                connect directly to your data sources and transform everything
                automatically on a schedule.
              </p>
            </div>

            <Link href="#contact" className="btn">
              Talk to a consultant
            </Link>
          </div>

          <WhatWeDo />
        </div>
      </section>
    </>
  );
};

export default QuerySegmentMain;
