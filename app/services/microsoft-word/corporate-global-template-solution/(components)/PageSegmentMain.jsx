// /services/microsoft-word/corporate-global-template-solution/(components)/PageSegmentMain.jsx
import React from "react";
import Link from "next/link";

import TemplateCards from "../../(wordComponents)/TemplateCards";

import styles from "@/styles/newPageSegment.module.scss";

import page1 from "@/public/books/community/page1.webp";
import page2 from "@/public/books/community/page2.webp";
import page3 from "@/public/books/community/page3.webp";
import page4 from "@/public/books/community/page4.webp";
import page5 from "@/public/books/community/page5.webp";
import page6 from "@/public/books/community/page6.webp";
import page7 from "@/public/books/community/page7.webp";
import page8 from "@/public/books/community/page8.webp";
import page9 from "@/public/books/community/page9.webp";

// Stats shown in the bar beneath the section
const STATS = [
  { value: "25+", label: "Years experience" },
  { value: "2500+", label: "Projects delivered" },
  { value: "Australia wide", label: "Support" },
];

const PageSegmentMain = () => {
  const images = [
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
  ];

  return (
    <>
      <div className={styles.lightHero}></div>
      <section className={styles.pageSegment} id="consistent-branding">
        <div className={styles.imgWrapper}>
          <TemplateCards images={images} />
        </div>

        <div className={styles.content}>
          <p>Advanced Corporate Template Solutions</p>
          <h1>
            Efficient and Consistent Branding for{" "}
            <span className={styles.accent}>Your Documents</span>
          </h1>
          <p>
            Office Experts Group have developed an advanced Corporate Word
            Template Solution to enable users to effectively and efficiently
            create corporate documents in house. These documents are created
            under a controlled environment, therefore only allowing formatting
            that is consistent to your branding guidelines.
          </p>
          <Link href="#contact" className={`btn ${styles.cta}`}>
            Enquire About Templates
          </Link>
          {/* Spans both columns of the section grid */}
          <ul className={styles.stats}>
            {STATS.map(({ value, label }) => (
              <li key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default PageSegmentMain;
