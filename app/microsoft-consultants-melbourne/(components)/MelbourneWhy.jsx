// microsoft-consultants-melbourne/(components)/MelbourneWhy.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/melbourneWhy.module.css";

const reasons = [
  {
    id: "established",
    stat: "25+",
    statLabel: "years in business",
    title: "Established since 2000",
    body: "We have worked through every major Microsoft platform shift, beginning in the early days of Office 2000 and now leading to Microsoft 365, Power Platform and Ai Agents. That continuity means hard-won knowledge that newer firms simply have not had time to accumulate.",
    theme: "dark",
  },
  {
    id: "suite",
    stat: "All",
    statLabel: "Microsoft products covered",
    title: "Across the full Microsoft suite",
    body: "We are not a single-product consultancy. From Excel and Word through to Access, Power Platform and Ai. We are the 'one stop shop' for everything Microsoft, with solutions designed to work together rather than in isolation.",
    theme: "accent",
  },
  {
    id: "local",
    stat: "25+",
    statLabel: "specialist consultants",
    title: "Local knowledge, national reach",
    body: "Melbourne-based consultants backed by a national team across Australia. You get local availability and on-site access when it matters, supported by the depth of a firm with decades of Microsoft consulting experience.",
    theme: "light",
  },
  {
    id: "delivery",
    stat: "100%",
    statLabel: "Australian owned",
    title: "Remote and on-site flexibility",
    body: "Most projects are delivered remotely for speed and cost efficiency. When on-site presence adds value, we are available for training, workshops or complex rollouts. Our Melbourne team is available across the CBD and broader metro area.",
    theme: "light",
  },
];

const MelbourneWhy = () => (
  <section className={styles.section}>
    {/* ── Header — full-width split layout ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.eyebrow}>Why Office Experts</p>
          <h2 className={styles.heading}>
            Why Melbourne businesses
            <br />
            <span className={styles.headingAccent}>choose us.</span>
          </h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.headerBody}>
            Over 25 years of Microsoft consulting across Australia. We have
            built long-term partnerships with businesses in every sector
            Melbourne operates in.
          </p>
          <Link
            href="https://www.officeexperts.com.au/client-testimonials"
            className={styles.headerLink}
          >
            Read client testimonials
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </AnimateOnScroll>

    {/* ── 2×2 reason cards ── */}
    <div className={styles.grid}>
      {reasons.map((reason, i) => (
        <AnimateOnScroll
          key={reason.id}
          animation="fade-up"
          duration={0.55}
          delay={i * 0.07}
        >
          <article className={`${styles.card} ${styles[reason.theme]}`}>
            {/* Stat anchor */}
            <div className={styles.cardStat}>
              <span className={styles.statValue}>{reason.stat}</span>
              <span className={styles.statLabel}>{reason.statLabel}</span>
            </div>

            {/* Text */}
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardBody}>{reason.body}</p>
            </div>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default MelbourneWhy;
