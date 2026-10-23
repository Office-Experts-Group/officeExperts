import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import Accessibility from "../../../public/accessibility-icon.webp";

const Segment7 = () => {
  return (
    <section
      className={`${styles.pageSegment} ${styles.mobPad}`}
      style={{ margin: "0 0 3rem 0" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={Accessibility}
          alt="Accessibility for computer users"
          width={450}
          height={300}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2 style={{ marginBottom: "1.5rem" }}>
            Accessibility And Compliance
          </h2>
          <p style={{ maxWidth: "100%" }}>
            We design templates to{" "}
            <Link
              style={{ fontWeight: "700", color: "#046999" }}
              href="/accessibility"
            >
              meet accessibility standards
            </Link>
            , ensuring your documents are inclusive, professional, and easy to
            navigate. This includes accessible styles and headings, alternative
            text for images, properly structured tables, and high-contrast
            colour schemes.
          </p>
          <p style={{ maxWidth: "100%", marginTop: "1rem" }}>
            By incorporating these features, your team can create documents that
            are readable, compliant, and usable by everyone, reinforcing your
            organisation's commitment to quality, professionalism, and
            inclusivity.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Segment7;
