import React from "react";
import Link from "next/link";

import styles from "../../../../styles/solutionsCarousel.module.css";

import project1 from "../../../../public/project-img-1.webp";
import project2 from "../../../../public/project-img-2.webp";
import project3 from "../../../../public/project-img-3.webp";
import project4 from "../../../../public/project-img-4.webp";

const SolutionsCarousel = () => {
  const solutionsData = [
    {
      title: "Office 365 Implementation",
      link: "/services/microsoft-office-365/office-365-implementation",
      image: project1,
      description: [
        "Need help setting up Office 365 in your organisation?",
        "Our experts can assist you in planning and utilizing Office 365 features to maximize your ROI.",
      ],
    },
    {
      title: "Office 365 Migration",
      link: "/services/microsoft-access",
      image: project2,
      description: [
        "Need to migrate emails and/or files to Office 365?",
        "Our consultants can help move your organisation’s email and files to the cloud using Office 365.",
      ],
    },
    {
      title: "Business Process Automation",
      link: "/services/microsoft-office-365/business-process-automation",
      image: project3,
      description: [
        "Are paper forms delaying your business processes?",
        "Losing track of your internal forms?",
        "THave a budget for new forms to streamline your business?",
      ],
    },
    {
      title: "Remote Data Gathering",
      link: "/services/microsoft-office-365/remote-data-gathering-from-any-device",
      image: project4,
      description: [
        "Need your staff to remotely fill out forms while offsite?",
        "Do you need to gather information from your clients from any device?",
      ],
    },
  ];

  // Duplicate first few items to create seamless loop
  const extendedSolutions = [...solutionsData, ...solutionsData.slice(0, 3)];

  return (
    <div className={styles.solutions}>
      <div className={styles.title}>
        <h2>Experts In...</h2>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack} aria-label="Solutions carousel">
          {extendedSolutions.map((solution, index) => (
            <div
              key={`solution-${index}`}
              className={styles.cardWrapper}
              aria-label={`Solution ${(index % solutionsData.length) + 1}`}
            >
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
