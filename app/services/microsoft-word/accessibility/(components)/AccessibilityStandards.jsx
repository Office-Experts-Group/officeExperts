// app/accessibility/(components)/AccessibilityStandards.jsx

import React from "react";
import styles from "../../../styles/accessibilityStandards.module.css";

// Custom SVGs from local svgs directory
import ContrastSVG from "../(svgs)/ContrastSVG";
import ReadingOrderSVG from "../(svgs)/ReadingOrderSVG";
import AssistiveTechSVG from "../(svgs)/AssistiveTechSVG";
import Link from "next/link";

// Three standards a compliant document needs to satisfy at once — not a
// sequence, so these are presented side by side rather than numbered.
const pillars = [
  {
    Icon: ContrastSVG,
    label: "Colour & Contrast",
    note: "Text, tables and callouts meet WCAG 2.1 AA contrast ratios so content stays legible for users with low vision or colour blindness.",
  },
  {
    Icon: ReadingOrderSVG,
    label: "Reading Order",
    note: "Headings, body text and tables are tagged in the order they should be read, screen readers always read the content as intended.",
  },
  {
    Icon: AssistiveTechSVG,
    label: "Assistive Technology",
    note: "Templates can be tested against JAWS, NVDA and Narrator to confirm every heading, image and table outputs correctly.",
  },
];

const AccessibilityStandards = () => {
  return (
    <section className={styles.section} id="#standards">
      <div className={styles.dotGrid} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Two-tone heading, consistent with other dark sections across the group */}
        <h2 className={styles.heading}>
          Accessibility standards,{" "}
          <span className={styles.headingMuted}>built in from the start.</span>
        </h2>

        <div className={styles.body}>
          <p>
            A document can look fine to the untrained eye and still fail a
            screen reader completely. Colours may be legible to many on first
            glance yet fall short of contrast requirements for those with
            impaired vision. We can build every template against WCAG 2.1 AA and
            the standards designed for use in professional documents
            Australia-wide.
          </p>
          <Link href="#contact" style={{ color: "#046999", fontWeight: "700" }}>
            Talk to us about your compliance requirements.
          </Link>
        </div>

        {/* Three SVG pillar strip */}
        <div className={styles.pillars}>
          {pillars.map(({ Icon, label, note }) => (
            <div key={label} className={styles.pillar}>
              <div className={styles.iconWrap}>
                <Icon />
              </div>
              <p className={styles.pillarLabel}>{label}</p>
              <p className={styles.pillarNote}>{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessibilityStandards;
