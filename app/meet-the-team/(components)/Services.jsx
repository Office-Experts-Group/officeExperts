import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/services.module.css";

import scott from "../../../public/scott.webp";
import signature from "../../../public/signature.webp";
import handsIn from "../../../public/handsIn600x400.webp";

const Services = ({ meetStyles, teamMembers }) => {
  return (
    <section className={styles.services}>
      <AnimateOnScroll animation="slide-left" delay={0} duration={1.5}>
        <div className={styles.content}>
          <div className={styles.subBox}>
            <p>Innovators in</p>
          </div>
          <h2>Custom Microsoft Development</h2>
          <p>
            Meet the experts driving innovation in Microsoft development,
            programming, and analysis. Our team of over 20 professionals works
            remotely or onsite to deliver the custom solutions your business
            deserves. Learn more about what makes us tick on the{" "}
            <Link href={"/about-us"}>About Us</Link> page.
          </p>
          <div className={styles.signature}>
            <div>
              <Image src={scott} alt="Scott Robinson" width={30} height={30} />
            </div>
            <Image
              src={signature}
              alt="Scott signature"
              width={200}
              height={50}
            />
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={0} duration={1.5}>
        <div className={styles.imageWrapper}>
          <Image
            src={handsIn}
            alt="People joining hands"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Services;
