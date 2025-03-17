import React from "react";
import Image from "next/image";

import ServiceHero from "../../components/ServiceHero";
import Promo from "../../components/Promo";
import Contact from "../../components/Contact";
import ExpertsAwait from "../../components/ExpertsAwait";
import CTASupport from "../(components)/CTASupport";

import styles from "../../styles/supportPage.module.css";

import darwin from "../../public/pageHeros/darwin.webp";
import darwinMob from "../../public/pageHeros/mob/darwinMob.webp";
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
        "https://www.officeexperts.com.au/microsoft-support-and-training-darwin",
      url: "https://www.officeexperts.com.au/microsoft-support-and-training-darwin",
      name: "Microsoft Support and Training Darwin | Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2025-03-13T00:00:00+00:00",
      dateModified: "2025-03-13T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/microsoft-support-and-training-darwin#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/microsoft-support-and-training-darwin",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/microsoft-support-and-training-darwin#breadcrumb",
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
          name: "Microsoft Support and Training Darwin",
        },
      ],
    },
  ],
};

const DarwinSupportTraining = () => {
  const supportServices = [
    "Immediate remote troubleshooting for critical issues",
    "Routine maintenance and system health checks",
    "Custom solution development and debugging",
    "Office 365 setup, migration and administration",
    "Integration between Microsoft applications",
    "Security and compliance implementation",
    "Data recovery and system restoration",
  ];

  const trainingServices = [
    "Personalised one-on-one training sessions",
    "Small group workshops for teams",
    "Department-specific training modules",
    "Executive-level advanced features training",
    "New feature adoption training for upgrades",
    "Custom documentation and training materials",
    "Ongoing learning and support programs",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        <ServiceHero
          title="Microsoft Support and Training Darwin"
          desktopImage={darwin}
          mobileImage={darwinMob}
          altDesk="Darwin"
          altMob="Darwin"
        />
        <section className={styles.supportPage}>
          <section className={styles.pageHeader}>
            <h2 className={styles.leadText}>
              Professional On-site, Online or Remote Access Microsoft support
              and Training with local Darwin Experts.
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
                <h2>Microsoft Support Services</h2>
                <p>
                  Our Darwin Microsoft support team provides comprehensive
                  technical assistance for businesses throughout Southeast
                  Queensland. Whether you're facing challenges with Office 365
                  or Word templates, encountering Excel formula errors, or need
                  help troubleshooting complex Access database issues, our local
                  Darwin support team deliver prompt, expert solutions.
                </p>

                <div className={styles.points}>
                  {supportServices.map((text, index) => (
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
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </section>

          <Promo
            h2={"Darwin's Trusted Microsoft Solutions Team"}
            p={
              "With 25+ years of experience, our local specialists deliver the support and training your business needs to thrive with Microsoft technologies."
            }
          />

          <section className={`${styles.pageSegment} ${styles.lastSegment}`}>
            <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
              <div className={styles.contentWrapper}>
                <h2>Professional Microsoft Training</h2>
                <p>
                  Our customised Microsoft training programs help Darwin
                  businesses maximise productivity with their Microsoft software
                  investments. We deliver tailored training sessions designed
                  for your specific business needs, conducted on-site at your
                  Darwin location or via remote sessions.
                </p>

                <div className={styles.points}>
                  {trainingServices.map((text, index) => (
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
                      <p>{text}</p>
                    </div>
                  ))}
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
            <h2>Why Choose Local Microsoft Darwin Support and Training?</h2>
            <p>
              Working with our Darwin-based Microsoft specialists ensures you
              receive responsive, personalised service that understands local
              business needs. Our consultants are familiar with the unique
              requirements of Northern Terrritories businesses and can provide
              both scheduled on-site visits and rapid remote assistance when
              urgent issues arise. Our combined support and training approach
              has helped hundreds of businesses over the last 25 years.
            </p>
          </section>

          <Contact />
        </section>
      </main>
    </>
  );
};

export default DarwinSupportTraining;
