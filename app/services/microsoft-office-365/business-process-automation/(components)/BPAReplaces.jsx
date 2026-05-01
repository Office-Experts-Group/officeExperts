"use client";
import React, { useState } from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/bpaReplaces.module.css";

const LINKS = {
  powerAutomate:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
  powerApps:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
  sharePoint: "/services/by-business-solution/online-solutions",
  aiBuilder:
    "/services/microsoft-office-365/business-process-automation#document-processing",

  // dynamics: null, ***************************************************************

  dynamics:
    "/services/microsoft-office-365/business-process-automation#document-processing",
  powerBI:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
  apiIntegrations: "/microsoft-365-api-integration",
  onboarding: "/microsoft-support-and-training-australia",
  emailTriage:
    "/services/microsoft-office-365/business-process-automation#email-triage",
  approvals:
    "/services/microsoft-office-365/business-process-automation#approvals",
};

const rows = [
  {
    id: "invoices",
    category: "Finance",
    before:
      "Open invoice PDF, manually key supplier name, ABN, amount and line items into accounting software. Chase missing details by email.",
    after: (
      <>
        <Link href={LINKS.aiBuilder} className={styles.inlineLink}>
          AI Builder
        </Link>{" "}
        reads the invoice, extracts every field, matches it against an open
        purchase order in your ERP, and auto-posts matched invoices. Exceptions
        surface to a reviewer with a context summary, no more manual keying.
      </>
    ),
    tag: "AI Builder",
    tagHref: LINKS.aiBuilder,
  },
  {
    id: "approvals",
    category: "Finance",
    before:
      "Email the finance manager for PO approval. Wait. Follow up. No visibility on status. No audit trail of who approved what or when.",
    after: (
      <>
        A Copilot approval flow routes to the correct approver based on spend
        threshold and availability, escalates if unactionable within SLA, and
        writes a full audit log to SharePoint. One Teams card, no other system
        needed.
      </>
    ),
    tag: "Power Automate · Copilot",
    tagHref: LINKS.powerAutomate,
  },
  {
    id: "inbox",
    category: "Operations",
    before:
      "One person spends 1-2 hours every morning reading, categorising and forwarding emails in the shared finance or procurement inbox.",
    after: (
      <>
        AI email triage classifies every incoming email by intent and urgency
        before anyone opens it. Routine items are handled automatically. Urgent
        items trigger an immediate Teams notification to the right person.
      </>
    ),
    tag: "AI Builder · Teams",
    tagHref: LINKS.emailTriage,
  },
  {
    id: "contracts",
    category: "Operations",
    before:
      "Maintain a spreadsheet tracking contract expiry dates, supplier renewals and compliance deadlines. Send reminder emails manually.",
    after: (
      <>
        <Link href={LINKS.powerAutomate} className={styles.inlineLink}>
          Power Automate
        </Link>{" "}
        monitors key dates stored in SharePoint or Dataverse. It sends staged
        reminders at 90, 60 and 30 days, escalates if no action is taken, and
        logs every response with a timestamp.
      </>
    ),
    tag: "Power Automate · SharePoint",
    tagHref: LINKS.sharePoint,
  },
  {
    id: "dockets",
    category: "Operations",
    before:
      "Scan paper delivery dockets and job sheets, then manually type field values into your inventory system or ERP. Time-consuming and error-prone.",
    after: (
      <>
        A custom AI Builder form model reads each docket, it could be scanned or
        photographed, then automatically extracts every named field, and writes
        structured data directly to Dataverse or your ERP via{" "}
        <Link href={LINKS.apiIntegrations} className={styles.inlineLink}>
          API integration
        </Link>
        .
      </>
    ),
    tag: "AI Builder · API Integration",
    tagHref: LINKS.apiIntegrations,
  },
  {
    id: "reporting",
    category: "Reporting",
    before:
      "Compile a weekly status or pipeline report by manually exporting data from 3-4 different systems, copying into Excel and formatting for distribution.",
    after: (
      <>
        A scheduled Power Automate flow pulls live data from connected systems,
        feeds it into a{" "}
        <Link href={LINKS.powerBI} className={styles.inlineLink}>
          Power BI
        </Link>{" "}
        dataset or formatted report, and distributes automatically to
        stakeholders.
      </>
    ),
    tag: "Power Automate · Power BI",
    tagHref: LINKS.powerBI,
  },
  {
    id: "onboarding",
    category: "HR & IT",
    before:
      "New employee IT setup is triggered by an email request to IT. Licence assignment, folder access and system provisioning take days and depend on someone remembering every step.",
    after: (
      <>
        An onboarding flow triggers automatically on Azure AD user creation,
        assigning Microsoft 365 licences, provisioning SharePoint and Teams
        access, sending a welcome email, and creating a Power Apps onboarding
        task list.
      </>
    ),
    tag: "Power Automate · Power Apps",
    tagHref: LINKS.powerApps,
  },
];

