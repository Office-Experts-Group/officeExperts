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
              <h2>Our Experts Create Add-Ins!</h2>
            </div>
            <p>Do you need an Add-in built for an Office product?</p>
            <p>We can create add-ins using VSTO in Visual Studio.</p>
            <p>
              Our experts are available to discuss whether an Office Add-in is
              the right solution for you!
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
