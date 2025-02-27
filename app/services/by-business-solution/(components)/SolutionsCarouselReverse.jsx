import React from "react";
import Link from "next/link";

import styles from "../../../../styles/solutionsCarousel.module.css";

import project1 from "../../../../public/cards/graphHands350x200.webp";
import project2 from "../../../../public/cards/data350x200.webp";
import project3 from "../../../../public/350x260/graph.webp";
import project4 from "../../../../public/350x260/magnify.webp";
import project5 from "../../../../public/350x260/keyboard.webp";

const SolutionsCarousel = () => {
  const solutionsData = [
    {
      title: "Office and SQL Server",
      link: "/services/by-business-solution/office-and-sql-server-integration",
      image: project1,
      description: [
        "Want an existing or new SQL Server setup to access from your Office products?",
        "Our experts deliver the best solutions for your needs and budget.",
      ],
    },
    {
      title: "Online Solutions",
      link: "/services/microsoft-access/access-support",
      image: project2,
      description: [
        "Do you want your documents, spreadsheets and databases online?",
        "Does your business need Office 365, SharePoint or Google Docs help?",
      ],
    },
    {
      title: "Cloud Based Solutions With Azure",
      link: "/services/by-business-solution/cloud-based-solutions-with-azure",
      image: project3,
      description: [
        "Do you want your documents, workbooks and databases to be stored in the cloud and shared on the web?",
      ],
    },
    {
      title: "Upgrades and Migration",
      link: "/services/microsoft-office/upgrades-and-migration",
      image: project4,
      description: [
        "Are your workbooks, documents or databases not functioning correctly under your version of Office?",
      ],
    },
    {
      title: "Custom Add-in Creation",
      link: "/services/by-business-solution/add-in-creation",
      image: project5,
      description: [
        "Need a new Office add-in?",
        "Our experienced programmers can create an add-in for your organisation to automate tasks and meet your requirements.",
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
                      <span>Office</span>
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
