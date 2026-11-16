// /app/services/microsoft-power-platform/power-automate/(components)/PautoAgents.jsx
import React from "react";
import Link from "next/link";

import PautoAgentLoopSvg from "../(svgs)/PautoAgentLoopSvg";
import {
  ArrowIcon,
  BoltIcon,
  ClockIcon,
  BranchIcon,
  EyeIcon,
  QueueIcon,
  BellIcon,
} from "../(svgs)/PautoIcons";

import styles from "@/styles/pautoAgents.module.scss";

const PAUTO_FLOW_POINTS = [
  {
    Icon: BoltIcon,
    text: "Something clear starts it: an email, a form or a new SharePoint item.",
  },
  {
    Icon: ClockIcon,
    text: "It runs on a schedule, like a nightly sync or a Monday summary.",
  },
  {
    Icon: BranchIcon,
    text: "The rules are fixed and the same steps run every time.",
  },
];

const PAUTO_AGENT_POINTS = [
  {
    Icon: EyeIcon,
    text: "Someone has to keep watching a queue, an inbox or a set of dates.",
  },
  {
    Icon: QueueIcon,
    text: "Volumes are high and most cases are routine, with a few exceptions.",
  },
  {
    Icon: BellIcon,
    text: "You want people alerted only when something genuinely needs them.",
  },
];

const PautoAgents = () => (
  <section
    id="pauto-agents"
    className={styles.pautoAgents}
    aria-labelledby="pauto-agents-heading"
  >
    <div className={styles.top}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>
          Copilot Studio · Autonomous Agents
        </span>
        <h2 id="pauto-agents-heading" className={styles.heading}>
          Digital workers that{" "}
          <span className={styles.accent}>don’t clock off.</span>
        </h2>
        <p className={styles.body}>
          Copilot Studio takes Power Automate from reactive to proactive.
          Instead of waiting for someone to trigger a flow, an agent monitors
          your systems around the clock, applies your business rules and acts on
          what it finds straight away.
        </p>
        <p className={styles.body}>
          Not every process needs an agent. But for high-volume, rules-based
          tasks that currently need someone watching a queue, it is worth
          understanding.
        </p>
        <div className={styles.divider} aria-hidden="true" />
        <div className={styles.actions}>
          <Link href="/services/ai-agent-development" className="btn">
            <span>Talk to us about agents</span>
          </Link>
          <Link href="/services/copilot" className={styles.textLink}>
            Microsoft Copilot services
            <ArrowIcon />
          </Link>
        </div>
      </div>

      <figure className={styles.loop}>
        <div className={styles.loopScroll}>
          <div className={styles.loopInner}>
            <PautoAgentLoopSvg />
          </div>
        </div>
      </figure>
    </div>

    <div className={styles.choose}>
      <h3 id="pauto-choose-heading" className={styles.chooseHeading}>
        Flow or agent? A quick way to tell
      </h3>
      <div className={styles.split} aria-labelledby="pauto-choose-heading">
        <div className={`${styles.panel} ${styles.flowPanel}`}>
          <h4 className={styles.panelTitle}>A flow is the right tool when…</h4>
          <ul className={styles.points}>
            {PAUTO_FLOW_POINTS.map(({ Icon, text }) => (
              <li key={text}>
                <span className={styles.pointIcon}>
                  <Icon size={22} />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.panel} ${styles.agentPanel}`}>
          <h4 className={styles.panelTitle}>An agent is worth it when…</h4>
          <ul className={styles.points}>
            {PAUTO_AGENT_POINTS.map(({ Icon, text }) => (
              <li key={text}>
                <span className={styles.pointIcon}>
                  <Icon size={22} />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={styles.chooseNote}>
        Not sure which you need? Describe the process and we will tell you
        honestly. Prefer to start with one job, like sorting a mailbox? Have a
        look at our{" "}
        <Link href="/services/ai-email-triage">AI email triage</Link> service.
      </p>
    </div>
  </section>
);

export default PautoAgents;
