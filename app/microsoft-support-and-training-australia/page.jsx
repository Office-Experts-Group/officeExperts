import React from "react";
import Image from "next/image";
import Link from "next/link";

import ServiceHero from "../../components/ServiceHero";
import Promo from "../../components/Promo";
import Contact from "../../components/Contact";
import ExpertsAwait from "../../components/ExpertsAwait";

import styles from "../../styles/supportTrainingHub.module.css";

import australia from "../../public/pageHeros/australia.webp";
import australiaMob from "../../public/pageHeros/mob/australiaMob.webp";

// Import location mobile images
import brisbaneMob from "../../public/pageHeros/mob/brisbaneMob.webp";
import sydneyMob from "../../public/pageHeros/mob/sydneyMob.webp";
import melbourneMob from "../../public/pageHeros/mob/melbourneMob.webp";
import perthMob from "../../public/pageHeros/mob/perthMob.webp";
import adelaideMob from "../../public/pageHeros/mob/adelaideMob.webp";
import canberraMob from "../../public/pageHeros/mob/canberraMob.webp";
import goldCoastMob from "../../public/pageHeros/mob/goldCoastMob.webp";
import darwinMob from "../../public/pageHeros/mob/darwinMob.webp";
import northernRiversMob from "../../public/pageHeros/mob/northernRiversMob.webp";
import wollongongMob from "../../public/pageHeros/mob/wollongongMob.webp";
import richmondMob from "../../public/pageHeros/mob/richmondMob.webp";
import centralCoastMob from "../../public/pageHeros/mob/centralCoastMob.webp";

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
        "https://www.officeexperts.com.au/microsoft-support-and-training-australia",
      url: "https://www.officeexperts.com.au/microsoft-support-and-training-australia",
      name: "Microsoft Support and Training Australia | Office Experts Group",
      description:
        "Professional Microsoft support and training services across Australia. Our local experts provide customised training, technical support and troubleshooting.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2025-03-14T00:00:00+00:00",
      dateModified: "2025-02-29T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/microsoft-support-and-training-australia#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/microsoft-support-and-training-australia",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/microsoft-support-and-training-australia#breadcrumb",
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
          name: "Microsoft Support and Training Australia",
        },
      ],
    },
  ],
};

// Location data for the cards
const locationData = [
  {
    name: "Sydney",
    image: sydneyMob,
    alt: "Sydney cityscape",
    description:
      "Comprehensive Microsoft support and training services for Australia's largest business hub, tailored to meet the unique needs of Sydney companies.",
    url: "/microsoft-support-and-training-sydney",
  },
  {
    name: "Melbourne",
    image: melbourneMob,
    alt: "Melbourne cityscape",
    description:
      "Specialised Microsoft support and customised training programs for Melbourne's diverse business community, delivered by local experts.",
    url: "/microsoft-support-and-training-melbourne",
  },
  {
    name: "Adelaide",
    image: adelaideMob,
    alt: "Adelaide city view",
    description:
      "Dedicated Microsoft support and training specialists serving South Australian businesses with customised solutions and local expertise.",
    url: "/microsoft-support-and-training-adelaide",
  },
  {
    name: "Brisbane",
    image: brisbaneMob,
    alt: "Brisbane river and skyline",
    description:
      "Expert Microsoft support and training for businesses throughout Southeast Queensland, with personalised solutions and on-site assistance.",
    url: "/microsoft-support-and-training-brisbane",
  },
  {
    name: "Canberra",
    image: canberraMob,
    alt: "Canberra parliament house",
    description:
      "Specialised Microsoft support and training for government departments and Canberra businesses, with a focus on security and compliance.",
    url: "/microsoft-support-and-training-canberra",
  },
  {
    name: "Central Coast, NSW",
    image: centralCoastMob,
    alt: "Central Coast, NSW",
    description:
      "Local experts for Central Coast businesses, with solutions tailored to your particular needs.",
    url: "/microsoft-support-and-training-central-coast-nsw",
  },
  {
    name: "Darwin",
    image: darwinMob,
    alt: "Darwin harbor",
    description:
      "Reliable Microsoft support and training for Northern Territory businesses, with solutions adapted to Darwin's unique business environment.",
    url: "/microsoft-support-and-training-darwin",
  },
  {
    name: "Gold Coast",
    image: goldCoastMob,
    alt: "Gold Coast skyline",
    description:
      "Professional Microsoft support and training solutions for Gold Coast businesses, combining technical expertise with responsive local service.",
    url: "/microsoft-support-and-training-gold-coast",
  },
  {
    name: "Northern Rivers, NSW",
    image: northernRiversMob,
    alt: "Northern Rivers region",
    description:
      "Dedicated Microsoft support and training for Northern Rivers businesses, with a focus on regional needs and personalised service.",
    url: "/microsoft-support-and-training-northern-rivers-nsw",
  },
  {
    name: "Perth",
    image: perthMob,
    alt: "Perth skyline",
    description:
      "Reliable Microsoft support and expert training services for Western Australian businesses, with solutions designed for Perth's unique market.",
    url: "/microsoft-support-and-training-perth",
  },
  {
    name: "Richmond",
    image: richmondMob,
    alt: "Richmond area",
    description:
      "Specialised Microsoft support and training for Richmond businesses, with solutions tailored to local needs and priorities.",
    url: "/microsoft-support-and-training-richmond",
  },
  {
    name: "Wollongong",
    image: wollongongMob,
    alt: "Wollongong coastline",
    description:
      "Expert Microsoft support and training services for Illawarra businesses, delivered by local specialists who understand Wollongong's market.",
    url: "/microsoft-support-and-training-wollongong",
  },
];

