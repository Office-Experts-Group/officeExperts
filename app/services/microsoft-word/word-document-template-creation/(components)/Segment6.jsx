import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import quick from "../../../public/quick-parts.webp";

const Segment6 = () => {
  return (
    <section
      className={`${styles.pageSegment} ${styles.mobPad} ${styles.reversed}`}
    >
      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2 style={{ marginBottom: "1.5rem" }}>
            Quick Parts for Faster Document Creation
          </h2>
          <p style={{ maxWidth: "100%" }}>
            We{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href={"/quick-parts"}
            >
              integrate Quick Parts
            </Link>{" "}
            and Building Blocks into your templates, providing predefined,
            reusable content blocks that make document creation effortless. Your
            team can insert elements like chapter break pages, image layouts,
            appendix sections, pre-built tables, or terms and conditions with a
            single click.
          </p>
          <p style={{ maxWidth: "100%", marginTop: "1rem" }}>
            This approach ensures every document is consistent, professional,
            and polished, while reducing repetitive work and saving valuable
            time. We can also design easy-to-use{" "}
            <Link
              style={{ color: "#046999", fontWeight: "700" }}
              href={"/popup-forms"}
            >
              popup forms
            </Link>{" "}
            to guide staff through data entry, helping to minimise errors and
            maintain data accuracy, further streamlining your workflow.
          </p>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
        <Image
          src={quick}
          alt="Quick Parts for Faster Document Creation icons"
          width={450}
          height={300}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default Segment6;
