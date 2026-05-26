// app/services/power-query/page.js

import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../../components/ServiceHero";
import QuerySegmentMain from "./(components)/QuerySegmentMain";

// Dynamic imports for components below the fold
const QueryServices = dynamic(() => import("./(components)/QueryServices"));
const QueryComparison = dynamic(() => import("./(components)/QueryComparison"));
const QueryProcess = dynamic(() => import("./(components)/QueryProcess"));
const Contact = dynamic(() => import("../../../components/Contact"));

import query from "../../../public/pageHeros/query.webp";
import queryMob from "../../../public/pageHeros/mob/queryMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../utils/schemaGenerators";
import faqs from "../../../faqs/query";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts Group",
      "Australia-wide Microsoft Office consulting, development and support services",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/power-query",
      url: "https://www.officeexperts.com.au/services/power-query",
      name: "Power Query | Office Experts Group",
      description:
        "Power Query experts helping businesses automate data imports, clean messy datasets and build reliable reporting workflows that save time.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      datePublished: "2025-04-10T00:00:00+00:00",
      dateModified: "2026-05-26T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/power-query#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/services/power-query"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/services/power-query#breadcrumb",
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
          name: "Services",
          item: "https://www.officeexperts.com.au/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Power Query Services",
          item: "https://www.officeexperts.com.au/services/power-query",
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
      <ServiceHero
        title="Power Query Services"
        desktopImage={query}
        mobileImage={queryMob}
        altDesk={"laptop with Power Query displayed"}
        altMob={"laptop with Power Query displayed"}
      />
      <QuerySegmentMain />
      <QueryServices />
      <QueryComparison />
      <QueryProcess />
      <Contact />
    </>
  );
};

export default Page;
