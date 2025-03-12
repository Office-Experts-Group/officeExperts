import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../../styles/solutionsCarousel.module.css";

import magnify from "../../../../public/350x260/magnify.webp";
import handShake from "../../../../public/350x260/handShake.webp";
import graph from "../../../../public/350x260/graph.webp";
import desk from "../../../../public/350x260/desk.webp";

const SolutionsCarousel = () => {
  const solutionsData = [
    {
      title: "Power Apps",
      link: "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
      image: magnify,
      alt: "magnifying glass on graph",
      description: [
        "Custom business apps such as mobile apps and full database apps",
        "Canvas Apps: Custom user interface, Power FX, connected to any data source",
        "Model Driven Apps: From your data model use pre-built components to view/edit/create/search your business data",
      ],
    },
    {
      title: "Power Automate",
      link: "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      image: handShake,
      alt: "handshake",
      description: [
        "Apps to guide users through business process flows from start to finish, along with reporting and analytics.",
        "Robotic Process Automation to record and replicate mouse clicks for legacy system integration.",
        "Process Mining: Analyze and optimise business processes.",
      ],
    },
    {
      title: "Power BI",
      link: "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
      image: graph,
      alt: "graph",
      description: [
        "Web enabled Dashboard solutions which auto-refresh from your live databases.",
        "Power BI Business Intelligence solutions.",
        "Effortlessly drill down into your data.",
        "Graphs, charts and other visual solutions to easily monitor the data that matters.",
      ],
    },
    {
      title: "Power Pages",
      link: "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages",
      image: desk,
      alt: "desk in an office",
      description: [
        "Low-code solutions",
        "Rapid design and development of custom business solutions",
        "Sortable, searchable business data tables",
        "Feature rich templates to deliver business data forms, lists and rich content",
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
                      <span>Power Platform</span>
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
