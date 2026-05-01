"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import styles from "../../../../../styles/bpaIntro.module.css";

const capabilities = [
  {
    id: "01",
    title: "AI invoice & document processing",
    tag: "AI Builder",
    desc: "AI Builder reads your invoices, delivery dockets, and compliance forms. It extracts structured data and can write it directly into your ERP, SharePoint, or Dataverse. Works with PDFs, scanned images, and photos of physical documents.",
    href: "#document-processing",
  },
  {
    id: "02",
    title: "Copilot-driven approval workflows",
    tag: "Smart Routing",
    desc: "Approval flows fully automated. Checking budget position, approver availability, and spend thresholds before sending a notification to the right person. Purchase orders, expense claims, leave requests.",
    href: "#approvals",
  },
  {
    id: "03",
    title: "AI email triage & shared inbox management",
    tag: "Email Intelligence",
    desc: "Shared inboxes like info@ and accounts@ are classified and routed automatically on arrival. AI Builder reads intent, scores urgency, and distributes before a human needs to open anything. Urgent items can trigger an immediate notification.",
    href: "#email-triage",
  },
  {
    id: "04",
    title: "Spreadsheet & email chain replacement",
    tag: "Process Modernisation",
    desc: "We identify the manual patterns your team relies on and replace each one with a structured, auditable, automated process built on Power Automate and SharePoint.",
    href: "#what-replaces",
  },
  {
    id: "05",
    title: "Cross-system integration & reporting",
    tag: "Integration",
    desc: "Power Automate connects your Microsoft 365 environment to Dynamics 365, Xero, MYOB, Salesforce, and custom APIs. Data flows where it needs to go and scheduled flows generate reports automatically.",
    href: "#what-replaces",
  },
];

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BPAIntro = () => {
  const [activeCap, setActiveCap] = useState(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);
  const listRef = useRef(null);

  // Trigger entrance animations when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Grow the blue track line to the bottom of the active item
  useEffect(() => {
    if (activeCap !== null && listRef.current) {
      const items = listRef.current.querySelectorAll("[data-cap-item]");
      const activeEl = items[activeCap];
      if (activeEl) {
        const listTop = listRef.current.getBoundingClientRect().top;
        const itemBottom = activeEl.getBoundingClientRect().bottom;
        setLineHeight(itemBottom - listTop + 8);
      }
    } else {
      setLineHeight(0);
    }
  }, [activeCap]);

  return (
    <section ref={sectionRef}>
      {/* ── RIGHT — interactive capability accordion ── */}
      <div className={styles.rightCol}>
        <p className={styles.capLabel}>What we automate</p>

        <ul className={styles.capList} ref={listRef}>
          {/* Growing blue track line */}
          <div
            className={styles.trackLine}
            style={{ height: `${lineHeight}px` }}
          />

          {capabilities.map((cap, i) => (
            <li
              key={cap.id}
              data-cap-item
              className={`${styles.capItem} ${
                activeCap === i ? styles.capItemActive : ""
              }`}
              onMouseEnter={() => setActiveCap(i)}
              onMouseLeave={() => setActiveCap(null)}
              onFocus={() => setActiveCap(i)}
              onBlur={() => setActiveCap(null)}
              tabIndex={0}
            >
              <div className={styles.capItemInner}>
                {/* Number + dot */}
                <div className={styles.capLeft}>
                  <span className={styles.capNum}>{cap.id}</span>
                  <div className={styles.capDot} />
                </div>

                {/* Text content */}
                <div className={styles.capContent}>
                  <div className={styles.capHeader}>
                    <h3 className={styles.capTitle}>{cap.title}</h3>
                    <span className={styles.capTag}>{cap.tag}</span>
                  </div>
                  <div className={styles.capDesc}>
                    <p>{cap.desc}</p>
                    <Link href={cap.href} className={styles.capLink}>
                      See how it works
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>

                {/* Right arrow */}
                <div className={styles.capArrow} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10h12M12 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA row */}
        <div className={styles.ctaRow}>
          <Link
            href="#contact"
            className="btn"
            style={{ textTransform: "capitalize" }}
          >
            <span>Talk to our team</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BPAIntro;
