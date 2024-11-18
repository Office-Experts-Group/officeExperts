import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import template from "../../../../../public/template450x300.webp";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment} style={{ margin: "6rem 0 3rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>Need Consistent Branding?</h2>
            <p>
              We can create professional, easy to use templates that will keep
              to your company’s branding, thus creating a consistent look and a
              professional feel. One of our designers would be happy to help you
              with your requirements.
            </p>
            <p>
              It is quite easy for documents within a company to get out of
              control and lose their integrity. Changes by different users over
              time can destroy a good document.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={template}
              alt="person clicking a computer mouse"
              width={450}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
