import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../../styles/solutionsCarousel.module.css";

import code from "../../../../public/350x260/code.webp";
import coder from "../../../../public/350x260/coder.webp";
import dashboard from "../../../../public/350x260/dashboard.webp";
import desk from "../../../../public/350x260/desk.webp";
import graph from "../../../../public/350x260/graph.webp";
import hands from "../../../../public/350x260/hands.webp";
import keyboard from "../../../../public/350x260/keyboard.webp";
import magnify from "../../../../public/350x260/magnify.webp";

const SolutionsCarousel = () => {
  const solutionsData = [
    {
      title: "Custom Solutions",
      link: "/services/by-business-solution/custom-office-solutions",
      image: graph,
      alt: "graph",
      description: [
        "Excel, Access, Word",
        "Outlook, PowerPoint",
        "Extend functionality",
        "Process automation",
      ],
    },
    {
      title: "VBA/Macro Development",
      link: "/services/by-business-solution/vba-macro-development",
      image: code,
      alt: "code",
      description: [
        "Need a VBA expert to automate tasks or extend Office functionality?",
      ],
    },
    {
      title: "Azure Cloud Based Solutions",
      link: "/services/by-business-solution/cloud-based-solutions-with-azure",
      image: desk,
      alt: "desk",
      description: [
        "Your documents, workbooks and databases can be cloud and web enabled with Azure.",
      ],
    },
    {
      title: "Integration",
      link: "/services/by-business-solution/3rd-party-application-or-office-integration",
      image: keyboard,
      alt: "keyboard",
      description: [
        "Want to extend a 3rd party product with Office?",
        "Need to link an Office app, CRM, accounting package or data files to Office?",
      ],
    },
    {
      title: "Online Solutions",
      link: "/services/by-business-solution/online-solutions",
      image: hands,
      alt: "hands",
      description: [
        "Do you want your documents, spreadsheets and databases to be available online?",
        "Need help with Office 365, SharePoint or Google Docs?",
      ],
    },
    {
      title: "with SQL Server",
      link: "/services/office-and-sql-server-integration",
      image: coder,
      alt: "coder",
      description: [
        "Want an existing or new SQL Server setup to access from your Office products?",
        "We deliver the best solutions for your needs and budget.",
      ],
    },
    {
      title: "Custom Add-in Creation",
      link: "/services/by-business-solution/add-in-creation",
      image: magnify,
      alt: "magnify",
      description: [
        "Need a new Office add-in?",
        "Our experts can create an add-in to help your organisation automate tasks and enhance productivity.",
      ],
    },
    {
      title: "Upgrades and Migration",
      link: "/services/microsoft-office/upgrades-and-migration",
      image: dashboard,
      alt: "dashboard",
      description: [
        "Are your workbooks, documents or databases not functioning correctly under your version of Office?",
      ],
    },
  ];

  // Duplicate the array to create seamless loop
  const extendedSolutions = [...solutionsData, ...solutionsData];

  return (
    <div className={styles.solutions}>
      <div className={styles.title}>
        <h2>No Problems... Only Solutions</h2>
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
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={solution.image}
                      alt={solution.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className={styles.carouselImage}
                    />
                  </div>
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
