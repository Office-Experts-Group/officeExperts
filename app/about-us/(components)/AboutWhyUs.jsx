// /about-us/(components)/AboutWhyUs.jsx
// Replaces WhyChooseUs. Native <details> accordion: no client JS, fully server rendered.
import React from "react";
import Link from "next/link";

// Shared scroll-reveal wrapper used across the site
import AnimateOnScroll from "@/components/AnimateOnScroll";
// FAQ content — the same array feeds the FAQPage schema in page.js
import faqs from "@/faqs/about-us";

import styles from "@/styles/aboutWhyUs.module.scss";

const AboutWhyUs = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      {/* ── Left: intro ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div>
          <span className={styles.eyebrow}>Why choose us?</span>
          <h2 className={styles.heading}>
            Quality, personalised service.{" "}
            <span className={styles.accent}>Every time.</span>
          </h2>
          <p className={styles.text}>
            We provide high quality solutions and personalised customer service.
            Our aim is to exceed your expectations and become your go-to
            Microsoft Office gurus.
          </p>
          <Link href="#contact" className="btn">
            Ask us a question
          </Link>
        </div>
      </AnimateOnScroll>

      {/* ── Right: FAQ accordion ──
          The shared name attribute makes the group exclusive (one open at a time) */}
      <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.15}>
        <div className={styles.faqs}>
          {faqs.map(({ question, answer }, index) => (
            <details
              key={`faq-${index}`}
              className={styles.item}
              name="about-faq"
              open={index === 0}
            >
              <summary className={styles.question}>
                <span>{question}</span>
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{answer}</p>
            </details>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default AboutWhyUs;
