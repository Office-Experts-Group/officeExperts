import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment3.module.css";

import handsHolding from "../../../../../public/handsHolding.webp";

const PageSegment7 = () => {
  return (
    <section className={styles.pageSegment} style={{ margin: "0 auto 4rem 0" }}>
      <div className={styles.centered}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={handsHolding}
            alt="Three hands gripped together"
            width={400}
            height={400}
          />
        </AnimateOnScroll>

        <div className={styles.content}>
          <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
            <div className={styles.underline}>
              <h2>Microsoft Office Integration</h2>
            </div>
            <p>
              All Microsoft Office products include a macro language called VBA.
            </p>
            <p>
              With macros we can create automated solutions to increase
              productivity and reduce man hours, decrease costs, validate user
              tasks and link your Office application with 3rd party products.
            </p>
            <p>
              All Office products come with macro recorders which allow you to
              record a series of steps you would like to be able to repeat. In
              recording a macro, the Office product automatically creates the{" "}
              <Link href="https://www.excelexperts.com.au/vba-macro-development">
                VBA code
              </Link>{" "}
              for those steps, but the macro recorder is just the tip of the
              iceberg.
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default PageSegment7;
