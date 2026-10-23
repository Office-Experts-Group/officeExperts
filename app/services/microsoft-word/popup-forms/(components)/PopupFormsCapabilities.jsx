// app/popup-forms/(components)/PopupFormsCapabilities.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { ArrowIcon } from "../(svgs)/ArrowIcon";

import styles from "../../../styles/popupFormsHero.module.css";

// ── Expandable capability list shown on the right of the hero ────────────────
const capabilities = [
  {
    id: "01",
    title: "Guided, step-by-step data entry",
    tag: "UserForms",
    desc: "Custom VBA UserForms that walk staff through exactly what's required, in the right order, so nothing gets missed or entered out of sequence.",
    href: "/fill-in-forms",
  },
  {
    id: "02",
    title: "Field validation & error checking",
    tag: "Data integrity",
    desc: "Dropdown lists, format checks, and mandatory field rules that catch mistakes at the point of entry, before they ever reach the document.",
    href: "#validation",
  },
  {
    id: "03",
    title: "Conditional logic & branching",
    tag: "Smart forms",
    desc: "Forms that adapt as they're filled in, showing or hiding fields based on earlier answers, so users only ever see what's relevant to them.",
    href: "#conditional-logic",
  },
  {
    id: "04",
    title: "Direct document & field integration",
    tag: "Mail merge & quick parts",
    desc: "Captured data flows straight into your Word document's fields, content controls, or quick parts, keeping formatting and branding consistent every time.",
    href: "/mail-merge",
  },
  {
    id: "05",
    title: "External data source linking",
    tag: "Connectivity",
    desc: "Connect popup forms to SharePoint lists, SQL databases, or existing spreadsheets so the form is always working from current data.",
    href: "/microsoft-word-api-integrations",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const PopupFormsCapabilities = () => {
  const [activeCap, setActiveCap] = useState(null);
  const [lineHeight, setLineHeight] = useState(0);

  const listRef = useRef(null);

  // Grow the track line down to the bottom edge of the active item
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
    <div className={styles.rightCol}>
      <p className={styles.capLabel}>What a popup form can do</p>

      <ul className={styles.capList} ref={listRef}>
        {/* Animated track line */}
        <div
          className={styles.trackLine}
          style={{ height: `${lineHeight}px` }}
        />

        {capabilities.map((cap, i) => (
          <li
            key={cap.id}
            data-cap-item
            className={`${styles.capItem} ${activeCap === i ? styles.capItemActive : ""}`}
            onMouseEnter={() => setActiveCap(i)}
            onMouseLeave={() => setActiveCap(null)}
            onFocus={() => setActiveCap(i)}
            onBlur={() => setActiveCap(null)}
            tabIndex={0}
          >
            <div className={styles.capItemInner}>
              <div className={styles.capLeft}>
                <span className={styles.capNum}>{cap.id}</span>
                <div className={styles.capDot} />
              </div>

              <div className={styles.capContent}>
                <div className={styles.capHeader}>
                  <h3 className={styles.capTitle}>{cap.title}</h3>
                  <span className={styles.capTag}>{cap.tag}</span>
                </div>
                <div className={styles.capDesc}>
                  <p>{cap.desc}</p>
                  <Link href={cap.href} className={styles.capLink}>
                    Learn more
                    <ArrowIcon />
                  </Link>
                </div>
              </div>

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
    </div>
  );
};

export default PopupFormsCapabilities;
