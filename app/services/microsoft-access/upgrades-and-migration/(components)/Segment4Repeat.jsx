import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import eyes from "../../../../../public/eyes600x394.webp";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div
        className={styles.pageSegment}
        style={{ marginBottom: "6rem", scrollMarginTop: "150px" }}
        id="migrate"
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>To Migrate or To Upgrade?</h2>
            </div>
            <p>
              Before giving up on your current database, give our experts a call
              to consider whether to migrate it or upgrade it. We may be able to
              save you a lot of time and money.
            </p>
            <p>
              To check out the range of solutions we can provide for upgrading
              or migrating your database, visit our{" "}
              <Link href="https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions">
                Database Development and Solutions
              </Link>{" "}
              page for more information.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={eyes}
              alt="person clicking a computer mouse"
              width={600}
              height={394}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
