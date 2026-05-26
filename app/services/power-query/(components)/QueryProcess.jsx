// app/services/power-query/(components)/PromoLink.jsx
// Engagement process accordion + Power Pivot cross-link

"use client";
import React, { useState } from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/queryProcess.module.scss";

// ── Process steps ─────────────────────────────────────────
const steps = [
  {
    num: "01",
    phase: "Discovery",
    summary: "We get to know what you actually need.",
    detail:
      "We start by understanding what data you have and where it lives. We find out your current manual steps, and the end reports or dashboards that depend on the output. The goal is a clear picture of what we can automate to make your life easier",
  },
  {
    num: "02",
    phase: "Solution Design",
    summary: "Project scope agreed before anything goes ahead.",
    detail:
      "We design the query architecture, learn which sources connect to what, how data is merged or transformed at each step, and if custom M logic is required. You get an idea of the full design before build begins, giving us both a clear indication of costs and timelines.",
  },
  {
    num: "03",
    phase: "Build & Test",
    summary: "Built on your data. Test, test and test again.",
    detail:
      "We get to work on your project. Build on your Excel files, database connections and SharePoint sites when required. Testing covers the standard data flow, missing or malformed data, schema changes in source files, and refresh failure scenarios.",
  },
  {
    num: "04",
    phase: "Handover",
    summary: "Your team can maintain it. We're there if you need us.",
    detail:
      "Handover includes documentation and a walkthrough with the people who will manage the solution day-to-day. We cover how to add new data sources, modify transformation steps and handle refresh failures. Ongoing support is available as needed.",
  },
];

// ── Plus/minus icon ───────────────────────────────────────
const PlusMinusIcon = ({ open }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <line
      x1="8"
      y1="2"
      x2="8"
      y2="14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      style={{
        transform: open ? "scaleY(0)" : "scaleY(1)",
        transformOrigin: "center",
        transition: "transform 0.28s ease",
      }}
    />
    <line
      x1="2"
      y1="8"
      x2="14"
      y2="8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// ── Component ─────────────────────────────────────────────
const QueryProcess = () => {
  // First step open by default
  const [openStep, setOpenStep] = useState(0);

  const toggle = (i) => setOpenStep((prev) => (prev === i ? null : i));

  return (
    <>
      {/* ── Process section ── */}
      <section className={styles.section}>
        <div className={styles.topBlock}>
          <AnimateOnScroll animation="slide-left" duration={0.7} delay={0}>
            <div className={styles.leftCol}>
              <span className={styles.eyebrow}>How We Work</span>
              <h2 className={styles.headline}>
                From your first data source to a{" "}
                <span className={styles.accent}>live automated solution.</span>
              </h2>
              <p className={styles.intro}>
                Power Query projects can lead to failure not because the
                technology is wrong, but because the requirements were never
                fully understood before the build began. Thats why we start with
                a thorough analysis of your current system and future
                requirements.
              </p>
              <Link href="#contact" className="btn">
                Start a conversation
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" duration={0.7} delay={0.12}>
            <div className={styles.diffGrid}>
              {[
                {
                  heading: "Built in your environment.",
                  body: "Every solution is developed inside your actual files, database connections, and SharePoint sites.",
                },
                {
                  heading: "Architecture before build.",
                  body: "You see the full query design before a single step is written. Scope is fixed. There are no mid-project surprises.",
                },
                {
                  heading: "Microsoft 365 specialists.",
                  body: "Power Query integrates with Excel, Power BI, Power Automate, and SharePoint. We cover the full Microsoft stack.",
                },
                {
                  heading: "We stay after handover.",
                  body: "Data sources change. Source file formats evolve. Ongoing support if you need us in the future.",
                },
              ].map((d, i) => (
                <div key={i} className={styles.diffCard}>
                  <div className={styles.diffBar} aria-hidden="true" />
                  <div>
                    <h3 className={styles.diffHeading}>{d.heading}</h3>
                    <p className={styles.diffBody}>{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* ── Step accordion ── */}
        <div className={styles.processBlock}>
          <AnimateOnScroll animation="fade-up" duration={0.55} delay={0}>
            <p className={styles.processLabel}>The four phases</p>
          </AnimateOnScroll>

          <ol
            className={styles.stepList}
            aria-label="Power Query engagement phases"
          >
            {steps.map((s, i) => {
              const isOpen = openStep === i;
              return (
                <AnimateOnScroll
                  key={s.num}
                  animation="fade-up"
                  duration={0.55}
                  delay={i * 0.07}
                >
                  <li
                    className={`${styles.step} ${isOpen ? styles.stepOpen : ""}`}
                  >
                    <button
                      className={styles.stepHeader}
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`pq-step-${s.num}`}
                    >
                      <div className={styles.stepMeta}>
                        <span className={styles.stepNum}>{s.num}</span>
                      </div>
                      <div className={styles.stepSummaryRow}>
                        <div>
                          <h3 className={styles.stepPhase}>{s.phase}</h3>
                          <p className={styles.stepSummary}>{s.summary}</p>
                        </div>
                        <span className={styles.stepToggle}>
                          <PlusMinusIcon open={isOpen} />
                        </span>
                      </div>
                    </button>

                    <div
                      id={`pq-step-${s.num}`}
                      className={styles.stepDrawer}
                      aria-hidden={!isOpen}
                    >
                      <div className={styles.stepDrawerInner}>
                        <p className={styles.stepDetail}>{s.detail}</p>
                      </div>
                    </div>
                  </li>
                </AnimateOnScroll>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Power Pivot cross-link ── */}
      <section className={styles.promoSection}>
        <AnimateOnScroll animation="scale-up" duration={0.8}>
          <div className={styles.promoInner}>
            <div className={styles.promoContent}>
              <span className={styles.promoEyebrow}>Take it further</span>
              <h2 className={styles.promoHeading}>
                Pair Power Query with Power Pivot.
              </h2>
              <p className={styles.promoBody}>
                Power Query handles data extraction and transformation. Power
                Pivot then takes over with data modelling, DAX calculations, and
                the relationships that make dynamic dashboards and in-depth
                analysis possible. Together, they form a complete self-service
                data solution inside Excel or Power BI.
              </p>
              <Link href="/services/power-pivot" className={styles.promoBtn}>
                Learn about our Power Pivot services
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9"
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
      </section>
    </>
  );
};

export default QueryProcess;
