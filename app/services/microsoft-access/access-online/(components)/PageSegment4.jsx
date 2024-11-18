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
              <h2>Native Access/Cloud Database</h2>
            </div>
            <p>
              We can host your database with Microsoft and use native Access to
              link to your online data. By installing native Access on your
              Windows based laptops, PC&apos;s, tablets and mobile devices you
              can access your data in the cloud. This solution is very cost
              effective with storage starting from as little as $420 per annum
              with no other ongoing costs. Given that databases can be rapidly
              set up in Access, this becomes a very cost effective development
              solution.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0}>
          <div className="image-wrapper">
            <Image
              src={cloudSolution}
              alt="person clicking a computer mouse"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
