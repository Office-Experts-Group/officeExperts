// /services/vba-macro-development/(components)/VbaProcess.jsx
// Server component. Accent-coloured section with four connected steps.
// The steps are genuinely sequential, so they are numbered.
import Link from "next/link";

import styles from "@/styles/vbaProcess.module.scss";

const steps = [
  {
    num: "01",
    phase: "Discovery",
    text: "We start by understanding your existing process: what works, what doesn't, and which manual steps you want gone. We agree the result you are after.",
  },
  {
    num: "02",
    phase: "Solution design",
    text: "We map out the design: which Office applications are involved, what forms and screens people will use, and where the data lives. You review it, and we give you a detailed quote with no mid-project surprises.",
  },
  {
    num: "03",
    phase: "Build and test",
    text: "We build inside an Office environment that matches yours and test against your real data, including edge cases, error conditions and multiple users where it matters.",
  },
  {
    num: "04",
    phase: "Handover and support",
    text: "You get documentation and a walkthrough for the people who will use it every day. We are here for changes, extensions and compatibility fixes as Office continues to change.",
  },
];

const VbaProcess = () => (
  <section className={styles.section} id="process">
    <div className={styles.inner}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>How we work</span>
        <h2 className={styles.heading}>
          From first contact to{" "}
          <span className={styles.accent}>a working solution.</span>
        </h2>
        <p className={styles.lede}>
          VBA projects go wrong when the requirements are misunderstood. That is
          why every project starts with{" "}
          <Link href="/services/business-analysis">business analysis</Link>: we
          invest the time up front to understand exactly what you need before we
          write a line of code.
        </p>
        <Link href="#contact" className="btn">
          Get started now
        </Link>
      </header>

      <ol className={styles.steps}>
        {steps.map(({ num, phase, text }) => (
          <li key={num} className={styles.step}>
            <span className={styles.num}>{num}</span>
            <h3 className={styles.phase}>{phase}</h3>
            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default VbaProcess;
