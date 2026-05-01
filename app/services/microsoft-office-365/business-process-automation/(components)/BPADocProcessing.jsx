"use client";
import React, { useState } from "react";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";
import { FormProcessingVisual } from "../(svgs)/FormProcessingVisual";
import { InvoiceMatchVisual } from "../(svgs)/InvoiceMatchVisual";
import { ClassificationVisual } from "../(svgs)/ClassificationVisual";
import { ChevronIcon } from "../(svgs)/ChevronIcon";

import styles from "../../../../../styles/bpaDocProcessing.module.css";

// ─────────────────────────────────────────────
// Card data
// ─────────────────────────────────────────────
const cards = [
  {
    id: "invoice-extraction",
    index: "01",
    theme: "cardDark",
    eyebrow: "AI Builder · Invoice Processing",
    heading: "Stop re-keying invoices. Let AI read them.",
    body: "AI Builder's prebuilt invoice model reads PDF and image invoices — extracting supplier name, ABN, invoice number, line items, GST, totals, and due dates. Each invoice is matched against open purchase orders in your ERP or accounting system. Matched invoices auto-post. Exceptions are surfaced to a human reviewer with a full context summary.",
    detail:
      "Handles Australian tax invoice formats including ATO-compliant GST fields. Works with PDFs, scanned images, and emailed attachments. Custom models can be trained on your specific supplier layouts within 2-4 weeks. Integrates with Dynamics 365, Business Central, MYOB, and Xero via Power Automate connectors. Full audit trail on every document processed.",
    tags: ["AI Builder", "Invoice Processing", "Dynamics 365", "ATO Compliant"],
    stat: {
      value: "Better",
      label: "extraction accuracy on structured invoices",
    },
    Visual: InvoiceMatchVisual,
  },
  {
    id: "form-processing",
    index: "02",
    theme: "cardMid",
    eyebrow: "AI Builder · Form Recognition",
    heading: "Paper forms, PDFs, delivery dockets — all read automatically.",
    body: "Custom AI models trained on your specific document formats. Delivery dockets, compliance checklists, HR onboarding forms, safety sign-offs — scanned or emailed in, extracted fields written directly to SharePoint, Dataverse, or your line-of-business system. Typical training dataset: 5–10 example documents per form type.",
    detail:
      "Models improve accuracy over time as they process more real documents. Handles variation in form layout, handwriting in clearly bounded fields, and mixed PDF and image inputs. We manage model training, testing, and deployment. Typical time from sample documents to live extraction: 2–3 weeks. No special hardware or scanning infrastructure required.",
    tags: ["Form Extraction", "AI Builder", "SharePoint", "Custom Models"],
    stat: {
      value: "Seconds",
      label: "vs minutes of manual data entry per form",
    },
    Visual: FormProcessingVisual,
  },
  {
    id: "doc-classification",
    index: "03",
    theme: "cardAccent",
    eyebrow: "AI Builder · Document Classification",
    heading: "Every document knows where it belongs before anyone opens it.",
    body: "Incoming emails and attachments are classified automatically by document type — invoice, purchase order, remittance advice, complaint, or general enquiry. Each item is routed to the correct flow, team queue, or automated handler before a human needs to open anything. Works across Outlook shared mailboxes, Teams channels, and Power Apps intake forms.",
    detail:
      "The classification model is trained on your specific document and email categories. Handles multi-attachment emails and mixed-format batches. Confidence scores determine whether items go to automated handling or a human review queue. Integrates with Teams notifications, SharePoint logging, and Dynamics 365 case creation. Typical deployment: 3–5 categories, expandable over time.",
    tags: ["Document Classification", "AI Builder", "Outlook", "Teams"],
    stat: {
      value: "Zero",
      label: "manual sorting for routine document volume",
    },
    Visual: ClassificationVisual,
  },
];

// ─────────────────────────────────────────────
// Single expandable card
// ─────────────────────────────────────────────
const DocCard = ({ card, cardIndex }) => {
  const [expanded, setExpanded] = useState(false);
  const { Visual } = card;

  return (
    <AnimateOnScroll
      animation="fade-up"
      duration={0.65}
      delay={cardIndex * 0.1}
    >
      <article
        className={`
          ${styles.card}
          ${styles[card.theme]}
          ${expanded ? styles.cardExpanded : ""}
        `}
        id={cardIndex === 0 ? "document-processing" : undefined}
      >
        <div className={styles.cardInner}>
          {/* ── Text pane ── */}
          <div className={styles.cardText}>
            <div className={styles.cardMeta}>
              <span className={styles.cardIndex}>{card.index}</span>
              <span className={styles.cardEyebrow}>{card.eyebrow}</span>
            </div>

            <h3 className={styles.cardHeading}>{card.heading}</h3>
            <p className={styles.cardBody}>{card.body}</p>

            {/* Expandable detail */}
            <div
              className={styles.expandDetail}
              aria-hidden={!expanded}
              id={`detail-${card.id}`}
            >
              <p>{card.detail}</p>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.tags}>
                {card.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className={styles.expandBtn}
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-controls={`detail-${card.id}`}
                aria-label={expanded ? "Show less detail" : "Read more detail"}
              >
                {expanded ? "Show less" : "Read more"}
                <ChevronIcon />
              </button>
            </div>
          </div>

          {/* ── Visual pane ── */}
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
// Section wrapper
// ─────────────────────────────────────────────
const BPADocProcessing = () => (
  <section className={styles.section} id="document-processing">
    <div className={styles.header}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <span className={styles.eyebrow}>
          AI Builder · Document Intelligence
        </span>
        <h2 className={styles.title}>
          Flows that <span>understand</span> your documents,
          <br />
          not just move them.
        </h2>
        <p className={styles.subtitle}>
          AI Builder is Microsoft&rsquo;s embedded machine-learning layer inside
          Power Automate. It reads invoices, extracts form fields, and
          classifies documents automatically. It automates the tedious manual
          steps your team currently does by hand.
        </p>
      </AnimateOnScroll>
    </div>

    <div className={styles.cardStack}>
      {cards.map((card, i) => (
        <DocCard key={card.id} card={card} cardIndex={i} />
      ))}
    </div>
  </section>
);

export default BPADocProcessing;
