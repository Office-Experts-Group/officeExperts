import React from "react";
import Link from "next/link";
import SupportSvg from "../(svgs)/SupportSvg";
import RemoteSvg from "../(svgs)/RemoteSvg";
import styles from "../../../styles/trainingAssistance.module.css";

const features = [
  { label: "Remote access support nationwide" },
  { label: "Large team of senior designers and programmers" },
  { label: "Consultants across the entire Microsoft suite" },
  { label: "Dedicated consultant assigned to your account" },
];

const TrainingAssistance = () => {
  return (
    <section
      className={styles.section}
      id="word-assistance"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.inner}>
        <div className={styles.svgCol}>
          <div className={styles.svgCard}>
            <SupportSvg width={64} height={64} className={styles.mainIcon} />
            <div className={styles.svgAccent}>
              <RemoteSvg width={40} height={40} className={styles.accentIcon} />
            </div>
            <div className={styles.svgLabel}>Remote &amp; On-site Support</div>
          </div>
        </div>

        <div className={styles.content}>
          {/* <p className={styles.eyebrow}>Microsoft Word Assistance</p> */}
          <h2 className={styles.heading}>
            Expert Help...
            <span className={styles.accent}> When You Need It</span>
          </h2>
          <p className={styles.body}>
            Our team of Word design specialists are available to resolve your
            issues with Microsoft Word documents, templates ribbons and more. We
            work with individuals or teams on both small and large jobs with
            competitive rates.
          </p>
          <ul className={styles.features}>
            {features.map(({ label }) => (
              <li key={label} className={styles.feature}>
                <span className={styles.tick} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="rgba(4,105,153,0.12)" />
                    <path
                      d="M5 8l2 2 4-4"
                      stroke="#046999"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {label}
              </li>
            ))}
          </ul>
          <div className={styles.ctas}>
            <Link href="/upgrades-and-migration" className={styles.link}>
              Upgrades &amp; Migration →
            </Link>
            <Link
              href="/corporate-global-template-solution"
              className={styles.link}
            >
              Template Solutions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingAssistance;
