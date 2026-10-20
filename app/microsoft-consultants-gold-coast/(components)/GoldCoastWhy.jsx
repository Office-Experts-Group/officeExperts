// app/microsoft-consultants-gold-coast/(components)/GoldCoastWhy.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "@/styles/goldCoastWhy.module.scss";

// Three ways to work with us. No prices here: it is about the shape of the engagement.
const modes = [
  {
    id: "fix",
    label: "Fix it",
    title: "Rescue and repair",
    body: "Something is broken, slow or about to be. We diagnose it, repair it and document what we found, often within a short, tightly-scoped job.",
    examples: [
      "A macro that stopped working after an update",
      "An Access database that keeps corrupting",
      "A workbook that takes minutes to open",
    ],
  },
  {
    id: "build",
    label: "Build it",
    title: "Design and deliver",
    featured: true,
    body: "A new tool, app, automation or AI agent, built in small releases you can try early. We scope it with you first so you know what you are getting before it starts.",
    examples: [
      "A booking or job-tracking app on Power Apps",
      "An AI agent that triages the shared inbox",
      "Reporting that replaces the month-end scramble",
    ],
  },
  {
    id: "keep",
    label: "Keep it running",
    title: "Ongoing support",
    body: "Once it is live, we can stay on call for changes, new features and the odd emergency, or hand the whole thing over to your team with documentation.",
    examples: [
      "Support for Microsoft 365 and Power Platform",
      "Regular updates as the business changes",
      "Training for new staff",
    ],
  },
];

const proof = [
  { value: "25+", label: "years in Microsoft consulting" },
  { value: "25+", label: "specialist consultants" },
  { value: "100%", label: "Australian owned" },
];

const GoldCoastWhy = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>How we work with you</p>
          <h2 className={styles.heading}>
            Start small, or{" "}
            <span className={styles.headingAccent}>go all the way.</span>
          </h2>
          <p className={styles.lead}>
            Some Gold Coast clients call us for an afternoon&rsquo;s fix. Others
            hand over a whole system. Either way, it begins with a free
            assessment and a plain-English view of the options.
          </p>
        </div>
      </AnimateOnScroll>

      <div className={styles.modes}>
        {modes.map((m, i) => (
          <AnimateOnScroll
            key={m.id}
            animation="fade-up"
            duration={0.6}
            delay={i * 0.08}
          >
            <article
              className={`${styles.mode} ${m.featured ? styles.featured : ""}`}
            >
              <p className={styles.label}>{m.label}</p>
              <h3 className={styles.title}>{m.title}</h3>
              <p className={styles.body}>{m.body}</p>
              <ul className={styles.examples}>
                {m.examples.map((e) => (
                  <li key={e} className={styles.example}>
                    {e}
                  </li>
                ))}
              </ul>
            </article>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
        <div className={styles.proof}>
          <ul className={styles.proofList}>
            {proof.map((p) => (
              <li key={p.label} className={styles.proofItem}>
                <span className={styles.proofValue}>{p.value}</span>
                <span className={styles.proofLabel}>{p.label}</span>
              </li>
            ))}
          </ul>
          <Link href="/client-testimonials" className={styles.proofLink}>
            Read client testimonials
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default GoldCoastWhy;
