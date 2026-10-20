// app/microsoft-consultants-darwin/(components)/DarwinWhy.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "@/styles/darwinWhy.module.scss";

// The honest questions Territory businesses tend to ask about getting help remotely
const concerns = [
  {
    id: "understand",
    q: "Will a team based elsewhere understand how we operate?",
    a: "We start with a conversation about how the work really flows, including the seasonal swings, site travel and distances. Then we design around that, and test it with the people who will use it.",
  },
  {
    id: "connection",
    q: "What if the connection drops where we work?",
    a: "Where it matters, we build for it: Power Apps that capture data offline and sync later, and files that live in the cloud so nothing is stranded on one laptop in one office.",
  },
  {
    id: "time",
    q: "Does the time difference get in the way?",
    a: "Darwin keeps standard time all year, so the gap to the eastern states moves with daylight saving. We schedule workshops and support around your working day, not ours.",
  },
  {
    id: "person",
    q: "Can someone come out if we need them?",
    a: "Nearly everything is done remotely, and most clients never need anything else. If a workshop, training session or handover would work better face to face, we can arrange that by agreement.",
  },
  {
    id: "keep",
    q: "Who looks after it once it is built?",
    a: "We document what we build and avoid unnecessary dependencies, so your team or another developer can support it. If you would rather hand it over, we also offer ongoing support.",
  },
];

const proof = [
  { value: "25+", label: "years in Microsoft consulting" },
  { value: "25+", label: "specialist consultants" },
  { value: "100%", label: "Australian owned" },
];

const DarwinWhy = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Straight answers</p>
          <h2 className={styles.heading}>
            Working with us from the Top End,{" "}
            <span className={styles.headingAccent}>without the guesswork.</span>
          </h2>
        </div>
      </AnimateOnScroll>

      {/* Staggered two-column cards, pure CSS columns */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.05}>
        <div className={styles.masonry}>
          {concerns.map((c) => (
            <article key={c.id} className={styles.card}>
              <span className={styles.mark} aria-hidden="true">
                &ldquo;
              </span>
              <h3 className={styles.q}>{c.q}</h3>
              <p className={styles.a}>{c.a}</p>
            </article>
          ))}

          {/* Proof sits in the flow as the last card */}
          <article className={`${styles.card} ${styles.proofCard}`}>
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
          </article>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default DarwinWhy;
