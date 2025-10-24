import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import locks from "../../../../../public/locks.webp";

const SecuritySection = () => {
  const securityFeatures = [
    {
      title: "Advanced authentication and encryption",
      description:
        "SQL Server supports Windows authentication, role-based access, and encrypted connections.",
    },
    {
      title: "Centralised storage",
      description:
        "No more data on local drives or shared folders. SQL Server stores everything securely on the server, reducing the risk of accidental loss or theft.",
    },
    {
      title: "Regulatory compliance",
      description:
        "Built-in auditing and security logging help meet business and government data protection requirements.",
    },
  ];

  return (
    <section className={styles.pageSegmentCenter}>
      <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
        <div className={styles.content}>
          <div className={styles.underline}>
            <h2>Keep Your Data Secure and Centralised</h2>
          </div>

          <div className={styles.points}>
            {securityFeatures.map((feature, index) => (
              <div key={index} className={styles.point}>
                <div className={styles.tick}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </div>
                <p>
                  <strong>{feature.title}:</strong> {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "1.5rem",
              borderRadius: "6px",
              marginTop: "2rem",
              borderLeft: "4px solid #046999",
            }}
          >
            <p style={{ margin: "0 0 1rem 0", color: "#333" }}>
              <strong>💡 Example:</strong> If someone copies an Access file from
              your network, they can walk away with your data. With SQL Server,
              only authorised users can query or update information — all access
              is controlled at the server level.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
        <Image
          style={{ rotate: "15deg" }}
          src={locks}
          alt="two padlocks"
          width={450}
          height={300}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default SecuritySection;
