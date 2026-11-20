// /app/services/microsoft-access/sql-server-solutions/(components)/SqlsMigration.jsx
import React from "react";

import styles from "@/styles/sqlsMigration.module.scss";
import {
  SqlsBuildArt,
  SqlsLaunchArt,
  SqlsMoveArt,
  SqlsPlanArt,
  SqlsRelinkArt,
  SqlsReviewArt,
} from "../(svgs)/SqlsStepArt";

const SQLS_STEPS = [
  {
    title: "Review your database",
    text: "We look at your tables, queries, forms and code, and at how many people use it, to see what will move cleanly and what needs attention.",
    Art: SqlsReviewArt,
  },
  {
    title: "Plan the move",
    text: "We map Access data types to SQL Server, agree timing and a way back if needed, and decide where the server will live: on your premises or in Azure.",
    Art: SqlsPlanArt,
  },
  {
    title: "Build the SQL Server tables",
    text: "We create the tables, keys, relationships and indexes, tidying data types and naming along the way so the new backend is clean.",
    Art: SqlsBuildArt,
  },
  {
    title: "Move and check the data",
    text: "Records are copied across, then counted and compared against the originals so nothing goes missing on the way.",
    Art: SqlsMoveArt,
  },
  {
    title: "Relink and tune Access",
    text: "Your Access front end is pointed at SQL Server, and slow queries and forms are reworked so the heavy lifting happens on the server.",
    Art: SqlsRelinkArt,
  },
  {
    title: "Test, launch and support",
    text: "Real users try it before go-live, then we stay on hand through the first weeks and for ongoing support afterwards.",
    Art: SqlsLaunchArt,
  },
];

const SQLS_KEEP = ["Your forms", "Your reports", "Your VBA and macros"];

const SqlsMigration = () => (
  <section
    id="sqls-migration"
    className={styles.sqlsMigration}
    aria-labelledby="sqls-migration-heading"
  >
    <header className={styles.head}>
      <span className={styles.eyebrow}>How it works</span>
      <h2 id="sqls-migration-heading" className={styles.title}>
        How we move <span className={styles.accent}>Access to SQL Server</span>
      </h2>
      <p className={styles.lede}>
        Most SQL Server backend migrations follow the same six stages. Timing
        depends on the size and complexity of your database, and we scope it
        after a review.
      </p>
    </header>

    <ol className={styles.track}>
      {SQLS_STEPS.map(({ title, text, Art }) => (
        <li key={title} className={styles.step}>
          <span className={styles.marker} aria-hidden="true" />
          <div className={styles.card}>
            <div className={styles.artWrap}>
              <Art className={styles.art} />
            </div>
            <h3 className={styles.stepTitle}>{title}</h3>
            <p className={styles.stepText}>{text}</p>
          </div>
        </li>
      ))}
    </ol>

    <div className={styles.keepRow}>
      <p className={styles.keepLabel}>What stays familiar for your team</p>
      <ul className={styles.keepList}>
        {SQLS_KEEP.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className={styles.keepNote}>
        Some queries and code are adjusted along the way where SQL Server needs
        it.
      </p>
    </div>
  </section>
);

export default SqlsMigration;
