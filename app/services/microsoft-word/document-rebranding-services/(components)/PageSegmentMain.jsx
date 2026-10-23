import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import rethink from "../../../public/rethink600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={rethink}
            alt="rethink, revise, rebrand"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Time for a change?</p>
            <h2>Give Your Documents a Fresh, On-Brand Look</h2>
            <p>
              When your company updates its brand, a new logo, a change in
              colour palette, or a complete visual overhaul? Your documents need
              to keep up. At Word Experts, we specialise in document rebranding
              that goes beyond design, we implement your new brand and create
              new template files your team uses every day.
            </p>
            <p>
              Our advanced Word Template Solution with Formatting Tab allows
              users to efficiently create corporate documents within your
              branding guidelines. This ensures that external formatting, or
              limited Word knowledge does not corrupt your{" "}
              <Link href={"/corporate-identity"}>
                corporate styles and functionality.
              </Link>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
