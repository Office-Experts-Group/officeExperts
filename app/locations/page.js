import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationGroups from "./(components)/LocationGroups";
import Promo from "../../components/Promo";
import Contact from "../../components/Contact";

import australia from "../../public/pageHeros/australia.webp";
import australiaMob from "../../public/pageHeros/mob/australiaMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

// Import location images

import sydney from "../../public/pageHeros/sydney.webp";
import melbourne from "../../public/pageHeros/mob/melbourneMob.webp";
import brisbane from "../../public/pageHeros/mob/brisbaneMob.webp";
import perth from "../../public/pageHeros/mob/perthMob.webp";
import adelaide from "../../public/pageHeros/mob/adelaideMob.webp";
import canberra from "../../public/pageHeros/mob/canberraMob.webp";
import northernRivers from "../../public/pageHeros/mob/northernRiversMob.webp";
import wollongong from "../../public/pageHeros/mob/wollongongMob.webp";
import richmond from "../../public/pageHeros/mob/richmondMob.webp";
import darwin from "../../public/pageHeros/mob/darwinMob.webp";
import centralCoast from "../../public/pageHeros/mob/centralCoastMob.webp";
import goldCoast from "../../public/pageHeros/mob/goldCoastMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/locations",
      url: "https://www.officeexperts.com.au/locations",
      name: "Microsoft Experts Locations | Australia-Wide Service",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2025-03-26T00:00:00+00:00",
      dateModified: "2025-09-02T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/locations#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/locations"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/locations#breadcrumb",
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
        },
      ],
    },
  ],
};

