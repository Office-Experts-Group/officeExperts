// app/microsoft-consultants-perth/(components)/PerthWhy.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/perthWhy.module.css";

const reasons = [
  {
    id: "australian",
    stat: "25+",
    statLabel: "specialist consultants",
    title: "Practical, business-first solutions",
    body: "We\u2019re always focused on making life easier, not overly complicated. Less manual work, more visibility, and smart support for growth without the mess. Every solution is tailored to how your business actually operates.",
    theme: "light",
  },
  {
    id: "full-stack",
    stat: "All",
    statLabel: "Microsoft products covered",
    title: "One team across the full Microsoft suite",
    body: "From Excel and Access through to Power Platform, Microsoft 365 and custom development, our consultants cover every part of the Microsoft ecosystem. One relationship, one team, solutions that actually work together.",
    theme: "accent",
  },
  {
    id: "australian",
    stat: "100%",
    statLabel: "Australian owned and operated",
    title: "No outsourcing. No resellers.",
    body: "Office Experts Group is proudly Australian. Every project is handled by our own senior consultants. We don't outsource work or resell third-party services. What you see is what you get, experienced Microsoft specialists who do the work themselves.",
    theme: "dark",
  },
  {
    id: "experience",
    stat: "25+",
    statLabel: "years of Microsoft expertise",
    title: "Deep experience across WA industries",
    body: "We've worked with resources companies, engineering firms, government agencies and professional services businesses across Western Australia for over two decades. We understand the operational complexity and the data volumes that come with it.",
    theme: "light",
  },
];

const PerthWhy = () => (
  <section className={styles.section}>
    {/* ── Header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.heading}>
            Why Perth businesses
            <br />
            <span className={styles.headingAccent}>choose us.</span>
          </h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.headerBody}>
            We&rsquo;ve built long-term partnerships with businesses across
            Western Australia. Here&rsquo;s what keeps them coming back and why
            so many refer us to others.
          </p>
          <Link href="/client-testimonials" className={styles.headerLink}>
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

export default PerthWhy;
