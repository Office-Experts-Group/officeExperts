// /app/services/microsoft-access/is-access-right-for-your-company/(components)/IarcCaseStudy.jsx
import React from "react";

import styles from "@/styles/iarcCaseStudy.module.scss";
import CaseStudyFeature from "@/components/CaseStudyFeature";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

const IARC_FEATURE_SLUG = "film-crew-booking-system-access-nextjs-rebuild";

const IarcCaseStudy = () => {
  const study = getCaseStudyBySlug(IARC_FEATURE_SLUG);
  if (!study) return null;

  return (
    <section
      id="iarc-case-study"
      className={styles.iarcCaseStudy}
      aria-labelledby="iarc-case-study-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>What outgrowing Access looks like</p>
          <h2 id="iarc-case-study-heading" className={styles.heading}>
            When a database{" "}
            <span className={styles.accent}>outgrows its first home</span>
          </h2>
          <p className={styles.lede}>
            A crew booking business ran on an Access 2000 database that only
            worked inside a virtual machine. We moved the data to Azure SQL
            Server, rebuilt the Access front end and gave the website a direct
            database connection.
          </p>
        </header>
        <CaseStudyFeature
          study={study}
          tone="dark"
          imageAlt="Crew booking system rebuilt on Azure SQL Server with a faster Next.js website"
        />
      </div>
    </section>
  );
};

export default IarcCaseStudy;
