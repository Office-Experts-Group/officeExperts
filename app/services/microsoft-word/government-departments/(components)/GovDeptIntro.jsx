// /services/microsoft-word/government-departments/(components)/GovDeptIntro.jsx
import { DepartmentIcon } from "../(svgs)/DepartmentIcon";

import styles from "@/styles/govDeptIntro.module.scss";

const GovDeptIntro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: custom SVG, replaces the previous stock photo ── */}
        <div className={styles.iconWrap}>
          <DepartmentIcon />
        </div>

        {/* ── Right: positioning copy ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Public Sector Document Solutions
          </span>
          <h1 className={styles.heading}>
            How we support{" "}
            <span className={styles.accent}>government departments</span>
          </h1>
          <p>
            Our team of Word programmers and designers have worked with state
            and federal government departments for over 25 years. We pride
            ourselves on building accessible document templates that cater for
            potentially hundreds of users, whilst ensuring adherence to strict
            formatting and accessibility requirements, so that the documents
            will look and behave identically no matter who creates or edits
            them.
          </p>
          <p>
            We take document accessibility seriously and can build templates
            with WCAG 2.1 AA in mind from the outset, alongside consistent
            formatting, protected corporate identity, and the version control
            that a department-wide rollout needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GovDeptIntro;
