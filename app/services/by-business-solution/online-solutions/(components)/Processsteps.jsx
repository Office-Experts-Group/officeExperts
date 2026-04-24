"use client";
import React, { useState } from "react";
import styles from "../../../../../styles/howWeWork.module.css";

const steps = [
  {
    num: "01",
    label: "Discovery",
    detail:
      "We start by understanding your business, not just your brief. A short call or workshop to map out what you actually need, what already exists, and where the friction is. No assumptions, no generic proposals.",
  },
  {
    num: "02",
    label: "Scoping",
    detail:
      "You get a clear written scope before any work begins. What we will build, what it will connect to, how long it will take, and what it will cost. Fixed price or payment per hour, depending on what suits the project.",
  },
  {
    num: "03",
    label: "Build",
    detail:
      "Our developers get to work. We keep you in the loop throughout with regular updates and build reviews. Nothing disappears into a black box for three months.",
  },
  {
    num: "04",
    label: "Handover",
    detail:
      "We walk your team through the finished solution, document how it works, and make sure everyone is confident using it. Training and support can be provided for your entire team.",
  },
  {
    num: "05",
    label: "Support",
    detail:
      "Most of our clients are still with us years after the initial project. We offer ongoing support, updates and improvements as your business grows and changes.",
  },
];

const ProcessSteps = () => {
  const [active, setActive] = useState(null);

  return (
    <ol className={styles.stepList} aria-label="Our process steps">
      {steps.map((s, i) => (
        <li
          key={s.num}
          className={`${styles.step} ${active === i ? styles.stepActive : ""}`}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(i)}
          onBlur={() => setActive(null)}
          tabIndex={0}
        >
          <div className={styles.stepTrack}>
            <span className={styles.stepNum}>{s.num}</span>
            <span className={styles.stepLine} aria-hidden="true" />
          </div>
          <div className={styles.stepBody}>
            <h3 className={styles.stepLabel}>{s.label}</h3>
            <p className={styles.stepDetail}>{s.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ProcessSteps;
