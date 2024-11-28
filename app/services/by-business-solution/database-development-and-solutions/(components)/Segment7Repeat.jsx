import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import dashboard from "../../../../../public/dashboard400x240.webp";

const PageSegment3 = () => {
  return (
    <section
      className={`${styles.pageSegment} ${styles.reversed}`}
      id="ASP.net"
      style={{ marginBottom: "6rem" }}
    >
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
            <h2>Web Databases using ASP.net</h2>
          </div>
          <p>
            This web database solution will run in most web browsers and is
            device independent. When it is not known what devices your clients
            will be accessing the solution with, this solution may be your only
            alternative. If you are creating a resalable solution for your
            clients to use, this solution gives you the most flexibility and
            security. You can control custom logins/subscriptions and remove
            users very easily.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
