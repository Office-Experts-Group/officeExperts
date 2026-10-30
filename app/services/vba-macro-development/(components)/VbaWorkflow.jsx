// /services/vba-macro-development/(components)/VbaWorkflow.jsx
// Server component. A four-stage pipeline showing VBA driving one Office application from another.
// The stages are genuinely sequential, so they are numbered.
import Link from "next/link";

import {
  VbaExcelSvg,
  VbaWordSvg,
  VbaPdfSvg,
  VbaOutlookSvg,
} from "../(svgs)/VbaAppSvgs";
import { VbaArrowSvg } from "../(svgs)/VbaArrowSvg";

import styles from "@/styles/vbaWorkflow.module.scss";

const stages = [
  {
    num: "01",
    Icon: VbaExcelSvg,
    title: "Capture",
    text: "A form in Excel or Access collects the details and checks them before anything is created.",
  },
  {
    num: "02",
    Icon: VbaWordSvg,
    title: "Build",
    text: "VBA opens your Word template or PowerPoint deck and fills it from the data, using your approved styles.",
  },
  {
    num: "03",
    Icon: VbaPdfSvg,
    title: "Convert",
    text: "The finished file is saved as a PDF and filed in the right folder with the right name.",
  },
  {
    num: "04",
    Icon: VbaOutlookSvg,
    title: "Send",
    text: "Outlook creates the email, attaches the file and sends it, or leaves it open for a final check.",
  },
];

const VbaWorkflow = () => (
  <section className={styles.section} id="workflow">
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>Applications working together</span>
        <h2 className={styles.heading}>
          Start in one application,{" "}
          <span className={styles.accent}>finish in another.</span>
        </h2>
        <p className={styles.lede}>
          VBA can drive one Office application from inside another. That is how
          a database record becomes a finished Word proposal, a spreadsheet
          becomes a branded presentation, or a form becomes an email with the
          right attachment.
        </p>
      </header>

      <ol className={styles.stages}>
        {stages.map(({ num, Icon, title, text }) => (
          <li key={num} className={styles.stage}>
            <div className={styles.iconWrap}>
              <Icon className={styles.icon} />
            </div>
            <span className={styles.num}>{num}</span>
            <h3 className={styles.stageTitle}>{title}</h3>
            <p className={styles.stageText}>{text}</p>
          </li>
        ))}
      </ol>

      <aside className={styles.callout}>
        <div className={styles.calloutText}>
          <span className={styles.calloutLabel}>In practice</span>
          <p>
            One of our clients replaced hand-built 50-page proposals with an
            Access database, later moved to SQL Server, that generates the full
            Word document from the sections staff select. Project details, quote
            tables, data and images all come through automatically.
          </p>
        </div>
        <Link
          href="/case-studies/automated-proposal-generation-in-microsoft"
          className={styles.calloutLink}
        >
          Read the proposal generator case study
          <VbaArrowSvg />
        </Link>
      </aside>
    </div>
  </section>
);

export default VbaWorkflow;
