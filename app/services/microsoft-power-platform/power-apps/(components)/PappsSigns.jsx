// /app/services/microsoft-power-platform/power-apps/(components)/PappsSigns.jsx
import {
  PappsSpreadsheetArt,
  PappsPaperArt,
  PappsApprovalArt,
  PappsFitArt,
  PappsVersionArt,
} from "../(svgs)/PappsSignArt";
import { PappsCheckIcon } from "../(svgs)/PappsIcons";

import styles from "@/styles/pappsSigns.module.scss";

const PAPPS_SEEN = [
  "A single file only one person understands",
  "Formulas that break when a row is added",
  "Several copies, none of them quite right",
];

const PappsSigns = () => {
  return (
    <section
      className={styles.pappsSigns}
      id="papps-signs"
      aria-labelledby="papps-signs-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="papps-signs-heading" className={styles.heading}>
            Signs it is time for{" "}
            <span className={styles.accent}>a custom app</span>
          </h2>
          <p className={styles.lede}>
            Most of our Power Apps projects start with one of these. If you
            recognise two or more, an app built around your process will
            probably pay off quickly.
          </p>
        </header>

        <div className={styles.bento}>
          <article
            className={`${styles.tile} ${styles.lightTile} ${styles.feature}`}
          >
            <div className={styles.featureArt}>
              <PappsSpreadsheetArt />
            </div>
            <h3 className={styles.tileTitle}>
              Spreadsheets doing a job they were not built for
            </h3>
            <p className={styles.tileText}>
              A spreadsheet is great for working things out. It is not great as
              the place several people enter, approve and report on live
              information.
            </p>
            <p className={styles.seenLabel}>What it often looks like</p>
            <ul className={styles.seen}>
              {PAPPS_SEEN.map((item) => (
                <li key={item}>
                  <span className={styles.seenIcon}>
                    <PappsCheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article
            className={`${styles.tile} ${styles.darkTile} ${styles.paper}`}
          >
            <div className={styles.art}>
              <PappsPaperArt />
            </div>
            <h3 className={styles.tileTitle}>
              Paper forms retyped into a system
            </h3>
            <p className={styles.tileText}>
              Every re-key is a chance for a typo and a delay before anyone can
              act on the information.
            </p>
          </article>

          <article
            className={`${styles.tile} ${styles.accentTile} ${styles.approval}`}
          >
            <div className={styles.art}>
              <PappsApprovalArt />
            </div>
            <h3 className={styles.tileTitle}>Approvals chased by email</h3>
            <p className={styles.tileText}>
              Requests sit in inboxes while the person who asked has no idea
              where they are.
            </p>
          </article>

          <article
            className={`${styles.tile} ${styles.deepTile} ${styles.fit}`}
          >
            <div className={styles.art}>
              <PappsFitArt />
            </div>
            <h3 className={styles.tileTitle}>
              Off-the-shelf software that never quite fits
            </h3>
            <p className={styles.tileText}>
              You pay for features you do not use and still work around the ones
              you need.
            </p>
          </article>

          <article
            className={`${styles.tile} ${styles.lightTile} ${styles.version}`}
          >
            <div className={styles.art}>
              <PappsVersionArt />
            </div>
            <h3 className={styles.tileTitle}>Nobody trusts the numbers</h3>
            <p className={styles.tileText}>
              Two people, two files, two answers. A shared app keeps one record.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PappsSigns;
