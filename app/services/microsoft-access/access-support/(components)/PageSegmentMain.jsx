import React from "react";
import Image from "next/image";

import styles from "../../../../../styles/pageSegment.module.css";

import askExpert from "../../../../../public/askExpert540x480.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper}>
        <Image
          src={askExpert}
          alt="Man pulling out a card saying Ask an Expert"
          width={540}
          height={480}
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p>Microsoft Access</p>
          <h2>
            Access Support,<br></br>Help and Training
          </h2>
          <p>
            Our team of Microsoft Access database experts are available to
            resolve your Access issues. Whenever you need help, our talented
            Access consultants are available for small and large jobs at
            competitive rates and are just a phone call or email away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
