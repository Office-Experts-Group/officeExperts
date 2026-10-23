import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import form from "../../../public/form600x400.webp";
import Link from "next/link";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div className={styles.pageSegment} style={{ margin: "6rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Data Integrity and Efficiency
            </h2>
            <p>
              We can create easy to use{" "}
              <Link href={"/popup-forms"}>popup forms</Link> to allow your staff
              to effortlessly and efficiently enter data and to help validate
              and protect the integrity of the document.
            </p>
            <p>
              A popup form, can lead the users through what they need to do step
              by step, validate their data entry and then integrate the data
              into their document. This saves your staff time, minimises errors
              and helps with document consistency.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image src={form} alt="form on a desk" width={450} height={300} />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
