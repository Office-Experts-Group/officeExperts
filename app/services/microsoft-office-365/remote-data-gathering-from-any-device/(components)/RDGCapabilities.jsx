// services/microsoft-office-365/remote-data-gathering-from-any-device/RDGCapabilities.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import { PowerAppsVisual } from "../(svgs)/PowerAppsVisual";
import { LogicAppsVisual } from "../(svgs)/LogicAppsVisual";
import { ApiVisual } from "../(svgs)/ApiVisual";

import styles from "../../../../../styles/rdgCapabilities.module.css";

const cards = [
  {
    id: "power-apps",
    index: "01",
    theme: "cardDark",
    eyebrow: "Power Apps · Mobile Forms",
    heading:
      "Custom forms on any device. Data in Dataverse before they leave the site.",
    body: "Power Apps deploys fully branded forms to iOS, Android, and any browser. Fields validate on device, attachments upload to SharePoint, and GPS coordinates stamp every submission automatically. The form works completely offline and syncs the moment connectivity returns.",
    detail:
      "Conditional logic, calculated fields, and lookup lists all run on-device. No custom app development, no App Store submissions, no MDM requirement. We configure the form, publish it to your tenant, and field staff access it via the free Power Apps mobile app. Licencing is included in most Microsoft 365 Business and Enterprise plans.",
    tags: [
      "Power Apps",
      "iOS / Android",
      "Offline sync",
      "Dataverse",
      "SharePoint",
    ],
    stat: {
      value: "Offline",
      label: "capable — syncs automatically on reconnect",
    },
    Visual: PowerAppsVisual,
    link: {
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
      text: "Power Apps services",
    },
  },
  {
    id: "api-integration",
    index: "02",
    theme: "cardMid",
    eyebrow: "Power Automate · API Connectors",
    heading: "Connect field data to every system you run... Microsoft or not.",
    body: "Power Automate ships with over 900 certified connectors covering Xero, MYOB, Salesforce, SAP, Dynamics 365, Azure SQL, and more. Custom HTTP connectors handle any REST API your business relies on. Two-way sync means data flows both directions without anyone writing integration code.",
    detail:
      "Webhook triggers let external systems push data into your Microsoft environment the moment something changes upstream. OAuth 2.0 and API-key authentication are both supported. We design the connector schema, map the fields, handle pagination and error retries, and document the integration so your team can maintain it.",
    tags: [
      "900+ connectors",
      "REST API",
      "Webhooks",
      "OAuth 2.0",
      "Xero",
      "Salesforce",
    ],
    stat: {
      value: "900+",
      label: "certified connectors available out of the box",
    },
    Visual: ApiVisual,
    link: {
      href: "/services/by-business-solution/3rd-party-application-or-office-integration",
      text: "API integration and automation",
    },
  },
  {
    id: "logic-apps",
    index: "03",
    theme: "cardAccent",
    eyebrow: "Azure Logic Apps · Enterprise Orchestration",
    heading:
      "Enterprise pipelines that connect on-premises systems to the cloud.",
    body: "Azure Logic Apps handles the integration workloads that outgrow Power Automate: high-volume transforms, complex branching logic, on-premises SQL and ERP connections via the data gateway, and B2B EDI messaging. Built on Azure, it scales automatically and carries enterprise SLAs.",
    detail:
      "Logic Apps run in your Azure subscription, giving you full control over network isolation, private endpoints, and data residency within Australian Azure regions. Microsoft Fabric integration lets transformed field data feed directly into data warehouses and Power BI reports in near real time.",
    tags: [
      "Azure Logic Apps",
      "On-premises gateway",
      "Microsoft Fabric",
      "EDI",
      "Azure SQL",
    ],
    stat: {
      value: "Real-time",
      label: "pipeline execution with enterprise-grade SLA",
    },
    Visual: LogicAppsVisual,
    link: {
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      text: "Power Automate and Logic Apps",
    },
  },
];

// ─────────────────────────────────────────────
// Single card
// ─────────────────────────────────────────────
const CapabilityCard = ({ card, index }) => {
  const [expanded, setExpanded] = useState(false);
  const { Visual } = card;

  return (
    <AnimateOnScroll animation="fade-up" duration={0.65} delay={index * 0.1}>
      <article
        className={`${styles.card} ${styles[card.theme]} ${expanded ? styles.cardExpanded : ""}`}
      >
        <div className={styles.cardInner}>
          <div className={styles.cardText}>
            <div className={styles.cardMeta}>
              <span className={styles.cardIndex}>{card.index}</span>
              <span className={styles.cardEyebrow}>{card.eyebrow}</span>
            </div>
            <h2 className={styles.cardHeading}>{card.heading}</h2>
            <p className={styles.cardBody}>{card.body}</p>
            <div className={styles.expandDetail} aria-hidden={!expanded}>
              <p>{card.detail}</p>
              <Link href={card.link.href} className={styles.detailLink}>
                {card.link.text}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.tags}>
                {card.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
              <button
                className={styles.expandBtn}
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-label={expanded ? "Show less detail" : "Read more detail"}
              >
                {expanded ? "Show less" : "Read more"}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.svgWrap}>
              <Visual />
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>{card.stat.value}</span>
              <span className={styles.statLabel}>{card.stat.label}</span>
            </div>
          </div>
        </div>
      </article>
    </AnimateOnScroll>
  );
};

// ─────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────
const RDGCapabilities = () => (
  <section
    className={styles.section}
    id="capabilities"
    style={{ scrollMarginTop: "150px" }}
  >
    <div className={styles.header}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <span className={styles.eyebrow}>
          Microsoft 365 · Core Technologies
        </span>
        <h2 className={styles.title}>
          Three tools. One connected <span>data pipeline.</span>
        </h2>
        <p className={styles.subtitle}>
          Power Apps captures it. Power Automate moves it. Azure Logic Apps
          orchestrates it at enterprise scale. Together they replace every
          manual handoff in your remote data workflow.
        </p>
      </AnimateOnScroll>
    </div>
    <div className={styles.cardStack}>
      {cards.map((card, i) => (
        <CapabilityCard key={card.id} card={card} index={i} />
      ))}
    </div>
  </section>
);

export default RDGCapabilities;
