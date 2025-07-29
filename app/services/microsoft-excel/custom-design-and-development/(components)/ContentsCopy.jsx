"use client";
import React, { useState } from "react";
import styles from "../../../../../styles/contentsComponent.module.css";
import Link from "next/link";

const ContentsCopy = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleLinkClick = () => {
    setIsHidden(true);
  };

  return (
    <div
      className={styles.mobContents}
      style={
        isHidden ? { right: "-5rem", top: "55vh" } : { right: "0", top: "0" }
      }
    >
      {isHidden ? (
        <button onClick={() => setIsHidden(false)}>Our Services</button>
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
          <h3>Our Services</h3>
          <Link href="/vba-macro-development" onClick={handleLinkClick}>
            <div className={styles.contentLink}>
              <p>VBA Programming</p>
            </div>
          </Link>
          <Link href="/" onClick={handleLinkClick}>
            <div className={styles.contentLink}>
              <p>Microsoft Excel</p>
            </div>
          </Link>
          <div
            className={styles.contentLink}
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            <Link
              href="/services/microsoft-office-365"
              onClick={handleLinkClick}
            >
              <p>Office 365</p>
            </Link>
            <p>/</p>
            <Link
              href="/services/by-business-solution/online-solutions"
              onClick={handleLinkClick}
            >
              <p>SharePoint</p>
            </Link>
          </div>
          <Link
            href="/services/by-business-solution/cloud-based-solutions-with-azure"
            onClick={handleLinkClick}
          >
            <div className={styles.contentLink}>
              <p>Microsoft Azure</p>
            </div>
          </Link>
          <Link
            href="https://www.accessexperts.com.au"
            onClick={handleLinkClick}
          >
            <div className={styles.contentLink}>
              <p>Microsoft Access</p>
            </div>
          </Link>
          <Link href="/services/microsoft-power-bi" onClick={handleLinkClick}>
            <div className={styles.contentLink}>
              <p>Power BI</p>
            </div>
          </Link>
          <Link
            href="/services/by-business-solution/custom-office-solutions"
            onClick={handleLinkClick}
          >
            <div className={styles.contentLink}>
              <p>Microsoft Outlook</p>
            </div>
          </Link>
          <Link href="/services/microsoft-dot-net" onClick={handleLinkClick}>
            <div className={styles.contentLink}>
              <p>VB.NET</p>
            </div>
          </Link>
          <Link href="/services/microsoft-dot-net" onClick={handleLinkClick}>
            <div className={styles.contentLink}>
              <p>Microsoft Word</p>
            </div>
          </Link>
          <Link href="/services/microsoft-dot-net" onClick={handleLinkClick}>
            <div className={styles.contentLink}>
              <p>C#.NET</p>
            </div>
          </Link>
          <Link href="/services/microsoft-powerpoint" onClick={handleLinkClick}>
            <div className={styles.contentLink}>
              <p>Microsoft PowerPoint</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContentsCopy;
