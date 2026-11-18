// /app/services/microsoft-excel/excel-formulas-and-custom-formulas/(components)/FormulasCaseStudy.jsx

import styles from "@/styles/formulasCaseStudy.module.scss";
import CaseStudyFeature from "@/components/CaseStudyFeature";

// Wraps the shared CaseStudyFeature panel (an <h3>) in a section with its own
// <h2>. page.js passes the study in from caseStudies.js.
const FormulasCaseStudy = ({ study }) => {
  if (!study) return null;

  return (
    <section
      id="frm-case-study"
      className={styles.formulasCaseStudy}
      aria-labelledby="frm-case-study-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Case Study</span>
          <h2 id="frm-case-study-heading" className={styles.heading}>
            Excel formulas <span className={styles.accent}>at work.</span>
          </h2>
          <p className={styles.lede}>
            Costs that roll up on their own, margins that recalculate by state
            and one workbook people can actually trust.
          </p>
        </header>

        <CaseStudyFeature
          study={study}
          tone="accentDark"
          imageAlt="Single Excel Costing Workbook replacing disconnected costing files"
        />
      </div>
    </section>
  );
};

export default FormulasCaseStudy;