// Categories for the filter tabs
const categories = ["All", "Finance", "Operations", "Reporting", "HR & IT"];

// ─────────────────────────────────────────────
// Single comparison row
// ─────────────────────────────────────────────
const Row = ({ row, index }) => (
  <AnimateOnScroll animation="fade-up" duration={0.55} delay={index * 0.06}>
    <div className={styles.row}>
      {/* ── Before cell ── */}
      <div className={styles.cell + " " + styles.cellBefore}>
        <div className={styles.cellHeader}>
          <span className={styles.xIcon} aria-label="Before — manual process">
            ✕
          </span>
          <span className={styles.cellLabel}>Today</span>
        </div>
        <p className={styles.cellText}>{row.before}</p>
      </div>

      {/* ── Divider arrow ── */}
      <div className={styles.arrow} aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="16"
            cy="16"
            r="15"
            stroke="rgba(4,105,153,0.2)"
            strokeWidth="1"
          />
          <path
            d="M10 16h12M18 12l4 4-4 4"
            stroke="#046999"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ── After cell ── */}
      <div className={styles.cell + " " + styles.cellAfter}>
        <div className={styles.cellHeader}>
          <span className={styles.checkIcon} aria-label="After — automated">
            ✓
          </span>
          <span className={styles.cellLabel}>Automated</span>
          <Link
            href={row.tagHref}
            className={styles.tagPill}
            aria-label={`Learn more about ${row.tag}`}
          >
            {row.tag}
          </Link>
        </div>
        <p className={styles.cellText}>{row.after}</p>
      </div>
    </div>
  </AnimateOnScroll>
);

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
const BPAReplaces = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? rows
      : rows.filter((r) => r.category === activeCategory);

  return (
    <section className={styles.section} id="what-replaces">
      {/* ── Section header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>The Honest Comparison</span>
            <h2 className={styles.title}>
              What AI automation{" "}
              <span className={styles.strikeWrap}>
                <span className={styles.strikeText}>actually</span>
              </span>{" "}
              replaces.
            </h2>
            <p className={styles.intro}>
              We don&rsquo;t talk about &ldquo;transforming your
              business.&rdquo; We talk about finding the specific manual steps
              your team already does today that they should not have to do
              tomorrow.
            </p>
          </div>

          {/* ── Filter tabs ── */}
          <div
            className={styles.filterRow}
            role="tablist"
            aria-label="Filter by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={
                  styles.filterBtn +
                  (activeCategory === cat ? " " + styles.filterBtnActive : "")
                }
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Column headers ── */}
      <AnimateOnScroll animation="fade-up" duration={0.5} delay={0.05}>
        <div className={styles.colHeaders}>
          <div className={styles.colHeaderBefore}>
            <span className={styles.colHeaderLabel}>Before · Manual</span>
          </div>
          <div className={styles.colHeaderSpacer} aria-hidden="true" />
          <div className={styles.colHeaderAfter}>
            <span className={styles.colHeaderLabel}>After · Automated</span>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Comparison rows ── */}
      <div className={styles.rowStack} role="tabpanel">
        {filtered.map((row, i) => (
          <Row key={row.id} row={row} index={i} />
        ))}
      </div>
    </section>
  );
};

export default BPAReplaces;
