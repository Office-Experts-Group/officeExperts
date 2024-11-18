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
            <div className={styles.circleButton}>
              <span className={styles.iconWrapper}>
                <Image
                  src={idea}
                  alt="Icon"
                  style={{ width: "auto", height: "auto" }}
                />
              </span>
            </div>
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
            <p>Let us Help</p>
          </div>
          <h2>Is Access Right For Your Needs?</h2>
          <p className={styles.text}>
            Our team of Access professionals can give you expert advice on all
            features of Access related programming, as well as advising whether
            Access is the right solution for your business.
          </p>
          <div className={styles.contentGrid}>
            <div className={styles.excerpt}>
              <div>
                <div className={styles.bar}></div>
                <h3>Database Solutions</h3>
              </div>
              <p>Expert guidance for your business data management needs.</p>
            </div>
            <div className={styles.excerpt}>
              <div>
                <div className={styles.bar}></div>
                <h3>Integration & Support</h3>
              </div>
              <p>Custom Access solutions to streamline your workflow.</p>
            </div>
          </div>
          <div className={styles.listItem}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
            </svg>
            <p>Data management</p>
          </div>
          <div className={styles.listItem}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
            </svg>
            <p>Data structuring and querying</p>
          </div>
          <div className={styles.listItem}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
            </svg>
            <p>Multiple user management</p>
          </div>
          <div className={styles.listItem}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
            </svg>
            <p>Data reporting</p>
          </div>
          <button className={`btn ${styles.btn}`}>Learn More</button>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default IsRight;
