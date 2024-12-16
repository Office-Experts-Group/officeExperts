import React from "react";
import Image from "next/image";

import styles from "../../../../../styles/pageSegment.module.css";

import twoComputers from "../../../../../public/540x480/twoComputers.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper}>
        <Image
          src={twoComputers}
          alt="Two computers"
          width={540}
          height={480}
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p>Microsoft Access</p>
          <h2>
            Database Analysis,<br></br> Design and Development
          </h2>
          <p>
            When it comes to online Microsoft Access database solutions, our
            innovative and versatile consultants deliver a prompt, quality
            service with competitive pricing. Talk to our Access database
            integration experts to get the clarity to take your business forward
            with proven solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
