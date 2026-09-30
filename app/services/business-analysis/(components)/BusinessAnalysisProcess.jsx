// app/services/business-analysis/(components)/BusinessAnalysisProcess.jsx

// Compiled CSS module (source: styles/businessAnalysisProcess.module.scss)
import styles from "../../../../styles/businessAnalysisProcess.module.css";

// Genuinely sequential, so this is the one numbered list on the page
const steps = [
  {
    title: "Discovery conversation",
    body: "A no-obligation conversation about what's slowing you down, what you've already tried and what a good outcome looks like. We'll tell you honestly whether you need a full analysis or whether the answer is already obvious.",
  },
  {
    title: "Current-state mapping",
    body: "We sit with the people who actually do the work, not just the managers who describe it. We map how information moves between people, systems and departments, including the workarounds, the exceptions and the spreadsheets nobody officially knows about.",
  },
  {
    title: "Requirements & constraints",
    body: "What the solution must do, and everything that limits how it can do it: licensing, security and compliance obligations, data residency, integration points, budget and the skills of the people who'll use and maintain it.",
  },
  {
    title: "Options & recommended architecture",
    body: "Realistic options side by side, including the cost of ownership and not just the cost of building, with a clear recommendation and our reasoning. Where AI fits, we show exactly what it would do, what data it would touch and how it would be governed.",
  },
  {
    title: "Staged roadmap",
    body: "The recommended solution broken into stages that deliver value early, so you're not waiting months to see a return. Each stage has a defined scope and outcome.",
  },
  {
    title: "Build, hand over or both",
    body: "Our specialist teams can deliver the solution, your internal team can build from our specification, or we can split the work. Either way, you keep the documentation.",
  },
];

const BusinessAnalysisProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Our process</span>
          <h2 className={styles.heading}>
            From &ldquo;something&apos;s not working&rdquo; to{" "}
            <span className={styles.accent}>a plan you can build on</span>
          </h2>
        </header>

        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              {/* Visual number only; the <ol> already conveys order */}
              <span className={styles.stepNum} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default BusinessAnalysisProcess;
