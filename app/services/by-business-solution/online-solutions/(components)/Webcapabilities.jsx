"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import AnimateOnScroll from "../../../../../components/AnimateOnScroll";
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

// SVG visuals per capability
const PowerVisual = () => (
  <svg
    viewBox="0 0 260 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={styles.svg}
  >
    {/* App grid */}
    <rect
      x="20"
      y="20"
      width="60"
      height="60"
      rx="8"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1.5"
    />
    <rect
      x="30"
      y="30"
      width="18"
      height="4"
      rx="2"
      fill="rgba(255,255,255,0.5)"
    />
    <rect
      x="30"
      y="38"
      width="28"
      height="4"
      rx="2"
      fill="rgba(255,255,255,0.3)"
    />
    <rect
      x="30"
      y="46"
      width="22"
      height="4"
      rx="2"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="30"
      y="58"
      width="36"
      height="12"
      rx="3"
      fill="rgba(4,105,153,0.7)"
    />
    <rect
      x="90"
      y="20"
      width="60"
      height="60"
      rx="8"
      fill="rgba(255,255,255,0.06)"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="1.5"
    />
    <circle
      cx="120"
      cy="42"
      r="10"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M120 32v10l7 4"
      stroke="rgba(255,255,255,0.6)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect
      x="100"
      y="58"
      width="40"
      height="12"
      rx="3"
      fill="rgba(255,255,255,0.1)"
    />
    {/* Flow arrows */}
    <path
      d="M80 50h10"
      stroke="rgba(4,105,153,0.8)"
      strokeWidth="2"
      strokeDasharray="3 3"
    />
    <path
      d="M86 46l4 4-4 4"
      stroke="rgba(4,105,153,0.8)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Automate flow */}
    <rect
      x="20"
      y="100"
      width="210"
      height="50"
      rx="8"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.12)"
      strokeWidth="1.5"
    />
    <circle cx="44" cy="125" r="10" fill="rgba(4,105,153,0.6)" />
    <path
      d="M40 125h8M44 121v8"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M58 125h20"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <rect
      x="82"
      y="117"
      width="36"
      height="16"
      rx="4"
      fill="rgba(255,255,255,0.1)"
    />
    <path
      d="M122 125h20"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <rect
      x="146"
      y="117"
      width="36"
      height="16"
      rx="4"
      fill="rgba(255,255,255,0.1)"
    />
    <path
      d="M186 125h20"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <circle cx="214" cy="125" r="10" fill="rgba(46,200,120,0.6)" />
    <path
      d="M210 125l3 3 5-5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WebVisual = () => (
  <svg
    viewBox="0 0 260 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={styles.svg}
  >
    {/* Browser chrome */}
    <rect
      x="10"
      y="10"
      width="240"
      height="160"
      rx="10"
      fill="#f0f4f8"
      stroke="#d0dae4"
      strokeWidth="1.5"
    />
    <rect x="10" y="10" width="240" height="32" rx="10" fill="#e2eaf2" />
    <rect x="10" y="30" width="240" height="12" fill="#e2eaf2" />
    <circle cx="30" cy="26" r="5" fill="#ff6b6b" opacity="0.7" />
    <circle cx="46" cy="26" r="5" fill="#ffd93d" opacity="0.7" />
    <circle cx="62" cy="26" r="5" fill="#6bcb77" opacity="0.7" />
    <rect
      x="80"
      y="20"
      width="120"
      height="12"
      rx="6"
      fill="white"
      opacity="0.8"
    />
    <rect
      x="88"
      y="24"
      width="60"
      height="4"
      rx="2"
      fill="#046999"
      opacity="0.4"
    />
    {/* Page content */}
    <rect
      x="20"
      y="52"
      width="220"
      height="28"
      rx="4"
      fill="#046999"
      opacity="0.15"
    />
    <rect
      x="28"
      y="58"
      width="90"
      height="8"
      rx="3"
      fill="#046999"
      opacity="0.5"
    />
    <rect
      x="28"
      y="68"
      width="60"
      height="5"
      rx="2"
      fill="#046999"
      opacity="0.25"
    />
    {/* Cards row */}
    <rect
      x="20"
      y="90"
      width="66"
      height="70"
      rx="5"
      fill="white"
      stroke="#d0dae4"
      strokeWidth="1"
    />
    <rect
      x="96"
      y="90"
      width="66"
      height="70"
      rx="5"
      fill="white"
      stroke="#d0dae4"
      strokeWidth="1"
    />
    <rect
      x="172"
      y="90"
      width="66"
      height="70"
      rx="5"
      fill="white"
      stroke="#d0dae4"
      strokeWidth="1"
    />
    <rect
      x="28"
      y="100"
      width="50"
      height="4"
      rx="2"
      fill="#046999"
      opacity="0.4"
    />
    <rect
      x="28"
      y="108"
      width="40"
      height="3"
      rx="1.5"
      fill="#8ca0b0"
      opacity="0.5"
    />
    <rect
      x="28"
      y="114"
      width="45"
      height="3"
      rx="1.5"
      fill="#8ca0b0"
      opacity="0.4"
    />
    <rect
      x="28"
      y="148"
      width="50"
      height="8"
      rx="3"
      fill="#046999"
      opacity="0.6"
    />
    <rect
      x="104"
      y="100"
      width="50"
      height="4"
      rx="2"
      fill="#046999"
      opacity="0.4"
    />
    <rect
      x="104"
      y="108"
      width="40"
      height="3"
      rx="1.5"
      fill="#8ca0b0"
      opacity="0.5"
    />
    <rect
      x="104"
      y="114"
      width="45"
      height="3"
      rx="1.5"
      fill="#8ca0b0"
      opacity="0.4"
    />
    <rect
      x="104"
      y="148"
      width="50"
      height="8"
      rx="3"
      fill="#046999"
      opacity="0.6"
    />
    <rect
      x="180"
      y="100"
      width="50"
      height="4"
      rx="2"
      fill="#046999"
      opacity="0.4"
    />
    <rect
      x="180"
      y="108"
      width="40"
      height="3"
      rx="1.5"
      fill="#8ca0b0"
      opacity="0.5"
    />
    <rect
      x="180"
      y="114"
      width="45"
      height="3"
      rx="1.5"
      fill="#8ca0b0"
      opacity="0.4"
    />
    <rect
      x="180"
      y="148"
      width="50"
      height="8"
      rx="3"
      fill="#046999"
      opacity="0.6"
    />
  </svg>
);

