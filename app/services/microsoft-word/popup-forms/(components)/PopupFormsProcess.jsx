// app/popup-forms/(components)/PopupFormsProcess.jsx

import Link from "next/link";
import styles from "../../../styles/popupFormsProcess.module.css";

const steps = [
  {
    num: "01",
    heading: "Understanding your document",
    body: "We start by looking at the document itself, what fields it needs, who fills it in, how often, and what currently goes wrong. This usually takes a short conversation and a look at your existing template.",
  },
  {
    num: "02",
    heading: "Designing the form structure",
    body: "We map out the fields, validation rules, and any conditional logic the form needs, along with exactly where each answer should land in the final document, whether that's a bookmark, content control, or merge field.",
  },
  {
    num: "03",
    heading: "Building, testing and handover",
    body: "The form is built into your existing template using VBA, tested against real examples and edge cases, then handed over with documentation so your team knows exactly how it works.",
  },
];

const PopupFormsProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>How We Work</span>
          <h2 className={styles.heading}>
            What it's like to work with{" "}
            <span className={styles.accent}>Word Experts.</span>
          </h2>
          <p className={styles.body}>
            The best results come from understanding your pain points first,
            then building the solutions around them. We work with your existing
            template wherever possible, rather than starting from scratch.
          </p>
          <p className={styles.body}>
            As part of the nationwide organisation{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.officeexperts.com.au"
            >
              Office Experts Group
            </Link>
            , we can also call on specialists in{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.excelexperts.com.au/vba-macro-development"
            >
              VBA macro development
            </Link>
            ,{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.accessexperts.com.au"
            >
              Access databases
            </Link>{" "}
            or{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.powerplatformexperts.com.au"
            >
              Power Platform
            </Link>{" "}
            when a form needs to connect to the entire Microsoft ecosystem.
          </p>
          <Link href="#contact" className={`btn ${styles.cta}`}>
            Start a conversation
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

export default PopupFormsProcess;
