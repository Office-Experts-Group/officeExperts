// app/services/custom-office-solutions/(components)/CustomProcess.jsx
// How a custom Office project runs. Genuinely sequential, so the steps are numbered.
// Sticky header on the left (desktop only), ordered list on the right.
// Server component.
import Link from "next/link";

// SCSS module (source: styles/customProcess.module.scss)
import styles from "@/styles/customProcess.module.scss";

const steps = [
  {
    title: "Talk it through",
    text: "We start with a conversation about what you need, what you use now and where your team is losing time.",
  },
  {
    title: "Map the requirements",
    text: "Our analysts document the workflow, the data and the edge cases before any design or code begins, so the build matches how your business really works.",
  },
  {
    title: "Quote or hourly",
    text: "Defined projects get a fixed quote. Smaller jobs and ongoing changes can run on an hourly rate instead.",
  },
  {
    title: "Build and test",
    text: "Designers and programmers build the solution, test it with your real files and data, and refine it with your feedback.",
  },
  {
    title: "Train and support",
    text: "We hand over with training and documentation, then stay on call for fixes, Office updates and new features as your needs grow.",
  },
];

const CustomProcess = () => {
  return (
    <section
      className={styles.section}
      id="how-we-work"
      aria-labelledby="process-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>How we work</span>
          <h2 id="process-heading" className={styles.heading}>
            From first call{" "}
            <span className={styles.accent}>to fully supported</span>
          </h2>
          <p>
            We work remotely or onsite, with one point of contact from the first
            call to handover, and we're still here when the next change comes
            along.
          </p>
          <Link href="#contact" className="btn">
            Start a conversation
          </Link>
        </header>

        <ol className={styles.steps}>
          {steps.map(({ title, text }, i) => (
            <li key={title} className={styles.step}>
              <span className={styles.stepNum} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.stepBody}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CustomProcess;
