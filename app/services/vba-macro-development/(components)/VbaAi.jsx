// /services/vba-macro-development/(components)/VbaAi.jsx
// Server component. Dark section on how AI tools fit alongside hand-built VBA.
import Link from "next/link";

import { VbaReviewSvg } from "../(svgs)/VbaReviewSvg";
import { VbaArrowSvg } from "../(svgs)/VbaArrowSvg";

import styles from "@/styles/vbaAi.module.scss";

const aiHelps = [
  "First drafts of routine macros",
  "Explaining code you didn't write",
  "Comments, documentation and naming",
  "Suggesting error handling to review",
];

const expertHelps = [
  "Fitting new code into your existing files and processes",
  "Testing with your real data, edge cases and multiple users",
  "Security, signing and deployment",
  "64-bit, version and Outlook compatibility",
  "Keeping it maintainable when Office changes",
];

const VbaAi = () => (
  <section className={styles.section} id="ai">
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>VBA and AI</span>
          <h2 className={styles.heading}>
            AI can write a macro.{" "}
            <span className={styles.accent}>Someone still has to own it.</span>
          </h2>
          <p className={styles.body}>
            Copilot, ChatGPT and Claude can all write VBA, and our developers
            use them too. They are quick at first drafts. The trouble starts
            when code written in isolation is dropped into a workbook, template
            or database it knows nothing about.
          </p>
          <p className={styles.body}>
            A macro can look right and still overwrite the wrong range, point at
            a file path from someone else&apos;s computer, or fall over the
            first time a user does something unexpected. If you have macros that
            were built that way and have stopped working, we can review, repair
            and document them.
          </p>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <VbaReviewSvg />
        </div>
      </div>

      <div className={styles.columns}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Where AI helps</h3>
          <ul className={styles.list}>
            {aiHelps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Where an expert earns their keep</h3>
          <ul className={styles.list}>
            {expertHelps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.links}>
        <Link href="/services/ai-agent-development" className={styles.link}>
          Custom AI agents that read and write Office files
          <VbaArrowSvg />
        </Link>
        <Link href="/services/microsoft-office-365/copilot" className={styles.link}>
          Getting value from Copilot in Microsoft 365
          <VbaArrowSvg />
        </Link>
      </div>
    </div>
  </section>
);

export default VbaAi;
