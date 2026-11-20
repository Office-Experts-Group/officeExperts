// /app/services/microsoft-access/access-database-optimisation-and-repair/(components)/AorProcess.jsx
import React from "react";

import {
  AorBackupArt,
  AorDiagnoseArt,
  AorFixArt,
  AorHandoverArt,
} from "../(svgs)/AorProcessArt";

import styles from "@/styles/aorProcess.module.scss";

const AOR_STEPS = [
  {
    key: "backup",
    title: "Back up and triage",
    text: "We take a safe copy of your database first, so nothing we do puts your data at risk. Then we ask your users what is slow, when it happens and what they have already tried.",
    Art: AorBackupArt,
  },
  {
    key: "diagnose",
    title: "Diagnose",
    text: "We test the file, tables, queries, forms and code, and look at the network and the PCs too. You get a clear list of what is slowing things down, in order of impact.",
    Art: AorDiagnoseArt,
  },
  {
    key: "fix",
    title: "Fix, quick wins first",
    text: "We repair, compact, index, tune and clean up code, starting with the changes that give the biggest gain for the least effort. Bigger changes only go ahead if you want them.",
    Art: AorFixArt,
  },
  {
    key: "handover",
    title: "Test and hand over",
    text: "We check the results against your real data and real users, then agree a maintenance plan so the slowdown doesn’t creep back.",
    Art: AorHandoverArt,
  },
];

const AorProcess = () => {
  return (
    <section
      id="aor-process"
      className={styles.aorProcess}
      aria-labelledby="aor-process-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>How we work</p>
          <h2 id="aor-process-heading" className={styles.heading}>
            How we <span className={styles.accent}>repair and optimise</span>{" "}
            your database
          </h2>
          <p className={styles.subtitle}>
            Every job follows the same four steps, so you always know what is
            happening and what comes next.
          </p>
        </header>

        <div
          className={styles.scroller}
          role="region"
          aria-label="The four steps of an Access database repair"
          tabIndex={0}
        >
          <ul className={styles.track}>
            {AOR_STEPS.map(({ key, title, text, Art }) => (
              <li key={key} className={styles.step}>
                <div className={styles.art}>
                  <Art />
                </div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AorProcess;
