// app/services/by-business-solution/3rd-party-application-or-office-integration/(components)/ThirdPartyProcess.jsx

import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

// Compiled CSS from styles/thirdPartyProcess.module.scss
import styles from "../../../../../styles/thirdPartyProcess.module.scss";
// A genuine sequence, so this is the one section that uses numbered steps.
const steps = [
  {
    title: "Understand the workflow",
    text: "We map how data moves today, who touches it and where it goes wrong, as part of our business analysis.",
    href: "/services/business-analysis",
    linkText: "Business analysis",
  },
  {
    title: "Check the connection",
    text: "We confirm what your product's API, ODBC driver or database allows, plus permissions, security and licensing.",
  },
  {
    title: "Build and test on real data",
    text: "We build the integration and test it on your actual records and edge cases, not tidy samples.",
  },
  {
    title: "Roll out and support",
    text: "We train your team, document the solution and stay on hand as your software and processes change.",
  },
];

const ThirdPartyProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>How we work</p>
            <h2>
              From first conversation to a{" "}
              <span className={styles.accent}>working integration</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.title} className={styles.step}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {step.href && (
                <Link href={step.href} className={styles.link}>
                  {step.linkText}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ThirdPartyProcess;
