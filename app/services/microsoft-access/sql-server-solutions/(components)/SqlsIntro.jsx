// /app/services/microsoft-access/sql-server-solutions/(components)/SqlsIntro.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/sqlsIntro.module.scss";
import SqlsIntroDiagram from "../(svgs)/SqlsIntroDiagram";
import { SqlsDatabaseIcon, SqlsFormIcon } from "../(svgs)/SqlsIcons";

const SQLS_STAYS = [
  "Forms and reports",
  "Queries your team uses",
  "VBA and macros",
];
const SQLS_MOVES = [
  "Tables and data",
  "Security and logins",
  "Backups and recovery",
];

const SqlsIntro = () => (
  <section
    id="sqls-intro"
    className={styles.sqlsIntro}
    aria-labelledby="sqls-intro-heading"
  >
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Enterprise-grade performance</span>
          <h2 id="sqls-intro-heading" className={styles.title}>
            SQL Server backend{" "}
            <span className={styles.accent}>for growing businesses</span>
          </h2>
          <p>
            When your database has to handle several users, large datasets and
            critical daily work, the backend matters. Our SQL Server solutions
            keep your data on a dedicated server instead of in a file everyone
            shares, so Access only asks for the records it needs.
          </p>
          <p>
            SQL Server is used by organisations of every size, from small teams
            to large enterprises. For most of our clients it is the next step
            after Access reaches its limits, not a replacement for Access
            itself.
          </p>
          <p>
            Starting from a spreadsheet that has turned into a database? The
            same move works. We can load the data into SQL Server and give it a
            proper front end. See our{" "}
            <Link href="/services/microsoft-excel">Excel services</Link> for the
            spreadsheet side.
          </p>
        </div>

        <div className={styles.split}>
          <div className={styles.keep}>
            <h3 className={styles.splitTitle}>
              <SqlsFormIcon /> Stays in Access
            </h3>
            <ul>
              {SQLS_STAYS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.move}>
            <h3 className={styles.splitTitle}>
              <SqlsDatabaseIcon /> Moves to SQL Server
            </h3>
            <ul>
              {SQLS_MOVES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className={styles.note}>
            Some queries, code and data types need adjusting after the move. We
            test and fix them as part of the project.
          </p>
        </div>
      </div>

      <figure className={styles.figure}>
        <div className={styles.diagramScroll}>
          <div className={styles.diagramInner}>
            <SqlsIntroDiagram />
          </div>
        </div>
        <figcaption className={styles.caption}>
          A shared Access file makes every PC fetch whole tables. With SQL
          Server behind Access, the server does the work and sends back only the
          results.
        </figcaption>
      </figure>
    </div>
  </section>
);

export default SqlsIntro;
