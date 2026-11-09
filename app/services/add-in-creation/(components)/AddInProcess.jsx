// /services/add-in-creation/(components)/AddInProcess.jsx
// How an add-in project runs, from analysis to rollout. Numbered because the stages happen in order.
import React from "react";

import styles from "@/styles/addInProcess.module.scss";

const steps = [
  {
    n: "01",
    title: "Business analysis",
    body: "We map how your people work today, what data is involved and which Microsoft apps and versions are in use. This decides whether an add-in is the right answer at all.",
  },
  {
    n: "02",
    title: "Choose the platform",
    body: "We recommend the technology, such as an Office web add-in, a VSTO add-in or a Teams app, and agree the scope with you in writing.",
  },
  {
    n: "03",
    title: "Build and test with you",
    body: "Small releases you can try early, tested on the Office versions and devices your team really uses.",
  },
  {
    n: "04",
    title: "Deploy",
    body: "We roll the add-in out the way your IT team prefers: centrally through the Microsoft 365 admin centre for web add-ins, or with an installer for desktop add-ins.",
  },
  {
    n: "05",
    title: "Support and update",
    body: "Office changes through the year. We document the add-in, train your team and can look after it as Microsoft apps update.",
  },
];

const AddInProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>How we work</span>
          <h2 className={styles.heading}>
            How we build an add-in,{" "}
            <span className={styles.accent}>from analysis to rollout</span>
          </h2>
        </header>

        <ol className={styles.steps}>
          {steps.map(({ n, title, body }) => (
            <li key={n} className={styles.step}>
              <span className={styles.number}>{n}</span>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepBody}>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AddInProcess;
