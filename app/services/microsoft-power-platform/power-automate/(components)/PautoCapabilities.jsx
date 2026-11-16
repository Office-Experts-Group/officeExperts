// /app/services/microsoft-power-platform/power-automate/(components)/PautoCapabilities.jsx
import React from "react";
import Link from "next/link";

import {
  PautoFlowArt,
  PautoAiArt,
  PautoApprovalArt,
  PautoAgentArt,
  PautoApiArt,
} from "../(svgs)/PautoCapabilityArt";
import { ArrowIcon, CheckIcon } from "../(svgs)/PautoIcons";

import styles from "@/styles/pautoCapabilities.module.scss";

const PAUTO_CAPABILITIES = [
  {
    id: "flows",
    tile: "accentTile",
    area: "areaFlows",
    Art: PautoFlowArt,
    tag: "Foundation",
    title: "Flow automation & system integration",
    desc: "The backbone of Power Automate. Scheduled triggers, approvals, notifications and data sync across your existing platforms. If your team does it manually more than once a week, an automated flow can handle it instead.",
    points: [
      "Scheduled and event-based triggers",
      "Approvals and notifications in Teams and Outlook",
      "SharePoint, Excel and Dataverse updates",
      "Data sync between the platforms you already run",
    ],
    link: { href: "#contact", text: "Speak with an expert" },
  },
  {
    id: "ai",
    tile: "surfaceTile",
    area: "areaAi",
    Art: PautoAiArt,
    tag: "AI Builder",
    title: "AI Builder: document & invoice intelligence",
    desc: "Power Automate can now read documents. Prebuilt or custom AI Builder models extract fields from invoices, delivery dockets, compliance forms and receipts, then feed structured data into your ERP, SharePoint or Dataverse.",
    link: { href: "#pauto-documents", text: "See how it works" },
  },
  {
    id: "approvals",
    tile: "lightTile",
    area: "areaApprovals",
    Art: PautoApprovalArt,
    tag: "Smart routing",
    title: "Intelligent approval workflows",
    desc: "Approvals that route themselves. Flows that detect who is out of office, escalate automatically when nothing is actioned, and triage incoming emails by intent and urgency without human intervention.",
    link: {
      href: "/services/business-process-automation",
      text: "Explore process automation",
    },
  },
  {
    id: "agents",
    tile: "midTile",
    area: "areaAgents",
    Art: PautoAgentArt,
    tag: "Agents",
    title: "Copilot Studio: autonomous agents",
    desc: "Agents built in Copilot Studio monitor your systems around the clock, act on the conditions you set, and surface only genuine exceptions to your team. Think accounts payable, contract renewals and stock reordering, handled without a trigger.",
    link: { href: "#pauto-agents", text: "See how agents work" },
  },
  {
    id: "api",
    tile: "deepTile",
    area: "areaApi",
    Art: PautoApiArt,
    tag: "Integration",
    title: "Cross-platform API orchestration",
    desc: "We connect Power Automate to whatever else you run. Dynamics 365, Xero, MYOB, Salesforce, custom REST APIs or legacy systems. Data moves where it needs to go, automatically, across every platform in your stack.",
    link: {
      href: "/services/3rd-party-application-or-office-integration",
      text: "Explore integrations",
    },
  },
];

const PautoCapabilities = () => (
  <section
    id="pauto-capabilities"
    className={styles.pautoCapabilities}
    aria-labelledby="pauto-capabilities-heading"
  >
    <header className={styles.header}>
      <span className={styles.eyebrow}>What we create</span>
      <h2 id="pauto-capabilities-heading" className={styles.heading}>
        Power Automate services{" "}
        <span className={styles.accent}>built around your work.</span>
      </h2>
    </header>

    <ul className={styles.grid}>
      {PAUTO_CAPABILITIES.map((c) => (
        <li
          key={c.id}
          className={`${styles.tile} ${styles[c.tile]} ${styles[c.area]}`}
        >
          <div className={styles.art}>
            <c.Art />
          </div>
          <div className={styles.copy}>
            <span className={styles.tag}>{c.tag}</span>
            <h3 className={styles.title}>{c.title}</h3>
            <p className={styles.desc}>{c.desc}</p>

            {c.points && (
              <ul className={styles.points}>
                {c.points.map((p) => (
                  <li key={p}>
                    <span className={styles.pointMark} aria-hidden="true">
                      <CheckIcon size={12} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            )}

            <Link href={c.link.href} className={styles.link}>
              {c.link.text}
              <ArrowIcon />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default PautoCapabilities;
