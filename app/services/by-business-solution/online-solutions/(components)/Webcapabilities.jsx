"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import { ApiVisual } from "../(svgs)/ApiVisual";
import { PowerVisual } from "../(svgs)/PowerVisual";
import { WebVisual } from "../(svgs)/WebVisual";
import { DataVisual } from "../(svgs)/DataVisual";

import styles from "../../../../../styles/webCapabilities.module.css";

const capabilities = [
  {
    id: "power-platform",
    index: "03",
    theme: "dark",
    eyebrow: "Power Apps · Power Automate · Power Pages",
    heading: "Build more. Spend less. Stay inside Microsoft.",
    body: "The Power Platform is one of the most underused tools sitting inside Microsoft 365 right now. We build custom apps, automated approval flows and external-facing portals that connect directly to your existing data. No third-party licences, no expensive custom software.",
    detail:
      "Common projects include job management systems, staff onboarding workflows, service request forms, client portals and mobile field apps. If your team is already in Microsoft 365, this is often the fastest path to a working solution.",
    tags: ["Power Apps", "Power Automate", "Power Pages", "Microsoft 365"],
    stat: { value: "80%", label: "faster than building from scratch" },
    visual: "power",
  },
  {
    id: "web-apps",
    index: "04",
    theme: "light",
    eyebrow: "Custom Websites & Web Applications",
    heading: "When off-the-shelf doesn't cut it, we build from the ground up.",
    body: "Some problems need a custom solution. Our development team builds browser-based tools designed entirely around how your business actually works. Not adapted from a template, not forced into a plugin.",
    detail:
      "Customer portals, booking systems, online calculators, quoting tools, dashboards, internal management systems. If you can describe what you need it to do, we can build it.",
    tags: ["React / Next.js", "Node.js", "Custom Portals", "Web Apps"],
    stat: { value: "100%", label: "built around your workflow" },
    visual: "web",
  },
  {
    id: "api",
    index: "05",
    theme: "accent",
    eyebrow: "API Integrations & Connected Systems",
    heading: "Your tools should talk to each other. Most don't.",
    body: "Entering the same data into two different systems is a tax on your team's time. We connect your platforms through secure API integrations so information flows where it needs to go, automatically and accurately.",
    detail:
      "We work with Microsoft 365, Dynamics, SharePoint, Outlook, CRMs, accounting software, payment systems and more. Whether it is a simple two-way sync or a complex multi-system integration, we document everything so you always know how it works.",
    tags: ["REST APIs", "Microsoft Graph", "Dynamics", "CRM Connectors"],
    stat: { value: "Zero", label: "duplicate data entry" },
    visual: "api",
  },
  {
    id: "data",
    index: "06",
    theme: "light",
    eyebrow: "Smarter Data, Reporting & Process Automation",
    heading: "If your reporting still lives in a spreadsheet, we need to talk.",
    body: "Spreadsheets are not databases. When critical decisions rely on a file someone emailed last Tuesday, things go wrong. We help businesses move into secure, cloud-based systems with proper permissions, live data and reporting that updates itself.",
    detail:
      "Using Power BI, cloud databases and custom dashboards, we give you visibility across your operations without the manual work. Less risk, better decisions, and a system that actually scales as you grow.",
    tags: ["Power BI", "Cloud Databases", "Dashboards", "Automation"],
    stat: { value: "Live", label: "reporting across your operations" },
    visual: "data",
  },
];

const visuals = {
  power: PowerVisual,
  web: WebVisual,
  api: ApiVisual,
  data: DataVisual,
};

const CapabilityCard = ({ cap, index }) => {
  const [expanded, setExpanded] = useState(false);
  const Visual = visuals[cap.visual];

  return (
    <AnimateOnScroll animation="fade-up" duration={0.65} delay={index * 0.1}>
      <article
        className={`${styles.card} ${styles[`card--${cap.theme}`]}`}
        data-expanded={expanded}
      >
        <div className={styles.cardInner}>
          {/* Left: text content */}
          <div className={styles.cardText}>
            <div className={styles.cardMeta}>
              <span className={styles.cardIndex}>{cap.index}</span>
              <span className={styles.cardEyebrow}>{cap.eyebrow}</span>
            </div>
            <h2 className={styles.cardHeading}>{cap.heading}</h2>
            <p className={styles.cardBody}>{cap.body}</p>

            <div className={styles.cardDetail} aria-hidden={!expanded}>
              <p>{cap.detail}</p>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.cardTags}>
                {cap.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
              <button
                className={styles.expandBtn}
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-label={expanded ? "Show less" : "Read more"}
              >
                {expanded ? "Show less" : "Read more"}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  style={{
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <path
                    d="M2 5l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: SVG visual + stat */}
          <div className={styles.cardVisual}>
            <div className={styles.visualWrap}>
              <Visual />
            </div>
            <div className={styles.cardStat}>
              <span className={styles.statValue}>{cap.stat.value}</span>
              <span className={styles.statLabel}>{cap.stat.label}</span>
            </div>
          </div>
        </div>
      </article>
    </AnimateOnScroll>
  );
};

const WebCapabilities = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <span className={styles.headerEyebrow}>Full-Stack Capability</span>
          <h2 className={styles.headerTitle}>
            Every layer of your
            <br />
            <em>online presence, covered.</em>
          </h2>
          <p className={styles.headerSub}>
            From Power Platform automation to bespoke web applications and
            everything in between, our team has seen it all and built most of
            it.
          </p>
        </AnimateOnScroll>
      </div>

      <div className={styles.cardStack}>
        {capabilities.map((cap, i) => (
          <CapabilityCard key={cap.id} cap={cap} index={i} />
        ))}
      </div>
    </section>
  );
};

export default WebCapabilities;
