// app/page.js
import React from "react";
import dynamic from "next/dynamic";

// Above the fold: normal import so it is in the first chunk
import HomeHero from "./(components)/HomeHero";

// Below the fold: next/dynamic splits them into their own chunks.
// They are still server rendered, so all their content is in the HTML.
const HomeTrust = dynamic(() => import("./(components)/HomeTrust"));
const SolutionsCarousel = dynamic(
  () => import("./(components)/SolutionsCarousel"),
);
const HomeProcess = dynamic(() => import("./(components)/HomeProcess"));
const HomeTestimonials = dynamic(
  () => import("./(components)/HomeTestimonials"),
);
const CaseStudyCarousel = dynamic(
  () => import("@/components/CaseStudyCarousel"),
);
const HomeLocations = dynamic(() => import("./(components)/HomeLocations"));
const Contact = dynamic(() => import("@/components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateTestimonialSchema,
} from "@/utils/schemaGenerators";

// Swap PAGE_URL for SITE_URL when this replaces the home page
const PAGE_URL = "https://www.officeexperts.com.au";
const PAGE_TITLE =
  "Microsoft Consultants and Developers Australia | Office Experts";
const PAGE_DESCRIPTION =
  "Australian Microsoft consultants since 2000. Our team builds, fixes and supports the Word, Excel, Access, Power Platform and AI solutions your business relies on.";

const SITE_URL = "https://www.officeexperts.com.au";

const DATE_PUBLISHED = "2018-07-16T02:07:45+10:00";
const DATE_MODIFIED = "2026-11-05T00:00:00+11:00";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateTestimonialSchema(),
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts Group",
      "Your Microsoft Office Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      about: {
        "@id": `${SITE_URL}#organization`,
      },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      description: PAGE_DESCRIPTION,
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
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

      <main>
        <HomeHero />
        <HomeTrust />
        <SolutionsCarousel />
        <HomeProcess />
        <HomeTestimonials />
        <CaseStudyCarousel />
        <HomeLocations />
        <Contact />
      </main>
    </>
  );
};

export default Page;
