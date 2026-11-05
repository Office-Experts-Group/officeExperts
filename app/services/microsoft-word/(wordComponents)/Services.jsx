// app/services/microsoft-word/(components)/Services.jsx

import React from "react";

import TemplateCards from "./TemplateCards";

import styles from "@/styles/servicesWord.module.scss";

import page1 from "@/public/books/community/page1.webp";
import page2 from "@/public/books/community/page2.webp";
import page3 from "@/public/books/community/page3.webp";
import page4 from "@/public/books/community/page4.webp";
import page5 from "@/public/books/community/page5.webp";
import page6 from "@/public/books/community/page6.webp";
import page7 from "@/public/books/community/page7.webp";
import page8 from "@/public/books/community/page8.webp";
import page9 from "@/public/books/community/page9.webp";

const Services = () => {
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
    <section className={styles.services}>
      <div className={styles.content}>
        <div className={styles.subBox}>
          <p>Experts in the field</p>
        </div>
        <h2>
          Microsoft Word <br></br>
          <span className={styles.accent}>Designers and Consultants</span>
        </h2>
        <p className={styles.lead}>
          At Office Experts, we know Microsoft Word packs serious power under
          the hood, with powerful features extending beyond surface-level
          styling tools such as fonts, themes, and layouts.
        </p>
        <p>
          Properly engineered Word templates function as dynamic frameworks that
          utilise advanced elements to enforce document consistency with
          automated formatting, and maintain your brand identity.
        </p>
        <p>
          Our Word team create solutions that enforce consistency across your
          organisation. With our custom automation we create simpler mechanisms
          to generate documents, handle complex logic, and adapt to real-world
          workflows. From reports to proposals or legal docs, our templates
          quietly run the show so teams stay efficient and on-brand without
          barely lifting a finger.
        </p>
      </div>
      <div className={styles.cardHolder}>
        <TemplateCards images={images} />
      </div>
    </section>
  );
};

export default Services;
