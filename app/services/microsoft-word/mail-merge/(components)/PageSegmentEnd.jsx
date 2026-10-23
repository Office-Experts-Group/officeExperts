// PageSegmentEnd component for /mail-merge route
import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import logo from "../../../public/logo.webp";

const PageSegmentEnd = () => {
  return (
    <section
      className={styles.pageSegment}
      style={{ padding: "0rem 10vw 8rem 10vw", gap: "0" }}
    >
      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2 style={{ fontSize: "2rem" }}>
              Part of the Office Experts Group
            </h2>
          </div>
          <p>
            When you work with Word Experts, you're partnering with the{" "}
            <Link
              href="https://www.officeexperts.com.au"
              style={{ color: "#046999", fontWeight: "700" }}
            >
              Office Experts Group
            </Link>
            , a team of over 25 Microsoft specialists established in 2000. We
            deliver complete document
            automation solutions across the entire Microsoft suite.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Our Mail Merge services integrate seamlessly with data sources built
            by our{" "}
              Office Specialists. That breadth of knowledge allows us to approach your
            projects needs not as isolated tasks, but as part of a complete, custom, tailored, business solution.
          </p>
        </AnimateOnScroll>
      </div>
      <div className={styles.DeskImg}>
        <Image
          src={logo}
          alt="Office Experts Group Logo"
          width={400}
          height={203}
          className={styles.logo}
        />
      </div>
    </section>
  );
};

export default PageSegmentEnd;