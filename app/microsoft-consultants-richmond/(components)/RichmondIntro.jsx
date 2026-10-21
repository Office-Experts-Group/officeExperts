// app/microsoft-consultants-richmond/(components)/RichmondIntro.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import RichmondMap from "../(svgs)/RichmondMap";

import styles from "@/styles/richmondIntro.module.scss";

const RichmondIntro = () => (
  <section className={styles.section}>
    <div className={styles.split}>
      <AnimateOnScroll animation="fade-right" duration={0.65} delay={0}>
        <div className={styles.pillar}>
          <span className={styles.eyebrow}>Serving Richmond</span>

          <h2 className={styles.headline}>
            Microsoft tools that{" "}
            <span className={styles.accentText}>
              keep up with your business.
            </span>
          </h2>
          <div className={styles.content}>
            {/* Overline rule */}
            <div className={styles.rule} aria-hidden="true" />

            <p className={styles.lead}>
              Richmond businesses move quickly. A studio takes on three new
              clients, a venue gets ready for a big weekend, a clinic adds
              another practitioner, and suddenly the spreadsheet, the Word
              template or the old Access database that held everything together
              starts to creak.
            </p>

            <p className={styles.body}>
              We work across the whole Microsoft stack, from Excel, Word and
              Access through to Power Platform, Microsoft 365 and custom AI
              agents. That means we can look at the problem as a whole, rather
              than pushing every issue towards the one tool we happen to sell.
              It's as simple as that, less re-keying, better reporting and
              systems your team can rely on.
            </p>

            <p className={styles.body}>
              We&rsquo;ve been doing this since 2000, with specialists spread
              across Australia. Nearly everything is delivered remotely, which
              keeps projects fast and affordable. If a workshop or training
              session is better done face to face, we can arrange that for
              Richmond and inner Melbourne.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={0.65} delay={0.1}>
        <div className={styles.mapContainer}>
          <div className={styles.map}>
            <RichmondMap />
          </div>

          <Link href="#contact" className={styles.btn}>
            Get a Free Consultation
          </Link>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default RichmondIntro;
