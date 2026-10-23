import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import hands from "../../../public/540x480/hands.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={hands}
            alt="hands on a computer"
            // width={540}
            // height={480}
            // width={432}
            // height={384}
            width={270}
            height={240}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Custom Built</p>
            <h2>Enhanced Toolbars & Ribbons for Seamless Document Control</h2>
            <p>
              Our team of Word design experts will deliver your{" "}
              <Link href="/corporate-global-template-solution">
                {" "}
                document templates
              </Link>{" "}
              with levels of automation that can include custom toolbars and
              ribbons that will improve your staff productivity, bringing cost
              savings, while improving consistency and overall quality of your
              business documentation.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
