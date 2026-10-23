import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import logo from "../../logo.webp";

const WhyExperts = () => {
  return (
    <section
      className={styles.pageSegment}
      style={{ padding: "0rem 10vw 8rem 10vw", gap: "0" }}
    >
      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2 style={{ fontSize: "2rem" }}>Why Choose Word Experts</h2>
          </div>
          <p>
            When you work with Word Experts, you're partnering with a team of
            over 25 Microsoft specialists. We don't just build apps; we create,
            maintain and develop solutions across the entire Microsoft suite.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Our team brings together programmers, designers, and solution
            architects who have hands-on experience working with hundreds of
            Australian businesses. That breadth of knowledge allows us to
            approach API integrations not as isolated add-ons, but as seamless
            extensions of the tools your business already relies on.
          </p>
        </AnimateOnScroll>
      </div>
      <div className={styles.DeskImg}>
        <Image
          src={logo}
          alt="Office Experts Logo"
          width={400}
          height={203}
          className={styles.logo}
        />
      </div>
    </section>
  );
};

export default WhyExperts;
