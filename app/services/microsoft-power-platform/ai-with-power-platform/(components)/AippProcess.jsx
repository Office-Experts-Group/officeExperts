// /app/services/microsoft-power-platform/ai-with-power-platform/(components)/AippProcess.jsx
import AnimateOnScroll from "@/components/AnimateOnScroll";

import {
  AippDiscoveryArt,
  AippArchitectureArt,
  AippBuildArt,
  AippTestingArt,
  AippHandoverArt,
} from "../(svgs)/AippProcessArt";

import styles from "@/styles/aippProcess.module.scss";

const AIPP_STEPS = [
  {
    id: "discovery",
    Art: AippDiscoveryArt,
    heading: "Discovery and scoping",
    body: "We map the task, decision or workflow the AI needs to support, and the systems and data it needs access to.",
  },
  {
    id: "architecture",
    Art: AippArchitectureArt,
    heading: "Architecture and sign-off",
    body: "Full solution design covering data sources, permissions, exception handling and governance, agreed before any build starts.",
  },
  {
    id: "build",
    Art: AippBuildArt,
    heading: "Build in your environment",
    body: "Development happens inside your actual Microsoft 365 or Azure tenant, tested against your real data and permission structure.",
  },
  {
    id: "testing",
    Art: AippTestingArt,
    heading: "Testing and exception handling",
    body: "We test the expected path and the edge cases: unclear requests, missing data and permission conflicts.",
  },
  {
    id: "handover",
    Art: AippHandoverArt,
    heading: "Handover and training",
    body: "Documentation and role-based training for your team, plus ongoing support if you want us to keep managing it.",
  },
];

const AippProcess = () => {
  return (
    <section
      id="aipp-process"
      className={styles.aippProcess}
      aria-labelledby="aipp-process-heading"
    >
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={0.6}>
          <header className={styles.header}>
            <span className={styles.eyebrow}>How we work</span>
            <h2 id="aipp-process-heading" className={styles.heading}>
              From idea to a live AI integration,{" "}
              <span className={styles.accent}>without the guesswork.</span>
            </h2>
          </header>
        </AnimateOnScroll>

        <ul className={styles.track}>
          {AIPP_STEPS.map(({ id, Art, heading, body }) => (
            <li key={id} className={styles.step}>
              <div className={styles.stepArt}>
                <Art />
              </div>
              <div className={styles.stepText}>
                <h3 className={styles.stepHeading}>{heading}</h3>
                <p className={styles.stepBody}>{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AippProcess;
