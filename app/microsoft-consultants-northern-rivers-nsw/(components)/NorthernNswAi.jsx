// app/microsoft-consultants-northern-nsw/(components)/NorthernNswAi.jsx
import React from "react";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import ServiceLink from "./ServiceLink";

import { aiItems } from "../northernNswData";

import styles from "@/styles/northernNswAi.module.scss";

// Typical jobs, written for the kinds of work common in the region. These describe
// what an agent can do, not specific clients.
const examples = [
  "Booking and quote enquiries answered with a first draft in minutes, for tourism, hospitality and trades.",
  "Delivery dockets and compliance paperwork pre-filled for growers, packers and producers.",
  "Policy and procedure questions answered from your own documents, so colleagues stop interrupting each other.",
  "Site notes and inspection photos turned into a tidy report.",
];

const NorthernNswAi = () => (
  <section className={styles.section} id="ai-and-agents">
    <div className={styles.inner}>
      {/* ── Left: pitch and typical jobs ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>AI &amp; custom agents</p>
          <h2 className={styles.heading}>
            Smaller teams, bigger workload.{" "}
            <span className={styles.headingAccent}>
              Let an agent take the repeat jobs.
            </span>
          </h2>
          <p className={styles.text}>
            Our programmers build fully custom AI agents in Python and
            JavaScript, alongside Copilot and Microsoft 365 solutions. An agent
            can run inside your Microsoft tenant or outside it, and we agree the
            data boundaries before anything is built.
          </p>

          <p className={styles.listTitle}>Typical jobs</p>
          <ul className={styles.examples}>
            {examples.map((e) => (
              <li key={e} className={styles.example}>
                {e}
              </li>
            ))}
          </ul>

          <p className={styles.note}>
            Built something with AI, Power Platform or Excel and got stuck? We
            repair those too.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Right: the AI services ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.08}>
        <ul className={styles.items}>
          {aiItems.map((item) => (
            <li key={item.id} className={styles.item}>
              <h3 className={styles.itemTitle}>
                <ServiceLink href={item.href} className={styles.itemLink}>
                  {item.name}
                </ServiceLink>
              </h3>
              <p className={styles.itemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </AnimateOnScroll>
    </div>
  </section>
);

export default NorthernNswAi;
