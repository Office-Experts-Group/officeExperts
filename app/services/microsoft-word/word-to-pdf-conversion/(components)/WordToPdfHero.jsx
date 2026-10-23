// app/word-to-pdf-conversion/(components)/WordToPdfHero.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { ArrowIcon, ConversionVisual } from "../(svgs)/Icons";
import styles from "../../../styles/wordToPdfHero.module.css";

// Right-column capability list, expands on hover/focus
const capabilities = [
  {
    id: "01",
    title: "Fillable and editable PDF forms",
    desc: "Word documents converted into proper fillable PDF forms, with text fields, checkboxes, dropdowns, and signature fields your clients or staff can complete on their phone or computer.",
    href: "./fill-in-forms",
    linkText: "Fillable Forms",
  },
  {
    id: "02",
    title: "Templates built to convert reliably",
    desc: "We design or rebuild your Word templates so every future export to PDF holds its formatting, without a manual check needed every time.",
    href: "./corporate-global-template-solution",
    linkText: "Template Solutions",
  },
  {
    id: "03",
    title: "Secure handling of sensitive documents",
    desc: "Contracts, HR records, and financial documents handled without leaking your data. Your files stay within a controlled, agreed process, not a random online tool with unclear data handling.",
    href: "./companies-and-organisations",
    linkText: "Companies & Organisations",
  },
  {
    id: "04",
    title: "Straightforward document conversion",
    desc: "For document sets that just need a clean conversion, we check formatting, fonts, and layout against the original before anything is delivered.",
    href: "#conversion",
    linkText: "Learn More",
  },
];

const WordToPdfHero = () => {
  const [activeCap, setActiveCap] = useState(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);
  const listRef = useRef(null);

  // Trigger entrance animation once the hero enters the viewport
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

  // Grow the accent track line down to the active item's bottom edge
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
      <div>
        {/* ── Right column — interactive capability list ── */}
        <div className={styles.rightCol}>
          <p className={styles.capLabel}>What we handle</p>

          <ul className={styles.capList} ref={listRef}>
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
                      <h2 className={styles.capTitle}>{cap.title}</h2>
                      {/* <span className={styles.capTag}>{cap.tag}</span> */}
                    </div>
                    <div className={styles.capDesc}>
                      <p>{cap.desc}</p>
                      <Link href={cap.href} className={styles.capLink}>
                        {cap.linkText}
                        <ArrowIcon />
                      </Link>
                    </div>
                  </div>

                  <div className={styles.capArrow} aria-hidden="true">
                    <ArrowIcon />
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

export default WordToPdfHero;
