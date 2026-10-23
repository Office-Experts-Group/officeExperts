// PageSegment4 component for /mail-merge route
import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import mailMergeServices from "../../../public/our-services.webp";

const PageSegment4 = () => {
  const checkItems = [
    {
      strong: "Template Creation",
      text: " - creating or refining your Mail Merge templates",
    },
    {
      strong: "Data Source Linking",
      text: " - connecting Word documents with ",
      link: (
        <>
          <Link href="https://www.excelexperts.com.au">Excel</Link>,{" "}
          <Link href="https://www.accessexperts.com.au">Access</Link>, or
          Outlook data
        </>
      ),
    },
    {
      strong: "Workflow Automation",
      text: " - automating repetitive document workflows",
    },
    {
      strong: "Staff Training",
      text: " - teaching your team Mail Merge best practices",
    },
    {
      strong: "Troubleshooting",
      text: " - diagnosing and repairing broken Mail Merge files",
    },
    {
      strong: "Microsoft 365 Integration",
      text: " - integrating Mail Merge with SharePoint or Microsoft 365 systems",
    },
  ];

  return (
    <div
      className="animate-wrapper"
      id="services"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "6rem 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>Our Mail Merge Services</h2>
            <p>
              Our team specialises in designing and automating Mail Merge
              systems for Microsoft Word and Excel. Your business may be managing a
              marketing campaign, membership database, or a large customer list,
              we can help you merge data efficiently and accurately.
            </p>

            <div className={styles.points}>
              {checkItems.map((item, index) => (
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
                    <strong>{item.strong}</strong>
                    {item.text}
                    {item.link && item.link}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={mailMergeServices}
              alt="Mail merge services and document automation"
              width={450}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;