// /services/microsoft-word/mail-merge/(components)/MailMergeFixes.jsx
// Common mail merge formatting problems shown as a before → after specimen,
// with the cause and the field switch (where there is one) that fixes it.
import React from "react";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/mailMergeFixes.module.scss";

// Backslashes are doubled because these are JS strings; they render as single "\" field switches
const fixes = [
  {
    id: "dates",
    title: "Dates come out in US format",
    cause:
      "Word reads Excel dates through its own data connection and ignores how the cell was formatted, so it often falls back to month-first.",
    fix: "A date switch on the field forces the Australian format every time.",
    code: '{ MERGEFIELD Due_Date \\@ "d MMMM yyyy" }',
    before: "10/26/2026",
    after: "26 October 2026",
  },
  {
    id: "currency",
    title: "Currency loses its dollar sign and cents",
    cause:
      "Excel displays $1,250.50, but the value underneath is just 1250.5, and that's what Word receives.",
    fix: "A numeric picture switch restores the currency format.",
    code: '{ MERGEFIELD Amount \\# "$#,##0.00" }',
    before: "1250.5",
    after: "$1,250.50",
  },
  {
    id: "postcodes",
    title: "NT postcodes drop their leading zero",
    cause:
      "Darwin's 0800 is stored as the number 800 when the postcode column is numeric.",
    fix: "Store postcodes as text in the source, or pad them back to four digits in the field.",
    code: '{ MERGEFIELD Postcode \\# "0000" }',
    before: "Darwin NT 800",
    after: "Darwin NT 0800",
  },
  {
    id: "decimals",
    title: "Numbers trail off into long decimals",
    cause:
      "Calculated cells carry hidden decimal places. Excel rounds them on screen, but Word merges the full value.",
    fix: "Round in the source formula, or set the decimal places on the field.",
    code: '{ MERGEFIELD Rate \\# "0.00" }',
    before: "19.899999999999999",
    after: "19.90",
  },
  {
    id: "blank-lines",
    title: "Gaps in the middle of addresses",
    cause:
      "Records without a second address line leave an empty paragraph where that line should be.",
    fix: "Word's Address Block skips empty lines, or an IF field adds the line only when there's data to show.",
    code: null,
    before: "Level 2 ¶ ¶ Sydney NSW 2000",
    after: "Level 2 ¶ Sydney NSW 2000",
  },
];

const MailMergeFixes = () => (
  <section className={styles.section} id="common-problems">
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Common mail merge problems</p>
        <h2 className={styles.heading}>
          Why your merge <span className={styles.accent}>looks wrong.</span>
        </h2>
        <p className={styles.note}>
          Most mail merge complaints come down to the same handful of
          formatting issues. Here's what causes each one and how we fix it for
          good.
        </p>
      </div>
    </AnimateOnScroll>

    <ul className={styles.list}>
      {fixes.map((item) => (
        <li key={item.id} className={styles.row}>
          <div className={styles.problem}>
            <h3 className={styles.title}>{item.title}</h3>
            <p>{item.cause}</p>
            <p>{item.fix}</p>
            {item.code && <code className={styles.code}>{item.code}</code>}
          </div>

          {/* Before → after specimen of the merged output */}
          <div className={styles.specimen}>
            <span className={styles.before}>
              <span className={styles.label}>Merged</span>
              <del>{item.before}</del>
            </span>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
            <span className={styles.after}>
              <span className={styles.label}>Fixed</span>
              {item.after}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default MailMergeFixes;
