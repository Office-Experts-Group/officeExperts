// services/microsoft-office-365/remote-data-gathering-from-any-device/RDGHowItWorks.jsx
import React from "react";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import { Capture } from "../(svgs)/Capture";
import { Connect } from "../(svgs)/Connect";
import { Act } from "../(svgs)/Act";

import styles from "../../../../../styles/rdgHowItWorks.module.css";

const steps = [
  {
    number: "01",
    phase: "Capture",
    heading: "Any device. Any location. Online or off.",
    body: "A Power Apps form runs on the field worker's phone, tablet, or browser. It validates input, attaches photos or files, stamps GPS coordinates, and queues the submission locally if there is no signal. The moment connectivity returns, the data syncs automatically.",
    detail:
      "Forms are built to your exact fields, validation rules, and branding. Dropdown lists pull live data from SharePoint or Dataverse so options are always current. Conditional sections show or hide based on previous answers to keep forms clean for the person filling them in.",
    icon: <Capture />,
  },
  {
    number: "02",
    phase: "Connect",
    heading: "Power Automate routes it to the right system immediately.",
    body: "The moment a form is submitted, a Power Automate flow fires. It transforms the data, applies your business rules, and writes records to Dataverse, SharePoint, Dynamics 365, or any connected external system. Notifications go to Teams or email. No polling, no delays, no manual steps.",
    detail:
      "Flows can branch on any field value — routing a high-priority inspection to a different queue than a routine one, or escalating submissions with attached damage photos to a separate approval path. We map your existing process first, then build the flow to match it exactly.",
    icon: <Connect />,
  },
  {
    number: "03",
    phase: "Act",
    heading: "Approvals fire. Records update. Work orders raise themselves.",
    body: "Your downstream systems respond before the field worker has walked back to the vehicle. Approval requests arrive in Teams. ERP records update. Work orders are created. Invoices are triggered. Every action happens because data arrived, not because someone remembered to log it.",
    detail:
      "Azure Logic Apps takes over for high-volume or on-premises scenarios. They connect to SQL Server, legacy ERPs, and B2B partners via EDI. Microsoft Fabric aggregates field data into Power BI dashboards so operations teams see trends across days, sites, and teams in near real time.",
    icon: <Act />,
  },
];

const RDGHowItWorks = () => (
  <section
    className={styles.section}
    id="how-it-works"
    style={{ scrollMarginTop: "150px" }}
  >
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>How it works</span>
        <h2 className={styles.title}>
          From device to system in{" "}
          <span className={styles.accent}>three steps...</span>
        </h2>
        <p className={styles.subtitle}>
          No manual handoffs. No spreadsheet exports. No one copying data
          between systems. The entire chain runs automatically - Capture,
          Connect, and Act.
        </p>
      </div>
    </AnimateOnScroll>

    {/* ── Three-column step grid ── */}
    <div className={styles.stepsRow}>
      {steps.map((step, i) => (
        <AnimateOnScroll
          key={step.number}
          animation="fade-up"
          duration={0.6}
          delay={i * 0.12}
        >
          <div className={styles.step}>
            {/* Number + icon block */}
            <div className={styles.stepHead}>
              <span className={styles.stepNumber}>{step.number}</span>
              <div className={styles.iconWrap}>{step.icon}</div>
            </div>

            {/* Phase label */}
            <span className={styles.phase}>{step.phase}</span>

            <h3 className={styles.stepHeading}>{step.heading}</h3>
            <p className={styles.stepBody}>{step.body}</p>

            {/* Expandable detail */}
            <details className={styles.details}>
              <summary className={styles.summary}>
                More detail
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className={styles.detailText}>{step.detail}</p>
            </details>
          </div>
        </AnimateOnScroll>
      ))}

      {/* Connector lines between columns — decorative, hidden on mobile */}
      <div className={styles.connectors} aria-hidden="true">
        <div className={styles.connectorLine} />
        <div className={styles.connectorLine} />
      </div>
    </div>
  </section>
);

export default RDGHowItWorks;
