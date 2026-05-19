// app/services/microsoft-office-365/copilot/(components)/CopilotValue.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";

// Import compiled CSS module (not the .scss source)
import styles from "../../../../../styles/copilotValue.module.css";

// ─────────────────────────────────────────────
// Audience segments — each describes a team type
// and the value they get from Copilot
// ─────────────────────────────────────────────
const audiences = [
  {
    id: "01",
    title: "Knowledge workers & admin staff",
    tag: "Word · Outlook · Teams",
    desc: "Anyone living in Word, Outlook, and Teams sees the benefits instantly. Copilot slashes the time spent on drafting, summarising, and formatting. First drafts that took an hour now take minutes. Meeting notes land in your inbox without you lifting a finger.",
  },
  {
    id: "02",
    title: "Finance, operations & reporting teams",
    tag: "Excel · Power BI",
    desc: "Excel Copilot is like adding another analyst to the team. With natural language commands, automated reports, and instant insights, you don\u2019t need to rely on one spreadsheet expert. Everyone can interrogate the data and get answers back. For complex setups, our consultants create solutions combining Copilot with pivot tables, macros, and Power BI.",
  },
  {
    id: "03",
    title: "Executives & senior managers",
    tag: "Teams · Outlook · Excel",
    desc: "Copilot surfaces what matters to you in particular. You might want meeting recaps, priority email summaries, and or data answers. No more digging through the weeds before a decision can be made.",
  },
  {
    id: "04",
    title: "Marketing & comms teams",
    tag: "Word · PowerPoint",
    desc: "Get a fast start on content with Word, polish the tone on the fly, or spin up presentations in PowerPoint. Copilot doesn\u2019t replace your writers, but it does give them a head start and an easy way to refine their message.",
  },
  {
    id: "05",
    title: "Australian SMBs on Microsoft 365",
    tag: "All Apps",
    desc: "Most small and medium businesses aren\u2019t using everything in their Microsoft 365 subscription. Copilot is where value starts showing up. If you\u2019re on Business Standard, Business Premium, E3, or E5, you\u2019re already most of the way there.",
  },
];

const CopilotValue = () => {
  const [activeItem, setActiveItem] = useState(null);
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

  // Grow the accent track line to the bottom of the active item
  useEffect(() => {
    if (activeItem !== null && listRef.current) {
      const items = listRef.current.querySelectorAll("[data-audience-item]");
      const activeEl = items[activeItem];
      if (activeEl) {
        const listTop = listRef.current.getBoundingClientRect().top;
        const itemBottom = activeEl.getBoundingClientRect().bottom;
        setLineHeight(itemBottom - listTop + 8);
      }
    } else {
      setLineHeight(0);
    }
  }, [activeItem]);

  return (
    <section ref={sectionRef} className={styles.section} id="value">
      <div className={`${styles.grid} ${visible ? styles.gridVisible : ""}`}>
        {/* ── Left: sticky header block ── */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>Your benefits</span>

          <h2 className={styles.headline}>
            Some teams see{" "}
            <span className={styles.accentWord}>bigger leaps.</span>
          </h2>

          <p className={styles.intro}>
            Copilot can help almost anyone, but the strongest impact lands where
            repetitive knowledge work and data analysis eat up the most hours.
          </p>
        </div>

        {/* ── Right: interactive audience accordion ── */}
        <div className={styles.rightCol}>
          <p className={styles.listLabel}>Team benefits</p>

          <ul className={styles.list} ref={listRef}>
            {/* Growing accent track line */}
            <div
              className={styles.trackLine}
              style={{ height: `${lineHeight}px` }}
            />

            {audiences.map((audience, i) => (
              <li
                key={audience.id}
                data-audience-item
                className={`${styles.item} ${
                  activeItem === i ? styles.itemActive : ""
                }`}
                onMouseEnter={() => setActiveItem(i)}
                onMouseLeave={() => setActiveItem(null)}
                onFocus={() => setActiveItem(i)}
                onBlur={() => setActiveItem(null)}
                tabIndex={0}
              >
                <div className={styles.itemInner}>
                  {/* Number + dot indicator */}
                  <div className={styles.itemLeft}>
                    <span className={styles.itemNum}>{audience.id}</span>
                    <div className={styles.itemDot} />
                  </div>

                  {/* Text content */}
                  <div className={styles.itemContent}>
                    <div className={styles.itemHeader}>
                      <h3 className={styles.itemTitle}>{audience.title}</h3>
                      <span className={styles.itemTag}>{audience.tag}</span>
                    </div>

                    {/* Expandable description */}
                    <div className={styles.itemDesc}>
                      <p>{audience.desc}</p>
                    </div>
                  </div>

                  {/* Right arrow indicator */}
                  <div className={styles.itemArrow} aria-hidden="true">
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
      </div>
    </section>
  );
};

export default CopilotValue;
