import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import dashboard from "../../../../../public/dashboard400x240.webp";

const PageSegment7 = () => {
  return (
    <section className={styles.pageSegment} style={{ marginBottom: "4rem" }}>
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={dashboard}
          alt="person clicking a computer mouse"
          width={400}
          height={267}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2>We Can Build Your Add-Ins!</h2>
          </div>
          <p>
            Our developers can work in all areas of add-in development. If you
            need help with design or with determining what is best for your
            organisation, then <Link href={"/meet-the-team"}>our experienced programmers</Link> can help analyse and
            develop a solution that suits your business requirements.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment7;
