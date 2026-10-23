import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import construction from "../../../public/construction.webp";
import salesperson from "../../../public/salesperson.webp";
import doctor from "../../../public/doctor.webp";
import businessman from "../../../public/businessman.webp";
import corporate from "../../../public/corporate.webp";

const UseCases = () => {
  return (
    <section className={styles.pageSegment} style={{ padding: "6rem 10vw" }}>
      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2 style={{ fontSize: "2rem", textAlign: "center" }}>
              Real-World Use Cases for Word API Development
            </h2>
          </div>
          <p style={{ maxWidth: "100%", textAlign: "center" }}>
            The scope of what can be achieved with Word API development is
            extensive. Whether your goal is to cut down repetitive tasks,
            connect Word to your existing business systems, or create new ways
            for your team to work more effectively, integrations can be tailored
            to deliver real impact. Each project is designed around your
            specific requirements, so the solution fits seamlessly into the way
            your organisation already works.
          </p>
        </AnimateOnScroll>

        <div className={styles.useCases}>
          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.flexHolder}>
              <Image src={doctor} width={150} height={150} alt="doctor" />
              <div>
                <h3>Law Firms & Legal Services</h3>
                <p>
                  Automatically create contracts with the correct clauses
                  pre-filled from a central database. Streamline legal document
                  creation while ensuring accuracy and consistency across all
                  client work.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.flexHolder}>
              <Image
                src={corporate}
                width={150}
                height={150}
                alt="corporate people"
              />
              <div>
                <h3>HR Teams & Human Resources</h3>
                <p>
                  Standardise and accelerate employment letter creation using
                  Word templates linked to employee records. Reduce manual work
                  and ensure consistent formatting across all HR communications.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.flexHolder}>
              <Image
                src={businessman}
                width={150}
                height={150}
                alt="businessman"
              />
              <div>
                <h3>Managers & Business Intelligence</h3>
                <p>
                  Embed live Power BI charts into Word reports, keeping business
                  insights up to date without manual refreshes. Transform static
                  documents into dynamic, data-driven reports.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.flexHolder}>
              <Image
                src={salesperson}
                width={150}
                height={150}
                alt="salesperson"
              />
              <div>
                <h3>Sales & Client Management</h3>
                <p>
                  Generate proposals and client documents automatically from CRM
                  data. Personalise each document while maintaining brand
                  consistency and reducing time-to-delivery.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.flexHolder}>
              <Image
                src={construction}
                width={150}
                height={150}
                alt="construction worker"
              />
              <div>
                <h3>Project Management & Operations</h3>
                <p>
                  Create project reports, status updates, and documentation that
                  pulls live data from project management systems. Keep
                  stakeholders informed with automatically updated Word
                  documents.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
