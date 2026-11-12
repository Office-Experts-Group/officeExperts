// /about-us/(components)/AboutHero.jsx
import React from "react";
import Link from "next/link";

// Original platform-orbit illustration (no official Microsoft icons), from the route's (svgs) folder
import { AboutHeroSvg } from "../(svgs)/AboutHeroSvg";

import styles from "@/styles/aboutHero.module.scss";

const AboutHero = () => {
  // Proof points under the CTAs
  const stats = [
    { value: "2000", label: "Established" },
    { value: "25+", label: "Consultants nationwide" },
    { value: "2500+", label: "Projects completed" },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        {/* ── Left: headline, copy, CTAs, stats ──
            Deliberately not animated in: fading the H1 from opacity 0 delays LCP */}
        <div>
          <span className={styles.eyebrow}>About Office Experts Group</span>

          <h1 className={styles.heading}>
            Microsoft Office consultants.{" "}
            <span className={styles.accent}>Australia-wide since 2000.</span>
          </h1>

          <p className={styles.lede}>
            We&rsquo;re a national team of developers, designers and consultants
            who build, fix and modernise the Microsoft tools Australian
            businesses run on. From Excel models and Access databases to Power
            Platform apps, Copilot and custom AI agents, we&rsquo;ve been doing
            it for over 25 years.
          </p>

          <div className={styles.actions}>
            <Link href="#contact" className="btn">
              Talk to an expert
            </Link>
            <a href="tel:1300102810" className={styles.phone}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
              </svg>
              1300 102 810
            </a>
          </div>

          {/* Value is visually above the label via flex column-reverse in the SCSS */}
          <dl className={styles.stats}>
            {stats.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <dt className={styles.statLabel}>{label}</dt>
                <dd className={styles.statValue}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Right: decorative orbit of the platforms we work across ── */}
        <div className={styles.visual} aria-hidden="true">
          <AboutHeroSvg />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
