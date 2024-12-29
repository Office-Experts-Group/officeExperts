import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment.module.css";

import meeting from "../../../../../public/meeting600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={meeting}
            alt="People sitting in an office environment"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Need An Office Expert?</p>
            <h2>Excel, Access, Word, PowerPoint, Outlook</h2>
            <p>
              Need an expert to help you with Excel, Access, Word, Outlook or
              PowerPoint? We have designers and programmers who can create
              customised solutions to fulfill your needs! We can give you a
              quote or work to an hourly rate. We can work remotely or onsite.
            </p>
            <p>
              Our good reputation is based on the{" "}
              <Link href={"/client-testimonials"}>success of our clients</Link>.
              Let us help ensure your success!
            </p>
            <p>Our experts are ready to talk through your requirements.</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
