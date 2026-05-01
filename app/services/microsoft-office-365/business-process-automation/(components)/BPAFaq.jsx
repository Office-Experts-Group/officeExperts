"use client";
import React, { useState } from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";
import { ChevronIcon } from "../(svgs)/ChevronIcon";

import styles from "../../../../../styles/bpaFaq.module.css";

const faqs = [
  // ── AI Builder ────────────────────────────
  {
    id: "what-is-ai-builder",
    category: "AI Builder",
    q: "What is Microsoft AI Builder?",
    a: (
      <>
        AI Builder is the machine-learning layer built directly into Power
        Automate and Power Apps. It lets automated flows read and understand
        documents. It can extract data from invoices, classifying emails by
        intent, and process form fields.
      </>
    ),
    plainText:
      "AI Builder is Microsoft's machine-learning layer built into Power Automate and Power Apps. It enables automated flows to extract data from documents, classify emails by intent, and process form fields without a separate ML platform.",
    related: [
      {
        label: "AI document processing",
        href: "/services/microsoft-office-365/business-process-automation#document-processing",
      },
    ],
  },
  {
    id: "ai-builder-invoice-extraction",
    category: "AI Builder",
    q: "Can AI Builder extract data from invoices automatically?",
    a: (
      <>
        Yes. AI Builder includes a prebuilt invoice model that extracts supplier
        name, ABN, invoice number, line items, GST amount, and due date from PDF
        and image invoices. Custom models can be trained on non-standard
        supplier layouts using a small sample of example documents.
      </>
    ),
    plainText:
      "AI Builder's prebuilt invoice model extracts supplier name, ABN, invoice number, line items, GST, and due date from PDF and image invoices. Custom models can be trained on non-standard layouts using sample documents.",
    related: [
      {
        label: "Invoice extraction",
        href: "/services/microsoft-office-365/business-process-automation#document-processing",
      },
    ],
  },
  {
    id: "ai-builder-document-types",
    category: "AI Builder",
    q: "What document types can AI Builder process?",
    a: (
      <>
        AI Builder processes invoices, purchase orders, delivery dockets,
        compliance forms, and any structured paper or digital form. It accepts
        PDFs, scanned images, and mobile photos, writing extracted fields
        directly to SharePoint, Dataverse, or any connected business system via
        Power Automate.
      </>
    ),
    plainText:
      "AI Builder processes invoices, purchase orders, delivery dockets, and structured forms. It accepts PDFs, scanned images, and photos, writing extracted data to SharePoint, Dataverse, or connected systems via Power Automate.",
    related: [
      {
        label: "Document processing",
        href: "/services/microsoft-office-365/business-process-automation#document-processing",
      },
    ],
  },

  // ── Approvals ─────────────────────────────
  {
    id: "copilot-approval-teams",
    category: "Approvals",
    q: "How does a Copilot approval workflow deliver approvals in Microsoft Teams?",
    a: (
      <>
        When an approval is triggered, Copilot generates a plain-English summary
        of the request and sends an adaptive card to the approver in Microsoft
        Teams. The card contains relevant context like budget position, vendor
        details, and risk flags alongside Approve, Reject, and Request
        Information buttons. The approver acts directly in Teams without opening
        any other system.
      </>
    ),
    plainText:
      "Copilot generates a plain-English summary of the request and sends an adaptive card in Microsoft Teams with budget context, vendor details, and Approve/Reject/Request Information buttons. Approvers act without opening another system.",
    related: [
      {
        label: "Approval walkthrough",
        href: "/services/microsoft-office-365/business-process-automation#approvals",
      },
    ],
  },
  {
    id: "approval-routing-logic",
    category: "Approvals",
    q: "How does Power Automate route approvals to the correct approver?",
    a: (
      <>
        Approval flows apply configurable rules based on spend thresholds, cost
        centres, and organisational hierarchy. Ome flows involve a Microsoft
        Graph query to check the approver&rsquo;s calendar availability, if they
        are unavailable, the request routes automatically to a nominated
        delegate with no manual step required.
      </>
    ),
    plainText:
      "Power Automate approval flows route requests using configurable rules based on spend thresholds, cost centres, and org hierarchy. Microsoft Graph is checked for approver availability, routing to a delegate automatically if the primary approver is unavailable.",
    related: [
      {
        label: "PO approval flow",
        href: "/services/microsoft-office-365/business-process-automation#approvals",
      },
    ],
  },

  // ── Email Triage ──────────────────────────
  {
    id: "email-triage-how",
    category: "Email Triage",
    q: "How does AI email triage work in Power Automate?",
    a: (
      <>
        Each incoming email is passed through a text classification model the
        moment it arrives. The model detects intent, invoice submission, payment
        query, complaint, or order and scores urgency from language signals.
        Emails are then routed to the correct team queue or handled
        automatically before anyone opens the shared inbox.
      </>
    ),
    plainText:
      "Each incoming email is passed through a text classification model on arrival. The model detects intent and urgency, then routes emails to the correct queue or handles them automatically before anyone opens the inbox.",
    related: [
      {
        label: "Email triage",
        href: "/services/microsoft-office-365/business-process-automation#email-triage",
      },
    ],
  },

  // ── Integrations ──────────────────────────
  {
    id: "power-automate-erp-connectors",
    category: "Integrations",
    q: "Which accounting and ERP systems does Power Automate connect to natively?",
    a: (
      <>
        Power Automate has certified connectors for Dynamics 365, Business
        Central, SAP, Salesforce, Xero, and MYOB. Systems without a native
        connector can be reached through{" "}
        <Link href="/microsoft-365-api-integration" className={styles.link}>
          REST API calls
        </Link>{" "}
        or the on-premises data gateway for locally hosted legacy systems.
      </>
    ),
    plainText:
      "Power Automate has certified connectors for Dynamics 365, Business Central, SAP, Salesforce, Xero, and MYOB. Systems without native connectors can be reached via REST API or the on-premises data gateway.",
    related: [
      {
        label: "API integrations",
        href: "/microsoft-365-api-integration",
      },
    ],
  },
  {
    id: "automation-exceptions",
    category: "Integrations",
    q: "What happens when an AI automation encounters a low-confidence or unmatched result?",
    a: (
      <>
        Items that fall below the model&rsquo;s confidence threshold, or that
        fail a matching rule, are routed to a human review queue. The reviewer
        sees a summary of what the model extracted and why it flagged the item.
      </>
    ),
    plainText:
      "Items below the AI model's confidence threshold or that fail a matching rule are routed to a human review queue with a summary of the model's findings. Only genuine exceptions require human review.",
    related: [
      {
        label: "Document processing detail",
        href: "/services/microsoft-office-365/business-process-automation#document-processing",
      },
    ],
  },
  {
    id: "m365-ai-builder-licencing",
    category: "Integrations",
    q: "Is AI Builder included in a Microsoft 365 subscription?",
    a: (
      <>
        Power Automate is included in most Microsoft 365 Business and Enterprise
        plans however AI Builder uses a credit-based consumption model.
        Microsoft 365 Business Premium and Power Automate Premium plans include
        a base allocation of AI Builder credits. High-volume document processing
        scenarios may require additional capacity packs purchased through
        standard{" "}
        <Link href="/services/microsoft-office-365" className={styles.link}>
          Microsoft 365 licencing
        </Link>
        .
      </>
    ),
    plainText:
      "Power Automate is included in most Microsoft 365 Business and Enterprise plans. AI Builder uses a credit-based model. Business Premium includes a base credit allocation. High-volume scenarios may require additional capacity.",
    related: [
      {
        label: "Microsoft 365 licencing",
        href: "/services/microsoft-office-365",
      },
    ],
  },
];

