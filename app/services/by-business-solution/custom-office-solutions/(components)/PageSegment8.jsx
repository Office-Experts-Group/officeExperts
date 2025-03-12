import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import programmer from "../../../../../public/programmer600x400.webp";
import Link from "next/link";

const PageSegment8 = () => {
  return (
    <section className={styles.pageSegment} style={{ marginBottom: "6rem" }}>
      <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
        <div className={styles.content}>
          <div className={styles.underline}>
            <h2>We Build Custom Solutions!</h2>
          </div>
          <p>
            Our designers can help create custom Word documents and{" "}
            <Link href="/services/microsoft-powerpoint">
              {" "}
              PowerPoint presentations
            </Link>{" "}
            to suit your company needs and to protect your corporate identity.
            They can also convert InDesign files into Word documents so you get
            a fully functional, matching file in Word.
          </p>
          <p>
            Our programmers can help create solutions that automate your
            processes and reduce the time it takes to complete your business
            tasks. Our talented team can also help to link your Office documents
            to external data, applications and other Microsoft Office products.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" duration={1} delay={0}>
        <Image
          src={programmer}
          alt="person clicking a computer mouse"
          width={600}
          height={400}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default PageSegment8;
