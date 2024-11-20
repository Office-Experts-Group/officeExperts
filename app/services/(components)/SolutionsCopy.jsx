import React from "react";
import Link from "next/link";

import styles from "../../../styles/solutions.module.css";

import project2 from "../../../public/project-img-2.webp";
import project4 from "../../../public/project-img-4.webp";

const Solutions = () => {
  const solutionsData = [
    {
      title: "VBScript",
      link: "/services/microsoft-vbscript",
      image: project2,
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
      title: "Publisher",
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
  ];

  return (
    <div className={styles.solutionsCopy}>
      <div className={styles.container}>
        {solutionsData.map((solution, index) => (
          <div className={styles.cardWrapper} key={index}>
            <div className={styles.description}>
              {solution.description.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
            <Link href={solution.link}>
              <div
                className={`${styles.card} ${styles[`card${index + 1}`]}`}
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
  );
};

export default Solutions;
