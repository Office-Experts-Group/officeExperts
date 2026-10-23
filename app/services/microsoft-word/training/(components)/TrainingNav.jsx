import React from "react";
import DocumentSvg from "../(svgs)/DocumentSvg";
import TrainingSvg from "../(svgs)/TrainingSvg";
import SupportSvg from "../(svgs)/SupportSvg";
import EfficiencySvg from "../(svgs)/EfficiencySvg";
import styles from "../../../styles/trainingNav.module.css";

const cards = [
  {
    Icon: SupportSvg,
    eyebrow: "We're here for you",
    title: "Get in Touch",
    href: "#contact",
  },
  {
    Icon: DocumentSvg,
    eyebrow: "Assistance",
    title: "Learn More",
    href: "#word-assistance",
  },
  {
    Icon: TrainingSvg,
    eyebrow: "Training",
    title: "Microsoft Word",
    href: "#word-training",
  },
  {
    Icon: EfficiencySvg,
    eyebrow: "Customised",
    title: "Document Solutions",
    href: "#document-solutions",
  },
];

const TrainingNav = () => {
  return (
    <section className={styles.nav}>
      <div className={styles.inner}>
        {cards.map(({ Icon, eyebrow, title, href }) => (
          <a key={href} href={href} className={styles.card}>
            <div className={styles.iconWrap}>
              <Icon width={36} height={36} className={styles.icon} />
            </div>
            <div className={styles.text}>
              <p className={styles.eyebrow}>{eyebrow}</p>
              <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.arrow}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TrainingNav;
