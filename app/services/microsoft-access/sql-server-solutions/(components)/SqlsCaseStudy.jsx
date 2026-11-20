// /app/services/microsoft-access/sql-server-solutions/(components)/SqlsCaseStudy.jsx
import React from "react";

import styles from "@/styles/sqlsCaseStudy.module.scss";
import CaseStudyFeature from "@/components/CaseStudyFeature";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

const SQLS_FEATURE_SLUG = "automated-proposal-generation-in-microsoft";

const SqlsCaseStudy = () => {
  const study = getCaseStudyBySlug(SQLS_FEATURE_SLUG);
  if (!study) return null;

  return (
    <section
      id="sqls-case-study"
      className={styles.sqlsCaseStudy}
      aria-labelledby="sqls-case-study-heading"
    >
      <div className={styles.inner}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>In the real world</span>
          <h2 id="sqls-case-study-heading" className={styles.title}>
            From Access to SQL Server,{" "}
            <span className={styles.accent}>without starting again</span>
          </h2>
          <p className={styles.lede}>
            A window installer ran proposals, quotes and contracts from an
            Access database. As the database grew we moved the backend to SQL
            Server and kept the workflow staff already used.
          </p>
        </header>

        <CaseStudyFeature
          study={study}
          tone="dark"
          imageAlt="Proposal documents generated from an Access database on a SQL Server backend"
        />
      </div>
    </section>
  );
};

export default SqlsCaseStudy;
