import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import remoteSupport from "../../../../../public/remoteSupport600x400.webp";

const PageSegment4 = () => {
  return (
    <div
      className="animate-wrapper"
      id="upgrade"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className={styles.pageSegment}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1.5rem" }}>Upgrading Office?</h2>
            <p>
              To better understand the considerations in upgrading or migrating
              your specific Microsoft Office products, click the buttons below.
            </p>
          </div>

          <div className={styles.btns}>
            <AnimateOnScroll animation="slide-left" duration={1} delay={0.4}>
              <Link
                href={"https://excelexperts.com.au"}
                className={`"btn" ${styles.btnLink}`}
              >
                Excel
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-left" duration={1} delay={0.6}>
              <Link
                href={"https://accessexperts.com.au"}
                className={`"btn" ${styles.btnLink}`}
              >
                Access
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-left" duration={1} delay={0.6}>
              <Link
                href={"https://wordexperts.com.au"}
                className={`"btn" ${styles.btnLink}`}
              >
                Word
              </Link>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={remoteSupport}
              alt="person clicking a computer mouse"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
