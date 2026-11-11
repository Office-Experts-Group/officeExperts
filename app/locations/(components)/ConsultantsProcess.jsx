// app/locations/(components)/ConsultantsProcess.jsx
import React from "react";
import Link from "next/link";

// Client wrapper that handles the scroll-in animation
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Custom illustration, stored as a standalone file in the route's (svgs) folder
import { RemoteOnsiteSvg } from "../(svgs)/RemoteOnsiteSvg";

import styles from "@/styles/consultantsProcess.module.scss";

// How a consulting project runs. Genuinely sequential, so these are numbered.
const steps = [
  {
    title: "Discussion and requirements",
    text: "Your consultant works directly with you to understand what the business needs before any development starts.",
  },
  {
    title: "Development",
    text: "A solution is built to fit your business, using Excel, Word, Access, Power Platform and the wider Office suite.",
  },
  {
    title: "Implementation",
    text: "The solution is put into use in your business, remotely or on-site where required.",
  },
  {
    title: "Support",
    text: "Support and training continue once the solution is live.",
  },
];

const ConsultantsProcess = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      {/* ── Left: heading, copy and illustration ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
        <div>
          <span className={styles.eyebrow}>How we work</span>

          <h2 className={styles.headline}>
            Remote first, on-site{" "}
            <span className={styles.accent}>where it&rsquo;s needed.</span>
          </h2>

          <p className={styles.body}>
            Most projects are handled remotely, from initial discussions and
            requirements analysis through to development, implementation and
            support. Our consultants work directly with your business to
            understand what you need and build a solution that fits. Where
            required, we can also arrange on-site support in the locations
            listed above.
          </p>

          <p className={styles.body}>
            Need ongoing help rather than a project? See our{" "}
            <Link href="/microsoft-support-and-training-australia">
              Microsoft support and training
            </Link>{" "}
            services.
          </p>

          <div className={styles.illustration}>
            <RemoteOnsiteSvg />
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Right: the four stages ── */}
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <AnimateOnScroll
            key={step.title}
            animation="fade-up"
            duration={0.6}
            delay={index * 0.08}
          >
            <li className={styles.step}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.text}>{step.text}</p>
              </div>
            </li>
          </AnimateOnScroll>
        ))}
      </ol>
    </div>
  </section>
);

export default ConsultantsProcess;
