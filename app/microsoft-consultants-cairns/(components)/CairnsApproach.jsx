// app/microsoft-consultants-cairns/(components)/CairnsApproach.jsx
"use client";

import { useState } from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

// Import compiled CSS module (not the .scss source)
import styles from "../../../styles/cairnsApproach.module.css";

const steps = [
  {
    id: "discovery",
    number: "01",
    title: "Free discovery call",
    tag: "No obligation · No sales pitch",
    body: "We start with a no-obligation conversation to understand what you are trying to achieve. No sales pitch, just a straight up discussion about your current setup, the problems you are running into and what a realistic solution looks like.",
  },
  {
    id: "proposal",
    number: "02",
    title: "Scoped proposal",
    tag: "Fixed cost · Clear deliverables",
    body: "Based on the conversation, we produce a clear written proposal covering scope, deliverables, timeline and fixed cost. No hourly billing surprises. You know exactly what you are getting before any work begins.",
  },
  {
    id: "delivery",
    number: "03",
    title: "Remote delivery",
    tag: "Starts within days · On-site available",
    body: "Most engagements are delivered entirely remotely via screen share, which means work can begin within days rather than weeks. You are not waiting for a consultant to fly in. Our Cairns-based team can also attend on-site for workshops or complex rollouts.",
  },
  {
    id: "handover",
    number: "04",
    title: "Handover and training",
    tag: "Documentation · Knowledge transfer",
    body: "Every engagement ends with proper documentation and a handover session so your team can use and maintain what we have built. We do not aim to create dependency, we want to implement a scalable solution that just works.",
  },
  {
    id: "support",
    number: "05",
    title: "Ongoing support",
    tag: "Retainer · Ad-hoc · No lock-in",
    body: "If needed, We also offer ongoing support for clients who need us beyond the initial project. Whether it is a small monthly retainer or ad-hoc assistance, we are available when you need us without locking you into unnecessary contracts.",
  },
];

const CairnsApproach = () => {
  // Track which step is open; null = all closed
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Header ── */}
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>How we work</p>
            <h2 className={styles.heading}>
              Simple process.{" "}
              <span className={styles.headingAccent}>No surprises.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        {/* ── Accordion rows ── */}
        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
          <div className={styles.accordion} role="list">
            {steps.map((step) => {
              const isOpen = openId === step.id;
              return (
                <div
                  key={step.id}
                  className={`${styles.row} ${isOpen ? styles.rowOpen : ""}`}
                  role="listitem"
                >
                  {/* ── Row trigger ── */}
                  <button
                    className={styles.trigger}
                    onClick={() => toggle(step.id)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${step.id}`}
                  >
                    <span className={styles.triggerNumber}>{step.number}</span>

                    <span className={styles.triggerTitle}>{step.title}</span>

                    <span className={styles.triggerTag}>{step.tag}</span>

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
                    id={`panel-${step.id}`}
                    className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                    role="region"
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.panelInner}>
                      <p className={styles.panelBody}>{step.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>

        {/* ── Lead paragraph below accordion ── */}
        <AnimateOnScroll animation="fade-up" duration={0.5} delay={0.1}>
          <div className={styles.nicheCta}>
            <p className={styles.nicheText}>Ready to get started?</p>
            <a href="#contact" className={styles.nicheBtn}>
              Book a free consultation
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CairnsApproach;
