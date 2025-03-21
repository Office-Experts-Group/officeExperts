import React from "react";
import Image from "next/image";

import ServiceHero from "../../components/ServiceHero";
import Promo from "../../components/Promo";
import Contact from "../../components/Contact";
import ExpertsAwait from "../../components/ExpertsAwait";
import CTASupport from "../(components)/CTASupport";

import styles from "../../styles/supportPage.module.css";

import perth from "../../public/pageHeros/perth.webp";
import perthMob from "../../public/pageHeros/mob/perthMob.webp";
import askExpert from "../../public/askExpert540x480.webp";
import support from "../../public/support.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import AnimateOnScroll from "../../components/AnimateOnScroll";

// Schema data for the page
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/microsoft-support-and-training-perth",
      url: "https://www.officeexperts.com.au/microsoft-support-and-training-perth",
      name: "Microsoft Support and Training Perth | Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2025-03-13T00:00:00+00:00",
      dateModified: "2025-03-13T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/microsoft-support-and-training-perth#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/microsoft-support-and-training-perth",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/microsoft-support-and-training-perth#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://www.officeexperts.com.au/locations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Support and Training Perth",
        },
      ],
    },
  ],
};

const PerthSupportTraining = () => {
  const supportServices = [
    "Immediate Remote Troubleshooting – Resolving critical Excel crashes, recovering corrupted Word documents or rectifying Access database errors.",
    "Routine Maintenance & System Health Checks – Ensuring your applications and tools run efficiently with proactive monitoring and reviews.",
    "Custom Solution Debugging – Fixing errors and improving functionality in custom-built Excel models, Access databases, Word documents or Power App solutions.",
    "Office 365 Setup & Administration – Undergoing user management, updating security configurations and migrating data from legacy systems.",
    "Microsoft Application Integration – Automating workflows between Excel, Outlook, SharePoint, Power Automate and other Microsoft products.",
    "Security & Compliance Implementation – Protecting sensitive data with appropriate permission controls, encryption and audit tracking functionality.",
    "Data Recovery & System Restoration – Recovering lost Excel spreadsheets, restoring Access database backups and repairing Power Automate flows.",
  ];

  const trainingServices = [
    "Excel – Running through advanced formulas, Power Query automation, VBA macros, interactive dashboards and financial modelling.",
    "Word – Efficient document formatting, automated templates, custom formatting ribbons and mail merge functionality for bulk communications.",
    "Access – Database structuring, query optimization and migrating legacy Access applications to the cloud.",
    "Power Platform – Creating Power Apps for internal business workflows, automating tasks with Power Automate and visualising data in Power BI.",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        <ServiceHero
          title="Microsoft Office Support & Personalised Training – Perth"
          desktopImage={perth}
          mobileImage={perthMob}
          altDesk="Perth"
          altMob="Perth"
        />
        <section className={styles.supportPage}>
          <section className={styles.pageHeader}>
            <h2 className={styles.leadText}>
              At Office Experts Group, we specialise in expert support and
              tailored training for all Microsoft products including Excel,
              Word, Access and Microsoft's Power Platform. With over 25 years of
              industry experience, we help businesses of all sizes resolve
              issues, optimise workflows and gain deeper expertise in their
              Microsoft tools.
            </h2>
          </section>

          <section className={styles.pageSegment}>
            <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
              <div className={styles.imgWrapper}>
                <Image
                  src={askExpert}
                  alt="Man pulling out a card saying Ask an Expert"
                  width={540}
                  height={480}
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
              <div className={styles.contentWrapper}>
                <h2>Expert Microsoft Support Services</h2>
                <p>
                  We provide fast, reliable assistance to keep your Microsoft
                  Office environment and tools running smoothly. We offer both
                  on-demand troubleshooting and ongoing support, ensuring your
                  systems remain efficient, secure and optimised for business
                  operations. Examples of the types of services we offer
                  include:
                </p>

                <div className={styles.points}>
                  {supportServices.map((text, index) => {
                    const parts = text.split(" – ");
                    const title = parts[0];
                    const description =
                      parts.length > 1 ? parts.slice(1).join(" – ") : "";

                    return (
                      <div key={index} className={styles.point}>
                        <div className={styles.checkIcon}>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="1"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                          </svg>
                        </div>
                        <p>
                          <strong>{title}</strong> – {description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimateOnScroll>
          </section>

          <Promo
            h2={"Perth's Trusted Microsoft Solutions Team"}
            p={
              "With 25+ years of experience, our local specialists deliver the support and training your business needs to thrive with Microsoft technologies."
            }
          />

          <section className={`${styles.pageSegment} ${styles.lastSegment}`}>
            <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
              <div className={styles.contentWrapper}>
                <h2>Personalised Training for Your Business Needs</h2>
                <p>
                  Our customised Microsoft is targeted and hands-on, designed to
                  help you or your team master specific tools and solutions. We
                  provide practical, real-world sessions tailored to your
                  business needs. Our sessions can be delivered one-on-one or in
                  small teams, focusing on solving real challenges and enhancing
                  efficiency with the right Microsoft tools.
                </p>

                <div className={styles.points}>
                  {trainingServices.map((text, index) => {
                    const parts = text.split(" – ");
                    const title = parts[0];
                    const description =
                      parts.length > 1 ? parts.slice(1).join(" – ") : "";

                    return (
                      <div key={index} className={styles.point}>
                        <div className={styles.checkIcon}>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="1"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                          </svg>
                        </div>
                        <p>
                          <strong>{title}</strong> – {description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
              <div className={styles.imgWrapper}>
                <Image
                  src={support}
                  alt="Man in office supporting customer"
                  width={600}
                  height={400}
                />
              </div>
            </AnimateOnScroll>
          </section>

          <div className={styles.experts}>
            <ExpertsAwait />
          </div>

          <CTASupport />

          <section className={styles.conclusion}>
            <h2>Why Choose Local Microsoft Perth Support and Training?</h2>
            <p>
              Working with our Perth-based Microsoft specialists ensures you
              receive responsive, personalised service that understands local
              business needs. Our consultants are familiar with the unique
              requirements of Queensland businesses and can provide both
              scheduled on-site visits and rapid remote assistance when urgent
              issues arise. Our combined support and training approach has
              helped hundreds of businesses over the last 25 years.
            </p>
          </section>

          <Contact />
        </section>
      </main>
    </>
  );
};

export default PerthSupportTraining;
