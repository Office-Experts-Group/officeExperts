import React from "react";
import Link from "next/link";
import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/microsoftSolutions.module.css";

const solutions = [
  {
    id: "01",
    category: "Microsoft 365",
    heading:
      "Your team is already in Microsoft 365. Are you getting the most out of it?",
    body: "Most organisations use a fraction of what Microsoft 365 can actually do. We help close that gap , building structured environments where emails don't get lost, documents have a home, and your team isn't chasing each other for approvals.",
    points: [
      "Structured document libraries & permissions",
      "Teams configuration & governance",
      "Outlook automation & shared mailbox setup",
      "Organisation-wide templates & standards",
    ],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="6"
          width="16"
          height="16"
          rx="2"
          fill="currentColor"
          opacity="0.9"
        />
        <rect
          x="26"
          y="6"
          width="16"
          height="16"
          rx="2"
          fill="currentColor"
          opacity="0.6"
        />
        <rect
          x="6"
          y="26"
          width="16"
          height="16"
          rx="2"
          fill="currentColor"
          opacity="0.6"
        />
        <rect
          x="26"
          y="26"
          width="16"
          height="16"
          rx="2"
          fill="currentColor"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    id: "02",
    category: "SharePoint Online",
    heading: "A single place where your business information actually lives.",
    body: "Shared drives are a mess. Email threads are worse. SharePoint, built properly, gives your team one place to find what they need, with the right people seeing the right things. We design environments people actually use.",
    points: [
      "Company intranets & staff hubs",
      "Department sites & project workspaces",
      "Approval workflows & document lifecycle",
      "Secure external sharing & client portals",
    ],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="14"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.4"
        />
        <circle cx="24" cy="24" r="7" fill="currentColor" opacity="0.8" />
        <path
          d="M24 10V4M24 44v-6M10 24H4M44 24h-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    id: "03",
    category: "Power Apps",
    heading: "Custom business apps, without the custom software price tag.",
    body: "If your team is running a process through a spreadsheet or shared inbox, there's almost certainly a better way. Power Apps lets us build tailored applications that sit inside your Microsoft environment and work the way your team does.",
    points: [
      "Job & project management apps",
      "Staff onboarding & HR workflows",
      "Service request & approvals systems",
      "Mobile-friendly field apps",
    ],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="4"
          width="20"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.5"
        />
        <rect
          x="14"
          y="10"
          width="8"
          height="2"
          rx="1"
          fill="currentColor"
          opacity="0.6"
        />
        <rect
          x="14"
          y="15"
          width="8"
          height="2"
          rx="1"
          fill="currentColor"
          opacity="0.6"
        />
        <rect
          x="14"
          y="20"
          width="5"
          height="2"
          rx="1"
          fill="currentColor"
          opacity="0.6"
        />
        <path d="M24 30l14 10V20L24 30z" fill="currentColor" opacity="0.85" />
      </svg>
    ),
  },
  {
    id: "04",
    category: "Power Automate",
    heading: "Stop doing manually what a machine could handle.",
    body: "Chasing approvals. Copying data between systems. Sending the same notification emails. These tasks quietly eat hours every week. Power Automate handles them in the background so your team can focus on work that actually needs a person.",
    points: [
      "Document approval & sign-off flows",
      "Automated notifications & reminders",
      "Cross-system data sync",
      "Scheduled reports & data exports",
    ],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 24h8l5-14 6 28 5-14 4 0"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <circle cx="39" cy="24" r="3" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    id: "05",
    category: "Power Pages",
    heading:
      "Give clients and partners their own secure window into your business.",
    body: "Sometimes you need people outside your organisation to access information, submit forms or track progress without being inside your systems. Power Pages creates secure, branded external portals connected to your Microsoft data.",
    points: [
      "Customer self-service portals",
      "Partner & supplier access hubs",
      "Online forms connected to your data",
      "Branded, secure external-facing sites",
    ],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="10"
          width="36"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.5"
        />
        <path
          d="M6 18h36"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.4"
        />
        <circle cx="13" cy="14" r="2" fill="currentColor" opacity="0.7" />
        <circle cx="20" cy="14" r="2" fill="currentColor" opacity="0.5" />
        <rect
          x="12"
          y="24"
          width="24"
          height="2"
          rx="1"
          fill="currentColor"
          opacity="0.5"
        />
        <rect
          x="12"
          y="30"
          width="16"
          height="2"
          rx="1"
          fill="currentColor"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    id: "06",
    category: "API Integrations",
    heading: "Tired of entering the same data into two different systems?",
    body: "We connect your platforms. Microsoft 365, Dynamics, your CRM, accounting software, payment systems or custom apps. Information moves automatically where it needs to go. Less manual handling, fewer mistakes, better data across the board.",
    points: [
      "Microsoft 365 & Dynamics integrations",
      "CRM & accounting software connections",
      "Payment & e-commerce system sync",
      "Custom API development & documentation",
    ],
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="24"
          r="6"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.7"
        />
        <circle
          cx="36"
          cy="12"
          r="6"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.7"
        />
        <circle
          cx="36"
          cy="36"
          r="6"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.7"
        />
        <path
          d="M18 24h6M30 14l-6 8M30 34l-6-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
  },
];

const MicrosoftSolutions = () => {
  return (
    <section id="next-section" className={styles.section}>
      <div className={styles.header}>
        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
          <span className={styles.eyebrow}>Microsoft Platform</span>
          <h2 className={styles.sectionTitle}>
            Modern solutions built on tools <em>you already own</em>
          </h2>
        </AnimateOnScroll>
      </div>

      <div className={styles.grid}>
        {solutions.map((s, i) => (
          <AnimateOnScroll
            key={s.id}
            animation="fade-up"
            duration={0.6}
            delay={i * 0.08}
          >
            <article className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>{s.icon}</div>
                <span className={styles.cardNum}>{s.id}</span>
              </div>
              <span className={styles.cardCategory}>{s.category}</span>
              <h3 className={styles.cardHeading}>{s.heading}</h3>
              <p className={styles.cardBody}>{s.body}</p>
              <ul className={styles.pointList}>
                {s.points.map((pt) => (
                  <li key={pt} className={styles.pointItem}>
                    <span className={styles.pointDot} aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default MicrosoftSolutions;
