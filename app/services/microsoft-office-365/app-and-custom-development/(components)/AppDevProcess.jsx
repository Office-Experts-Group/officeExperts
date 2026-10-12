// app/services/microsoft-office-365/app-and-custom-development/(components)/AppDevProcess.jsx
import Link from "next/link";

// Compiled CSS module (source: styles/appDevProcess.module.scss)
import styles from "../../../../../styles/appDevProcess.module.css";

// Genuinely sequential, so numbers are appropriate here
const steps = [
  {
    title: "Business analysis",
    body: "We map your processes and requirements before any code is written.",
    href: "/services/business-analysis",
    linkText: "About our business analysis",
  },
  {
    title: "Design and prototype",
    body: "You see working screens early, so changes are quick and inexpensive.",
  },
  {
    title: "Build and test",
    body: "Development happens in small stages, with testing at each one and your real data used wherever it is safe to do so.",
  },
  {
    title: "Launch and training",
    body: "Deployment, documentation and tailored training for your team.",
  },
  {
    title: "Ongoing support",
    body: "Remote or onsite support and enhancements, under a fixed quote or an hourly rate.",
    href: "/services/microsoft-office-365/business-process-automation",
    linkText: "Business process automation",
  },
];

const AppDevProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>How we work</span>
          <h2 className={styles.heading}>
            From first conversation to{" "}
            <span className={styles.accent}>ongoing support</span>
          </h2>
          <p className={styles.lead}>
            Our business requirements analysis is what sets our projects apart.
            Getting the brief right first means the software you receive is the
            software you needed.
          </p>
        </header>

        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              {/* Visual number only; the <ol> already conveys order */}
              <span className={styles.stepNum} aria-hidden="true">
                {i + 1}
              </span>
              <div className={styles.stepText}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
                {step.href && (
                  <Link href={step.href} className={styles.link}>
                    {step.linkText}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AppDevProcess;
