// app/microsoft-consultants-richmond/(components)/RichmondContext.jsx
import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "@/styles/richmondContext.module.scss";

// Richmond / inner-Melbourne business mix — local flavour without implying an on-site team
const industries = [
  {
    id: "creative-tech",
    title: "Creative, Digital & Tech",
    body: "Agencies, studios and software teams around Cremorne and Burnley grow fast, and their internal tooling rarely keeps pace. We tidy project tracking, timesheet and billing spreadsheets, automate client reporting, and connect the Microsoft tools they already pay for.",
  },
  {
    id: "sport-events",
    title: "Sport, Events & Entertainment",
    body: "With the MCG precinct on the doorstep, match days, bookings, memberships and sponsor reporting create sharp peaks of admin. We build Excel, Power Apps and Power BI tools that absorb the surge, and AI helpers that field repetitive enquiries.",
  },
  {
    id: "retail-hospitality",
    title: "Retail & Hospitality",
    body: "Swan Street, Bridge Road and Victoria Street are full of independent retailers, venues and restaurant groups. Stock counts, supplier orders, rosters and cash-ups are the usual time sinks, so we automate the repetitive parts and give owners their evenings back.",
  },
  {
    id: "health-professional",
    title: "Health & Professional Services",
    body: "Allied health clinics, accountants, legal and consulting practices across inner Melbourne live on documents and reports. We build Word templates, Excel reporting and Microsoft 365 workflows that keep paperwork consistent and compliant.",
  },
];

// Richmond and surrounding suburbs for the coverage panel
const regions = [
  "Richmond",
  "Cremorne",
  "Burnley",
  "Abbotsford",
  "Collingwood",
  "Fitzroy",
  "East Melbourne",
  "South Yarra",
  "Hawthorn",
  "Kew",
  "Melbourne CBD",
  "Greater Melbourne",
];

const RichmondContext = () => (
  <section className={styles.section}>
    <div className={styles.gridTexture} aria-hidden="true" />

    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Who We Work With</p>
          <h2 className={styles.heading}>
            We understand the businesses{" "}
            <span className={styles.headingAccent}>that keep Richmond moving.</span>
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
          <p className={styles.nicheText}>Don&rsquo;t see your industry?</p>
          <a href="#contact" className={styles.nicheBtn}>
            Contact us for a free assessment
          </a>
        </div>
      </AnimateOnScroll>

      {/* ── Coverage block ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
        <div className={styles.coverage}>
          <div className={styles.coverageText}>
            <p className={styles.eyebrow}>Reach</p>
            <h2 className={styles.heading}>
              Remote-first delivery{" "}
              <span className={styles.headingAccent}>
                for Richmond and inner Melbourne
              </span>
            </h2>
            <p className={styles.coverageLead}>
              Nearly all of our projects are delivered remotely, so work starts
              sooner, costs less and doesn&rsquo;t interrupt your team&rsquo;s
              day.
            </p>
            <p className={styles.coverageLead}>
              Our consultants work as one national team, so the right
              specialist is matched to your job wherever they happen to be
              based. When a workshop, training session or handover is better
              done in person, we can arrange it for Richmond and the
              surrounding suburbs.
            </p>
          </div>

          <div className={styles.coverageTags}>
            <p className={styles.tagsLabel}>Areas we support</p>
            <ul className={styles.tags} aria-label="Richmond service areas">
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

export default RichmondContext;
