// app/microsoft-consultants-brisbane/(components)/BrisbaneWhy.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

// Import compiled CSS module (not the .scss source)
import styles from "../../../styles/brisbaneWhy.module.css";

const reasons = [
  {
    id: "expertise",
    stat: "25+",
    statLabel: "years of Microsoft expertise",
    title: "Deep Microsoft expertise",
    body: "We\u2019ve grown through countless iterations of Microsoft solutions, from old-school Office through to Power Platform integrations and AI Agents. That experience has proven invaluable in staying relevant in the fast-paced world of I.T.",
    theme: "light",
  },
  {
    id: "full-stack",
    stat: "All",
    statLabel: "Microsoft products covered",
    title: "One team for the whole stack",
    body: "Our consultants work as a unit across the entire Microsoft suite. We look for the simplest way to get your entire business operations bundled into a single source of truth. One team, one relationship.",
    theme: "accent",
  },
  {
    id: "practical",
    stat: "100%",
    statLabel: "Australian owned",
    title: "Local knowledge, National reach",
    body: "Office Experts Group is proudly Australian. Our senior consultants are across the country, and every project is handled by real Microsoft specialists working as one team. No outsourcing, no reselling.",
    theme: "dark",
  },
  {
    id: "australian",
    stat: "25+",
    statLabel: "specialist consultants",
    title: "Practical, business-first solutions",
    body: "We\u2019re always focused on making life easier, not overly complicated. Less manual work, more visibility, and smart support for growth without the mess. Every solution is tailored to how your business actually operates.",
    theme: "light",
  },
];

const BrisbaneWhy = () => (
  <section className={styles.section}>
    {/* ── Header — full-width split layout ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {/* <p className={styles.eyebrow}>Why Office Experts</p> */}
          <h2 className={styles.heading}>
            Why Brisbane businesses
            <br />
            <span className={styles.headingAccent}>choose us.</span>
          </h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.headerBody}>
            We value the long-term partnerships we have built with our clients
            in Brisbane. See how we have gained trust over the years and grown
            to become the go-to organisation for Microsoft solutions.
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

export default BrisbaneWhy;
