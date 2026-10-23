import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import LocationGroups from "./(components)/LocationGroups";

const Promo = dynamic(() => import("../../components/Promo"));
const Contact = dynamic(() => import("../../components/Contact"));

import australia from "../../public/pageHeros/australia.webp";
import australiaMob from "../../public/pageHeros/mob/australiaMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
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
import goldCoast from "../../public/pageHeros/mob/goldCoastMob.webp";
import centralCoast from "../../public/pageHeros/mob/centralCoastMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.wordexperts.com.au",
      "Word Experts",
      "Australia-wide Microsoft Word Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/locations",
      url: "https://www.wordexperts.com.au/locations",
      name: "Microsoft Word Experts Locations | Australia-Wide Service",
      description:
        "Microsoft Word consulting services available across Australia. Remote support and on-site consultants in all major cities.",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-09-02T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/locations#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/locations"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/locations#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wordexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://www.wordexperts.com.au/locations",
        },
      ],
    },
  ],
};

const Page = () => {
  // Define the location data
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
            "Our Sydney team provides expert Microsoft Word consulting services across the Greater Sydney metropolitan area. Customising templates, fill in forms, our team also offers support and training along with a variety of Microsoft Word Services.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-sydney",
            word: "/word-consultants-sydney",
            access:
              "https://www.accessexperts.com.au/access-consultants-sydney",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-sydney",
            office:
              "https://www.officeexperts.com.au/microsoft-consultants-sydney",
          },
        },
        {
          name: "Central Coast, NSW",
          image: centralCoast,
          alt: "Central Coast region",
          description:
            "On the beautiful Central Coast region of NSW, our team provides Microsoft Word solutions for a variety of businesses. Working either through remote access and online support, or on-site support for document automation and template creation.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-central-coast-nsw",
            word: "/word-consultants-central-coast-nsw",
            access:
              "https://www.accessexperts.com.au/access-consultants-central-coast-nsw",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-central-coast-nsw",
            office:
              "https://www.officeexperts.com.au/office-and-office-365-experts-central-coast-nsw",
          },
        },
        {
          name: "Wollongong, NSW",
          image: wollongong,
          alt: "Wollongong coastline",
          description:
            "Our Wollongong team serves the Illawarra region with specialised Microsoft Word consulting services. We provide expert solutions for businesses seeking to optimise their document processes and improve productivity.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-wollongong",
            word: "/word-consultants-wollongong",
            access:
              "https://www.accessexperts.com.au/access-consultants-wollongong",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-wollongong",
            office:
              "https://www.officeexperts.com.au/office-excel-access-and-365-experts-wollongong",
          },
        },
        {
          name: "Northern Rivers, NSW",
          image: northernRivers,
          alt: "Northern Rivers region",
          description:
            "Serving the Northern Rivers region of NSW, our team delivers comprehensive Microsoft Word solutions for businesses of all sizes. We offer both remote and on-site support for document automation, template design, and Word customisation.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-northern-rivers-nsw",
            word: "/word-consultants-northern-rivers-nsw",
            access:
              "https://www.accessexperts.com.au/access-consultants-northern-rivers-nsw",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-northern-rivers-nsw",
            office:
              "https://www.officeexperts.com.au/office-excel-access-and-365-experts-northern-rivers-nsw",
          },
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
            "Our Melbourne team delivers expert Microsoft Word consulting services throughout the Greater Melbourne area. Office Experts Group specialises in custom document development, template creation, and business process automation using Microsoft Word. Our dedicated Word team are experts in their field.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-melbourne",
            word: "/word-consultants-melbourne",
            access:
              "https://www.accessexperts.com.au/access-consultants-melbourne",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-melbourne",
            office:
              "https://www.officeexperts.com.au/microsoft-consultants-melbourne",
          },
        },
        {
          name: "Richmond, VIC",
          image: richmond,
          alt: "Richmond area",
          description:
            "Located in the heart of Richmond, our specialists provide tailored Microsoft Word solutions for local businesses. We offer expert consulting with a focus on document automation and improving business efficiency through Word customization.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-richmond",
            word: "/word-consultants-richmond",
            access:
              "https://www.accessexperts.com.au/access-consultants-richmond",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-richmond",
            office:
              "https://www.officeexperts.com.au/office-and-office-365-experts-richmond",
          },
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
            "Our Brisbane team provides comprehensive Microsoft Word consulting services across Southeast Queensland. We deliver custom document solutions, template creation, and training to help businesses maximise their productivity. Our dedicated Word team has provided consistent reliable services for the last 25 years.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-brisbane",
            word: "/word-consultants-brisbane",
            access:
              "https://www.accessexperts.com.au/access-consultants-brisbane",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-brisbane",
            office:
              "https://www.officeexperts.com.au/microsoft-consultants-brisbane",
          },
        },
        {
          name: "Gold Coast, QLD",
          image: goldCoast,
          alt: "Gold Coast skyline and beaches",
          description:
            "Our Gold Coast team specialises in Microsoft Word consulting and training for local businesses. From document automation to custom templates and forms, we provide tailored services to improve efficiency and productivity.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-gold-coast",
            word: "/word-consultants-gold-coast",
            access:
              "https://www.accessexperts.com.au/access-consultants-gold-coast",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-gold-coast",
            office:
              "https://www.officeexperts.com.au/word-and-powerpoint-experts-gold-coast",
          },
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
            "Our Perth consultants deliver expert Microsoft Word solutions to businesses throughout Western Australia. We provide specialised services to help automate and streamline your document processes and business workflows.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-perth",
            word: "/word-consultants-perth",
            access: "https://www.accessexperts.com.au/access-consultants-perth",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-perth",
            office:
              "https://www.officeexperts.com.au/microsoft-consultants-perth",
          },
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
            "Serving South Australia businesses, our Adelaide team provides expert Microsoft Word consulting and development services. We specialise in creating custom document solutions that address unique business challenges.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-adelaide",
            word: "/word-consultants-adelaide",
            access:
              "https://www.accessexperts.com.au/access-consultants-adelaide",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-adelaide",
            office:
              "https://www.officeexperts.com.au/office-excel-access-and-365-experts-adelaide",
          },
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
            "Our Canberra team specialises in Microsoft Word solutions for government departments and local businesses. We provide expert consulting with a focus on security and compliance. Within the Office Experts Group, our Word Experts team are dedicated to providing outstanding services for government departments and local businesses.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-canberra",
            word: "/word-consultants-canberra",
            access:
              "https://www.accessexperts.com.au/access-consultants-canberra",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-canberra",
            office:
              "https://www.officeexperts.com.au/microsoft-consultants-canberra",
          },
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
            "Our Northern Territory team delivers specialised Microsoft Word consulting services to Darwin businesses and organisations. We provide remote and on-site support for document automation, template creation, and Word customisation.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-darwin",
            word: "/word-consultants-darwin",
            access:
              "https://www.accessexperts.com.au/access-consultants-darwin",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-darwin",
            office:
              "https://www.officeexperts.com.au/office-excel-access-and-365-experts-darwin",
          },
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
        h2={"Need Microsoft Word expertise in your area?"}
        p={
          "Contact us today to discover how our local and remote services can help your business leverage the full power of Microsoft Word."
        }
      />
      <Contact />
    </>
  );
};

export default Page;
