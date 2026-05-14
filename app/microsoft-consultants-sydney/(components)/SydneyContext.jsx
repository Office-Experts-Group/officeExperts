// app/microsoft-consultants-sydney/(components)/SydneyContext.jsx
import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

// Import compiled CSS module (not the .scss source)
import styles from "../../../styles/sydneyContext.module.css";

// Sydney's key industry verticals — each panel highlights a sector and how
// Microsoft tools serve it, giving Google genuinely unique local content
const industries = [
  {
    id: "finance",
    title: "Financial Services",
    body: "Sydney is Australia\u2019s financial capital. These firms manage enormous volumes of data that flow through Excel models, Access databases and Power BI dashboards. Compliance reporting, risk modelling and client-facing documentation all need to be accurate, auditable and fast. We build the automation and tooling that makes that possible.",
  },
  {
    id: "government",
    title: "Government & Public Sector",
    body: "Federal agencies in the CBD and state departments manage complex document workflows, procurement systems and public-facing services built on Microsoft 365. Accessibility standards, security requirements and the scale of public-sector operations demand consultants who have worked in this environment before. We have, extensively.",
  },
  {
    id: "professional",
    title: "Professional Services & Tech",
    body: "From the legal precinct around Phillip Street to the tech companies growing out of Pyrmont, Surry Hills and North Sydney, professional services firms need Microsoft tools that keep pace with their client work. Automated document generation, CRM integrations, Power Automate workflows and custom reporting are the everyday building blocks we deliver.",
  },
];

// Sydney suburb and region tags for the coverage panel
const regions = [
  "Sydney CBD",
  "North Sydney",
  "Barangaroo",
  "Pyrmont",
  "Surry Hills",
  "Parramatta",
  "Chatswood",
  "Macquarie Park",
  "North Shore",
  "Inner West",
  "Eastern Suburbs",
  "Western Sydney",
  "Northern Beaches",
  "Sutherland Shire",
  "Central Coast",
  "Newcastle",
  "Blue Mountains",
];

const SydneyContext = () => (
  <section className={styles.section}>
    {/* Dot-grid texture for visual consistency with other dark sections */}
    <div className={styles.gridTexture} aria-hidden="true" />

    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Local Context</p>
          <h2 className={styles.heading}>
            We understand the industries{" "}
            <span className={styles.headingAccent}>that power Sydney.</span>
          </h2>
        </div>
      </AnimateOnScroll>

      {/* ── Industry panels — 3-column, equal height ── */}
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
      <div className={styles.divider} aria-hidden="true" />

      {/* ── Coverage block ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
        <div className={styles.coverage}>
          <div className={styles.coverageText}>
            <p className={styles.eyebrow}>National Reach</p>
            <h2 className={styles.heading}>
              Remote-first delivery{" "}
              <span className={styles.headingAccent}>Australia wide</span>
            </h2>
            <p className={styles.coverageLead}>
              The majority of our Sydney engagements are delivered remotely.
              Projects kick off faster, costs stay lower, and your team avoids
              the disruption of having external consultants in the office. With
              a national team of 25+ senior developers, programmers and
              consultants, we have become one of Australias most trusted
              Microsoft institutions.
            </p>
            <p className={styles.coverageLead}>
              With feet on the ground in every major city, our clients across
              Australia receive the same level of expertise through remote
              delivery and instant online communication. Geography is no longer
              a barrier.
            </p>
          </div>

          <div className={styles.coverageTags}>
            <p className={styles.tagsLabel}>We have helped clients in</p>
            <ul className={styles.tags} aria-label="Sydney service areas">
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

export default SydneyContext;
