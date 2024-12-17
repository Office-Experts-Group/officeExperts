import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/solutionsCarousel.module.css";

import keyboard from "../../public/350x260/keyboard.webp";
import coder from "../../public/350x260/coder.webp";
import dashboard from "../../public/350x260/dashboard.webp";
import graph from "../../public/350x260/graph.webp";
import desk from "../../public/350x260/desk.webp";
import magnify from "../../public/350x260/magnify.webp";
import code from "../../public/350x260/code.webp";
import hands from "../../public/350x260/hands.webp";
import document from "../../public/350x260/document.webp";
import automation from "../../public/350x260/automation.webp";

const SolutionsCarousel = () => {
  const solutionsData = [
    {
      title: "Microsoft Azure",
      link: "/services/by-business-solution/cloud-based-solutions-with-azure",
      image: hands,
      alt: "hands",
      description: [
        "We can cloud and web enable your documents, workbooks and databases with Azure.",
      ],
    },
    {
      title: "Microsoft PowerPoint",
      link: "/services/microsoft-powerpoint",
      image: magnify,
      alt: "magnify",
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
      image: desk,
      alt: "desk",
      description: [
        "Professional documents, spreadsheets, databases and presentations",
        "Support and custom coding",
      ],
    },
    {
      title: "Microsoft SQL Server",
      link: "/services/by-business-solution/office-and-sql-server-integration",
      image: graph,
      alt: "graph",
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
      image: dashboard,
      alt: "dashboard",
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
      image: keyboard,
      alt: "keyboard",
      description: [
        "Support and managed services: Setup, implementation, custom development, migration, automation, cloud backups",
      ],
    },
    {
      title: "Microsoft Outlook",
      link: "/services/by-business-solution/custom-office-solutions",
      image: coder,
      alt: "coder",
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
      image: automation,
      alt: "automation",
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
      image: document,
      alt: "document",
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
      image: code,
      alt: "code",
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
                      <span>Word Experts</span>
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
