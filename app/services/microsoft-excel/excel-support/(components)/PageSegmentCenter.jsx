import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../../../../styles/pageSegmentCenter.module.css";

import support from "../../../../../public/support.webp";
import document from "../../../../../public/document600x400.webp";

const PageSegmentCenter = () => {
  const services = [
    { 
      title: "On-Demand Technical Assistance",
      content: "Get immediate help with urgent Excel issues through our responsive support channels. Our technical experts diagnose and resolve problems efficiently, minimising disruption to your workflow."
    },
    { 
      title: "Custom Solution Development",
      content: "Beyond troubleshooting, we can develop tailored Excel solutions to automate repetitive tasks, streamline your data processes, and enhance productivity across your organisation."
    },
    { 
      title: "Code Reviews & Optimisation",
      content: "Our programmers can review your existing Excel solutions, identify inefficiencies, and implement improvements that enhance performance, reliability, and maintainability."
    },
    { 
      title: "Troubleshooting & Problem Resolution",
      content: "Encountering errors or unexpected behaviour in your spreadsheets? Our diagnostic expertise quickly identifies root causes and implements effective remedies."
    },
    { 
      title: "Migration & Upgrade Support",
      href: "/upgrades-and-migration",
      content: "Seamlessly transition between Excel versions or migrate your spreadsheet solutions to new platforms with our guided support services."
    },
    { 
      title: "Data Conversion & Integration",
      href: "/data-manipulation",
      content: "Transform, clean, and integrate data from various sources into your Excel environment, we are part of the Office Experts Group, with specialists across the entire Microsoft suite."
    },
    { 
      title: "Solution Documentation",
      content: "We provide comprehensive documentation for your existing Excel workflow, ensuring knowledge retention and simple, swift on boarding for new team members."
    },
    { 
      title: "Flexible Support Options",
      content: "Choose between on-site visits or remote support sessions based on your preference and requirements. Our competitive rates ensure excellent value."
    }
  ];

  return (
    <section className={` ${styles.dropdowns}`}>
      <div>
        <h2>We're Here To Support You!</h2>
        <div className={styles.servicesList}>
  {services.map((service, index) => (
    <details 
      key={service.title} // Adding a key for React list rendering
      className={styles.serviceDetails}
      open={index === 0} // This will add the 'open' attribute only to the first item
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
          {service.href ? (
            <Link href={service.href} className={styles.serviceLink}>
              {service.title}
            </Link>
          ) : (
            <span className={styles.serviceTitle}>{service.title}</span>
          )}
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
          src={support}
          alt="person working in a call center"
          width={300}
          height={200}
        />
        <Image
          src={document}
          alt="person pointing at a document"
          width={300}
          height={200}
        />
      </div>
    </section>
  );
};

export default PageSegmentCenter;