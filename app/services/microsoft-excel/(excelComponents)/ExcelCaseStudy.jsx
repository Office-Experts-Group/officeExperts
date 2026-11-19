// /app/services/microsoft-excel/(components)/ExcelCaseStudy.jsx
// One featured Excel case study, built from caseStudies.js by slug so the
// text is never copied by hand. More case studies follow in RelatedLinks.

import styles from "@/styles/excelCaseStudy.module.scss";

import CaseStudyFeature from "@/components/CaseStudyFeature";
import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

const FEATURED_SLUG = "community-services-excel-consolidation-rebuild";

const ExcelCaseStudy = () => {
  const study = getCaseStudyBySlug(FEATURED_SLUG);
  if (!study) return null;

  return (
    <section
      id="excel-case-study"
      className={styles.excelCaseStudy}
      aria-labelledby="excel-case-study-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Case study</span>
          <h2 id="excel-case-study-heading" className={styles.heading}>
            From a 400MB workbook{" "}
            <span className={styles.accent}>to one refresh button</span>
          </h2>
          <p className={styles.lead}>
            A typical example of what happens when a spreadsheet outgrows the
            way it was built, and what changes once it’s rebuilt properly.
          </p>
        </header>

        <CaseStudyFeature
          study={study}
          tone="dark"
          imageAlt="Rebuilt Excel workbook consolidating four locations with Power Query"
        />
      </div>
    </section>
  );
};

export default ExcelCaseStudy;
