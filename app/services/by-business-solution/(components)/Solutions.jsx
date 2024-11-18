import React from "react";
import Link from "next/link";

import styles from "../../../../styles/solutions.module.css";

import project1 from "../../../../public/project-img-1.webp";
import project2 from "../../../../public/project-img-2.webp";
import project3 from "../../../../public/project-img-3.webp";
import project4 from "../../../../public/project-img-4.webp";

const Solutions = () => {
  const solutionsData = [
    {
      title: "VBA & Macro Development",
      link: "/services/by-business-solution/vba-macro-development",
      image: project1,
      description: [
        "Need a VBA programmer to automate tasks or extend Office functionality?",
      ],
    },
    {
      title: "Custom Office Solutions",
      link: "/services/by-business-solution/custom-office-solutions",
      image: project2,
      description: [
        "Need our experts with over 15 years experience to help you with Excel, Access, Word, Outlook or PowerPoint?",
      ],
    },
    {
      title: "Database Solutions",
      link: "/services/by-business-solution/database-development-and-solutions",
      image: project3,
      description: [
        "Our experts can build reliable and cost effective database solutions in most Microsoft technologies.",
      ],
    },
    {
      title: "3rd Party App Office Integration",
      link: "/services/by-business-solution/3rd-party-application-or-office-integration",
      image: project4,
      description: [
        "Want to link an Office app, CRM, accounting package, data files or 3rd party product to Office?",
        "Want to extend a 3rd party product’s functionality with Office?",
      ],
    },
  ];

  return (
    <div className={styles.solutions}>
      <div className={styles.title}>
        <h2>No Problems... Only Solutions</h2>
      </div>
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
  );
};

export default Solutions;
