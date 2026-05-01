"use client";
// app/services/microsoft-office/upgrades-and-migration/(components)/ChallengesAccordion.jsx

import { useState } from "react";
import Link from "next/link";
import styles from "../../../../../styles/migrationChallenges.module.css";

const ChevronIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DiagonalArrow = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChallengesAccordion = ({ challenges }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className={styles.rows}>
      {challenges.map((ch, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={ch.num}
            className={`${styles.row} ${isOpen ? styles.rowOpen : ""}`}
          >
            <button
              className={styles.rowSummary}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className={styles.rowNum}>{ch.num}</span>
              <span className={styles.rowMeta}>
                <span className={styles.rowCategory}>{ch.category}</span>
                <span className={styles.rowHook}>{ch.hook}</span>
              </span>
              <span
                className={styles.rowChevron}
                aria-hidden="true"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <ChevronIcon />
              </span>
            </button>

            {isOpen && (
              <div className={styles.rowBody}>
                <ul className={styles.rowList}>
                  {ch.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className={styles.rowInsight}>{ch.insight}</p>
                {ch.link && (
                  <Link href={ch.link.href} className={styles.rowLink}>
                    {ch.link.label}
                    <DiagonalArrow />
                  </Link>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ChallengesAccordion;
