// app/microsoft-support-and-training-australia/(components)/LocationsIntro.jsx
import React from "react";

// Client wrapper that handles the scroll-in animation
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/locationsIntro.module.scss";

const LocationsIntro = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
      <div className={styles.grid}>
        <div>
          <span className={styles.eyebrow}>Our locations</span>

          <h2 className={styles.headline}>
            Professional Microsoft support and training{" "}
            <span className={styles.accent}>across Australia.</span>
          </h2>
        </div>

        <p className={styles.lede}>
          With 25+ years of industry experience, our expert consultants provide
          specialised Microsoft support and training services tailored to your
          business needs. Choose your location below to discover how our local
          team can help you maximise your Microsoft technology investment.
        </p>
      </div>
    </AnimateOnScroll>
  </section>
);

export default LocationsIntro;
