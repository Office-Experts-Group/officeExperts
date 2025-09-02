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
            <h2 style={{ fontSize: "2rem" }}>
              Harnessing Microsoft 365 Workflows
            </h2>
          </div>
          <p>
            Every team faces different obstacles, whether it's managing
            information in the field, closing deals on the move, providing
            secure access to sensitive data, or coordinating operations at
            scale. The use cases outlined below represent just a handful of
            practical scenarios where organisations are already seeing the
            impact of tailored integrations.
          </p>
        </AnimateOnScroll>

        <div className={styles.useCases}>
          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.flexHolder}>
              <Image
                src={construction}
                width={150}
                height={150}
                alt="construction worker"
              />
              <div>
                <h3>Construction & Field Services</h3>
                <p>
                  Equip field workers with mobile apps that sync with SharePoint
                  even when offline. Submit site reports, access safety
                  documents, and update task lists without needing a desktop or
                  stable internet connection.
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
                <h3>Sales & Business Development</h3>
                <p>
                  Enable sales teams to access CRM data, client files, and
                  meeting notes on the go. Use PWAs to streamline lead tracking,
                  proposal generation, and follow-ups—all integrated with
                  Outlook and Teams.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.flexHolder}>
              <Image src={doctor} width={150} height={150} alt="doctor" />
              <div>
                <h3>Healthcare & Community Services</h3>
                <p>
                  Provide mobile access to patient records, appointment
                  schedules, and compliance forms. Ensure secure, role-based
                  access using Azure AD, with offline capabilities for remote
                  visits.
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
                <h3>Executives & Decision Makers</h3>
                <p>
                  Deliver real-time dashboards and KPIs through responsive
                  portals that pull live data from Microsoft 365. Make informed
                  decisions from any device, anywhere.
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
                <h3>Corporate Operations & HR</h3>
                <p>
                  Streamline onboarding, leave requests, and internal
                  communications with custom portals and mobile apps. Automate
                  workflows and centralise access to documents and forms.
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
