import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import training from "../../../../../public/training600x400.webp";

const Segment4Copy = () => {
  return (
    <div
      className="animate-wrapper"
      style={{ margin: "2rem 0 4rem 0", scrollMarginTop: "150px" }}
      id="build"
    >
      <div className={`${styles.pageSegment} ${styles.reverse}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>We Can Build Your Add-Ins!</h2>
            </div>
            <p>
              Our developers can work in all areas of add-in development. If you
              need help with design or with determining what is best for your
              organisation, then our experienced Excel programmers can help
              analyse and develop a solution that suits your business
              requirements.
            </p>
            <p>
              Our experts are ready to talk through your requirements and take
              your business to the next level.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={training}
              alt="lady pointing at a computer screen"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Copy;
