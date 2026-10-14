// app/services/by-business-solution/3rd-party-application-or-office-integration/(components)/ThirdPartySecurity.jsx

import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

// Compiled CSS from styles/thirdPartySecurity.module.scss
import styles from "../../../../../styles/thirdPartySecurity.module.css";

// Where a point is backed by a real project, it links to that case study.
// Points without a link describe how we approach the work in general.
const points = [
  {
    title: "Built inside your own tenant",
    text: "Where your IT team requires it, we build in your Microsoft 365 and Azure environment, so data stays in the region your tenant uses and access follows the same Entra ID sign-in as your other tools.",
    href: "/case-studies/internal-ai-proposal-assistant-azure-migration",
    linkText: "Migrating a tool inside Azure",
  },
  {
    title: "Only the access the job needs",
    text: "Read-only where reading is enough. Where we write back to Xero, MYOB or Salesforce, the connection uses a dedicated account or app registration with limited permissions, so it can be reviewed or switched off without affecting anyone's own login.",
  },
  {
    title: "Tested, not assumed",
    text: "We test with real accounts and your real figures. On one project we confirmed with an external account that partners could never see each other's data, matching every figure to the cent.",
    href: "/case-studies/retail-power-bi-partner-reporting-security",
    linkText: "Partner data isolation case study",
  },
  {
    title: "People approve, and changes are recorded",
    text: "For important steps a person reviews the result before anything is posted or sent, and we can log who changed what and when, so there is a trail to check later.",
    href: "/case-studies/financial-services-ai-risk-compliance-automation",
    linkText: "Audit trail case study",
  },
];

const ThirdPartySecurity = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Security and data handling</p>
            <h2>
              Your data stays{" "}
              <span className={styles.accent}>under your control</span>
            </h2>
            <p>
              Connecting accounting and customer data to Office raises fair
              questions about who can see what. These are the principles we
              build to.
            </p>
          </div>
        </AnimateOnScroll>

        <ul className={styles.cards}>
          {points.map((point) => (
            <li key={point.title} className={styles.card}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
              {point.href && (
                <Link href={point.href} className={styles.link}>
                  {point.linkText}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ThirdPartySecurity;
