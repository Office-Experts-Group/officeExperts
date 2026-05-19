// app/microsoft-consultants-brisbane/(components)/BrisbaneIntro.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import BrisbaneMap from "../(svgs)/BrisbaneMap";

import styles from "../../../styles/brisbaneIntro.module.css";

const BrisbaneIntro = () => (
  <section className={styles.section}>
    <div className={styles.split}>
      <AnimateOnScroll animation="fade-right" duration={0.65} delay={0}>
        <div className={styles.pillar}>
          <span className={styles.eyebrow}>Our Brisbane Team</span>

          <h2 className={styles.headline}>
            Microsoft Solutions that{" "}
            <span className={styles.accentText}>simply solve the problem.</span>
          </h2>
          <div className={styles.content}>
            {/* Overline rule */}
            <div className={styles.rule} aria-hidden="true" />

            <p className={styles.lead}>
              A lot of businesses hit a wall with their internal systems. Giant
              spreadsheets that nobody can manage anymore, slow monthly
              reporting, or people doubling up on work because the systems
              don&rsquo;t talk to each other. Stuff that was simple for a
              smaller team starts to slow things down as the business grows.
            </p>

            <p className={styles.body}>
              Most companies already use Microsoft tools. The real problem is
              usually not the software itself, but how it&rsquo;s set up{" "}
              <em>(or at least how it's ended up)</em>. We help Brisbane
              businesses get more out of Microsoft technologies, cutting out
              repetitive work, simplifying reporting and making everyday
              operations less complicated.
            </p>

            <p className={styles.body}>
              We&rsquo;ve been doing this for over 25 years, all across
              Australia. Most projects are done remotely, but our Brisbane
              consultants can be there on-site for workshops, training or
              hands-on support when you need it.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-left" duration={0.65} delay={0.1}>
        <div className={styles.mapContainer}>
          <div className={styles.map}>
            <BrisbaneMap />
          </div>

          <Link href="#contact" className={styles.btn}>
            Get a Free Consultation
          </Link>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default BrisbaneIntro;
