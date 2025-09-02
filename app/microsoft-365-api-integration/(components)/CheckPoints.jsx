import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

const PageSegment4 = () => {
  const checkItems = [
    "Limited Mobile Access to Microsoft 365 - Out-of-the-box tools don't offer the flexibility needed for mobile teams. Accessing SharePoint, Teams, or Outlook data on the go is often clunky or unreliable.",
    "No Offline Sync for Field Workers - Employees in remote or low-connectivity environments can't access critical documents or submit updates, leading to delays and lost productivity.",
    "Lack of Unified Portals - Teams are forced to juggle multiple apps and logins, with no centralised dashboard to view tasks, files, or communications.",
    "Missed Opportunities for Automation - Without custom workflows powered by the Microsoft Graph API, businesses lose time on repetitive tasks that could be streamlined.",
    "Native Office Integration with Office.js - Build in-context features like ribbon buttons, task panes, or content add-ins in Word, Excel, Outlook, and PowerPoint—enhancing user experience within familiar interfaces.",
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
      style={{ display: "flex", marginBottom: "3rem auto", maxWidth: "90%" }}
    >
      <div className={styles.pageSegment} style={{ margin: "0" }}>
        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className={styles.points}>
            {checkItems.map((text, index) => (
              <div
                key={index}
                className={styles.point}
                style={{ marginBottom: ".5rem" }}
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

export default PageSegment4;
