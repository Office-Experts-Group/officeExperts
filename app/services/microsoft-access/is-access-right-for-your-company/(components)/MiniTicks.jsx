import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegmentCenter.module.css";

import success from "../../../../../public/success600x400.webp";

const MiniTicks = () => {
  const benefits = [
    {
      text: "SQL Server",
      link: "https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration",
    },
    {
      text: "Visual Studio (C#, VB, ASP)",
      isText: true,
    },
    {
      text: "MySQL",
      isText: true,
    },
    {
      text: "Office 365",
      link: "https://www.officeexperts.com.au/services/microsoft-office-365",
    },
    {
      text: "SharePoint",
      link: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
    },
    {
      text: "Azure",
      link: "https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure",
    },
  ];

  const renderBenefitContent = (benefit) => {
    if (benefit.isText) {
      return <p>{benefit.text}</p>;
    }

    return (
      <Link href={benefit.link} className={styles.benefitLink}>
        {benefit.text}
      </Link>
    );
  };

  return (
    <section
      className={styles.pageSegment}
      style={{
        gridTemplateColumns: "1fr 40%",
        gap: "0rem",
        marginBottom: "4rem",
      }}
    >
      <div className={styles.pageSegmentCenter}>
        <div className={styles.underline}>
          <h2>Access Help and Support</h2>
        </div>

        <p className={styles.tickText}>
          In addition to creating Access databases, our experienced consultants
          build database solutions with technologies including:
        </p>
        <div className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <AnimateOnScroll
              key={benefit.text}
              animation="slide-left"
              delay={index * 0.1}
            >
              <div className={styles.benefitItem}>
                <div className={styles.tick}>✓</div>
                {renderBenefitContent(benefit)}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
        <Image
          src={success}
          alt="person pointing at a computer screen"
          width={600}
          height={400}
          style={{ marginLeft: "-4rem" }}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default MiniTicks;
