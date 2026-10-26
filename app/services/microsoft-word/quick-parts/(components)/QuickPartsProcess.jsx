// /services/microsoft-word/quick-parts/(components)/QuickPartsProcess.jsx

import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/quickPartsProcess.module.scss";

// Sequential steps, so numbered
const steps = [
  {
    title: "Audit your documents",
    description:
      "We review the documents your team produces and find the content that keeps being retyped or copied, then confirm the approved version of each.",
  },
  {
    title: "Build the blocks properly",
    description:
      "Each block is built on your template styles, with fields, document properties and content controls where details change, so it inserts cleanly every time.",
  },
  {
    title: "Organise the galleries",
    description:
      "Clear names, categories and descriptions make blocks easy to find. Larger libraries can sit on their own custom ribbon tab.",
  },
  {
    title: "Deploy to the whole team",
    description:
      "Blocks are stored in your template or a global add-in and rolled out from a network drive or SharePoint, so every user gets the same library.",
  },
  {
    title: "Train and maintain",
    description:
      "We show staff how to insert and update blocks, and keep the library current when wording, branding or legislation changes.",
  },
];

const QuickPartsProcess = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Our process</p>
        <h2 className={styles.heading}>
          From scattered content{" "}
          <span className={styles.accent}>to a shared library.</span>
        </h2>
      </div>

      <ol className={styles.steps}>
        {steps.map((step, i) => (
          <li key={step.title}>
            <AnimateOnScroll animation="fade-up" duration={0.55} delay={i * 0.06}>
              <div className={styles.step}>
                {/* Zero-padded step number, e.g. 01 */}
                <span className={styles.number}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </AnimateOnScroll>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default QuickPartsProcess;
