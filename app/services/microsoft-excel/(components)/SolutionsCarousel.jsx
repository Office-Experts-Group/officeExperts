import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../../styles/solutionsCarousel.module.css";

import keyboard from "../../../../public/350x260/keyboard.webp";
import coder from "../../../../public/350x260/coder.webp";
import dashboard from "../../../../public/350x260/dashboard.webp";
import graph from "../../../../public/350x260/graph.webp";
import desk from "../../../../public/350x260/desk.webp";
import magnify from "../../../../public/350x260/magnify.webp";
import code from "../../../../public/350x260/code.webp";
import hands from "../../../../public/350x260/hands.webp";

const SolutionsCarousel = () => {
  const solutionsData = [
    {
      title: "Help and Training",
      link: "/services/microsoft-excel/excel-support",
      image: keyboard,
      alt: "computer keyboard",
      description: [
        "Struggling with Excel and need help?",
        "Need occasional guidance?",
        "Need ongoing support for your organisation?",
      ],
    },
    {
      title: "Data Manipulation",
      link: "/services/microsoft-excel/data-manipulation",
      image: coder,
      alt: "coder",
      description: [
        "Data import/export",
        "Data parsing and processing",
        "Data formatting automation",
        "Automated data manipulation solutions",
        "CSV, XML, SQL, JSON, etc",
      ],
    },
    {
      title: "Dashboards",
      link: "https://www.officeexperts.com.au/services/by-business-solution/dashboards",
      image: dashboard,
      alt: "dashboard",
      description: [
        "Custom Excel dashboards",
        "Dashboard automation",
        "Expertise in Power Query, PowerPivot or Power BI?",
      ],
    },
    {
      title: "Online Solutions",
      link: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
      image: graph,
      alt: "graph",
      description: [
        "Do you need your spreadsheet online?",
        "Need to share data online with your customers or staff?",
        "Need help with Office 365, SharePoint or Google Docs?",
      ],
    },
    {
      title: "Office Integrations",
      link: "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration",
      image: desk,
      alt: "desk",
      description: [
        "Excel data manipulation from Office apps, CRM, accounting packages, data files or 3rd party product",
        "Connect Excel directly to 3rd party products",
      ],
    },
    {
      title: "Charting & Pivot Tables",
      link: "/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions",
      image: magnify,
      alt: "magnifying glass",
      description: [
        "Need help with Excel's charting and pivot features?",
        "Need quality visual outputs from your data?",
        "Need an automated charting solution?",
      ],
    },
    {
      title: "Upgrades and Migration",
      link: "/services/microsoft-excel/upgrades-and-migration",
      image: code,
      alt: "code",
      description: [
        "Workbook troubleshooting",
        "Migration path advice and assistance",
        "Post-migration macro troubleshooting",
      ],
    },
    {
      title: "Office / Excel Integration",
      link: "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration",
      image: hands,
      alt: "hands",
      description: [
        "Microsoft Access",
        "Microsoft Word",
        "Microsoft PowerPoint",
        "Our experts are ready to discuss your integration needs",
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
