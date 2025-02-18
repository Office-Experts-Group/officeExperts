import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../components/AnimateOnScroll";

import styles from "../../styles/isRight.module.css";

import isRight from "../../public/isRight.webp";
import isRight2 from "../../public/isRight2.webp";
import Link from "next/link";

const IsRight = () => {
  return (
    <div className={styles.isRight}>
      <AnimateOnScroll animation="scale-down" delay={0.2} duration={1.6}>
        <div className={styles.imgWrapper}>
          <div className={styles.imgDiv}>
            <Image
              className={styles.imgMain}
              src={isRight}
              alt="Expert consultant working on Microsoft Office solutions"
              width={505}
              height={635}
            />
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-down" delay={0.2} duration={1.6}>
        <div className={styles.contentWrapper}>
          <div className={styles.sub}>
            <p>Your Microsoft Office Solutions Experts</p>
          </div>
          <h2>For All Of Your Microsoft Office Consulting Needs</h2>
          <p className={styles.text}>
            Through our extensive and growing customer base, our highly trained
            Microsoft Office consulting team is known for efficiency, good
            customer service, innovative solutions, tailored education, expert
            troubleshooting and reliable support.
          </p>
          <p className={styles.text}>
            Our Microsoft Office consultants specialise in custom development
            across the entire suite of Office products. We are second to none in
            databases, custom coding, document design, dashboards and reporting
            solutions.
          </p>
          <div className={styles.contentGrid}>
            <div className={styles.excerpt}>
              <div>
                <div className={styles.bar}></div>
                <h3>Comprehensive Expertise</h3>
              </div>
              <p>
                Expert development in Excel, Access, Word, PowerPoint, and
                complete Office integration solutions.
              </p>
            </div>
            <div className={styles.excerpt}>
              <div>
                <div className={styles.bar}></div>
                <h3>Australia-Wide Service</h3>
              </div>
              <p>
                Professional consultants across Australia providing remote and
                onsite support.
              </p>
            </div>
          </div>

          <Link href={"/about-us"} className={`btn ${styles.btn}`}>
            About us
          </Link>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default IsRight;
