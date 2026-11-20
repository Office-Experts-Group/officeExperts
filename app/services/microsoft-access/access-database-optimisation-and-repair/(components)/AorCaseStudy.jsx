// /app/services/microsoft-access/access-database-optimisation-and-repair/(components)/AorCaseStudy.jsx
import React from "react";

import CaseStudyFeature from "@/components/CaseStudyFeature";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

import styles from "@/styles/aorCaseStudy.module.scss";

const AOR_FEATURE_SLUG = "film-crew-booking-system-access-nextjs-rebuild";

const AorCaseStudy = () => {
  const study = getCaseStudyBySlug(AOR_FEATURE_SLUG);

  if (!study) return null;

  return (
    <section
      id="aor-case-study"
      className={styles.aorCaseStudy}
      aria-labelledby="aor-case-study-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>When Access has reached its limits</p>
          <h2 id="aor-case-study-heading" className={styles.heading}>
            Rescuing an Access database{" "}
            <span className={styles.accent}>that was stuck in the past</span>
          </h2>
          <p className={styles.text}>
            Sometimes tuning isn’t enough, and the right fix is to move the data
            somewhere stronger while keeping the Access screens people already
            know. This is one of our bigger rescues.
          </p>
        </header>

        <CaseStudyFeature
          study={study}
          tone="dark"
          imageAlt="Screens from the rebuilt crew booking system"
        />
      </div>
    </section>
  );
};

export default AorCaseStudy;
