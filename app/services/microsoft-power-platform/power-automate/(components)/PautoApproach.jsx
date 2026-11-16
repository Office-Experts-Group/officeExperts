// /app/services/microsoft-power-platform/power-automate/(components)/PautoApproach.jsx
import React from "react";
import Link from "next/link";

import {
  PautoTenantIcon,
  PautoTrainIcon,
  PautoPriceIcon,
  PautoStayIcon,
  PautoDiscoveryArt,
  PautoDesignArt,
  PautoBlueprintArt,
  PautoBuildArt,
  PautoHandoverArt,
} from "../(svgs)/PautoApproachArt";

import styles from "@/styles/pautoApproach.module.scss";

const PAUTO_DIFFS = [
  {
    Icon: PautoTenantIcon,
    heading: "We build in your environment.",
    body: "Every flow is developed inside your actual Microsoft tenant, using your real data, connectors and permissions, so nothing breaks when it goes live.",
  },
  {
    Icon: PautoTrainIcon,
    heading: "AI model training.",
    body: "Custom AI Builder models are not an add-on. When your process needs a trained document model, we gather your sample files, train it and iterate until accuracy meets the threshold before the flow is built around it.",
  },
  {
    Icon: PautoPriceIcon,
    heading: "Transparent pricing.",
    body: "We explain the costs involved before a single line of code is written. No surprises mid-project, and no scope creep that quietly doubles the bill.",
  },
  {
    Icon: PautoStayIcon,
    heading: "We stick around.",
    body: "We can provide ongoing support, model retraining and flow updates. Many of our Power Automate clients have been with us for years and trust us to manage their wider software applications.",
  },
];

const PAUTO_STEPS = [
  {
    Art: PautoDiscoveryArt,
    label: "Discovery",
    detail:
      "We map your manual processes before touching a single tool. A focused workshop identifies which tasks are high-volume, rule-based and using the most team hours. We then rank them by automation potential and business impact.",
  },
  {
    Art: PautoDesignArt,
    label: "Design",
    detail:
      "We select the right software solution for your business. Our consultants talk through your options and the pros and cons of each. You might just need a few tweaks to your existing stack.",
  },
  {
    Art: PautoBlueprintArt,
    label: "Flow Architecture",
    detail:
      "Before any code is written, we design the full flow on paper: triggers, conditions, AI model calls, error handling, escalation paths and audit logging. You sign off on the design before the build begins.",
  },
  {
    Art: PautoBuildArt,
    label: "Build & Test",
    detail:
      "We build inside your own Microsoft environment using your real data. Every flow is tested against edge cases and exception scenarios. Our aim is to simplify your operation, not add unnecessary complexity.",
  },
  {
    Art: PautoHandoverArt,
    label: "Handover",
    detail:
      "Your team gets full documentation and hands-on training. We show you how to monitor flows, handle exceptions and extend the automation as your business evolves.",
  },
];

const PautoApproach = () => (
  <section
    id="pauto-approach"
    className={styles.pautoApproach}
    aria-labelledby="pauto-approach-heading"
  >
    <div className={styles.top}>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>How we work</span>
        <h2 id="pauto-approach-heading" className={styles.heading}>
          Straightforward delivery.{" "}
          <span className={styles.accent}>No black boxes.</span>
        </h2>
        <p className={styles.introText}>
          <strong>We match the tool to the problem.</strong> Not every
          automation needs AI. We scope your requirements honestly, and
          sometimes the right solution is a clean flow with proper error
          handling, not a machine-learning model. When a trained document model
          is genuinely the best fit, we build it properly.
        </p>
        <Link href="#contact" className={styles.cta}>
          Start a conversation
        </Link>
      </div>

      <ul className={styles.diffGrid}>
        {PAUTO_DIFFS.map(({ Icon, heading, body }) => (
          <li key={heading} className={styles.diff}>
            <div className={styles.diffIcon}>
              <Icon />
            </div>
            <h3 className={styles.diffHeading}>{heading}</h3>
            <p className={styles.diffBody}>{body}</p>
          </li>
        ))}
      </ul>
    </div>

    <div className={styles.process}>
      <div className={styles.processHeader}>
        <h3 className={styles.processTitle}>The process</h3>
        <p className={styles.processSub}>
          From first call to a live, tested flow. This is what working with us
          on a project looks like.
        </p>
      </div>

      <ol
        className={styles.steps}
        aria-label="Our AI automation delivery process"
      >
        {PAUTO_STEPS.map(({ Art, label, detail }) => (
          <li key={label} className={styles.step}>
            <div className={styles.stepArt}>
              <Art />
            </div>
            <div className={styles.stepText}>
              <h4 className={styles.stepLabel}>{label}</h4>
              <p className={styles.stepDetail}>{detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default PautoApproach;
