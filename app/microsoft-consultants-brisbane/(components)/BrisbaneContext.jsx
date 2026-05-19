// app/microsoft-consultants-brisbane/(components)/BrisbaneContext.jsx
import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

// Import compiled CSS module (not the .scss source)
import styles from "../../../styles/brisbaneContext.module.css";

// Brisbane's key industry verticals — genuinely local content for SEO
const industries = [
  {
    id: "construction",
    title: "Construction & Infrastructure",
    body: "With the Brisbane Olympics coming up in 2032, there\u2019s constant strain on reporting, procurement and coordination systems. We help construction businesses automate reporting and boost visibility using familiar Microsoft tools.",
  },
  {
    id: "mining",
    title: "Mining & Industrial Services",
    body: "Mining support teams handle huge data sets and compliance reporting. Our systems make reporting more accurate and slash internal admin labour.",
  },
  {
    id: "healthcare",
    title: "Healthcare Organisations",
    body: "Healthcare providers run a lot of manual internal processes. We streamline reporting, onboarding, documentation and administration using Microsoft 365 and automation.",
  },
  {
    id: "professional",
    title: "Professional Services",
    body: "Service firms need accurate reports and consistent documents. We build solutions that cut back repetitive work and make day-to-day operations more efficient.",
  },
];

// Brisbane suburb and region tags for the coverage panel
const regions = [
  "Brisbane CBD",
  "Fortitude Valley",
  "South Brisbane",
  "Newstead",
  "Milton",
  "Logan",
  "Ipswich",
  "Redcliffe",
  "North Lakes",
  "Sunshine Coast",
  "Gold Coast",
  "Toowoomba",
];

const BrisbaneContext = () => (
  <section className={styles.section}>
    <div className={styles.gridTexture} aria-hidden="true" />

    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Industry Experience</p>
          <h2 className={styles.heading}>
            We understand the industries{" "}
            <span className={styles.headingAccent}>that drive Queensland.</span>
          </h2>
        </div>
      </AnimateOnScroll>

      {/* ── Industry panels — 2×2 grid ── */}
      <div className={styles.panels}>
        {industries.map((ind, i) => (
          <AnimateOnScroll
            key={ind.id}
            animation="fade-up"
            duration={0.55}
            delay={i * 0.08}
          >
            <article className={styles.panel}>
              <h3 className={styles.panelTitle}>{ind.title}</h3>
              <p className={styles.panelBody}>{ind.body}</p>
            </article>
          </AnimateOnScroll>
        ))}
      </div>

      {/* ── Niche industry CTA ── */}
      <AnimateOnScroll animation="fade-up" duration={0.5} delay={0.1}>
        <div className={styles.nicheCta}>
          <p className={styles.nicheText}>Work in a niche industry?</p>
          <a href="#contact" className={styles.nicheBtn}>
            Contact us for a free assessment
          </a>
        </div>
      </AnimateOnScroll>

      {/* ── Divider ── */}
      {/* <div className={styles.divider} aria-hidden="true" /> */}

      {/* ── Coverage block ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
        <div className={styles.coverage}>
          <div className={styles.coverageText}>
            <p className={styles.eyebrow}>Reach</p>
            <h2 className={styles.heading}>
              Remote-first delivery{" "}
              <span className={styles.headingAccent}>across Queensland</span>
            </h2>
            <p className={styles.coverageLead}>
              Most jobs are handled remotely. That means projects kick off
              sooner, cost less, and don&rsquo;t disrupt your workplace. Our
              national team works together, so Brisbane clients get Microsoft
              expertise regardless of where everyone is located.
            </p>
            <p className={styles.coverageLead}>
              Need face-to-face help? We offer on-site consulting throughout
              Brisbane and Southeast Queensland. From the CBD to the Gold Coast
              and out to Toowoomba, our consultants are available when in-person
              collaboration adds genuine value.
            </p>
          </div>

          <div className={styles.coverageTags}>
            <p className={styles.tagsLabel}>Areas we support</p>
            <ul className={styles.tags} aria-label="Brisbane service areas">
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

export default BrisbaneContext;
