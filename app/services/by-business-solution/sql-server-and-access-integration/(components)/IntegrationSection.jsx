import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegment4.module.css";

import accessIntegration from "../../../../../public/access-integration.webp";

const IntegrationSection = () => {
  const integrationFeatures = [
    {
      title: "ODBC or Linked Tables",
      description:
        "Access frontends connect to SQL Server via ODBC or Linked Tables, preserving your existing forms and reports.",
    },
    {
      title: "Power BI, Excel, and SharePoint",
      description:
        "Integrate easily with Power BI, Excel, and SharePoint for advanced reporting and dashboards.",
    },
    {
      title: "Cloud-ready deployment",
      description:
        "Deploy your SQL Server in-house or on Microsoft Azure for secure remote access and global collaboration.",
    },
  ];

  return (
    <section
      className={styles.pageSegmentCenter}
      style={{ padding: "6rem 10vw" }}
    >
      <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
        <div className={styles.content}>
          <div className={styles.underline}>
            <h2>Connect Access to the Modern Microsoft Ecosystem</h2>
          </div>

          <div className={styles.points}>
            {integrationFeatures.map((feature, index) => (
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
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
        <Image
          src={accessIntegration}
          alt="Microsoft ecosystem integration with cloud connectivity"
          width={450}
          height={300}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default IntegrationSection;
