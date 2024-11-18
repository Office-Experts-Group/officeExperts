import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import remoteSupport from "../../../../../public/remoteSupport600x400.webp";

const PageSegment4 = () => {
  return (
    <div
      className="animate-wrapper"
      style={{ marginBottom: "2rem", marginTop: "-2rem" }}
    >
      <div className={styles.pageSegment} id="web-apps">
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>We&apos;re Here For You!</h2>
            </div>
            <p>
              Are you struggling with Access? Do you need some guidance from
              time to time?
            </p>
            <p>
              Via remote access or over the phone, we can offer you instant help
              and advice. Whether you are an individual or have a team of
              people, our experts are ready to talk through your requirements
              and help work through your issues. You&apos;ll appreciate having
              your own dedicated consultant available when you need them most.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={remoteSupport}
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
