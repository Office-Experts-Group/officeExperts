import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import template from "../../../../../public/template600x400.webp";

const PageSegment3 = () => {
  return (
    <section
      className={styles.pageSegment}
      style={{ padding: "3rem 10vw 8rem 10vw" }}
    >
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
            We can create a branded consistent solution for your company that is
            protected and will not allow users to do anything other than what
            they are permitted. We can create highly complex documents by using
            features such as headers/footers, styles, protection, tables,
            columns, content controls, VBA, quick parts, bookmarks, fields,
            table of contents and many other features.
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
