import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/pageSegmentCenter.module.scss";

import codeReview from "../../../../../public/codeReview450x300.webp";

const PageSegmentCenter = () => {
  const benefitsList = [
    {
      title: "Simplify Complex Calculations",
      description: "Replace unwieldy combinations of nested functions with clean, purpose-built formulas that are easier to maintain and understand"
    },
    {
      title: "Improve Workbook Performance",
      description: "Optimise calculation efficiency for faster processing, especially with large datasets"
    },
    {
      title: "Implement Unique Business Logic",
      description: "Create calculations specific to your industry, compliance requirements, or proprietary methodologies"
    },
    {
      title: "Enhance Data Validation",
      description: "Develop specialised checking mechanisms that enforce your business rules and data quality standards"
    },
    {
      title: "Increase Accuracy",
      description: "Reduce the risk of errors by consolidating complex logic into well-tested, reliable custom formulas"
    }
  ];

  return (
    <section className={`${styles.gridSegment}`}>
      <div>
      <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
        <h2>Why Choose Custom Formulas?</h2>
        
        <p className={styles.introText}>
          Custom formulas can transform complex calculations that would otherwise require multiple nested functions into streamlined, elegant solutions. They allow for specialised business logic that standard Excel functions just simply were not designed to handle. By implementing custom formulas, you can:
        </p>
        
        <div className={styles.benefitsList}>
          {benefitsList.map((benefit, index) => (
            <AnimateOnScroll
              key={benefit.title}
              animation="slide-left"
              delay={index * 0.1}
            >
              <div className={styles.benefitItem}>
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
                <div className={styles.benefitContent}>
                  <p><strong>{benefit.title}</strong> - {benefit.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </AnimateOnScroll>
      </div>

        <div className={styles.imageContainer}>
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={codeReview}
          alt="Two people reviewing some computer code"
          width={450}
          height={300}
        />
      </AnimateOnScroll>
        </div>

      <p className={styles.closingText}>
          Our experts collaborate closely with you to understand your specific requirements and develop custom formulas that seamlessly integrate with your existing workflows. We thoroughly test all solutions to ensure accuracy and provide thorough documentation for future reference.
        </p>
    </section>
  );
};

export default PageSegmentCenter;