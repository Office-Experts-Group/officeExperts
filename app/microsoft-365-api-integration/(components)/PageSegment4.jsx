import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import apiNetwork from "../../../public/apiNetwork.webp";

const PageSegment4 = () => {
  return (
    <div
      className="animate-wrapper"
      id="disconnected-tools"
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
              What we solve...
            </p>
            <h2 style={{ marginBottom: "1rem" }}>
              Disconnected Tools. Frustrated Teams. Missed Opportunities.
            </h2>
            <p>
              Many organisations rely heavily on Microsoft 365, yet struggle to
              extend its capabilities beyond the desktop. Field workers often
              lack reliable access to SharePoint documents when offline. Teams
              waste time switching between apps that don't talk to each other.
              And businesses miss out on the agility that comes with
              mobile-first, cloud-connected workflows.
            </p>
            <p>
              Despite the power of Microsoft 365, most setups fall short when it
              comes to <strong>mobile integration</strong>,{" "}
              <strong>real-time data access</strong>, and{" "}
              <strong>workflow automation</strong>. Without custom solutions,
              your team may be limited by rigid interfaces, poor connectivity,
              and siloed information.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper" style={{ marginTop: "2rem" }}>
            <Image
              src={apiNetwork}
              alt="digital design of an api network"
              width={400}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
