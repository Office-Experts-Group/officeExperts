import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import hand from "../../../../../public/hand600x400.webp";

const PageSegment4 = () => {
  return (
    <div className="animate-wrapper" style={{ marginBottom: "6rem" }}>
      <div className={styles.pageSegment}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Freedom with Online Data!</h2>
            </div>
            <p>
              We can setup a hosted database online for you and link your online
              data with products including Excel, Word, Access, PowerPoint and
              Outlook. An online database will give you a central data store
              which you can link to remotely via your Desktop PC, Windows tablet
              or Windows Mobile device. This way of working with online data
              allows your staff to work anywhere and you'll be pleasantly
              surprised to know our quotes are very competitive!
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={hand}
              alt="person hand with digital people above it"
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
