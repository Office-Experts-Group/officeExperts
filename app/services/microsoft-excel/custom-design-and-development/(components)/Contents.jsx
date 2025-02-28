"use client";
import React, { useState } from "react";
import Link from "next/link";

import styles from "../../../../../styles/contentsComponent.module.css";

const Contents = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleLinkClick = () => {
    setIsHidden(true);
  };

  return (
    <div
      className={styles.mobContents}
      style={isHidden ? { right: "-4.6rem" } : { right: "0", top: "15vh" }}
    >
      {isHidden ? (
        <button onClick={() => setIsHidden(false)}>Quick Links</button>
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
          <h3>Quick Links</h3>
          <Link
            href="/services/by-business-solution/dashboards"
            onClick={handleLinkClick}
          >
            <div className={styles.contentLink}>
              <p>Reporting Solutions</p>
            </div>
          </Link>
          <Link
            href="/services/by-business-solution/3rd-party-application-or-office-integration"
            onClick={handleLinkClick}
          >
            <div className={styles.contentLink}>
              <p>Integration with Office products</p>
            </div>
          </Link>
          <Link
            href="https://www.excelexperts.com.au/vba-macro-development"
            onClick={handleLinkClick}
          >
            <div className={styles.contentLink}>
              <p>VBA Macro Development</p>
            </div>
          </Link>
          <Link
            href="/services/by-business-solution/3rd-party-application-or-office-integration"
            onClick={handleLinkClick}
          >
            <div className={styles.contentLink}>
              <p>Integration with 3rd Party Apps</p>
            </div>
          </Link>
          <Link
            href="https://www.excelexperts.com.au/data-manipulation"
            onClick={handleLinkClick}
          >
            <div className={styles.contentLink}>
              <p>Data Manipulation/Conversion</p>
            </div>
          </Link>
          <Link
            href="/services/microsoft-word/custom-toolbars-and-ribbons"
            onClick={handleLinkClick}
          >
            <div className={styles.contentLink}>
              <p>Custom Ribbons and Toolbars</p>
            </div>
          </Link>
          <Link
            href="/services/microsoft-word/word-template-conversions"
            onClick={handleLinkClick}
          >
            <div className={styles.contentLink}>
              <p>Custom Workbooks and Templates</p>
            </div>
          </Link>
          <Link
            href="https://www.excelexperts.com.au/add-in-development"
            onClick={handleLinkClick}
          >
            <div className={styles.contentLink}>
              <p>Add-in Development</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Contents;
