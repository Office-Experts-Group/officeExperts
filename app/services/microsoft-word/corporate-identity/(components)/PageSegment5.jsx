import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import template from "../../../../../public/template600x400.webp";

const PageSegment3 = () => {
  return (
    <section className={`${styles.pageSegment} ${styles.paddedBtm}`}>
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={template}
          alt="person clicking a computer mouse"
          width={600}
          height={400}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2 style={{ marginBottom: "1rem" }}>
            Secure and Customisable Document Solutions
          </h2>
          <p>
              We can create professional, <Link href={"/services/microsoft-word/corporate-global-template-solution"}>easy to use templates</Link> that will keep
              to your company's branding, thus creating a consistent look and a
              professional feel. One of our designers would be happy to help you
              with your requirements.
            </p>
          <p>
            If you need a Word template created properly, contact one of our
            designers to discuss your requirements further.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
