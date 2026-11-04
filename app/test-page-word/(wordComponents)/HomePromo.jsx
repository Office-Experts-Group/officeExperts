import React from "react";

import TemplateCards from "@/components/TemplateCards";

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

const HomePromo = () => {
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
    <section className={styles.homePromo}>
      <TemplateCards images={images} />

      <div className={styles.content}>
        <h2>Master Your Documents</h2>
        <p>
          Discover how our Microsoft Word solutions can protect your brand,
          boost efficiency, and deliver consistent, professional documents with
          ease.
        </p>
      </div>
    </section>
  );
};

export default HomePromo;
