// app/microsoft-consultants-canberra/(components)/CanberraContext.jsx
import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/canberraContext.module.css";

const sectors = [
  {
    id: "government",
    stat: "Gov",
    statNote: "& public sector",
    title: "Government & Public Sector",
    body: "Canberra's largest employer. We've worked with federal departments and ACT agencies on everything from Excel reporting tools to document automation and Access database upgrades.",
  },
  {
    id: "construction",
    stat: "Civil",
    statNote: "& construction",
    title: "Civil Construction & Infrastructure",
    body: "Canberra's ongoing infrastructure growth means a steady demand for project tracking, tendering documentation and site reporting. We help construction businesses get that work out of shared drives and into something properly structured.",
  },
  {
    id: "smb",
    stat: "SMB",
    statNote: "small & medium business",
    title: "Small & Medium Business",
    body: "Most of our Canberra clients are small teams who've outgrown their current setup. A spreadsheet that made sense at five people doesn't work at twenty. We come in, assess what's there, and build something that scales.",
  },
  {
    id: "retail",
    stat: "Retail",
    statNote: "& hospitality",
    title: "Retail & Hospitality",
    body: "Inventory tracking, staff rostering exports and supplier reporting. Retail and hospitality businesses in Canberra carry a lot of repetitive administrative tasks. We automate the parts that don't need a human and simplify the rest.",
  },
];

// ACT suburbs and regions for the coverage tags panel
const regions = [
  "Canberra CBD / Civic",
  "Parliamentary Triangle",
  "Barton",
  "Deakin",
  "Fyshwick",
  "Belconnen",
  "Tuggeranong",
  "Woden",
  "Weston Creek",
  "Gungahlin",
  "Queanbeyan",
  "ACT surrounds",
];

const CanberraContext = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>A.C.T Local</p>
          <h2 className={styles.heading}>
            Who we work with{" "}
            <span className={styles.headingAccent}>in Canberra.</span>
          </h2>
          <p className={styles.subheading}>
            From small businesses in Fyshwick to government departments in the
            CBD, if your team is looking for a software solution, we can help.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Sector cards — 2×2 grid with left stat anchor ── */}
      <div className={styles.grid}>
        {sectors.map((sector, i) => (
          <AnimateOnScroll
            key={sector.id}
            animation="fade-up"
            duration={0.55}
            delay={i * 0.07}
          >
            <article className={styles.card}>
              {/* Left: stat anchor column */}
              <div className={styles.cardStat}>
                <span className={styles.statValue}>{sector.stat}</span>
                <span className={styles.statNote}>{sector.statNote}</span>
              </div>

              {/* Right: title and body */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{sector.title}</h3>
                <p className={styles.cardBody}>{sector.body}</p>
              </div>
            </article>
          </AnimateOnScroll>
        ))}
      </div>

      {/* ── Divider ── */}
      <div className={styles.divider} aria-hidden="true" />

      {/* ── Coverage block ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
        <div className={styles.coverage}>
          <div className={styles.coverageLeft}>
            <p className={styles.eyebrow}>Reach</p>
            <h2 className={styles.coverageHeading}>
              Remote-first. <br />
              <span className={styles.headingAccent}>
                On-site when it counts.
              </span>
            </h2>
            <p className={styles.coverageCopy}>
              Most of our Canberra work is delivered remotely, this way projects
              start faster, cost less and there&rsquo;s no disruption to your
              office. For work that benefits from being on-site our local
              consultants are available across the ACT.
            </p>
          </div>

          <div className={styles.coverageRight}>
            <p className={styles.tagsLabel}>Areas we service</p>
            <ul className={styles.tags} aria-label="Canberra service areas">
              {regions.map((region) => (
                <li key={region} className={styles.tag}>
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default CanberraContext;
