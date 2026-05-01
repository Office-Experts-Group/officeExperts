"use client";
import React, { useState } from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/bpaProcess.module.css";

const steps = [
  {
    num: "01",
    phase: "Discovery",
    summary: "Map every manual step. Rank by automation value.",
    detail: `We identify your day-to-day business operations to document your current workflows. Every email, spreadsheet, paper form, shared inbox, and approval chain we can find. We identify the processes with the highest automation potential: high volume, rule-based, time-sensitive, or carrying meaningful error risk.

The output is a prioritised automation shortlist with estimated time savings and a rough build complexity rating for each item. You decide which to proceed with and in what order.`,
    outputs: [
      "Process map document",
      "Prioritised automation shortlist",
      "Rough build complexity ratings",
      "Estimated time savings per process",
    ],
    links: [],
  },
  {
    num: "02",
    phase: "AI Model Design",
    summary: "Train the AI models your flows will depend on.",
    detail: `For any process involving document reading we gather your sample documents and train a custom AI Builder model on your specific layouts. Our team gathers enough document types to achieve reliable extraction accuracy.

For email triage, we define your classification categories and seed the model with examples from your actual inbox history. We iterate until accuracy meets the agreed threshold before building the flow around it.`,
    outputs: [
      "Trained AI Builder document model",
      "Classification categories defined",
      "Accuracy threshold agreed and met",
      "Test set documented with confidence scores",
    ],
    links: [
      {
        label: "AI Builder document processing",
        href: "/services/microsoft-office-365/business-process-automation#document-processing",
      },
    ],
  },
  {
    num: "03",
    phase: "Flow Architecture",
    summary: "Every edge case documented before a line is built.",
    detail: `We design the complete flow in theory, covering triggers, conditions, AI model calls, approval routing logic, error handling, escalation paths, and audit logging. Exception scenarios are named and handled before build begins.

You sign off on the architecture before we write a single line of Power Automate. This step is what prevents the mid-project scope surprises that make software projects expensive. What we build is exactly what was designed and agreed.`,
    outputs: [
      "Signed-off flow architecture document",
      "Exception handling matrix",
      "Approval routing rules documented",
      "Audit and logging specification",
    ],
    links: [
      {
        label: "Power Automate flows",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      },
      {
        label: "SharePoint audit logging",
        href: "/services/by-business-solution/online-solutions",
      },
    ],
  },
  {
    num: "04",
    phase: "Build & Test",
    summary: "Built in your environment. Tested against your real data.",
    detail: `We build inside your actual Microsoft 365 tenant, not a demo environment. Every flow is developed against your real connectors, permissions, and data structures so nothing breaks in production because we tested against something different.

Testing covers the happy path, edge cases, exception scenarios, and deliberate failure conditions. For document extraction flows we test against documents your team will actually receive, including the messy, partially complete, or unusual ones.`,
    outputs: [
      "Live flows built in your Microsoft 365 tenant",
      "Full test set with results documented",
      "Exception handling verified in production environment",
      "Performance baseline recorded",
    ],
    links: [
      {
        label: "Power Apps integration",
        href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
      },
      // {
      //   label: "Microsoft Teams notifications",
      //   href: null,
      // },
    ],
  },
  {
    num: "05",
    phase: "Handover & Support",
    summary: "Your team owns it. We stay close.",
    detail: `Handover includes full technical documentation and if required a practical training session for the people who will monitor and manage it day-to-day. We cover how to read flow run history, handle exceptions that reach the human review queue, and extend or modify the automation as your process evolves.

Ongoing support is available on a retained or ad-hoc basis. Most of our BPA clients stay with us long-term. AI models need periodic retraining as document formats change, and processes evolve in ways that create new automation opportunities.`,
    outputs: [
      "Full technical documentation",
      "Hands-on training for your team",
      "Flow monitoring guide",
      "AI model retraining schedule",
    ],
    links: [
      {
        label: "Ongoing Microsoft 365 support",
        href: "/microsoft-support-and-training-australia",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// Why-us differentiators — 4 cards (top right)
// ─────────────────────────────────────────────
const differentiators = [
  {
    num: "A",
    heading: "Built in your environment.",
    body: "Every flow is developed inside your actual Microsoft tenant against your real data. Nothing breaks in production because we tested against something different.",
  },
  {
    num: "B",
    heading: "AI model training.",
    body: "Custom AI Builder models for your invoice layouts, form types, and email categories are generally part of the project, not a separate engagement billed separately.",
  },
  {
    num: "C",
    heading: "Written architecture before any build begins.",
    body: "You sign off on the flow design before a single line of Power Automate is written. Scope is fixed. The invoice doesn't move.",
  },
  {
    num: "D",
    heading: "We stay after handover.",
    body: "Document formats change. Processes evolve. AI models need retraining. Most of our automation clients have been with us for several years, further refining as their business grows.",
  },
];

// ─────────────────────────────────────────────
// Expand/collapse icon
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
const BPAProcess = () => {
  const [openStep, setOpenStep] = useState(0); // first step open by default

  const toggle = (i) => setOpenStep((prev) => (prev === i ? null : i));

  return (
    <section className={styles.section}>
      {/* ══════════════════════════════
          TOP BLOCK — headline + why-us
          ══════════════════════════════ */}
      <div className={styles.topBlock}>
        <AnimateOnScroll animation="slide-left" duration={0.7} delay={0}>
          <div className={styles.leftCol}>
            <span className={styles.eyebrow}>How We Deliver</span>
            <h2 className={styles.headline}>
              From process map to <span>live automation.</span>
            </h2>
            <p className={styles.intro}>
              AI automation projects often fail for the same reasons most
              software projects fail, vague scope, no testing against real data,
              and a handover that leaves your team unable to maintain what was
              built. We have structured our delivery to prevent all three.
            </p>
            <Link
              href="#contact"
              className="btn"
              style={{ textTransform: "capitalize" }}
            >
              Start a conversation
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.7} delay={0.12}>
          <div className={styles.diffGrid}>
            {differentiators.map((d) => (
              <div key={d.num} className={styles.diffCard}>
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

      {/* ══════════════════════════════
          BOTTOM BLOCK — timeline steps
          ══════════════════════════════ */}
      <div className={styles.processBlock}>
        <AnimateOnScroll animation="fade-up" duration={0.55} delay={0}>
          <div className={styles.processHeader}>
            <span className={styles.processLabel}>The five phases</span>
          </div>
        </AnimateOnScroll>

        {/* Progress bar — fills as steps are completed */}
        <AnimateOnScroll animation="fade-up" duration={0.55} delay={0.05}>
          <div className={styles.progressTrack} aria-hidden="true">
            <div
              className={styles.progressFill}
              style={{
                width:
                  openStep !== null
                    ? `${((openStep + 1) / steps.length) * 100}%`
                    : "0%",
              }}
            />
            {steps.map((s, i) => (
              <button
                key={s.num}
                className={
                  styles.progressNode +
                  (openStep === i ? " " + styles.progressNodeActive : "") +
                  (openStep !== null && i < openStep
                    ? " " + styles.progressNodeDone
                    : "")
                }
                style={{ left: `${(i / (steps.length - 1)) * 100}%` }}
                onClick={() => toggle(i)}
                aria-label={`Go to phase ${s.num}: ${s.phase}`}
              >
                <span className={styles.progressNodeLabel}>{s.phase}</span>
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Step accordion list */}
        <ol
          className={styles.stepList}
          aria-label="BPA delivery process phases"
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
                  className={
                    styles.step + (isOpen ? " " + styles.stepOpen : "")
                  }
                >
                  {/* ── Step header — always visible ── */}
                  <button
                    className={styles.stepHeader}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`step-detail-${s.num}`}
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

                  {/* ── Expandable detail drawer ── */}
                  <div
                    id={`step-detail-${s.num}`}
                    className={styles.stepDrawer}
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.stepDrawerInner}>
                      {/* Detail prose */}
                      <div className={styles.stepDetail}>
                        {s.detail.split("\n\n").map((para, pi) => (
                          <p key={pi}>{para}</p>
                        ))}
                      </div>

                      {/* Outputs + links row */}
                      <div className={styles.stepFooter}>
                        <div className={styles.stepOutputs}>
                          <span className={styles.outputsLabel}>
                            Deliverables
                          </span>
                          <ul className={styles.outputsList}>
                            {s.outputs.map((o) => (
                              <li key={o} className={styles.outputItem}>
                                <span
                                  className={styles.outputCheck}
                                  aria-hidden="true"
                                >
                                  ✓
                                </span>
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {s.links.length > 0 && (
                          <div className={styles.stepLinks}>
                            <span className={styles.stepLinksLabel}>
                              Related
                            </span>
                            {s.links.map((lk) => (
                              <Link
                                key={lk.href}
                                href={lk.href}
                                className={styles.stepLink}
                              >
                                {lk.label}
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M2.5 9.5l7-7M5 2.5h4.5V7"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              </AnimateOnScroll>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default BPAProcess;
