import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import cloudSolution from "../../../../../public/cloudSolution600x400.webp";

const PageSegment4 = () => {
  return (
    <div className="animate-wrapper" style={{ marginBottom: "2rem" }}>
      <div className={styles.pageSegment} id="web-apps">
        <AnimateOnScroll animation="slide-right" duration={1} delay={0.2}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Your Branding Matters!</h2>
            </div>
            <p>
              We can create professional, easy to use templates that will keep
              to your company's branding, thus creating a consistent look and a
              professional feel. One of our designers would be happy to help you
              with your requirements.
            </p>
            <p>
              It is quite easy for documents within a company to get out of
              control and to lose their integrity. Changes by different users
              over time can destroy a good document.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0}>
          <div className="image-wrapper">
            <Image
              src={cloudSolution}
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

export default PageSegment4;
