import React from "react";
import Link from "next/link";

import styles from "../../../../styles/solutionsCarousel.module.css";

import deskGroup from "../../../../public/cards/deskGroup350x200.webp";
import penGraph from "../../../../public/cards/penGraph350x200.webp";
import graphHands from "../../../../public/cards/graphHands350x200.webp";
import jigsaw from "../../../../public/cards/jigsaw350x200.webp";

const SolutionsCarousel = () => {
  const solutionsData = [
    {
      title: "Exchange Setup and Help",
      link: "/services/microsoft-office-365/exchange-online-setup-and-support",
      image: deskGroup,
      description: [
        "Does your organisation need Exchange setup and configured?",
        "Do you need Outlook setup for your staff?",
      ],
    },
    {
      title: "Help and Managed Services",
      link: "/services/microsoft-office-365/support-and-managed-services",
      image: penGraph,
      description: [
        "Need support for your Office 365 subscription?",
        "Is your OneDrive not syncing?",
        "Need tips on using and configuring Office 365 and its features?",
      ],
    },
    {
      title: "Cloud Backup with OneDrive",
      link: "/services/microsoft-office-365/cloud-backup-with-onedrive",
      image: graphHands,
      description: [
        "Have important documents needing off site backup?",
        "Want to share files with colleagues and customers?",
        "Need files in remote places on multiple devices?",
      ],
    },
    {
      title: "App & Custom Development",
      link: "/services/microsoft-office-365/cloud-backup-with-onedrive",
      image: jigsaw,
      description: [
        "Need custom applications to integrate with SharePoint lists and libraries?",
        "Need custom branding for your corporate intranet site?",
      ],
    },
  ];

  // Duplicate the array to create seamless loop
  const extendedSolutions = [...solutionsData, ...solutionsData];

  return (
    <div className={`${styles.solutions} ${styles.duplicate}`}>
      <div className={styles.carouselContainer}>
        <div className={`${styles.carouselTrack} ${styles.reverseAnimation}`}>
          {extendedSolutions.map((solution, index) => (
            <div className={styles.cardWrapper} key={index}>
              <div className={styles.description}>
                {solution.description.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
              <Link href={solution.link}>
                <div
                  className={`${styles.card} ${
                    styles[`card${(index % solutionsData.length) + 1}`]
                  }`}
                  style={{
                    background: `url(${solution.image.src}) no-repeat center center`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className={styles.popIn}>
                    <h3>
                      <span>Microsoft</span>
                      <br />
                      {solution.title}
                    </h3>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsCarousel;
