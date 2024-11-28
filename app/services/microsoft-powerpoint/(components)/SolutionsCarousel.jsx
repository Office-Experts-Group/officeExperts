import React from "react";
import Link from "next/link";

import styles from "../../../../styles/solutionsCarousel.module.css";

import project1 from "../../../../public/project-img-1.webp";
import project2 from "../../../../public/project-img-2.webp";
import project3 from "../../../../public/project-img-3.webp";
import project4 from "../../../../public/project-img-4.webp";

const SolutionsCarousel = () => {
  const solutionsData = [
    {
      title: "Custom Templates & Presentations",
      link: "/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
      image: project1,
      description: [
        "Create professional PowerPoint Templates with Master Slides.",
        "Meet your brand guidelines.",
        "Ensure consistency across your corporate presentations.",
      ],
    },
    {
      title: "Existing Presentation Redesign",
      link: "/services/microsoft-powerpoint/existing-presentation-redesign",
      image: project2,
      description: [
        "Transform existing presentations into professional templates that meet brand guidelines.",
        "Create Master Slides for easy presentation creation.",
      ],
    },
    {
      title: "Automate Presentations With VBA",
      link: "/services/microsoft-powerpoint/automate-presentations-with-vba",
      image: project3,
      description: [
        "Our PowerPoint experts can link your data directly to your PowerPoint Presentation, saving users precious time and ensuring accuracy.",
      ],
    },
    {
      title: "User Training and Assistance",
      link: "/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
      image: project4,
      description: [
        "Our PowerPoint experts can instruct users on the best ways to create presentations giving guidance and helpful hints.",
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
                      <span>Excel</span>
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
