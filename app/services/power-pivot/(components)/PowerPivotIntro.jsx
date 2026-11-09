// app/services/power-pivot/(components)/PowerPivotIntro.jsx
// First content section under the hero: what we do for clients, with the row-limit illustration.
// Server component, no client JavaScript required.
import Link from "next/link";

// Compiled CSS module (source: styles/powerPivotIntro.module.scss)
import styles from "@/styles/powerPivotIntro.module.scss";
// Decorative illustration stored with the route
import { RowLimitSvg } from "../(svgs)/RowLimitSvg";

const PowerPivotIntro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Decorative, so it sits first in the markup and is hidden from assistive tech */}
        <div className={styles.visual} aria-hidden="true">
          <RowLimitSvg />
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Streamline your data. Automate your workflow.
          </span>
          <h2 className={styles.heading}>
            Advanced data models that{" "}
            <span className={styles.accent}>drive business insight.</span>
          </h2>

          <div className={styles.body}>
            <p>
              At Office Experts Group, our Power Pivot consultants help
              businesses turn raw data into strategic insight. By creating
              robust data models, building powerful calculations and enabling
              self-service analytics, we ensure your team has the tools they
              need to make informed decisions, fast.
            </p>
            <p>
              With decades of experience across{" "}
              <Link href="https://www.excelexperts.com.au/">Excel</Link>,{" "}
              <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi">
                Power BI
              </Link>{" "}
              and the Microsoft data stack, we bring clarity and structure to
              even the most complex data environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerPivotIntro;
