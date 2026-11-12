// /about-us/(components)/AboutCta.jsx
// Replaces the ExpertsAwait + Promo pair with a single closing call to action.
import React from "react";
import Link from "next/link";

// Shared scroll-reveal wrapper used across the site
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/aboutCta.module.scss";

// Genuinely sequential, so these are numbered
const steps = [
  {
    title: "Tell us what you need",
    text: "Send a message or give us a call. A consultant who works with your platform every day will get back to you.",
  },
  {
    title: "We scope it properly",
    text: "We map your requirements and processes, then agree the scope with you before any work begins.",
  },
  {
    title: "We build and keep you posted",
    text: "Your solution is customised to your requirements, and you're kept informed every step of the way.",
  },
];

const AboutCta = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.card}>
        {/* ── Left: pitch + CTAs ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Let&rsquo;s do this</span>
          <h2 className={styles.heading}>
            Your success is how we{" "}
            <span className={styles.accent}>measure our own.</span>
          </h2>
          <p className={styles.text}>
            Once you decide to work with us, we tailor our services to match
            your requirements and keep you in the loop from first call to final
            handover.
          </p>
          <div className={styles.actions}>
            <Link href="#contact" className={styles.btn}>
              Start a conversation
            </Link>
            <a href="tel:1300102810" className={styles.phone}>
              Call 1300 102 810
            </a>
          </div>
        </div>

        {/* ── Right: what happens next ── */}
        <ol className={styles.steps}>
          {steps.map(({ title, text }, i) => (
            <li key={title} className={styles.step}>
              <span className={styles.stepNumber}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepText}>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </AnimateOnScroll>
  </section>
);

export default AboutCta;
