// /app/services/microsoft-access/access-database-optimisation-and-repair/(components)/AorServices.jsx
import React from "react";
import Link from "next/link";

import {
  AorAnalysisArt,
  AorSplitArt,
  AorIndexArt,
  AorFormArt,
  AorVbaArt,
  AorSqlArt,
  AorMaintenanceArt,
} from "../(svgs)/AorServiceArt";
import { ArrowIcon } from "../(svgs)/AorIcons";

import styles from "@/styles/aorServices.module.scss";

// CTA art colours: $accent-dark tile; $accent (#0469a0), $accent-on-dark (#6fc3e8), $white.
// Names here are repeated in AOR_OFFERS in page.js for the schema.
const AOR_SERVICES = [
  {
    key: "analysis",
    title: "Performance Analysis & Diagnosis",
    text: "We start by testing, not guessing. We profile your queries, review table structures, time your forms and measure your VBA, then give you a clear report that pinpoints what is slowing the database down and lists the fixes in order of impact.",
    tile: "darkTile",
    span: "placeA",
    beside: true,
    Art: AorAnalysisArt,
    tone: "dark",
    review: [
      "Query execution and timing",
      "Table structure and indexes",
      "Form and report load times",
      "VBA code and error handling",
      "File size, split set-up and network",
    ],
  },
  {
    key: "vba",
    title: "VBA Code Optimisation",
    text: "We swap slow DLookup calls for recordsets, tighten loops and array work, remove repeated database calls, add proper error handling and show progress on long jobs. Clean, efficient code makes a noticeable difference.",
    tile: "darkTile",
    span: "placeB",
    Art: AorVbaArt,
    tone: "dark",
  },
  {
    key: "index",
    title: "Index Optimisation & Query Tuning",
    text: "We add indexes to the fields you search and sort most, remove the ones that slow you down, and rewrite queries that pull in more than they need. The right indexes can make queries dramatically faster.",
    tile: "accentTile",
    span: "placeC",
    Art: AorIndexArt,
    tone: "accent",
    link: {
      href: "/services/microsoft-access/blog/access-database-slow-performance",
      label: "Read our slow database guide",
    },
  },
  {
    key: "split",
    title: "Database Splitting & Backend Optimisation",
    text: "Splitting separates your data from your forms and reports, which helps a lot when several people share one database. We build a tidy backend with the right indexes, set up reliable linked tables and keep the connection open, so users stop waiting on the network.",
    tile: "lightTile",
    span: "placeD",
    beside: true,
    Art: AorSplitArt,
    tone: "light",
  },
  {
    key: "sql",
    title: "SQL Server Migration for Scalability",
    text: "When Access reaches its limits, we move your backend data to Microsoft SQL Server. It copes better with large data volumes and more users at once, and adds reliability and features such as stored procedures and views. In most cases your Access front end keeps working much as it does today.",
    tile: "deepTile",
    span: "placeE",
    beside: true,
    Art: AorSqlArt,
    tone: "deep",
    link: {
      href: "/services/sql-server-and-access-integration",
      label: "Learn about SQL Server and Access",
    },
  },
  {
    key: "forms",
    title: "Form & Report Performance Improvements",
    text: "Forms and reports are where people feel a slow database. We load only the records needed, trim subform overhead, load big lists in stages, speed up combo boxes and remove needless recalculation. Forms that took minutes to open can often load in seconds.",
    tile: "lightTile",
    span: "placeF",
    Art: AorFormArt,
    tone: "light",
  },
  {
    key: "maintenance",
    title: "Regular Maintenance Planning",
    text: "Prevention is cheaper than repair. We set up scheduled compact and repair, automated backups, index upkeep, growth monitoring and alerts, and regular performance reviews, so problems are caught before your users feel them.",
    tile: "tintTile",
    span: "placeG",
    Art: AorMaintenanceArt,
    tone: "light",
    link: {
      href: "/microsoft-support-and-training-australia",
      label: "Ask about help and training",
    },
  },
];

const AorCtaArt = () => (
  <svg
    viewBox="0 0 200 150"
    aria-hidden="true"
    focusable="false"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <rect
      x="10"
      y="14"
      width="118"
      height="72"
      rx="14"
      fill="#0469a0"
      stroke="#6fc3e8"
      strokeWidth="3"
    />
    <path
      d="M38 86l-4 24 28-24z"
      fill="#0469a0"
      stroke="#6fc3e8"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <rect x="30" y="34" width="52" height="8" rx="4" fill="#ffffff" />
    <rect
      x="30"
      y="50"
      width="78"
      height="8"
      rx="4"
      fill="#6fc3e8"
      opacity="0.7"
    />
    <rect
      x="30"
      y="66"
      width="40"
      height="8"
      rx="4"
      fill="#6fc3e8"
      opacity="0.4"
    />
    <rect x="86" y="62" width="104" height="66" rx="14" fill="#ffffff" />
    <path d="M168 128l6 18-26-18z" fill="#ffffff" strokeLinejoin="round" />
    <ellipse cx="112" cy="82" rx="14" ry="6" fill="#034e72" />
    <path
      d="M98 82v18c0 3.3 6.3 6 14 6s14-2.7 14-6V82"
      fill="none"
      stroke="#034e72"
      strokeWidth="3"
    />
    <path
      d="M98 91c0 3.3 6.3 6 14 6s14-2.7 14-6"
      fill="none"
      stroke="#034e72"
      strokeWidth="3"
    />
    <circle cx="160" cy="98" r="14" fill="#0469a0" />
    <path
      d="M153 98l5 5 9-10"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AorServices = () => {
  return (
    <section
      id="aor-services"
      className={styles.aorServices}
      aria-labelledby="aor-services-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>What we do</p>
          <h2 id="aor-services-heading" className={styles.heading}>
            Our database{" "}
            <span className={styles.accent}>optimisation services</span>
          </h2>
          <p className={styles.subtitle}>
            We match the fix to what is actually wrong with your database, from
            quick wins to bigger structural changes, so your Access database
            runs at its best.
          </p>
        </header>

        <div className={styles.grid}>
          {AOR_SERVICES.map((service) => {
            const { Art } = service;
            const classes = [
              styles.tile,
              styles[service.tile],
              styles[service.span],
              service.beside ? styles.beside : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <article key={service.key} className={classes}>
                <div className={styles.art}>
                  <Art tone={service.tone} />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.text}>{service.text}</p>
                  {service.review && (
                    <div className={styles.review}>
                      <p className={styles.reviewLabel}>What we review</p>
                      <ul>
                        {service.review.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {service.link && (
                    <Link href={service.link.href} className={styles.arrowLink}>
                      {service.link.label} <ArrowIcon />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}

          <aside className={`${styles.ctaTile} ${styles.placeH}`}>
            <div className={styles.ctaArt}>
              <AorCtaArt />
            </div>
            <div className={styles.ctaBody}>
              <h3 className={styles.ctaTitle}>Not sure which fix you need?</h3>
              <p className={styles.ctaText}>
                Tell us what your database is doing. We will tell you what is
                likely behind it and what a fix involves.
              </p>
              <Link href="#contact" className="btn">
                Request a consultation
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AorServices;
