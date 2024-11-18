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
      title: "Online",
      link: "/access-online",
      image: project1,
      description: [
        "Need an Access database setup to use with Office 365, SharePoint or Azure?",
        "Our experts have several techniques and clever solutions to achieve this.",
      ],
    },
    {
      title: "Help and Training",
      link: "/access-support",
      image: project2,
      description: [
        "Have a database but nobody to support it?",
        "Do you need experts to help with changes or additions?",
        "We can support your existing database.",
      ],
    },
    {
      title: "Upgrades and Conversions",
      link: "/upgrades-and-migration",
      image: project3,
      description: [
        "Have a database that needs upgrading or is failing after upgrading?",
        "Have a database that needs to be converted from or to another format?",
      ],
    },
    {
      title: "is it right for you?",
      link: "/is-access-right-for-your-company",
      image: project4,
      description: [
        "Need a database solution with Access, SQL Server, Visual Studio (C#, VB, ASP), Office 365, SharePoint and/or Azure?",
      ],
    },
  ];

  return (
    <div className={styles.solutions}>
      <div className={styles.title}>
        <div>
          <p>No Problems</p>
        </div>
        <h2>Only Solutions</h2>
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
                    <span>Access</span>
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
