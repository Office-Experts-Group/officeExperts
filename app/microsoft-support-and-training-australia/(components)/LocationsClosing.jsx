// app/microsoft-support-and-training-australia/(components)/LocationsClosing.jsx
import React from "react";
import Link from "next/link";

// Client wrapper that handles the scroll-in animation
import AnimateOnScroll from "@/components/AnimateOnScroll";

import styles from "@/styles/locationsClosing.module.scss";

const LocationsClosing = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Nationwide reach</span>

        <h2 className={styles.headline}>
          Nationwide excellence,{" "}
          <span className={styles.accent}>local expertise.</span>
        </h2>

        <div className={styles.body}>
          <p>
            For over 25 years, Office Experts Group has delivered exceptional
            Microsoft support and training services to businesses across
            Australia. Our combination of nationwide resources and local
            expertise means that no matter where you&rsquo;re located,
            you&rsquo;ll receive personalised, high-quality service tailored to
            your specific needs.
          </p>

          <p>
            From immediate troubleshooting to comprehensive training programs,
            our certified Microsoft specialists help you maximise productivity,
            streamline operations and achieve your business goals. Looking for
            something specific? Explore our{" "}
            <Link href="/services/microsoft-word">Microsoft Word services</Link>{" "}
            or our <Link href="/services/copilot">Microsoft 365 Copilot</Link>{" "}
            consulting, or choose your location above to connect with your
            local team.
          </p>
        </div>

        <Link href="#contact" className={styles.btn}>
          Speak to a local expert
        </Link>
      </div>
    </AnimateOnScroll>
  </section>
);

export default LocationsClosing;
