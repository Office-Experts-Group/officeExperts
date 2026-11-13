// /app/services/microsoft-power-platform/excel-to-power-bi-migration/(components)/EpbmIntro.jsx

import Link from "next/link";

import EpbmModelSvg from "../(svgs)/EpbmModelSvg";
import {
  EpbmSlowFileArt,
  EpbmVersionsArt,
  EpbmCopyPasteArt,
  EpbmOutOfDateArt,
} from "../(svgs)/EpbmSignArt";

import styles from "@/styles/epbmIntro.module.scss";

const EPBM_INTRO_SIGNS = [
  {
    Art: EpbmSlowFileArt,
    text: "Files take minutes to open, or crash once they get too big",
  },
  {
    Art: EpbmVersionsArt,
    text: "Several versions of the same report are doing the rounds",
  },
  {
    Art: EpbmCopyPasteArt,
    text: "Someone spends hours each month copying and pasting data",
  },
  {
    Art: EpbmOutOfDateArt,
    text: "Reports are already out of date by the time anyone reads them",
  },
];

const EpbmIntro = () => (
  <section
    id="epbm-introduction"
    className={styles.epbmIntro}
    aria-labelledby="epbm-intro-heading"
  >
    <div className={styles.inner}>
      <div className={styles.grid}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>Transform your data</span>
          <h2 id="epbm-intro-heading" className={styles.title}>
            Turn static spreadsheets into{" "}
            <span className={styles.accent}>dynamic dashboards</span>
          </h2>
          <p>
            Power BI takes the best of Excel and turns it into a modern
            reporting platform. Instead of a folder of workbooks, you get
            interactive dashboards that update themselves and can be opened
            securely from anywhere, so decisions are made on current numbers.
          </p>
          <p>
            We’ve helped many organisations make the move. Our
            Microsoft-certified consultants work across the Power Platform, and
            also specialise in{" "}
            <Link href="https://www.excelexperts.com.au">Excel</Link> and the{" "}
            <Link href="/">entire Microsoft suite</Link>, so nothing gets lost
            between the old setup and the new one.
          </p>
        </div>

        <figure className={styles.diagram}>
          <div className={styles.diagramScroll}>
            <div className={styles.diagramInner}>
              <EpbmModelSvg />
            </div>
          </div>
          <figcaption className={styles.caption}>
            Separate workbooks are cleaned and linked into one data model, which
            feeds one shared dashboard.
          </figcaption>
        </figure>
      </div>

      <div className={styles.signs}>
        <h3 className={styles.signsTitle}>
          Signs your reporting has outgrown Excel
        </h3>
        <ul className={styles.signsList}>
          {EPBM_INTRO_SIGNS.map(({ Art, text }) => (
            <li key={text} className={styles.sign}>
              <span className={styles.signArt}>
                <Art />
              </span>
              <p className={styles.signText}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default EpbmIntro;
