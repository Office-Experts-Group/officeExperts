// /app/services/microsoft-access/is-access-right-for-your-company/(components)/IarcGrowth.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/iarcGrowth.module.scss";
import {
  IarcStageSheetsArt,
  IarcStageAccessArt,
  IarcStageServerArt,
  IarcStageWebArt,
} from "../(svgs)/IarcGrowthArt";
import { IarcArrowIcon } from "../(svgs)/IarcIcons";

const IARC_STAGES = [
  {
    id: "sheets",
    name: "Spreadsheets",
    tag: "Where many businesses start",
    fits: "One person owns the file and the data stays small. Quick, flexible and familiar to everyone.",
    moveLabel: "Time to move on if",
    move: "Copies multiply, two people overwrite each other, formulas break or the file takes minutes to open.",
    Art: IarcStageSheetsArt,
    link: { href: "/services/microsoft-excel", text: "Get more from Excel" },
  },
  {
    id: "access",
    name: "Access",
    tag: "Where Access shines",
    fits: "Related records, several people at once, forms for tidy entry and reports on demand, all in one desktop database.",
    moveLabel: "Time to move on if",
    move: "Staff work from home, the data heads towards the file size limit, or things slow down as more people join.",
    Art: IarcStageAccessArt,
    link: {
      href: "/services/database-development-and-solutions",
      text: "Custom Access databases",
    },
    featured: true,
  },
  {
    id: "server",
    name: "Access with SQL Server or Azure",
    tag: "Keep the screens, upgrade the data",
    fits: "Your people keep the Access screens they know. The data moves to a server database that copes with more users, more records and proper backups.",
    moveLabel: "Time to move on if",
    move: "Customers or partners need to log in, or most of your people work on phones and tablets.",
    Art: IarcStageServerArt,
    link: {
      href: "/services/sql-server-and-access-integration",
      text: "Access with SQL Server",
    },
  },
  {
    id: "web",
    name: "A web or cloud app",
    tag: "When it needs to reach everyone",
    fits: "Browser and mobile access for staff, customers or partners, with logins, and room to scale as you grow.",
    moveLabel: "Keep in mind",
    move: "It costs more to build than an Access database, so it needs a clear reason: outside users, many sites or mobile first.",
    Art: IarcStageWebArt,
    link: {
      href: "/services/online-solutions",
      text: "Web and online solutions",
    },
  },
];

const IarcGrowth = () => (
  <section
    id="iarc-growth"
    className={styles.iarcGrowth}
    aria-labelledby="iarc-growth-heading"
  >
    <div className={styles.inner}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>A growth path, not a yes or no</p>
        <h2 id="iarc-growth-heading" className={styles.heading}>
          Where Access sits{" "}
          <span className={styles.accent}>on your growth path</span>
        </h2>
        <p className={styles.lede}>
          The honest answer is rarely “Access or nothing”. Most businesses move
          along a path as they grow, and the skill is knowing which step you are
          on and when the next one is worth the effort.
        </p>
      </header>
    </div>

    <ol
      className={styles.track}
      tabIndex={0}
      aria-label="Growth path from spreadsheets to a web app. Scroll sideways to see every stage."
    >
      {IARC_STAGES.map(
        ({ id, name, tag, fits, moveLabel, move, Art, link, featured }) => (
          <li
            key={id}
            className={`${styles.stage} ${featured ? styles.featuredStage : styles.plainStage}`}
          >
            <div className={styles.rail} aria-hidden="true">
              <span className={styles.node} />
            </div>
            <p className={styles.tag}>{tag}</p>
            <div className={styles.card}>
              <Art className={styles.art} />
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.blockLabel}>Fits when</p>
              <p className={styles.blockText}>{fits}</p>
              <p className={styles.blockLabel}>{moveLabel}</p>
              <p className={styles.blockText}>{move}</p>
              <Link href={link.href} className={styles.stageLink}>
                {link.text}
                <IarcArrowIcon />
              </Link>
            </div>
          </li>
        ),
      )}
    </ol>

    <div className={styles.inner}>
      <p className={styles.hint}>Swipe sideways to see every stage.</p>
      <p className={styles.note}>
        Not sure which step you are on? That is exactly what an assessment
        answers.{" "}
        <a href="#contact" className={styles.noteLink}>
          Ask the Access experts
          <IarcArrowIcon />
        </a>
      </p>
    </div>
  </section>
);

export default IarcGrowth;
