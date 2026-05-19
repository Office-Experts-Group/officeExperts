// app/microsoft-consultants-perth/(components)/PerthContext.jsx
"use client";

import { useState } from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

// Import compiled CSS module (not the .scss source)
import styles from "../../../styles/perthContext.module.css";

// WA industry verticals — genuinely local content for SEO differentiation
const industries = [
  {
    id: "resources",
    number: "01",
    title: "Mining & Resources",
    tag: "Excel · Power Platform · Reporting",
    body: "Western Australia's largest sector runs on data. We build Excel and Power Platform solutions that handle the scale and complexity of mining operations, from single-site reporting tools to consolidated dashboards spanning multiple projects.",
  },
  {
    id: "construction",
    number: "02",
    title: "Construction & Engineering",
    tag: "Word · Excel · Document Control",
    body: "Major infrastructure projects across WA require tight document control, cost tracking and reporting. We streamline the Microsoft tools that project teams already use, reducing manual admin and improving accuracy across tender documents, progress reports and site data.",
  },
  {
    id: "government",
    number: "03",
    title: "State & Local Government",
    tag: "Microsoft 365 · Power Automate · Word",
    body: "WA government agencies at both state and local level rely heavily on Microsoft 365 and Office applications to manage operations, compliance and public communications. We help teams automate repetitive processes, standardise document production and get more out of their Microsoft 365 licences.",
  },
  {
    id: "professional",
    number: "04",
    title: "Professional & Financial Services",
    tag: "Word · Excel · Power Automate",
    body: "Perth's legal, accounting and financial services firms produce high volumes of documents and reports under strict formatting and compliance requirements. We build Word templates, Excel reporting tools and Power Automate workflows that cut down the manual effort and eliminate costly errors.",
  },
];

// Perth suburbs and WA regions for the coverage panel
const regions = [
  "Perth CBD",
  "West Perth",
  "Subiaco",
  "Fremantle",
  "Joondalup",
  "Rockingham",
  "Mandurah",
  "Osborne Park",
  "Midland",
  "Cannington",
  "Bunbury",
  "Kalgoorlie",
];

const PerthContext = () => {
  // Track which industry row is open; null = all closed
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Header ── */}
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Industry Experience</p>
            <h2 className={styles.heading}>
              We know the industries{" "}
              <span className={styles.headingAccent}>
                that power Western Australia.
              </span>
            </h2>
          </div>
        </AnimateOnScroll>

        {/* ── Accordion rows ── */}
        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
          <div className={styles.accordion} role="list">
            {industries.map((ind) => {
              const isOpen = openId === ind.id;
              return (
                <div
                  key={ind.id}
                  className={`${styles.row} ${isOpen ? styles.rowOpen : ""}`}
                  role="listitem"
                >
                  {/* ── Row trigger ── */}
                  <button
                    className={styles.trigger}
                    onClick={() => toggle(ind.id)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${ind.id}`}
                  >
                    <span className={styles.triggerNumber}>{ind.number}</span>

                    <span className={styles.triggerTitle}>{ind.title}</span>

                    <span className={styles.triggerTag}>{ind.tag}</span>

                    {/* Animated chevron */}
                    <span
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                      aria-hidden="true"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 7L9 12L14 7"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* ── Expanding body ── */}
                  <div
                    id={`panel-${ind.id}`}
                    className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                    role="region"
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.panelInner}>
                      <p className={styles.panelBody}>{ind.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>

        {/* ── Niche CTA ── */}
        <AnimateOnScroll animation="fade-up" duration={0.5} delay={0.1}>
          <div className={styles.nicheCta}>
            <p className={styles.nicheText}>Work in a different sector?</p>
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
                Remote-first delivery,{" "}
                <span className={styles.headingAccent}>on WA time.</span>
              </h2>
              <p className={styles.coverageLead}>
                The vast majority of our work is delivered remotely. That means
                your project starts sooner, costs less, and causes no disruption
                to your team.
              </p>
              <p className={styles.coverageLead}>
                When on-site work adds genuine value, for discovery workshops,
                system rollouts or training sessions our Perth consultants are
                available across the metro area and can travel to regional WA
                for larger engagements.
              </p>
            </div>

            <div className={styles.coverageTags}>
              <p className={styles.tagsLabel}>Areas we support</p>
              <ul className={styles.tags} aria-label="Perth service areas">
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
};

export default PerthContext;
