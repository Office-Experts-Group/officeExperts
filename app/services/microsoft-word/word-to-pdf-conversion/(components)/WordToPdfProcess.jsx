// app/word-to-pdf-conversion/(components)/WordToPdfProcess.jsx

import Link from "next/link";
import styles from "../../../styles/wordToPdfProcess.module.css";

const steps = [
  {
    num: "01",
    heading: "Tell us what the document needs to do",
    body: "Send through a sample document and let us know whether it needs to become a fillable form, a more reliable template, or a straight PDF. We will flag anything in the source file likely to cause issues.",
  },
  {
    num: "02",
    heading: "We build it properly in Adobe Acrobat",
    body: "Fillable forms are built with the right field types, validation, and a logical tab order, then tested. Straight conversions are checked against the original for fonts, tables, and layout.",
  },
  {
    num: "03",
    heading: "You receive finished, ready-to-use files",
    body: "Completed PDFs are delivered ready to send, publish, or hand to your team. For recurring documents, we hand over a template built to convert reliably every time, without our involvement.",
  },
];

const WordToPdfProcess = () => {
  return (
    <section className={styles.section} style={{ scrollMarginTop: "150px" }}>
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>How We Work</span>
          <h2 className={styles.heading}>
            What it's like to work with{" "}
            <span className={styles.accent}>Word Experts</span>
          </h2>
          <p className={styles.body}>
            No account to set up, no per-file pricing to work through, and no
            uploading confidential documents to a tool you know nothing about.
            Chat with skilled designers about your needs and get a personalised
            service to achieve what you actually need.
          </p>
          <p className={styles.body}>
            As part of the nationwide{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.officeexperts.com.au"
            >
              Office Experts Group
            </Link>
            , we also draw on our{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.accessexperts.com.au"
            >
              Access
            </Link>{" "}
            and{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href="https://www.powerplatformexperts.com.au"
            >
              Power Platform
            </Link>{" "}
            teams for jobs that need document conversion connected to a larger
            database or automation systems.
          </p>
          <Link href="#contact" className={styles.cta}>
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

export default WordToPdfProcess;
