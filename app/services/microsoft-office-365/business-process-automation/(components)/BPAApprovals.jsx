import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";
import { ApprovalFlowSvg } from "../(svgs)/ApprovalFlowSvg";

import styles from "../../../../../styles/bpaApprovals.module.css";

const steps = [
  {
    index: "01",
    label: "PO Raised",
    body: "A purchase order is submitted in Dynamics 365, Business Central, or a Power Apps form. The approval flow triggers immediately on submission — no manual handoff required.",
  },
  {
    index: "02",
    label: "AI Context Assembly",
    body: "The flow reads the PO value, project code, cost centre, and vendor tier — then pulls the current budget position for that cost centre from your ERP. Copilot generates a plain-English summary of the request, ready to include in the approval card.",
  },
  {
    index: "03",
    label: "Approver Routing",
    body: "Based on spend threshold and org chart rules, the flow determines the correct approver. Microsoft Graph is checked for calendar availability and out-of-office status. If unavailable, the request routes to the nominated delegate — automatically, with no human intervention.",
  },
  {
    index: "04",
    label: "Teams Approval Card",
    body: "The approver receives a rich Teams card containing the Copilot-generated PO summary, the budget position for the cost centre, any vendor risk flags, and Approve / Reject / Request Information buttons. No need to open Dynamics, SharePoint, or email.",
  },
  {
    index: "05",
    label: "SLA Tracking & Escalation",
    body: "If no action is taken within the defined SLA window, the flow escalates to the next level, notifies the requestor of the delay, and logs the escalation event with a timestamp. Nothing sits unactioned and unnoticed.",
  },
  {
    index: "06",
    label: "Audit & Posting",
    body: "Approved POs are automatically posted or forwarded to the accounting system. A full audit trail is written to SharePoint — who approved, when, the budget impact, and any notes added at review. Fully reportable.",
  },
];

const replaces = [
  "Email chains to the finance manager with no tracking",
  "Spreadsheet updated manually to track approval status",
  "Budget check performed by a person before forwarding",
  "No audit trail of who approved what, or when",
];

const BPAApprovals = () => (
  <section className={styles.section} id="approvals">
    {/* ── Section header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Copilot · Intelligent Approvals</span>
        <h2 className={styles.title}>
          A purchase order approval{" "}
          <span className={styles.accentText}>that routes itself.</span>
        </h2>
        <p className={styles.intro}>
          This is what a Copilot-driven approval looks like end-to-end. No email
          chains. No manual budget checks. No chasing people for sign-off.
        </p>
      </div>
    </AnimateOnScroll>

    {/* ── Two-column grid ── */}
    <div className={styles.grid}>
      {/* ── Left — numbered step walkthrough ── */}
      <div className={styles.steps}>
        {steps.map((step, i) => (
          <AnimateOnScroll
            key={step.index}
            animation="slide-left"
            duration={0.6}
            delay={i * 0.08}
          >
            <div className={styles.step}>
              {/* Step number + connector line */}
              <div className={styles.stepLeft}>
                <div className={styles.stepNum}>{step.index}</div>
                {i < steps.length - 1 && (
                  <div className={styles.stepLine} aria-hidden="true" />
                )}
              </div>

              {/* Step content */}
              <div className={styles.stepContent}>
                <h3 className={styles.stepLabel}>{step.label}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* ── Right — flow SVG + replaces callout ── */}
      <div className={styles.rightCol}>
        {/* What this replaces callout */}
        <AnimateOnScroll animation="fade-up" duration={0.7} delay={0.25}>
          <div className={styles.replaces}>
            <div className={styles.replacesHeader}>
              <span className={styles.replacesEyebrow}>What this replaces</span>
            </div>
            <ul className={styles.replacesList}>
              {replaces.map((item) => (
                <li key={item} className={styles.replacesItem}>
                  <span className={styles.replacesX} aria-hidden="true">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="btn"
              style={{ textTransform: "capitalize" }}
            >
              <span>Talk to us about approvals</span>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default BPAApprovals;
