// /app/services/microsoft-access/sql-server-solutions/(components)/SqlsSigns.jsx
import React from "react";
import Link from "next/link";

import styles from "@/styles/sqlsSigns.module.scss";
import {
  SqlsBackupArt,
  SqlsIntegrateArt,
  SqlsSizeArt,
  SqlsSlowArt,
} from "../(svgs)/SqlsSignArt";
import { SqlsArrowIcon } from "../(svgs)/SqlsIcons";

const SQLS_SIGNS = [
  {
    id: "slow",
    title: "Multiple users experiencing slowdowns",
    text: "With a shared Access file, every PC does the heavy lifting and pulls whole tables across the network. SQL Server processes queries on a dedicated server and uses row-level locking, so more people can work at once with fewer “database is locked” moments.",
    link: {
      label: "Why Access slows down",
      href: "/blog/access-database-slow-performance",
    },
    Art: SqlsSlowArt,
    tile: "darkTile",
    size: "wide",
  },
  {
    id: "size",
    title: "Database size becoming unmanageable",
    text: "Frequent compacting, repairs or a file creeping towards the 2 GB Access limit are early warnings. SQL Server adds transaction logs and recovery tools that help protect you from data loss and downtime.",
    link: {
      label: "The 2 GB Access limit",
      href: "/blog/2gb-access-database-limit",
    },
    Art: SqlsSizeArt,
    tile: "lightTile",
    size: "narrow",
  },
  {
    id: "backup",
    title: "Backup and security concerns",
    text: "A database on a local PC or shared drive is exposed to hardware failure, theft and stray copies. SQL Server brings encryption options, automated backups and audit trails that support compliance and data governance.",
    link: {
      label: "Hosting in the cloud with Azure",
      href: "/services/cloud-based-solutions-with-azure",
    },
    Art: SqlsBackupArt,
    tile: "lightTile",
    size: "narrow",
  },
  {
    id: "integrate",
    title: "Integration challenges",
    text: "SQL Server connects with the rest of your Microsoft ecosystem, including Power BI, Excel, Microsoft 365 and accounting or CRM systems. Data flows between them without re-keying, which saves admin time and cuts errors.",
    link: {
      label: "Power BI data integration",
      href: "/services/microsoft-power-platform/power-bi-data-integration",
    },
    Art: SqlsIntegrateArt,
    tile: "accentTile",
    size: "wide",
  },
];

const SqlsSigns = () => (
  <section
    id="sqls-signs"
    className={styles.sqlsSigns}
    aria-labelledby="sqls-signs-heading"
  >
    <div className={styles.inner}>
      <header className={styles.head}>
        <span className={styles.eyebrow}>Signs you have outgrown Access</span>
        <h2 id="sqls-signs-heading" className={styles.title}>
          Is your database{" "}
          <span className={styles.accent}>slowing your business down?</span>
        </h2>
        <p className={styles.lede}>
          Modern businesses rely on their databases to operate efficiently. When
          performance problems appear, the impact ripples through your whole
          organisation. If you recognise two or more of these, a SQL Server
          backend is usually worth a conversation.
        </p>
      </header>

      <div className={styles.grid}>
        {SQLS_SIGNS.map(({ id, title, text, link, Art, tile, size }) => (
          <article
            key={id}
            className={`${styles.tile} ${styles[tile]} ${styles[size]}`}
          >
            <div className={styles.artWrap}>
              <Art className={styles.art} />
            </div>
            <div className={styles.body}>
              <h3 className={styles.tileTitle}>{title}</h3>
              <p className={styles.tileText}>{text}</p>
              {link.href.startsWith("/") ? (
                <Link href={link.href} className={styles.tileLink}>
                  {link.label} <SqlsArrowIcon />
                </Link>
              ) : (
                <a href={link.href} className={styles.tileLink}>
                  {link.label} <SqlsArrowIcon />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default SqlsSigns;
