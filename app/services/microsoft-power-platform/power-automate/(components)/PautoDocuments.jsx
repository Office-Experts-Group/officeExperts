// /app/services/microsoft-power-platform/power-automate/(components)/PautoDocuments.jsx
// Standout section: CSS-only tabs (radio inputs), no client JavaScript.
// All three panels stay in the HTML, so crawlers read every one.
import React from "react";
import Link from "next/link";

import {
  PautoInvoiceScene,
  PautoFormScene,
  PautoEmailScene,
} from "../(svgs)/PautoDocumentArt";
import { ArrowIcon } from "../(svgs)/PautoIcons";

import styles from "@/styles/pautoDocuments.module.scss";

const PAUTO_DOC_TABS = [
  {
    id: "invoice",
    label: "Invoices",
    sub: "Stop re-keying",
    eyebrow: "AI Builder · Document Intelligence",
    heading: "Stop re-keying invoices. Let Power Automate do the work.",
    body: "AI Builder’s prebuilt invoice model can pull the supplier name, invoice number, line items, amounts and due dates from PDF or image invoices. The flow then matches them against your ERP or Dynamics 365 data. Your accounts team reviews the exceptions, not every single document.",
    detail:
      "It works on emailed PDFs, scans and photos of paper invoices. Layouts vary, so we test the model against your own supplier invoices before relying on it, and where a standard model falls short we can train a custom one on sample documents.",
    tags: ["AI Builder", "Invoice Processing", "Dynamics 365", "Dataverse"],
    Scene: PautoInvoiceScene,
  },
  {
    id: "form",
    label: "Forms & scans",
    sub: "Image to data",
    eyebrow: "AI Builder · Form Recognition",
    heading: "Paper forms, PDFs, scanned docs. Image to text, ready to use.",
    body: "Custom AI models trained on your own documents. Delivery dockets, compliance checklists, HR onboarding packs, inspection reports. The extracted data flows into SharePoint, Dataverse or your line-of-business system without anyone typing a thing.",
    detail:
      "Accuracy depends on your documents, so we measure it on real samples and keep improving the model as it sees more. Handwriting, unusual layouts and poor scans are the hard cases, so anything the model is unsure about goes to a person. Our consultants also review your existing workflow and find the pain points automation can solve.",
    tags: ["Form Extraction", "AI Builder", "SharePoint", "Custom Models"],
    Scene: PautoFormScene,
  },
  {
    id: "email",
    label: "Shared inbox",
    sub: "Sorted for you",
    eyebrow: "AI Builder · Natural Language Processing",
    heading:
      "Your shared inbox shouldn’t need a full-time person to manage it.",
    body: "Power Automate’s text classification can read incoming emails and detect their intent. It can spot an invoice query, a purchase enquiry or a support request and route each one to the right queue or person.",
    detail:
      "The model is trained on your own email categories and business terminology. It works with Outlook shared mailboxes and Microsoft Teams channels, and escalation rules can use sentiment, sender tier and response time targets. We shape the permissions exactly how you want them.",
    tags: ["Email Triage", "NLP", "Outlook", "Teams"],
    Scene: PautoEmailScene,
    extra: {
      href: "/services/ai-email-triage",
      text: "Want inbox triage on its own? See AI email triage",
    },
  },
];

const PautoDocuments = () => (
  <section
    id="pauto-documents"
    className={styles.pautoDocuments}
    aria-labelledby="pauto-documents-heading"
  >
    <header className={styles.header}>
      <span className={styles.eyebrow}>AI Builder</span>
      <h2 id="pauto-documents-heading" className={styles.heading}>
        Flows that <span className={styles.accent}>understand</span> your
        documents, not just move them.
      </h2>
      <p className={styles.subtitle}>
        AI Builder is Microsoft’s machine-learning layer inside Power Automate.
        It lets your workflows read, classify and extract data from documents,
        so there is no more error-prone manual handling.
      </p>
    </header>

    <div
      className={styles.tabs}
      role="radiogroup"
      aria-labelledby="pauto-documents-heading"
    >
      {PAUTO_DOC_TABS.map((t, i) => (
        <input
          key={t.id}
          type="radio"
          name="pauto-doc-tab"
          id={`pauto-doc-tab-${t.id}`}
          className={styles.radio}
          defaultChecked={i === 0}
        />
      ))}

      <div className={styles.tabList}>
        {PAUTO_DOC_TABS.map((t) => (
          <label
            key={t.id}
            htmlFor={`pauto-doc-tab-${t.id}`}
            className={styles.tabLabel}
          >
            <span className={styles.tabName}>{t.label}</span>
            <span className={styles.tabSub}>{t.sub}</span>
          </label>
        ))}
      </div>

      <div className={styles.panels}>
        {PAUTO_DOC_TABS.map((t) => (
          <article
            key={t.id}
            className={styles.panel}
            aria-labelledby={`pauto-doc-heading-${t.id}`}
          >
            <div className={styles.panelCopy}>
              <span className={styles.panelEyebrow}>{t.eyebrow}</span>
              <h3
                id={`pauto-doc-heading-${t.id}`}
                className={styles.panelHeading}
              >
                {t.heading}
              </h3>
              <p className={styles.panelBody}>{t.body}</p>
              <p className={styles.panelDetail}>{t.detail}</p>
              <ul className={styles.tags}>
                {t.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {t.extra && (
                <Link href={t.extra.href} className={styles.extraLink}>
                  {t.extra.text}
                  <ArrowIcon />
                </Link>
              )}
            </div>
            <div className={styles.stage}>
              <t.Scene />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PautoDocuments;
