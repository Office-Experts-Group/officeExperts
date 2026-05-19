// app/microsoft-consultants-canberra/(components)/CanberraWhy.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

// Import compiled CSS module
import styles from "../../../styles/canberraWhy.module.css";

// Reasons laid out as horizontal bordered rows — distinct from the
// 2×2 stat card grid used on the Melbourne page
const reasons = [
  {
    id: "government",
    number: "01",
    title: "We know government.",
    body: "More of our Canberra engagements come from government and public sector organisations than from any other source. We understand the procurement frameworks, the ICT governance requirements, the security sensitivities and the documentation standards that apply.",
  },
  {
    id: "established",
    number: "02",
    title: "25 years of Microsoft specialisation.",
    body: "We have been doing this since 2000. Every major platform shift from Office XP through to Microsoft 365 has happened on our watch. The depth of knowledge that comes from 25 years of dedicated Microsoft consulting is not something that can be hired in. Our long-term clients value the continuity.",
  },
  {
    id: "full-stack",
    number: "03",
    title: "The full Microsoft suite. One team.",
    body: "From Excel and Word through to Access, and Power Platform, we cover the entire Microsoft ecosystem. For organisations that need solutions spanning multiple products we have the tea, assembled to do it all.",
  },
  {
    id: "handover",
    number: "04",
    title: "Built to be handed over.",
    body: "We document everything, avoid proprietary dependencies where possible, and design solutions with the assumption that someone else will need to maintain them. This discipline applies to all our work and is integral to our long term success.",
  },
];

const CanberraWhy = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>Why Office Experts</p>
            <h2 className={styles.heading}>
              Why Canberra organisations
              <br />
              <span className={styles.headingAccent}>work with us.</span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.headerBody}>
              Over 25 years of Microsoft consulting with significant experience
              in government, small business, hospitality and the ACT public
              sector.
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

      {/* ── Horizontal reason rows ── */}
      <div className={styles.rows}>
        {reasons.map((reason, i) => (
          <AnimateOnScroll
            key={reason.id}
            animation="fade-up"
            duration={0.55}
            delay={i * 0.07}
          >
            <div className={styles.row}>
              <span className={styles.rowNumber} aria-hidden="true">
                {reason.number}
              </span>
              <h3 className={styles.rowTitle}>{reason.title}</h3>
              <p className={styles.rowBody}>{reason.body}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* ── Bottom CTA band ── */}
      <AnimateOnScroll animation="fade-up" duration={0.5} delay={0.15}>
        <div className={styles.cta}>
          <p className={styles.ctaText}>Ready to talk about your project?</p>
          <Link href="#contact" className={styles.ctaBtn}>
            Get a Free Consultation
          </Link>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default CanberraWhy;
