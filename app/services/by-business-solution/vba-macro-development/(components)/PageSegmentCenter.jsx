import React from "react";
import Image from "next/image";

import styles from "../../../../../styles/pageSegmentCenter.module.scss";

import blueCode from "../../../../../public/blueCode600x400.webp";
import codeReview from "../../../../../public/codeReview450x300.webp";

const PageSegmentCenter = () => {
  const vbaServices = [
    {
      title: "Automate Repetitive Tasks",
      content: "At Office Experts Group, we use VBA to automate your repetitive tasks across all Microsoft Office applications. Our custom scripts streamline processes, reduce manual effort and ensure consistency, saving you time and minimising errors."
    },
    {
      title: "Develop Custom Functions",
      content: "We create custom functions for Excel, Word, PowerPoint and other Office applications. These functions perform complex calculations, manipulate data and generate reports, providing flexibility and efficiency tailored to your business needs"
    },
    {
      title: "Seamless Application Integration",
      content: "Our VBA expertise enables seamless integration between Office applications, allowing smooth data transfer and enhanced functionality. We can help you extract data from Excel, populate Word documents or send automated emails through Outlook."
    },
    {
      title: "Custom Ribbons and Interface",
      content: "We develop custom ribbons and user interfaces for easier access to macros and functions. This improves user experience by providing intuitive and efficient interaction with Office applications, tailored to your organisation's needs."
    },
    {
      title: "Add-ins with VBA",
      content: "We create powerful add-ins to package and distribute your custom solutions. These add-ins ensure consistent availability of VBA macros and functions, providing flexibility and control over your Office tools."
    }
  ]

  return (
    <section className={`${styles.dropdowns}`}
    style={{ margin: "0 10vw"}}>
      <div>
        <h2>Our VBA Services</h2>
        <p style={{ lineHeight: "2", marginBottom: "2rem", color: "#777a7e"}}>At Office Experts Group, we use VBA to automate your repetitive tasks across all Microsoft Office applications. Our custom scripts streamline processes, reduce manual effort and ensure consistency, saving you time and minimising errors.</p>
        <div className={styles.servicesList}>
          {vbaServices.map((service, index) => (
              <details 
                className={styles.serviceDetails} 
                open={index === 0}
              >
                <summary className={styles.serviceSummary}>
                  <div className={styles.summaryContent}>
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
                    <span className={styles.serviceTitle}>{service.title}</span>
                  </div>
                </summary>
                <div className={styles.serviceContent}>
                  <p>{service.content}</p>
                </div>
              </details>
          ))}
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={blueCode}
          alt="digital futuristic design of someone coding"
          width={300}
          height={200}
        />
        <Image
          src={codeReview}
          alt="Two people reviewing some computer code"
          width={300}
          height={200}
        />
</div>
    </section>
  );
};

export default PageSegmentCenter;