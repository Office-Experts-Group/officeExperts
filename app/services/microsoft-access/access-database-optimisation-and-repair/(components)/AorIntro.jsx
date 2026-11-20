// /app/services/microsoft-access/access-database-optimisation-and-repair/(components)/AorIntro.jsx
import React from "react";
import Link from "next/link";

import AorIntroDiagram from "../(svgs)/AorIntroDiagram";
import { AOR_SIGN_ART } from "../(svgs)/AorSignArt";
import { ArrowIcon } from "../(svgs)/AorIcons";

import styles from "@/styles/aorIntro.module.scss";

const AOR_SIGNS = [
  { art: "form", text: "Forms taking minutes to open instead of seconds" },
  { art: "query", text: "Queries timing out or running extremely slowly" },
  { art: "crash", text: "Frequent application crashes or freezes" },
  { art: "error", text: "Cryptic error messages appearing regularly" },
  {
    art: "growth",
    text: "A database file that keeps growing out of proportion",
  },
  { art: "users", text: "Performance getting worse as more people use it" },
];

const AorIntro = () => {
  return (
    <section className={styles.aorIntro} aria-labelledby="aor-intro-heading">
      <div className={styles.inner}>
        <div className={styles.explainer}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Understanding database performance</p>
            <h2 id="aor-intro-heading" className={styles.heading}>
              Why do Access databases{" "}
              <span className={styles.accent}>slow down over time?</span>
            </h2>
            <p className={styles.text}>
              Even a well-built Access database can get slower with age. It
              rarely happens overnight. Temporary objects build up, deleted
              records leave empty space behind, and growing data outgrows the
              indexes that once kept things quick. Early design choices make it
              worse, especially if the database was never built for the amount
              of data and the number of people it handles today.
            </p>
            {/* <p className={`${styles.goodNews} ${styles.text}`}>
              <strong>The good news?</strong> Most performance problems can be
              fixed. Our database specialists have restored speed and
              reliability to hundreds of struggling Access databases across
              Australia.
            </p> */}
            <p className={styles.text}>
              If two or more of these sound familiar, a health check will
              usually pay for itself.
            </p>
          </div>

          {/* <figure className={styles.figure}>
            <div className={styles.diagramScroll}>
              <div className={styles.diagramInner}>
                <AorIntroDiagram />
              </div>
            </div>
            <figcaption className={styles.caption}>
              Compact and repair clears the empty space and leftovers, but it
              can’t fix design problems. That is where the rest of our work
              comes in.
            </figcaption>
          </figure> */}
        </div>

        <div className={styles.signs} id="aor-signs">
          {/* <div className={styles.signsHeader}> */}
          {/* <h3 className={styles.signsHeading}>
              Signs your database is overdue for attention
            </h3> */}
          {/* <p className={styles.signsText}>
              If two or more of these sound familiar, a health check will
              usually pay for itself.
            </p> */}
          {/* </div> */}
          <ul className={styles.signsGrid}>
            {AOR_SIGNS.map((sign) => {
              const Art = AOR_SIGN_ART[sign.art];
              return (
                <li key={sign.art} className={styles.sign}>
                  <div className={styles.signArt}>
                    <Art />
                  </div>
                  <p>{sign.text}</p>
                </li>
              );
            })}
          </ul>
          <Link href="#contact" className={styles.arrowLink}>
            Book a database health check <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AorIntro;
