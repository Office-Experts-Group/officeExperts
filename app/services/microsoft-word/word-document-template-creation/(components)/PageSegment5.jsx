import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

const PageSegment3 = () => {
  return (
    <section className={styles.pageSegment} style={{ marginBottom: "3rem" }}>
      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div style={{ marginBottom: "1.5rem" }}>
            <h2>Designs That Match Your Style Guides</h2>
          </div>
          <p style={{ maxWidth: "100%" }}>
            Your brand guidelines form the foundation of every template we
            create. We ensure every element — from colours and fonts to heading
            hierarchy and spacing — strictly follows your standards, while
            enhancing them with our expert best practices for layout,
            formatting, and usability. The result is a collection of templates
            that is on brand, visually polished, and effortlessly user-friendly.
          </p>

          <p style={{ maxWidth: "100%" }}>
            Whether starting from scratch or updating existing materials, we can
            convert PDFs, legacy documents, or other designs into robust,
            professional Word templates. The outcome is a seamless, cohesive,
            and fully brand-compliant library of documents that elevates{" "}
            <Link
              style={{ fontWeight: "700", color: "#046999" }}
              href="/corporate-identity"
            >
              your organisation's identity
            </Link>
            .
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
