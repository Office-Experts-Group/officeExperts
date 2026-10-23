import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

const Bullets = () => {
  const checkItems = [
    "Connecting Word with business systems and databases - We integrate Microsoft Word directly with your core business applications such as CRMs, ERPs, or HR systems. This allows documents like proposals, invoices, or contracts to be generated automatically with the right data every time, eliminating manual entry and reducing the risk of errors.",
    "SharePoint and OneDrive integrations - With seamless connections between Word, SharePoint, and OneDrive, your organisation can streamline collaboration and document management. Staff can easily access the latest version of files, maintain version control, and ensure sensitive documents are stored securely in the cloud.",
    "Custom Word add-ins - We design and build tailored add-ins that live directly inside Word's interface, giving your team one-click access to the functions and features they use most. Whether it's pulling client information into a document, running formatting checks, or linking with other internal tools, these add-ins are built to fit your exact business processes.",
    "Microsoft Graph API & Office JavaScript API solutions - By harnessing the power of Microsoft Graph and Office JavaScript APIs, we can extend Word far beyond its out-of-the-box capabilities. These integrations connect Word with the wider Microsoft 365 ecosystem — Teams, Excel, Outlook, and Power BI — creating workflows where data moves effortlessly between applications.",
  ];

  // Function to wrap the first part (before the dash) in strong tags
  const formatText = (text) => {
    const dashIndex = text.indexOf(" - ");
    if (dashIndex !== -1) {
      const strongPart = text.substring(0, dashIndex);
      const regularPart = text.substring(dashIndex);
      return (
        <>
          <strong>{strongPart}</strong>
          {regularPart}
        </>
      );
    }
    return text;
  };

  return (
    <div
      className="animate-wrapper"
      id="no-more-headaches"
      style={{
        scrollMarginTop: "150px",
        backgroundColor: "rgb(242, 243, 245)",
        paddingTop: "3rem",
      }}
    >
      <div
        className={styles.pageSegment}
        style={{ margin: "6rem 0 0 0", paddingBottom: "6rem" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>Our API Services</h2>
            <p>
              At Word Experts, we deliver tailored{" "}
              <strong>Microsoft Word integration services</strong> to fit your
              business processes.
            </p>
          </div>

          <div className={styles.points}>
            {checkItems.map((text, index) => (
              <div
                key={index}
                className={styles.point}
                style={{ marginBottom: "1rem" }}
              >
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
                <p>{formatText(text)}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Bullets;
