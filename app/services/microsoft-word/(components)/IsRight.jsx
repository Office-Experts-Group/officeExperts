import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/isRight.module.css";

import isRight from "../../../../public/isRight.webp";
import isRight2 from "../../../../public/isRight2.webp";
import idea from "../../../../public/icons/idea.png";

const IsRight = () => {
  return (
    <div className={styles.isRight}>
      <AnimateOnScroll animation="scale-down" delay={0.2} duration={1.6}>
        <div className={styles.imgWrapper}>
          <div className={styles.imgDiv}>
            <Image
              className={styles.imgMain}
              src={isRight}
              alt="person using a laptop"
              width={505}
              height={635}
            />
            {/* <div className={styles.circleButton}>
              <span className={styles.iconWrapper}>
                <Image
                  src={idea}
                  alt="Icon"
                  style={{ width: "auto", height: "auto" }}
                />
              </span>
            </div> */}
            <Image
              className={`${styles.imgSmall} ${styles.imgMain}`}
              src={isRight2}
              alt="someone holding a newspaper"
              width={160}
              height={135}
            />
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-down" delay={0.2} duration={1.6}>
        <div className={styles.contentWrapper}>
          <div className={styles.sub}>
            <p>Transform Your Documents</p>
          </div>
          <h2>Professional Word Template Solutions for Your Business</h2>
          <p className={styles.text}>
            At Word Experts, we specialize in creating sophisticated Microsoft
            Word solutions that protect your corporate identity and streamline
            document creation. Our team of experienced consultants delivers
            professional templates with built-in automation, ensuring consistent
            branding and formatting across your organization. From government
            departments to corporate entities, we provide comprehensive document
            solutions including template design, accessibility compliance, and
            custom automation to save time and reduce errors.
          </p>
          <div className={styles.contentGrid}>
            <div className={styles.excerpt}>
              <div>
                <div className={styles.bar}></div>
                <h3>Corporate Template Solutions</h3>
              </div>
              <p>
                Protected templates that maintain brand consistency and document
                integrity.
              </p>
            </div>
            <div className={styles.excerpt}>
              <div>
                <div className={styles.bar}></div>
                <h3>Expert Implementation</h3>
              </div>
              <p>
                Comprehensive design, development, and training support
                nationwide.
              </p>
            </div>
          </div>

          <button className={`btn ${styles.btn}`}>Learn More</button>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default IsRight;
