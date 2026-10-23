// Segment4Repeat component for /mail-merge route
// Displays "What Is Mail Merge?" section with common uses list
// Uses pageSegment4.module.css styles with tick/check styling

import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

// Placeholder image - replace with appropriate mail merge related image
import commonUses from "../../../public/brandPower.webp";

const Segment4Repeat = () => {
  // Common uses of Mail Merge from outline
  const checkItems = [
    "Personalised letters and envelopes",
    "Customer invoices or receipts",
    "Bulk emails with individual details",
    "Name badges, certificates, and labels",
    "Contract or proposal templates",
  ];

  return (
    <div
      className="animate-wrapper"
      id="common-uses"
      style={{ scrollMarginTop: "150px", backgroundColor: "#f2f3f5", padding: "3rem 0 6rem 0" }}
    >
      <div className={styles.pageSegment} style={{ margin: "6rem 0 0 0" }}>
        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={commonUses}
              alt="Examples of mail merge documents"
              width={450}
              height={300}
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>Common Uses of Mail Merge</h2>
            <p>
              Mail Merge is incredibly versatile and can be applied to almost
              any document that requires personalisation at scale. Australian
              businesses use Mail Merge daily to streamline their document
              production across many different scenarios.
            </p>

            <div className={styles.points}>
              {checkItems.map((text, index) => (
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
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;