// /app/services/microsoft-power-platform/microsoft-fabric/(components)/MfabFitCheck.jsx

import Link from "next/link";

import styles from "@/styles/mfabFitCheck.module.scss";
import { MfabFitArt } from "../(svgs)/MfabFitArt";
import { MfabArrowIcon, MfabDashIcon } from "../(svgs)/MfabIcons";

const MFAB_SIGNS = [
  {
    art: "systems",
    title: "Your reports pull from three or more systems",
    text: "and someone stitches them together by hand every month.",
  },
  {
    art: "excel",
    title: "Spreadsheets have become your database",
    text: "with links between workbooks that break when a file moves.",
  },
  {
    art: "realtime",
    title: "You need data that’s minutes old, not days",
    text: "for stock levels, bookings, equipment or fraud checks.",
  },
  {
    art: "legacy",
    title: "You run Synapse, SQL Server or an older warehouse",
    text: "and want to simplify before it’s due for replacement.",
  },
];

const MFAB_NOT_YET = [
  "All of your reporting comes from one system, and its built-in reports cover what you need.",
  "Your data volumes are small and your Power BI reports already run quickly.",
  "Nobody owns your data yet. Worth sorting out first, and we can help.",
];

const MfabFitCheck = () => {
  return (
    <section
      className={styles.mfabFitCheck}
      id="mfab-fit-check"
      aria-labelledby="mfab-fit-check-heading"
    >
      <div className={styles.inner}>
        <div className={styles.main}>
          <h2 id="mfab-fit-check-heading" className={styles.heading}>
            Is Microsoft Fabric{" "}
            <span className={styles.accent}>right for you?</span>
          </h2>
          <p className={styles.text}>
            Fabric is powerful, but it isn’t the answer to every reporting
            problem. These are the signs we look for when an organisation is
            ready for it.
          </p>

          <ul className={styles.signs}>
            {MFAB_SIGNS.map(({ art, title, text }) => (
              <li key={title} className={styles.sign}>
                <span className={styles.signArt}>
                  <MfabFitArt type={art} />
                </span>
                <p>
                  <strong>{title}</strong> {text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.notYet} aria-labelledby="mfab-not-yet-heading">
          <h3 id="mfab-not-yet-heading" className={styles.notYetTitle}>
            You may not need Fabric yet if…
          </h3>
          <ul className={styles.notYetList}>
            {MFAB_NOT_YET.map((item) => (
              <li key={item}>
                <MfabDashIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className={styles.alternatives}>
            <Link
              href="/services/microsoft-power-platform/microsoft-power-bi"
              className={styles.altLink}
            >
              Start with Power BI <MfabArrowIcon />
            </Link>
            <Link
              href="/services/microsoft-power-platform/excel-to-power-bi-migration"
              className={styles.altLink}
            >
              Move off spreadsheets first <MfabArrowIcon />
            </Link>
          </div>

          <p className={styles.honest}>
            Not sure which side you’re on? We’ll give you a straight answer.
          </p>
          <a href="#contact" className={`btn ${styles.ctaBtn}`}>
            Ask us
          </a>
        </aside>
      </div>
    </section>
  );
};

export default MfabFitCheck;
