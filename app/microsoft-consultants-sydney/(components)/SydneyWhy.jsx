// app/microsoft-consultants-sydney/(components)/SydneyWhy.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/sydneyWhy.module.css";
import SydneyMap from "../(svgs)/SydneyMap";

const reasons = [
  {
    id: "established",
    index: "01",
    title: "Operating since 2000",
    body: "We have worked through every major Microsoft platform shift, from Office 2000 through SharePoint, Azure, Microsoft 365 and now the Power Platform and AI Agents. That depth of experience means fewer surprises, faster delivery and solutions built on lessons learned across thousands of projects.",
  },
  {
    id: "full-stack",
    index: "02",
    title: "One team for the full Microsoft stack",
    body: "Most consultancies specialise in a single product. We cover Excel, Word, Access, Power Platform, Microsoft 365 and custom development under one roof. That means your solutions are designed to work together, and you deal with one team instead of coordinating multiple vendors.",
  },
  {
    id: "remote",
    index: "03",
    title: "Remote-first, on-site when it matters",
    body: "Remote delivery is faster to start, lower cost and causes zero disruption to your workplace. When face-to-face adds genuine value, such as training workshops, stakeholder discovery or complex rollouts, our Sydney consultants are available across the metro area.",
  },
  {
    id: "australian",
    index: "04",
    title: "100% Australian owned and operated",
    body: "We are not a multinational reseller or an outsourced help desk. Office Experts Group is wholly Australian owned, with consultants based across the country along with a worldwide support network. Your project is handled by senior specialists working together as a unified team.",
  },
];

const SydneyWhy = () => (
  <section className={styles.section}>
    {/* ── Header ── */}
    <div className={styles.topSection}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Why Office Experts</p>
          <h2 className={styles.heading}>
            Why Local businesses{" "}
            <span className={styles.headingAccent}>work with us.</span>
          </h2>
          <p className={styles.headerBody}>
            Over 25 years of Microsoft consulting across Australia. We have
            built long-term partnerships with organisations in every sector, our
            approach to each project is tailored to your needs, and we value the
            longstanding relationships we have with our clients.
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
      </AnimateOnScroll>
      <div className={styles.map}>
        <SydneyMap />
      </div>
    </div>

    {/* ── Reason rows — stacked with accent index ── */}
    <div className={styles.list}>
      {reasons.map((reason, i) => (
        <AnimateOnScroll
          key={reason.id}
          animation="fade-up"
          duration={0.55}
          delay={i * 0.06}
        >
          <article className={styles.row}>
            <div className={styles.rowIndex} aria-hidden="true">
              {reason.index}
            </div>
            <div className={styles.rowContent}>
              <h3 className={styles.rowTitle}>{reason.title}</h3>
              <p className={styles.rowBody}>{reason.body}</p>
            </div>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default SydneyWhy;
