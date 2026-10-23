import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contents from "./(components)/Contents";

const Contact = dynamic(() => import("../../components/Contact"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegmentMain = dynamic(() => import("./(components)/PageSegmentMain"));
const BlackSegment = dynamic(() => import("./(components)/BlackSegment"));
const Promo = dynamic(() => import("./(components)/Promo"));
const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"));
const ExpertsAwait = dynamic(() => import("./(components)/ExpertsAwait"));

import twoComputers from "../../public/pageHeros/twoComputers.webp";
import seatMob from "../../public/pageHeros/mob/seatMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";
import WhyChoose from "./(components)/WhyChoose";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.wordexperts.com.au",
      "Word Experts",
      "Australia-wide Microsoft Word Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/upgrades-and-migration",
      url: "https://www.wordexperts.com.au/upgrades-and-migration",
      name: "Word Upgrades and Migration | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-09-11T00:20:15+00:00",
      dateModified: "2024-11-12T00:00:00+00:00",
      description:
        "Expert Microsoft Word upgrade and migration services. Resolve formatting issues, maintain document integrity, and ensure smooth transitions.",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/upgrades-and-migration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/upgrades-and-migration"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/upgrades-and-migration#breadcrumb",
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
          name: "Upgrades and Migration",
          item: "https://www.wordexperts.com.au/upgrades-and-migration",
        },
      ],
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Contents />
      <ServiceHero
        title="Upgrades and Migration"
        desktopImage={twoComputers}
        mobileImage={seatMob}
        altDesk={"two computers analysing graphs"}
        altMob={"an empty office chair at a desk"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment4 />
      <BlackSegment />
      <Promo />
      <Segment4Repeat />
      <WhyChoose />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