const Page = () => {
  const locationData = [
    {
      id: "nsw",
      sectionTitle: "New South Wales",
      locations: [
        {
          name: "Sydney, NSW",
          image: sydney,
          alt: "Sydney skyline",
          description:
            "Our Sydney team provides expert Microsoft consulting services across the Greater Sydney metropolitan area. From custom Office development to troubleshooting and implementations, our team offers responsive support for all your Microsoft software needs.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-sydney",
            word: "https://www.wordexperts.com.au/word-consultants-sydney",
            access:
              "https://www.accessexperts.com.au/access-consultants-sydney",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-sydney",
            office: "/office-and-office-365-experts-sydney",
          },
          supportLink: "/microsoft-support-and-training-sydney",
        },
        {
          name: "Central Coast, NSW",
          image: centralCoast,
          alt: "Central Coast region",
          description:
            "On the beautiful Central Coast region of NSW, our team provides Microsoft solutions for a variety of businesses. Working either through remote access and online support, or on-site support for the entire Microsoft suite.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-central-coast-nsw",
            word: "https://www.wordexperts.com.au/word-consultants-central-coast-nsw",
            access:
              "https://www.accessexperts.com.au/access-consultants-central-coast-nsw",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-ncentral-coast-nsw",
            office: "/office-and-office-365-experts-central-coast-nsw",
          },
          supportLink: "/microsoft-support-and-training-central-coast-nsw",
        },
        {
          name: "Wollongong, NSW",
          image: wollongong,
          alt: "Wollongong coastline",
          description:
            "Our Wollongong team serves the Illawarra region with specialised Microsoft consulting services. We provide expert solutions for businesses seeking to optimise their Microsoft software infrastructure and improve productivity.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-wollongong",
            word: "https://www.wordexperts.com.au/word-consultants-wollongong",
            access:
              "https://www.accessexperts.com.au/access-consultants-wollongong",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-wollongong",
            office: "/office-excel-access-and-365-experts-wollongong",
          },
          supportLink: "/microsoft-support-and-training-wollongong",
        },
        {
          name: "Northern Rivers, NSW",
          image: northernRivers,
          alt: "Northern Rivers region",
          description:
            "Serving the Northern Rivers region of NSW, our team delivers comprehensive Microsoft solutions for businesses of all sizes. We offer both remote and on-site support for Microsoft Office, Excel, Word, Access, and powerplatform.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-northern-rivers-nsw",
            word: "https://www.wordexperts.com.au/word-consultants-northern-rivers-nsw",
            access:
              "https://www.accessexperts.com.au/access-consultants-northern-rivers-nsw",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-northern-rivers-nsw",
            office: "/office-excel-access-and-365-experts-northern-rivers-nsw",
          },
          supportLink: "/microsoft-support-and-training-northern-rivers-nsw",
        },
      ],
    },
    {
      id: "vic",
      sectionTitle: "Victoria",
      locations: [
        {
          name: "Melbourne, VIC",
          image: melbourne,
          alt: "Melbourne cityscape",
          description:
            "Our Melbourne team delivers expert Microsoft consulting services throughout the Greater Melbourne area. We specialise in custom Office development, database solutions, and business process automation using the entire Microsoft suite.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-melbourne",
            word: "https://www.wordexperts.com.au/word-consultants-melbourne",
            access:
              "https://www.accessexperts.com.au/access-consultants-melbourne",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-melbourne",
            office: "/office-and-office-365-experts-melbourne",
          },
          supportLink: "/microsoft-support-and-training-melbourne",
        },
        {
          name: "Richmond, VIC",
          image: richmond,
          alt: "Richmond area",
          description:
            "Located in the heart of Richmond, our specialists provides tailored Microsoft solutions for local businesses. We offer expert consulting for all Microsoft Office applications with a focus on task automation and improving business efficiency.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-richmond",
            word: "https://www.wordexperts.com.au/word-consultants-richmond",
            access:
              "https://www.accessexperts.com.au/access-consultants-richmond",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-richmond",
            office: "/excel-and-access-experts-richmond",
          },
          supportLink: "/microsoft-support-and-training-richmond",
        },
      ],
    },
    {
      id: "qld",
      sectionTitle: "Queensland",
      locations: [
        {
          name: "Brisbane, QLD",
          image: brisbane,
          alt: "Brisbane river and skyline",
          description:
            "Our Brisbane team provides comprehensive Microsoft Office consulting services across Southeast Queensland. We deliver custom solutions, training, and support for all Microsoft applications to help businesses maximize their productivity.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-brisbane",
            word: "https://www.wordexperts.com.au/word-consultants-brisbane",
            access:
              "https://www.accessexperts.com.au/access-consultants-brisbane",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-brisbane",
            office: "/office-excel-access-and-365-experts-brisbane",
          },
          supportLink: "/microsoft-support-and-training-brisbane",
        },
        {
          name: "Gold Coast, QLD",
          image: goldCoast,
          alt: "Gold Coast skyline and beaches",
          description:
            "Our Gold Coast team specialises in Microsoft Office consulting and training for local businesses. From Excel automation to Word templates, Access databases, and Power Platform solutions, we provide tailored services to improve efficiency and productivity.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-gold-coast",
            word: "https://www.wordexperts.com.au/word-consultants-gold-coast",
            access:
              "https://www.accessexperts.com.au/access-consultants-gold-coast",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-gold-coast",
            office: "/contact-us",
          },
          supportLink: "/microsoft-support-and-training-gold-coast",
        },
      ],
    },
    {
      id: "wa",
      sectionTitle: "Western Australia",
      locations: [
        {
          name: "Perth, WA",
          image: perth,
          alt: "Perth skyline",
          description:
            "Our Perth consultants deliver expert Microsoft solutions to businesses throughout Western Australia. We provide specialised services in Excel, Word, Access, powerplatform and comprehensive Office consulting.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-perth",
            word: "https://www.wordexperts.com.au/word-consultants-perth",
            access: "https://www.accessexperts.com.au/access-consultants-perth",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-perth",
            office: "/office-excel-access-and-365-experts-perth",
          },
          supportLink: "/microsoft-support-and-training-perth",
        },
      ],
    },
    {
      id: "sa",
      sectionTitle: "South Australia",
      locations: [
        {
          name: "Adelaide, SA",
          image: adelaide,
          alt: "Adelaide city view",
          description:
            "Serving South Australia businesses, our Adelaide team provides expert Microsoft Office consulting and development services. We specialise in creating custom solutions that address unique business challenges.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-adelaide",
            word: "https://www.wordexperts.com.au/word-consultants-adelaide",
            access:
              "https://www.accessexperts.com.au/access-consultants-adelaide",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-adelaide",
            office: "/office-excel-access-and-365-experts-adelaide",
          },
          supportLink: "/microsoft-support-and-training-adelaide",
        },
      ],
    },
    {
      id: "act",
      sectionTitle: "Australian Capital Territory",
      locations: [
        {
          name: "Canberra, ACT",
          image: canberra,
          alt: "Canberra parliament house",
          description:
            "Our Canberra team specialises in Microsoft solutions for government departments and local businesses. We provide expert consulting for all Microsoft Office applications with a focus on security and compliance.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-canberra",
            word: "https://www.wordexperts.com.au/word-consultants-canberra",
            access:
              "https://www.accessexperts.com.au/access-consultants-canberra",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-canberra",
            office: "/office-and-office-365-experts-canberra",
          },
          supportLink: "/microsoft-support-and-training-canberra",
        },
      ],
    },
    {
      id: "nt",
      sectionTitle: "Northern Territory",
      locations: [
        {
          name: "Darwin, NT",
          image: darwin,
          alt: "Darwin harbor",
          description:
            "Our Northern Territory team delivers specialised Microsoft Office consulting services to Darwin businesses and organisations. We provide remote and on-site support for all Microsoft applications.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-darwin",
            word: "https://www.wordexperts.com.au/word-consultants-darwin",
            access:
              "https://www.accessexperts.com.au/access-consultants-darwin",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-darwin",
            office: "/office-excel-access-and-365-experts-darwin",
          },
          supportLink: "/microsoft-support-and-training-darwin",
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Our Locations"
        desktopImage={australia}
        mobileImage={australiaMob}
        altDesk="Australia map"
        altMob="man holding Australia flag"
      />

      {locationData.map((section) => (
        <LocationGroups
          key={section.id}
          sectionTitle={section.sectionTitle}
          locations={section.locations}
        />
      ))}

      <Promo
        h2={"Need Microsoft expertise in your area?"}
        p={
          "Contact us today to discover how our local and remote services can help your business leverage the full power of Microsoft Office applications."
        }
      />
      <Contact />
    </>
  );
};

export default Page;
