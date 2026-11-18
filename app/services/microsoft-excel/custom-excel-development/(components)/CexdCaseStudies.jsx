// /app/services/microsoft-excel/custom-excel-development/(components)/CexdCaseStudies.jsx
import Link from "next/link";

import CaseStudyFeature from "@/components/CaseStudyFeature";
import styles from "@/styles/cexdCaseStudies.module.scss";

import { CexdArrowIcon } from "../(svgs)/CexdIcons";

// Panel colour and image side alternate down the page.
const CEXD_FEATURE_LAYOUT = [
  { tone: "dark", reverse: false },
  { tone: "light", reverse: true },
  { tone: "accentDark", reverse: false },
];

// Alt text per slug. Check these against the images in /public/case-studies.
const CEXD_IMAGE_ALTS = {
  "food-manufacturer-excel-costing-workbook":
    "Single Excel Costing Workbook replacing disconnected costing files",
};

// studies: case study objects from caseStudies.js, built by slug in page.js.
const CexdCaseStudies = ({ studies = [] }) => {
  if (!studies.length) return null;

  return (
    <section
      className={styles.cexdCaseStudies}
      id="cexd-case-studies"
      aria-labelledby="cexd-case-studies-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Case studies</span>
          <h2 id="cexd-case-studies-heading" className={styles.heading}>
            Custom Excel development projects,{" "}
            <span className={styles.accent}>delivered to happy clients.</span>
          </h2>
          <p className={styles.text}>
            Three real builds, from a costing system that replaced a pile of
            disconnected files to a bloated linked workbook that now refreshes
            in one click.
          </p>
        </header>

        <div className={styles.features}>
          {studies.map((study, index) => {
            const layout =
              CEXD_FEATURE_LAYOUT[index % CEXD_FEATURE_LAYOUT.length];
            return (
              <CaseStudyFeature
                key={study.slug}
                study={study}
                tone={layout.tone}
                reverse={layout.reverse}
                imageAlt={CEXD_IMAGE_ALTS[study.slug]}
              />
            );
          })}
        </div>

        <Link href="/case-studies" className={styles.allLink}>
          Read all case studies
          <CexdArrowIcon />
        </Link>
      </div>
    </section>
  );
};

export default CexdCaseStudies;
