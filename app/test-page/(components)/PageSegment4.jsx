import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import office365 from "../../../public/365.webp";

const WhatIs365 = () => {
  return (
    <div
      className="animate-wrapper"
      id="what-is-microsoft-365"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "3rem 0 0 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content} style={{ marginBottom: "1.5rem" }}>
            <p
              style={{
                color: "#046999",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              The Platform
            </p>
            <h2 style={{ marginBottom: "1rem" }}>What Is Office 365?</h2>
            <p>
              Microsoft Office 365 has evolved into a monolithic tool that in
              2026, can form the backbone of your entire business operations.
              Today it is a fully integrated cloud platform that connects your
              people, data, processes and applications under a single Microsoft
              subscription. It&apos;s now accessible from any device, anywhere
              in the world.
            </p>
            <p style={{ marginTop: ".5rem" }}>
              When you add Azures cloud infrastructure, enterprise-grade
              security, and a rich API layer that connects 365 to virtually any
              third-party system your business uses, you soon see why
              forward-thinking organisations are treating Office 365 not as
              software, but as the foundation their entire operation is built
              on.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper" style={{ marginTop: "2rem" }}>
            <Image
              src={office365}
              alt="Microsoft Office 365 logo with question marks"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default WhatIs365;
