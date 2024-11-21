import React from "react";
import Link from "next/link";

import styles from "../../styles/solutionsCarousel.module.css";

import project1 from "../../public/project-img-1.webp";
import project2 from "../../public/project-img-2.webp";
import project3 from "../../public/project-img-3.webp";
import project4 from "../../public/project-img-4.webp";

const SolutionsCarousel = () => {
  const solutionsData = [
    {
      title: "Microsoft Azure",
      link: "/services/by-business-solution/cloud-based-solutions-with-azure",
      image: project1,
      description: [
        "We can cloud and web enable your documents, workbooks and databases with Azure.",
      ],
    },
    {
      title: "Microsoft PowerPoint",
      link: "/services/microsoft-powerpoint",
      image: project3,
      description: [
        "Template creation",
        "pptPlex presentations",
        "Macro and VBA development",
        "Need PowerPoint designers?",
      ],
    },
    {
      title: "Microsoft Office",
      link: "/services/microsoft-office",
      image: project4,
      description: [
        "Professional documents, spreadsheets, databases and presentations",
        "Support and custom coding",
      ],
    },
    {
      title: "Microsoft SQL Server",
      link: "/services/by-business-solution/office-and-sql-server-integration",
      image: project1,
      description: [
        "Custom solutions to SQL Server data.",
        "Auto-generate PowerPoint presentations and Word documents from your databases.",
        "Database interfaces in Visual Studio or Access.",
        "SQL Server development.",
      ],
    },
    {
      title: "Microsoft .NET",
      link: "/services/microsoft-dot-net",
      image: project2,
      description: [
        ".NET solution design",
        "VB.NET, ASP.NET, C#.NET development",
        "Web Application programming",
        "Visual Studio development",
      ],
    },
    {
      title: "Microsoft Office 365",
      link: "/services/microsoft-office-365",
      image: project3,
      description: [
        "Support and managed services: Setup, implementation, custom development, migration, automation, cloud backups",
      ],
    },
    {
      title: "Microsoft Outlook",
      link: "/services/by-business-solution/custom-office-solutions",
      image: project4,
      description: [
        "Email automation from Office apps",
        "VBA development",
        "Data mining",
        "Need Outlook expertise?",
      ],
    },
    {
      title: "Microsoft VBScript",
      link: "/services/microsoft-vbscript",
      image: project4,
      description: [
        "Programming and testing",
        "Command Line and batch automation",
        "Troubleshooting",
        "Windows task scheduling",
        "File processing",
        "Script coding",
      ],
    },
    {
      title: "Microsoft Publisher",
      link: "/services/microsoft-publisher",
      image: project4,
      description: [
        "Microsoft Publisher design",
        "Your corporate branding",
        "Pre-set layouts, just click and add text",
        "Professional layouts",
        "Professional templates",
        "Upgrades and migration",
      ],
    },
    {
      title: "Services By Business Solution",
      link: "/services/by-business-solution",
      image: project4,
      description: [
        "Spreadsheets and databases",
        "Coding and macros",
        "Support and online solutions",
        "Upgrades and migration",
        "Document templates",
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
                      <span>Office Experts</span>
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
