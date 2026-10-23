// app/accessibility/(components)/AccessibilityProcess.jsx

import Link from "next/link";
import styles from "../../../styles/accessibilityProcess.module.css";

const steps = [
  {
    num: "01",
    heading: "Accessibility audit",
    body: "Firstly, we check your existing templates and key documents through both automated checkers and our own manual processes, then document any issues found with WCAG 2.1 and/or the relevant government standards.",
  },
  {
    num: "02",
    heading: "Remediation or rebuild",
    body: "Depending on how the template was originally built, we either repair the existing structure in place or rebuild it from the ground up with correct tagging, styles and reading order.",
  },
  {
    num: "03",
    heading: "Validation",
    body: "Every corrected document is once again tested with a another full audit before it's handed back, we check over the initial assessment and ensure it's now fully compliant, passing all relevant tests.",
  },
  {
    num: "04",
    heading: "Handover and training",
    body: "We provide documentation on how the template is now structured, along with optional training for your team on keeping new documents accessible moving forward.",
  },
];

const AccessibilityProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>How We Work</span>
          <h2 className={styles.heading}>
            Starting from scratch or existing document repair.
          </h2>
          <p className={styles.body}>
            Remediation doesn't need to mean rebuilding every document you own.
            In most cases we can work with your existing templates, correcting
            the structure underneath while leaving your branding and layout the
            way you want it.
          </p>
          <p className={styles.body}>
            As part of{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.officeexperts.com.au"
            >
              Office Experts Group
            </Link>
            , we can also call on our{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.accessexperts.com.au"
            >
              Access
            </Link>
            ,{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.powewrplatformexperts.com.au"
            >
              Power Platform
            </Link>{" "}
            and{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.excelexperts.com.au"
            >
              Excel
            </Link>{" "}
            teams when a project spans multiple Office applications.
          </p>
          <Link href="#contact" className={styles.cta}>
            Speak with our consultants
          </Link>
        </div>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.num} className={styles.step}>
              <span className={styles.stepNum}>{step.num}</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepHeading}>{step.heading}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AccessibilityProcess;
