// /app/services/microsoft-access/sql-server-solutions/(components)/SqlsBenefits.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/sqlsBenefits.module.scss";
import {
  SqlsFutureArt,
  SqlsLinkArt,
  SqlsMultiUserArt,
  SqlsReliabilityArt,
  SqlsScaleArt,
  SqlsSecurityArt,
  SqlsSpeedArt,
} from "../(svgs)/SqlsBenefitArt";

const SQLS_BENEFITS = [
  {
    id: "speed",
    title: "Speed and productivity",
    text: "Queries run on the server and send back only the results, not whole tables. Add indexes, stored procedures and connection pooling and forms that took minutes to open can load in seconds, with the biggest gains on large tables and remote connections.",
    Art: SqlsSpeedArt,
    layout: "third firstTile",
  },
  {
    id: "security",
    title: "Security and compliance",
    text: "Access control, auditing and encryption options sit at the server, not in a file anyone can copy. That supports modern data-protection and data-governance requirements.",
    Art: SqlsSecurityArt,
    layout: "third",
  },
  {
    id: "reliability",
    title: "Reliability",
    text: "Transaction logs and scheduled backups reduce downtime and data-loss risk, and recovery tools help protect against hardware failure and corruption.",
    Art: SqlsReliabilityArt,
    layout: "third",
  },
  {
    id: "multiuser",
    title: "Built for many users",
    text: "Row-level locking lets several people edit different records at the same time. A shared Access file can lock larger chunks of data, which is where “database is locked” messages come from.",
    Art: SqlsMultiUserArt,
    layout: "half",
  },
  {
    id: "scale",
    title: "Scalability",
    text: "Handle more users and larger data volumes without rewriting your application. SQL Server grows from small teams to enterprise operations, so the move is one you only make once.",
    Art: SqlsScaleArt,
    layout: "half",
  },
  {
    id: "integration",
    title: "Integration",
    text: "Connects to Power BI, Excel and third-party systems through native Microsoft connections and APIs, so data flows across your organisation.",
    links: [
      {
        label: "Power BI",
        href: "/services/microsoft-power-platform/power-bi",
      },
      { label: "Excel", href: "/services/microsoft-excel" },
      {
        label: "third-party systems",
        href: "/services/3rd-party-application-or-office-integration",
      },
    ],
    Art: SqlsLinkArt,
    layout: "third",
  },
  {
    id: "future",
    title: "Future-ready",
    text: "SQL Server supports analytics, AI and business intelligence tools, plus cloud connectivity through Azure, so your data strategy can keep up.",
    links: [
      {
        label: "Cloud solutions with Azure",
        href: "/services/cloud-based-solutions-with-azure",
      },
    ],
    Art: SqlsFutureArt,
    layout: "third",
  },
];

const layoutClasses = (layout) =>
  layout
    .split(" ")
    .map((name) => styles[name])
    .join(" ");

const SqlsBenefits = () => (
  <section
    id="sqls-benefits"
    className={styles.sqlsBenefits}
    aria-labelledby="sqls-benefits-heading"
  >
    <div className={styles.inner}>
      <header className={styles.head}>
        <span className={styles.eyebrow}>Why upgrade</span>
        <h2 id="sqls-benefits-heading" className={styles.title}>
          Key business benefits of a{" "}
          <span className={styles.accent}>SQL Server backend</span>
        </h2>
        <p className={styles.lede}>
          SQL Server delivers measurable performance improvements and
          enterprise-grade reliability for growing businesses. The size of the
          gain depends on how your database is designed and set up, so we
          measure before and after.
        </p>
      </header>

      <div className={styles.grid}>
        {SQLS_BENEFITS.map(({ id, title, text, chips, links, Art, layout }) => (
          <article
            key={id}
            className={`${styles.tile} ${layoutClasses(layout)} ${
              id === "multiuser" || id === "future" ? styles.midTile : ""
            }`}
          >
            <div className={styles.artWrap}>
              <Art className={styles.art} />
            </div>
            <div className={styles.body}>
              <h3 className={styles.tileTitle}>{title}</h3>
              <p className={styles.tileText}>{text}</p>
              {chips && (
                <ul className={styles.chips}>
                  {chips.map((chip) => (
                    <li key={chip}>{chip}</li>
                  ))}
                </ul>
              )}
              {links && (
                <p className={styles.links}>
                  {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </p>
              )}
            </div>
          </article>
        ))}

        <article className={`${styles.tile} ${styles.third} ${styles.ctaTile}`}>
          <h3 className={styles.ctaTitle}>Ready to optimise your database?</h3>
          <p className={styles.ctaText}>
            We help Australian businesses move from Access or Excel databases to
            SQL Server backends, with minimal disruption and your data protected
            throughout.
          </p>
          <a href="#contact" className="btn">
            Book a database review
          </a>
        </article>
      </div>
    </div>
  </section>
);

export default SqlsBenefits;