const categories = [
  "All",
  "AI Builder",
  "Approvals",
  "Email Triage",
  "Integrations",
];

// ─────────────────────────────────────────────
// JSON-LD FAQPage schema
// plainText answers only — no JSX, no links,
// no company names, no pricing, no timelines.
// ─────────────────────────────────────────────
const FaqSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.plainText,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ─────────────────────────────────────────────
// Single FAQ item
// ─────────────────────────────────────────────
const FaqItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <AnimateOnScroll animation="fade-up" duration={0.5} delay={index * 0.05}>
      <div className={styles.item + (open ? " " + styles.itemOpen : "")}>
        <button
          className={styles.question}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`faq-answer-${faq.id}`}
        >
          <span className={styles.questionText}>{faq.q}</span>
          <span className={styles.chevron}>
            <ChevronIcon />
          </span>
        </button>

        <div
          id={`faq-answer-${faq.id}`}
          className={styles.answer}
          aria-hidden={!open}
        >
          <div className={styles.answerInner}>
            <p className={styles.answerText}>{faq.a}</p>

            {faq.related.length > 0 && (
              <div className={styles.related}>
                <span className={styles.relatedLabel}>See also</span>
                {faq.related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className={styles.relatedLink}
                  >
                    {r.label}
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 9.5l7-7M5 2.5h4.5V7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
const BPAFaq = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const mid = Math.ceil(filtered.length / 2);
  const colA = filtered.slice(0, mid);
  const colB = filtered.slice(mid);

  return (
    <>
      <FaqSchema />

      <section className={styles.section}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <span className={styles.eyebrow}>Common Questions</span>
              <h2 className={styles.title}>
                Everything you need to know{" "}
                <span className={styles.accentLine}>before you commit.</span>
              </h2>
              <p className={styles.intro}>
                Straight answers on AI Builder, Copilot approvals, email triage,
                system integrations, and Microsoft licencing.
              </p>
            </div>

            <div
              className={styles.filterRow}
              role="tablist"
              aria-label="Filter FAQ by topic"
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

        <div className={styles.grid} role="tabpanel">
          <div className={styles.col}>
            {colA.map((faq, i) => (
              <FaqItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
          <div className={styles.col}>
            {colB.map((faq, i) => (
              <FaqItem key={faq.id} faq={faq} index={i + colA.length} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BPAFaq;
