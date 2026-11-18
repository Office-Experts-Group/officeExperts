// /app/services/microsoft-excel/custom-excel-development/(components)/CexdIndustries.jsx
import Link from "next/link";

import styles from "@/styles/cexdIndustries.module.scss";

import { CexdArrowIcon } from "../(svgs)/CexdIcons";
import {
  CexdFinanceIcon,
  CexdLogisticsIcon,
  CexdHealthcareIcon,
  CexdConstructionIcon,
  CexdProfessionalIcon,
  CexdGovernmentIcon,
} from "../(svgs)/CexdIndustryIcons";

const CEXD_INDUSTRIES = [
  {
    id: "finance",
    industry: "Finance & Accounting",
    tag: "Automation",
    challenge:
      "Month-end close processes are often spread across multiple workbooks, with staff manually copying figures, reconciling by hand, and chasing approvals via email. The risk of error grows exponentially with every manual input.",
    capability:
      "We can consolidate your reporting into a single structured workbook, automated data pulls from source files, built-in variance flagging, and a one-click output ready for sign-off. The kind of work that currently takes days can often be reduced to hours.",
    Icon: CexdFinanceIcon,
  },
  {
    id: "logistics",
    industry: "Logistics & Operations",
    tag: "Custom UI",
    challenge:
      "Scheduling and dispatch across large teams is frequently managed in shared spreadsheets with no access controls, no conflict detection, and nothing to stop someone overwriting another person’s work.",
    capability:
      "We build VBA-driven scheduling and operations tools with user-level access controls, conflict highlighting, and automated outputs. We simplify day-to-day operations like run sheets, route summaries, or automated notifications to your team.",
    Icon: CexdLogisticsIcon,
  },
  {
    id: "healthcare",
    industry: "Healthcare & Allied Health",
    tag: "Data Integration",
    challenge:
      "Practices inevitably re-enter the same patient or clinical data across multiple systems, with paper forms, internal spreadsheets, and practice management software. It’s not only time-consuming but also a common source of errors.",
    capability:
      "We can build structured Excel intake forms with dropdown validation and automated formatting, with export outputs that map directly to your practice management system’s import format.",
    Icon: CexdHealthcareIcon,
  },
  {
    id: "construction",
    industry: "Construction & Engineering",
    tag: "Rebuild & Documentation",
    challenge:
      "Estimating and tender pricing workbooks are often built by one person and never properly documented. When that person moves on, the business is left with a critical tool no one else can safely modify or audit.",
    capability:
      "We can document existing workbook logic, rebuild spreadsheets with named ranges, formula comments, and protected inputs, and create interfaces that are accessible to your wider team.",
    Icon: CexdConstructionIcon,
  },
  {
    id: "professional",
    industry: "Professional Services",
    tag: "Office Integration",
    challenge:
      "Producing client-facing reports often means manually copying figures into a Word or PowerPoint template, reformatting charts, and double-checking numbers.",
    capability:
      "We can automate the flow from your Excel data directly into formatted Word or PowerPoint reports, including live figures, regenerated charts, and brand-consistent formatting produced at the click of a button.",
    Icon: CexdProfessionalIcon,
  },
  {
    id: "government",
    industry: "Government & Not-for-Profit",
    tag: "Reporting Automation",
    challenge:
      "Grant acquittal and compliance reporting frequently involves pulling figures from multiple cost-centre spreadsheets maintained by different teams and consolidating them into a single submission.",
    capability:
      "We can build workbooks with standardised input templates, automated collection logic across teams, and formatted output ready for submission.",
    Icon: CexdGovernmentIcon,
  },
];

const CexdIndustries = () => (
  <section
    className={styles.cexdIndustries}
    id="cexd-industries"
    aria-labelledby="cexd-industries-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.eyebrow}>Industry applications</span>
          <h2 id="cexd-industries-heading" className={styles.heading}>
            Problems we solve,{" "}
            <span className={styles.accent}>across every sector.</span>
          </h2>
        </div>
        <p className={styles.headerBody}>
          Every industry has its own processes, systems, and reporting
          requirements. What works for a construction company likely will not
          work as well for a healthcare provider or government department.
          That’s why our clients ask us to design solutions focused on their
          industry.
        </p>
      </header>

      <div className={styles.grid}>
        {CEXD_INDUSTRIES.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>
                <item.Icon />
              </span>
              <div className={styles.cardMeta}>
                <span className={styles.cardTag}>{item.tag}</span>
                <h3 className={styles.cardIndustry}>{item.industry}</h3>
              </div>
            </div>

            <div className={styles.block}>
              <p className={styles.blockLabel}>A common challenge</p>
              <p className={styles.blockText}>{item.challenge}</p>
            </div>

            <div className={styles.solution}>
              <p className={styles.solutionLabel}>How we can help</p>
              <p className={styles.blockText}>{item.capability}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          Don’t see your industry here?{" "}
          <strong>We work across every sector.</strong> If your team is spending
          time on something Excel should be doing for them, we can almost
          certainly build a better way.
        </p>
        <Link href="#contact" className={styles.footerLink}>
          Tell us about your project
          <CexdArrowIcon />
        </Link>
      </div>
    </div>
  </section>
);

export default CexdIndustries;
