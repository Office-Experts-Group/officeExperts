// /about-us/(components)/AboutStory.jsx
import React from "react";
import Link from "next/link";

// Shared scroll-reveal wrapper used across the site
import AnimateOnScroll from "@/components/AnimateOnScroll";
// Three-circle diagram: development, design and business experience overlapping
import { AboutVennSvg } from "../(svgs)/AboutVennSvg";

import styles from "@/styles/aboutStory.module.scss";

const AboutStory = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      {/* ── Left: who we are ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
        <div>
          <span className={styles.eyebrow}>Who we are</span>

          <h2 className={styles.heading}>
            Developers, designers and business minds.{" "}
            <span className={styles.accent}>One team.</span>
          </h2>

          <div className={styles.body}>
            <p>
              Our consultants are experienced Microsoft Office professionals
              working across Word, Excel, Access, Outlook and PowerPoint on both
              PC and Mac, from long-running legacy files right through to the
              latest Microsoft 365 releases.
            </p>
            <p>
              What makes us different is the mix. The team combines software
              development and design backgrounds with real corporate business
              experience, so we understand the process behind a spreadsheet, not
              just the formulas inside it.
            </p>
            <p>
              That&rsquo;s why every project starts with{" "}
              <Link href="/services/business-analysis">
                business requirements analysis
              </Link>
              . We map how your team actually works before writing a line of
              code, so the solution fits your business rather than the other
              way around.
            </p>
          </div>

          <Link href="/meet-the-team" className={styles.link}>
            Meet the people behind the work
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </AnimateOnScroll>

      {/* ── Right: diagram ── */}
      <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.15}>
        <figure className={styles.visual}>
          <AboutVennSvg />
          <figcaption className={styles.caption}>
            Every solution we build sits where all three overlap.
          </figcaption>
        </figure>
      </AnimateOnScroll>
    </div>
  </section>
);

export default AboutStory;
