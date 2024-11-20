import React from "react";
import Link from "next/link";

import styles from "../../../styles/solutions.module.css";

import project1 from "../../../public/project-img-1.webp";
import project2 from "../../../public/project-img-2.webp";
import project3 from "../../../public/project-img-3.webp";
import project4 from "../../../public/project-img-4.webp";

const Solutions = () => {
  const solutionsData = [
    {
      title: "Excel",
      link: "/services/microsoft-excel",
      image: project1,
      description: [
        "Spreadsheets and Add-ins",
        "Process Data and Automation",
        "Develop VBA macros",
        "Pivot tables, reports, charts",
        "Forms/formulas/functions",
      ],
    },
    {
      title: "Access",
      link: "/services/microsoft-access",
      image: project2,
      description: [
        "Create and design databases",
        "Automation and upgrades",
        "Review code and fix defects",
        "Integrate financial systems",
      ],
    },
    {
      title: "Power Platform",
      link: "https://www.powerplatformexperts.com.au/",
      image: project3,
      description: [
        "Web enabled Dashboard solutions which auto-refresh from your live databases.",
        "Power BI Business Intelligence solutions.",
        "Effortlessly drill down into your data.",
        "Graphs, charts and other visual solutions to easily monitor the data that matters.",
      ],
    },
    {
      title: "SharePoint",
      link: "/services/by-business-solution/online-solutions",
      image: project4,
      description: [
        "SharePoint solution design",
        "Web-based collaboration",
        "Microsoft Office integration",
        "Document management",
        "Document storage",
        "Online documents",
      ],
    },
    {
      title: "Azure",
      link: "/services/by-business-solution/cloud-based-solutions-with-azure",
      image: project1,
      description: [
        "We can cloud and web enable your documents, workbooks and databases with Azure.",
      ],
    },
    {
      title: "Word",
      link: "/services/microsoft-word",
      image: project2,
      description: [
        "Format and design documents",
        "Mail merge",
        "Template creation",
        "Macro development",
      ],
    },
    {
      title: "PowerPoint",
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
      title: "Office",
      link: "/services/microsoft-office",
      image: project4,
      description: [
        "Professional documents, spreadsheets, databases and presentations",
        "Support and custom coding",
      ],
    },
    {
      title: "SQL Server",
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
      title: ".NET",
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
      title: "Office 365",
      link: "/services/microsoft-office-365",
      image: project3,
      description: [
        "Support and managed services: Setup, implementation, custom development, migration, automation, cloud backups",
      ],
    },
    {
      title: "Outlook",
      link: "/services/by-business-solution/custom-office-solutions",
      image: project4,
      description: [
        "Email automation from Office apps",
        "VBA development",
        "Data mining",
        "Need Outlook expertise?",
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
