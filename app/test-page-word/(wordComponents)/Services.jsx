// app/services/microsoft-word/(components)/Services.jsx

import React from "react";

import styles from "@/styles/servicesWord.module.scss";

import WatchDemo from "./WatchDemo";

// Video opened by the "Watch a demo" button (swap for the real file path)
const DEMO_VIDEO_SRC = "/videos/word-template-solutions.mp4";

const Services = () => {
  return (
    <section className={styles.services}>
      <WatchDemo src={DEMO_VIDEO_SRC} />
      <div className={styles.content}>
        <div className={styles.subBox}>
          <p>Experts in the field</p>
        </div>
        <h2>
          Microsoft Word <br></br>
          <span className={styles.accent}>Designers and Consultants</span>
        </h2>
        <p className={styles.lead}>
          At Word Experts, we know Microsoft Word packs serious power under the
          hood, with powerful features extending beyond surface-level styling
          tools such as fonts, themes, and layouts.
        </p>
        <p>
          Properly engineered Word templates function as dynamic frameworks that
          utilise advanced elements to enforce document consistency with
          automated formatting, and maintain your brand identity.
        </p>
        <p>
          Our solutions enforce consistency across your organisation by cutting
          down on manual work and human error. With our custom automation we
          push Word to its limits by creating simpler mechanisms to generate
          documents, handle complex logic, and adapt to real-world workflows.
          Whether you're producing reports, proposals, or legal docs, our
          templates quietly run the show so teams stay efficient and on-brand
          without barely lifting a finger.
        </p>
      </div>
    </section>
  );
};

export default Services;
