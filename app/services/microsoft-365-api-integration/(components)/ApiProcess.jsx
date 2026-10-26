// app/services/microsoft-365-api-integration/(components)/ApiProcess.jsx
// Numbered process (genuinely sequential, so numbers are used here only)
// plus the proof strip that replaces the old "Why choose" logo section.

import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/apiProcess.module.scss";

// "text" is JSX where a step carries an internal link
const steps = [
  {
    title: "Understand the process",
    text: (
      <>
        We map how the work happens today, who touches the data and where it
        gets retyped. Our{" "}
        <Link href="/services/business-analysis">business analysis</Link>{" "}
        often finds the integration that saves the most time isn&rsquo;t the
        one first asked for.
      </>
    ),
  },
  {
    title: "Choose the right API",
    text: "Sometimes a Power Automate flow beats custom code, and sometimes the reverse. We also check licensing up front, since Copilot, Power Platform premium connectors and Power BI APIs each carry their own requirements.",
  },
  {
    title: "Design the security",
    text: "An Entra ID app registration with the fewest permissions the job needs, delegated access where a person is involved, and logging so you can see what the integration did and when.",
  },
  {
    title: "Build and test on real data",
    text: "We build against copies of your actual documents, workbooks and records, including the awkward edge cases, rather than a tidy demo file.",
  },
  {
    title: "Deploy and support",
    text: "Add-ins and agents are deployed centrally from the Microsoft 365 admin centre, documented and handed over, with ongoing support from the same team that built them.",
  },
];

const proof = [
  { value: "2000", label: "Building Microsoft solutions since" },
  { value: "25+", label: "Microsoft specialists Australia-wide" },
  { value: "5", label: "Languages: JavaScript, .NET, Python, VBA, SQL" },
];

const ApiProcess = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>How we work</p>
          <h2 className={styles.heading}>
            Five steps from idea{" "}
            <span className={styles.accent}>to a working integration.</span>
          </h2>
        </header>
      </AnimateOnScroll>

      <ol className={styles.steps}>
        {steps.map((step, i) => (
          <li key={step.title} className={styles.step}>
            {/* Visual number only; the <ol> already conveys order to screen readers */}
            <span className={styles.number} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>

      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.proof}>
          <ul className={styles.proofList}>
            {proof.map((p) => (
              <li key={p.label} className={styles.proofItem}>
                <span className={styles.proofValue}>{p.value}</span>
                <span className={styles.proofLabel}>{p.label}</span>
              </li>
            ))}
          </ul>
          <p className={styles.proofText}>
            Programmers, designers and solution architects who work across the
            whole Microsoft suite, so an integration is treated as part of the
            tools you already rely on, not a bolt-on nobody can maintain.
          </p>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ApiProcess;
