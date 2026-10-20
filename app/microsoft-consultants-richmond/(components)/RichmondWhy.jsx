// app/microsoft-consultants-richmond/(components)/RichmondWhy.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "@/styles/richmondWhy.module.scss";

const reasons = [
  {
    id: "experience",
    stat: "25+",
    statLabel: "years of Microsoft experience",
    title: "We’ve seen every generation of the tools",
    body: "Since 2000 we’ve worked through VBA and Access, SharePoint, Power Platform and now AI agents. That history helps us separate a genuine upgrade from a new label on an old problem, and it shows in what we recommend.",
    theme: "light",
  },
  {
    id: "one-team",
    stat: "1",
    statLabel: "team across every platform",
    title: "No hand-offs between specialists",
    body: "Excel, Word, Access, Power Platform, Microsoft 365 and AI are all handled by the same group. You explain your problem once, and we pick the combination of tools that solves it rather than the one that suits a single product.",
    theme: "accent",
  },
  {
    id: "australian",
    stat: "100%",
    statLabel: "Australian owned",
    title: "Senior people, start to finish",
    body: "Our developers and analysts are spread across the country, and the people who scope your project are the same kind of people who build it. No offshore hand-offs and no licence reselling.",
    theme: "dark",
  },
  {
    id: "assessment",
    stat: "Free",
    statLabel: "initial assessment",
    title: "Straight advice before any commitment",
    body: "Tell us what’s slowing the business down and we’ll give you an honest view of what would fix it, what it would take, and occasionally that you don’t need us for it at all.",
    theme: "light",
  },
];

const RichmondWhy = () => (
  <section className={styles.section}>
    {/* ── Header — full-width split layout ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.heading}>
            Why Richmond businesses
            <br />
            <span className={styles.headingAccent}>work with us.</span>
          </h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.headerBody}>
            Our clients tend to stay with us long after the first project is
            finished. Here&rsquo;s what some of them have to say about working
            with Office Experts Group.
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

export default RichmondWhy;