const ApiVisual = () => (
  <svg
    viewBox="0 0 260 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={styles.svg}
  >
    {/* Central hub */}
    <circle
      cx="130"
      cy="90"
      r="24"
      fill="rgba(4,105,153,0.15)"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="2"
    />
    <circle cx="130" cy="90" r="14" fill="rgba(4,105,153,0.3)" />
    <text
      x="130"
      y="95"
      textAnchor="middle"
      fill="white"
      fontSize="9"
      fontWeight="700"
    >
      API
    </text>
    {/* Satellites */}
    <circle
      cx="40"
      cy="40"
      r="18"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.5"
    />
    <text
      x="40"
      y="44"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="7"
      fontWeight="600"
    >
      M365
    </text>
    <circle
      cx="220"
      cy="40"
      r="18"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.5"
    />
    <text
      x="220"
      y="44"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="7"
      fontWeight="600"
    >
      CRM
    </text>
    <circle
      cx="40"
      cy="140"
      r="18"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.5"
    />
    <text
      x="40"
      y="144"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="7"
      fontWeight="600"
    >
      XERO
    </text>
    <circle
      cx="220"
      cy="140"
      r="18"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.5"
    />
    <text
      x="220"
      y="144"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="7"
      fontWeight="600"
    >
      ERP
    </text>
    <circle
      cx="130"
      cy="18"
      r="14"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1.5"
    />
    <text
      x="130"
      y="22"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="6.5"
      fontWeight="600"
    >
      SHAREPOINT
    </text>
    {/* Connection lines */}
    <path
      d="M56 52 L114 78"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    <path
      d="M204 52 L146 78"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    <path
      d="M56 130 L114 102"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    <path
      d="M204 130 L146 102"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    <path
      d="M130 32 L130 66"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="1.5"
      strokeDasharray="5 4"
    />
    {/* Data packets */}
    <circle cx="85" cy="65" r="4" fill="rgba(4,105,153,0.9)" />
    <circle cx="175" cy="65" r="4" fill="rgba(4,105,153,0.9)" />
    <circle cx="85" cy="115" r="4" fill="rgba(46,200,120,0.9)" />
    <circle cx="175" cy="115" r="4" fill="rgba(46,200,120,0.9)" />
  </svg>
);

