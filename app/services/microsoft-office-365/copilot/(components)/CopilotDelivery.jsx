// app/services/microsoft-office-365/copilot/(components)/CopilotDelivery.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

// Import compiled CSS module (not the .scss source)
import styles from "../../../../../styles/copilotDelivery.module.css";

// ─────────────────────────────────────────────
// Delivery steps — the five things we actually do
// ─────────────────────────────────────────────
const steps = [
  {
    id: "readiness",
    num: "01",
    phase: "Readiness Assessment",
    summary: "We check everything before Copilot goes live.",
    body: "Before Copilot is let loose on your data, we check over your current Microsoft 365 setup. Data governance, security, SharePoint permissions, the lot. Copilot uses Microsoft Graph to see your organisation\u2019s data, so it needs the right level of access. If permissions are not set correctly Copilot may end up showing private info to the wrong people. When SharePoint is a mess Copilot\u2019s answers can\u2019t be trusted. We spot and fix these problems before they become a nasty surprise.",
    outputs: [
      "Data governance review",
      "SharePoint permissions audit",
      "Security and compliance check",
      "Readiness report with recommendations",
    ],
  },
  {
    id: "deployment",
    num: "02",
    phase: "Deployment & Configuration",
    summary: "Licences, tenant setup, permissions, compliance.",
    body: "We can take care of all the nuts and bolts, provisioning licences, setting up your Microsoft tenant, aligning permissions and data loss policies, and ensuring everything meets compliance standards in your industry. This is where Microsoft's built in security and compliance tools really shine. Your operational heirachy is most likely already in place, we can take this information and make sure Copilot stays on track.",
    outputs: [
      "Copilot licences provisioned",
      "Tenant and permissions configured",
      "Data loss prevention policies aligned",
      "Compliance standards verified",
    ],
  },
  {
    id: "training",
    num: "03",
    phase: "Training & Adoption",
    summary: "Targeted sessions for your actual teams.",
    body: "The Australian Public Service trialed Copilot with government departments and found that prompt training made the single biggest difference in results. Watching a generic demo can help, but we can run targeted sessions tailored to your teams specific setup. Ongoing training can be provided remotely and documentation can provide answers for new staff.",
    outputs: [
      "Role-specific training sessions",
      "Prompt engineering workshops",
      "Adoption tracking and reporting",
      "Quick-reference guides for each team",
    ],
  },
  {
    id: "support",
    num: "04",
    phase: "Ongoing Support & Optimisation",
    summary: "We don't just forget about you.",
    body: "Microsoft adds Copilot features every month. Apps update, tasks evolve, and best practices shift. We guide you through these changes, track how your staff use Copilot, spot where it\u2019s underused, and tweak things as you grow. Our goal is to help your team get better, faster, and more comfortable with Copilot over time.",
    outputs: [
      "Monthly feature updates reviewed",
      "Usage tracking and insights",
      "Underutilisation flagged and addressed",
      "Ongoing prompt and workflow refinement",
    ],
  },
  {
    id: "integration",
    num: "05",
    phase: "Integration with Your Microsoft Stack",
    summary: "All the hens come home to roost.",
    body: "Here\u2019s where we\u2019re different. If you already have VBA automations, custom add-ins, Access databases, Power Automate flows, or SQL Server links, we make sure Copilot fits in with these legacy systems. Other consultancies avoid these custom Office solutions as complexity can get out of hand real quick. Not only have we done it for over 25 years, but we have an entire team of developers who specialise in certain applications.",
    outputs: [
      "Existing automation compatibility audit",
      "Copilot integration with custom solutions",
      "VBA and add-in coexistence verified",
      "Power Automate flow alignment",
    ],
  },
];

const CopilotDelivery = () => (
  <section
    className={styles.section}
    id="delivery"
    style={{ scrollMarginTop: "120px" }}
  >
    {/* ── Header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>What we deliver</span>
        <h2 className={styles.headline}>
          No one-size-fits-all.{" "}
          <span className={styles.accent}>Every project has its quirks.</span>
        </h2>
        <p className={styles.intro}>
          We generally don't see good results with cookie-cutter Copilot
          rollouts. Every project we take on starts with learning about your
          company&rsquo;s current systems and day-to-day operations. A little
          bit of fine tuning goes a long way...
        </p>
      </div>
    </AnimateOnScroll>

    {/* ── Timeline ── */}
    <div className={styles.timeline}>
      {/* Vertical connecting line — purely decorative */}
      <div className={styles.line} aria-hidden="true" />

      {steps.map((step, i) => (
        <AnimateOnScroll
          key={step.id}
          animation="fade-up"
          duration={0.55}
          delay={i * 0.07}
        >
          <article className={styles.step}>
            {/* Node dot on the timeline */}
            <div className={styles.node} aria-hidden="true">
              <span className={styles.nodeDot} />
            </div>

            {/* Step content card */}
            <div className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>{step.num}</span>
                <h3 className={styles.cardPhase}>{step.phase}</h3>
              </div>

              <p className={styles.cardSummary}>{step.summary}</p>
              <p className={styles.cardBody}>{step.body}</p>

              {/* Deliverables list */}
              <div className={styles.outputs}>
                <span className={styles.outputsLabel}>Deliverables</span>
                <ul className={styles.outputsList}>
                  {step.outputs.map((output) => (
                    <li key={output} className={styles.outputItem}>
                      <span className={styles.outputCheck} aria-hidden="true">
                        &#10003;
                      </span>
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default CopilotDelivery;