const MicrosoftSupportTrainingAustralia = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        <ServiceHero
          title="Microsoft Support and Training Australia"
          desktopImage={australia}
          mobileImage={australiaMob}
          altDesk="Australia map"
          altMob="Person holding Australian Flag"
        />

        <section className={styles.hubPage}>
          <section className={styles.pageHeader}>
            <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
              <h2 className={styles.leadText}>
                Professional Microsoft Support and Training Services Across
                Australia
              </h2>
              <p className={styles.subText}>
                With 25+ years of industry experience, our expert consultants
                provide Specialised Microsoft support and training services
                tailored to your business needs. Choose your location to
                discover how our local team can help you maximise your Microsoft
                technology investment.
              </p>
            </AnimateOnScroll>
          </section>

          <section className={styles.locationGrid}>
            {locationData.map((location, index) => (
              <AnimateOnScroll
                key={location.name}
                animation="fade-up"
                duration={0.8}
                delay={0.1 * index}
              >
                <Link href={location.url} className={styles.locationCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={location.image}
                      alt={location.alt}
                      className={styles.locationImage}
                      width={400}
                      height={300}
                    />
                    <div className={styles.overlay}>
                      <span>Learn More</span>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{location.name}</h3>
                    <p>{location.description}</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </section>

          <Promo
            h2={"Australia's Trusted Microsoft Solutions Partner"}
            p={
              "Whether you need remote troubleshooting, custom solution development, or personalised training, our nationwide network of Microsoft experts delivers exceptional service tailored to your business needs."
            }
          />

          <section className={styles.whyChooseUs}>
            <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
              <h2>Why Choose Our Microsoft Support and Training Services?</h2>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="2em"
                      width="2em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
                    </svg>
                  </div>
                  <h3>Australia-Wide Coverage</h3>
                  <p>
                    With consultants in major cities and regional areas, we
                    provide comprehensive support across Australia, combining
                    local expertise with nationwide resources.
                  </p>
                </div>

                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="2em"
                      width="2em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
                    </svg>
                  </div>
                  <h3>Customised Solutions</h3>
                  <p>
                    We design tailored support packages and training programs
                    that address your specific business challenges and goals,
                    ensuring maximum ROI on your entire Microsoft Suite.
                  </p>
                </div>

                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="2em"
                      width="2em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                    </svg>
                  </div>
                  <h3>Flexible Delivery Options</h3>
                  <p>
                    From on-site support visits to remote troubleshooting and
                    virtual training sessions, we adapt our service delivery to
                    suit your schedule and preferences.
                  </p>
                </div>

                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="2em"
                      width="2em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                    </svg>
                  </div>
                  <h3>Certified Microsoft Experts</h3>
                  <p>
                    Our team of certified Microsoft professionals combines
                    technical expertise with practical business experience to
                    solve complex challenges and optimise your technology
                    ecosystem.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </section>

          <div className={styles.experts}>
            <ExpertsAwait />
          </div>

          <section className={styles.conclusion}>
            <h2>Nationwide Excellence, Local Expertise</h2>
            <p>
              For over 25 years, Office Experts Group has delivered exceptional
              Microsoft support and training services to businesses across
              Australia. Our combination of nationwide resources and local
              expertise ensures that no matter where you're located, you'll
              receive personalised, high-quality service tailored to your
              specific needs.
            </p>
            <p>
              From immediate troubleshooting assistance to comprehensive
              training programs, our certified Microsoft specialists help you
              maximise productivity, streamline operations, and achieve your
              business goals through effective technology utilisation. Explore
              our location-specific services above to connect with your local
              team today.
            </p>
          </section>

          <Contact />
        </section>
      </main>
    </>
  );
};

export default MicrosoftSupportTrainingAustralia;
