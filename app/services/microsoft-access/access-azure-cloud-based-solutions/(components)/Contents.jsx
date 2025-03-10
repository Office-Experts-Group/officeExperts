"use client";
import React, { useState } from "react";
import styles from "../../../../../styles/contentsComponent.module.css";

const Contents = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsHidden(true);
    // Small delay to allow the animation to start before scrolling
    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <div className={styles.mobContents} style={isHidden ? {} : { right: "0" }}>
      {isHidden ? (
        <button onClick={() => setIsHidden(false)}>Contents</button>
      ) : (
        <div
          className={`${styles.contents} ${!isHidden ? styles.visible : ""}`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="2.5em"
            width="2.5em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsHidden(true)}
          >
            <path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"></path>
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
          </svg>
          <h3>Contents</h3>
          <a
            href="#existing-access"
            onClick={(e) => handleLinkClick(e, "#existing-access")}
          >
            <div className={styles.contentLink}>
              <p>Existing Access Databases</p>
            </div>
          </a>
          <a href="#web-apps" onClick={(e) => handleLinkClick(e, "#web-apps")}>
            <div className={styles.contentLink}>
              <p>Web Apps Linked to Databases</p>
            </div>
          </a>
          <a
            href="#is-access-azure"
            onClick={(e) => handleLinkClick(e, "#is-access-azure")}
          >
            <div className={styles.contentLink}>
              <p>Is Access/Azure for You?</p>
            </div>
          </a>
          <a
            href="#alternatives"
            onClick={(e) => handleLinkClick(e, "#alternatives")}
          >
            <div className={styles.contentLink}>
              <p>Alternatives to Access/Azure</p>
            </div>
          </a>
          <a
            href="#requirements"
            onClick={(e) => handleLinkClick(e, "#requirements")}
          >
            <div className={styles.contentLink}>
              <p>Access/Azure Requirements</p>
            </div>
          </a>
          <a href="#low-cost" onClick={(e) => handleLinkClick(e, "#low-cost")}>
            <div className={styles.contentLink}>
              <p>Low Cost Solution</p>
            </div>
          </a>
          <a href="#experts" onClick={(e) => handleLinkClick(e, "#experts")}>
            <div className={styles.contentLink}>
              <p>Microsoft Database Solution Experts</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Contents;
