import React from "react";
import EfficiencySvg from "../(svgs)/EfficiencySvg";
import styles from "../../../styles/trainingEfficiency.module.css";

const issues = [
  "Inconsistent document formatting across teams",
  "Staff spending hours fixing broken templates",
  "Brand inconsistencies in client-facing documents",
  "Compliance risks from uncontrolled document versions",
  "Slow onboarding due to poor Word proficiency",
];

const TrainingEfficiency = () => {
  return (
    <section
      className={styles.section}
      id="document-solutions"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Document Solutions</p>
          <h2 className={styles.heading}>
            Eliminate Inefficiencies and
            <span className={styles.accent}> Document Errors</span>
          </h2>
          <p className={styles.body}>
            Our clients usually approach us with the most common Word
            inefficiencies that we see every day. Documents that don&apos;t look
            consistent, templates that break under pressure and staff spending
            hours fixing formatting that should just happen automatically.
            Untrained teams often piece together their own workarounds that lead
            to lost productivity, brand inconsistencies, and compliance risks.
          </p>
          <p className={styles.body}>
            Our consultants resolve these issues and empower your team with the
            tools and knowlegde to overcome others in the future. From
            troubleshooting problem files and upgrading existing templates to
            managing complex{" "}
            <a href="/word-template-conversions" className={styles.inlineLink}>
              document conversions
            </a>{" "}
            and{" "}
            <a href="/upgrades-and-migration" className={styles.inlineLink}>
              migrations
            </a>
            , we deliver practical solutions that save time and ensure your
            documents perform the way they should.
          </p>
        </div>

        <div className={styles.aside}>
          <div className={styles.issueCard}>
            <div className={styles.issueHeader}>
              <EfficiencySvg
                width={28}
                height={28}
                className={styles.issueIcon}
              />
              <span className={styles.issueTitle}>
                Common Pain Points We Fix
              </span>
            </div>
            <ul className={styles.issueList}>
              {issues.map((issue) => (
                <li key={issue} className={styles.issueItem}>
                  <span className={styles.cross} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle
                        cx="7"
                        cy="7"
                        r="6.5"
                        stroke="rgba(192,57,43,0.3)"
                      />
                      <path
                        d="M5 5l4 4M9 5l-4 4"
                        stroke="#c0392b"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  {issue}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.resolveTag}>
            {/* <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="9"
                cy="9"
                r="8"
                fill="rgba(4,105,153,0.15)"
                stroke="#046999"
                strokeWidth="1.5"
              />
              <path
                d="M6 9l2 2 4-4"
                stroke="#046999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
            <span>
              Some of these issues may need seem like much at first, but
              compound over time...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingEfficiency;