const DataVisual = () => (
  <svg
    viewBox="0 0 260 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={styles.svg}
  >
    {/* Chart background */}
    <rect
      x="15"
      y="15"
      width="230"
      height="150"
      rx="8"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="1.5"
    />
    {/* Y axis lines */}
    <line
      x1="40"
      y1="40"
      x2="230"
      y2="40"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="1"
    />
    <line
      x1="40"
      y1="65"
      x2="230"
      y2="65"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="1"
    />
    <line
      x1="40"
      y1="90"
      x2="230"
      y2="90"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="1"
    />
    <line
      x1="40"
      y1="115"
      x2="230"
      y2="115"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="1"
    />
    {/* Area chart fill */}
    <path
      d="M40 130 L80 105 L120 95 L160 70 L200 50 L230 38 L230 145 L40 145Z"
      fill="rgba(4,105,153,0.2)"
    />
    {/* Line */}
    <path
      d="M40 130 L80 105 L120 95 L160 70 L200 50 L230 38"
      stroke="rgba(4,105,153,0.9)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Data points */}
    <circle cx="40" cy="130" r="4" fill="#046999" />
    <circle cx="80" cy="105" r="4" fill="#046999" />
    <circle cx="120" cy="95" r="4" fill="#046999" />
    <circle cx="160" cy="70" r="4" fill="#046999" />
    <circle cx="200" cy="50" r="4" fill="#046999" />
    <circle
      cx="230"
      cy="38"
      r="5"
      fill="white"
      stroke="#046999"
      strokeWidth="2"
    />
    {/* Tooltip */}
    <rect
      x="195"
      y="22"
      width="60"
      height="22"
      rx="4"
      fill="rgba(4,105,153,0.9)"
    />
    <text
      x="225"
      y="33"
      textAnchor="middle"
      fill="white"
      fontSize="7"
      fontWeight="700"
    >
      +34.2%
    </text>
    <text
      x="225"
      y="41"
      textAnchor="middle"
      fill="rgba(255,255,255,0.7)"
      fontSize="6"
    >
      vs last yr
    </text>
    {/* KPI pills bottom */}
    <rect
      x="22"
      y="152"
      width="55"
      height="10"
      rx="5"
      fill="rgba(46,200,120,0.3)"
    />
    <text
      x="49"
      y="160"
      textAnchor="middle"
      fill="rgba(255,255,255,0.8)"
      fontSize="6.5"
    >
      Live Data
    </text>
    <rect
      x="85"
      y="152"
      width="55"
      height="10"
      rx="5"
      fill="rgba(4,105,153,0.4)"
    />
    <text
      x="112"
      y="160"
      textAnchor="middle"
      fill="rgba(255,255,255,0.8)"
      fontSize="6.5"
    >
      Auto-refresh
    </text>
    <rect
      x="148"
      y="152"
      width="55"
      height="10"
      rx="5"
      fill="rgba(255,255,255,0.1)"
    />
    <text
      x="175"
      y="160"
      textAnchor="middle"
      fill="rgba(255,255,255,0.8)"
      fontSize="6.5"
    >
      Power BI
    </text>
  </svg>
);

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
