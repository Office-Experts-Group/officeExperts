import React from "react";
import Link from "next/link";

import styles from "../../../../styles/solutionsCarousel.module.css";

import keyboard from "../../../../public/350x260/keyboard.webp";
import coder from "../../../../public/350x260/coder.webp";
import dashboard from "../../../../public/350x260/dashboard.webp";
import graph from "../../../../public/350x260/graph.webp";
import desk from "../../../../public/350x260/desk.webp";
import magnify from "../../../../public/350x260/magnify.webp";
import code from "../../../../public/350x260/code.webp";
import hands from "../../../../public/350x260/hands.webp";
import scrabble from "../../../../public/350x260/scrabble.webp";
import laptop from "../../../../public/350x260/laptop.webp";
import graph2 from "../../../../public/350x260/graph2.webp";
import automation from "../../../../public/350x260/automation.webp";

const SolutionsCarousel = () => {
  const solutionsData = [
    {
      title: "Corporate Identity",
      link: "/corporate-identity",
      image: keyboard,
      description: [
        "Corporate identity protection",
        "Let users concentrate on content, not design",
        "Corporate styles ensure consistent formatting across all document pages",
      ],
    },
    {
      title: "VBA & Macro Development",
      link: "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development",
      image: coder,
      description: [
        "Data import/export",
        "Data parsing and processing",
        "Data formatting automation",
        "Automated data manipulation solutions",
        "CSV, XML, SQL, JSON, etc",
      ],
    },
    {
      title: "Government Departments",
      link: "/government-departments",
      image: dashboard,
      description: [
        "Create accessible templates and documents",
        "Users can create sub templates from master templates",
        "Protect branding",
        "Create reports inhouse",
      ],
    },
    {
      title: "Companies and Organisations",
      link: "/companies-and-organisations",
      image: graph,
      description: [
        "Protect and control Corporate Identity",
        "Save $$ by creating Reports and all documents inhouse in a controlled environment",
        "Users cannot stray from the Corporate Identity",
      ],
    },
    {
      title: "Remove Repetition and Increase Productivity",
      link: "/remove-repetition-and-increase-productivity",
      image: automation,
      description: [
        "Let users focus on content, not design",
        "Users add prebuilt elements with one click",
        "Enter key information once and auto populate it throughout the content",
      ],
    },
    {
      title: "Popup Forms",
      link: "/popup-forms",
      image: magnify,
      description: [
        "With easy to use popup forms your staff can enter data efficiently with validated and protected document integrity.",
      ],
    },
    {
      title: "Fill In Forms",
      link: "/fill-in-forms",
      image: code,
      description: [
        "Step-by-step fill in forms for easy data entry by your staff or clients.",
        "Drop selection lists and check boxes.",
        "Protect content from editing.",
      ],
    },
    {
      title: "Upgrading Word To 2016",
      link: "/upgrades-and-migration",
      image: hands,
      description: [
        "Pagination issues solved.",
        "Table issues solved.",
        "Image issues solved.",
        "Macro issues solved.",
      ],
    },
    {
      title: "Online Solutions",
      link: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
      image: scrabble,
      description: [
        "Need your Office document(s) online or connected to a database?",
        "TNeed help with Office 365 or SharePoint?",
      ],
    },
    {
      title: "Convert Adobe To Word",
      link: "/word-template-conversions",
      image: laptop,
      description: [
        "InDesign, Illustrator, PDF or other documents and layouts created in professional, easy to use Word documents and templates.",
      ],
    },
    {
      title: "Custom Toolbars and Ribbons",
      link: "/custom-toolbars-and-ribbons",
      image: graph2,
      description: [
        "Automate features that you use daily.",
        "Buttons for Landscape pages, A3 pages, Covers & Chapter Breaks, paragraphs of common text.",
      ],
    },
    {
      title: "Help and Training",
      link: "/training",
      image: desk,
      description: [
        "We can train your staff to use Word efficiently.",
        "On call support via screen sharing – don’t waste time pulling your hair out, get the answers fast (fees apply).",
        "Video and PDF tutorials.",
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
