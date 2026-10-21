// app/microsoft-consultants-adelaide/(components)/AdelaideWhy.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/adelaideWhy.module.scss";

// Before / after ledger: situations we are commonly called in for
const ledger = [
  {
    id: "workbook",
    before: "One workbook only one person understands, and they are on leave.",
    after:
      "A documented, structured workbook with the logic written down and checks built in.",
    via: "Excel",
  },
  {
    id: "retype",
    before: "The same details retyped from email into Excel, then into Word.",
    after:
      "Captured once in a form, then flowing into the spreadsheet and the document automatically.",
    via: "Power Platform · Word",
  },
  {
    id: "inbox",
    before:
      "A shared inbox where every enquiry gets read and forwarded by hand.",
    after:
      "An AI agent that sorts, drafts a first response and routes it to the right person.",
    via: "AI agents",
  },
  {
    id: "access",
    before: "An old Access database that everyone is nervous about touching.",
    after:
      "A tuned, secured database with a staged path to SQL Server or the cloud.",
    via: "Access · SQL Server",
  },
  {
    id: "reports",
    before: "Month-end reports assembled over days from five different files.",
    after:
      "A dashboard and a pre-built deck that refresh from the same data every month.",
    via: "Power BI · PowerPoint",
  },
];

const proof = [
  { value: "25+", label: "years in Microsoft consulting" },
  { value: "25+", label: "specialist consultants" },
  { value: "100%", label: "Australian owned" },
];

const AdelaideWhy = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Why Adelaide businesses call us</p>
          <h2 className={styles.heading}>
            From &ldquo;it&rsquo;s always been like that&rdquo;{" "}
            <span className={styles.headingAccent}>to it just works.</span>
          </h2>
        </div>
      </AnimateOnScroll>

      {/* ── Ledger ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
        <div className={styles.ledger}>
          <div className={styles.ledgerHead} aria-hidden="true">
            <span>Where you are</span>
            <span />
            <span>Where we take you</span>
          </div>

          <ul className={styles.rows}>
            {ledger.map((row) => (
              <li key={row.id} className={styles.row}>
                <p className={styles.before}>{row.before}</p>
                <span className={styles.arrow} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M4 11h13M12 6l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className={styles.afterWrap}>
                  <p className={styles.after}>{row.after}</p>
                  <span className={styles.via}>{row.via}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </AnimateOnScroll>

      {/* ── Proof strip ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
        <div className={styles.proof}>
          <ul className={styles.proofList}>
            {proof.map((p) => (
              <li key={p.label} className={styles.proofItem}>
                <span className={styles.proofValue}>{p.value}</span>
                <span className={styles.proofLabel}>{p.label}</span>
              </li>
            ))}
          </ul>
          <div className={styles.proofCopy}>
            <p className={styles.proofText}>
              Because our consultants work across Australia, you are matched to
              the specialist that suits the job, and your project is not limited
              to who happens to live in Adelaide.
            </p>
            <Link href="/client-testimonials" className={styles.proofLink}>
              Read client testimonials
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
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default AdelaideWhy;
