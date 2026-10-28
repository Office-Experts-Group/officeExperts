// app/google-docs-to-word-migration/(components)/GoogleMigrationProcess.jsx
import React from "react";
import Link from "next/link";

// Shared site component: fades content in as it scrolls into view
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Styles for this component (styles/googleMigrationProcess.module.scss)
import styles from "@/styles/googleMigrationProcess.module.scss";

// Genuinely sequential, so these are numbered
const steps = [
  {
    title: "Audit your documents",
    body: "We review your Google Docs library: what is in use, what is duplicated, and which documents should become templates rather than simply convert. Nothing is touched until you have signed off the plan.",
    receive: "A migration plan with priorities",
  },
  {
    title: "Convert and rebuild",
    body: "Documents are converted in batches and the structure underneath is rebuilt: styles, numbering, tables, headers and footers. Your brand is built into a master template set at the same time.",
    receive: "Clean documents and master templates",
  },
  {
    title: "Train and pilot",
    body: "A pilot group works with the new templates on real files while we train them and refine the setup from their feedback, so surprises are found before roll-out.",
    receive: "Signed-off templates and trained champions",
  },
  {
    title: "Go live and support",
    body: (
      <>
        We deploy the templates and any custom ribbons across the organisation,
        hand over documentation and stay on call. Need to move other tools too?
        See our{" "}
        <Link href="/services/upgrades-and-migration" className={styles.link}>
          upgrades and migration services
        </Link>
        .
      </>
    ),
    receive: "A smooth cut-over and ongoing help",
  },
];

const GoogleMigrationProcess = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>How a migration runs</p>
          <h2 className={styles.heading}>
            From Google Docs to Word,{" "}
            <span className={styles.accent}>without the disruption</span>
          </h2>
          <p className={styles.lead}>
            Every migration is tailored, but the path is the same: understand
            what you have, rebuild it properly, prove it with a pilot group,
            then roll it out with support behind your team.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.1}>
        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.body}>{s.body}</p>
              <p className={styles.receive}>
                <span className={styles.receiveLabel}>You receive</span>
                {s.receive}
              </p>
            </li>
          ))}
        </ol>
      </AnimateOnScroll>
    </div>
  </section>
);

export default GoogleMigrationProcess;
