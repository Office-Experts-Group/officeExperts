// app/government-departments/(components)/GovDeptProcess.jsx

import Link from "next/link";
import styles from "../../../styles/govDeptProcess.module.css";

const steps = [
  {
    num: "01",
    heading: "Scoping with stakeholders",
    body: "We meet with the relevant document owners, IT and compliance stakeholders to understand existing templates, formatting rules and any accessibility or records management requirements already in place.",
  },
  {
    num: "02",
    heading: "Building the master template",
    body: "The controlled master template is built or remediated first, with sub templates for reports, letters and forms developed from it so every document shares the one governed source.",
  },
  {
    num: "03",
    heading: "Pilot with a small user group",
    body: "A small group of staff trials the new templates before wider release, giving us a chance to refine formatting, validation and instructions against real day-to-day use.",
  },
  {
    num: "04",
    heading: "Department-wide rollout and training",
    body: "Once approved, the templates are rolled out across the department with documentation and optional training, so staff know exactly how to use the controlled environment going forward.",
  },
];

const GovDeptProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>How We Work</span>
          <h2 className={styles.heading}>
            What's it like working with Word Experts as a government
            department?
          </h2>
          <p className={styles.body}>
            Government rollouts move through sign-off and testing stages that
            a smaller business might not need. We build that into the
            process from the start, rather than treating it as an
            afterthought.
          </p>
          <p className={styles.body}>
            As part of the nationwide{" "}
            <Link href="https://www.officeexperts.com.au">
              Office Experts Group
            </Link>
            , we can also call on specialists in{" "}
            <Link href="https://www.accessexperts.com.au">
              Access databases
            </Link>
            ,{" "}
            <Link href="https://www.excelexperts.com.au">
              Excel reporting
            </Link>{" "}
            or{" "}
            <Link href="https://www.powerplatformexperts.com.au">
              Power Platform
            </Link>{" "}
            when a project extends beyond Word documents alone.
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

export default GovDeptProcess;
