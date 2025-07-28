import React from "react";

import PageSegmentMain from "./(components)/PageSegmentMain";
import ServiceHero from "../../../../components/ServiceHero";
import Contact from "../../../../components/Contact";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import ServicePageCards from "./(components)/ServicePageCards";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment3 from "./(components)/PageSegment3";
import PageSegmentDropdowns from "./(components)/PageSegmentDropdowns";
import Contents from "./(components)/Contents";

import notes from "../../../../public/pageHeros/notes.webp";
import codingMob from "../../../../public/pageHeros/mob/codingMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/upgrades-and-migration",
      url: "https://www.officeexperts.com.au/services/microsoft-excel/upgrades-and-migration",
      name: "Excel Upgrades and Migration | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-07-28T00:00:00+00:00",
      description:
        "Stuck on an Old Version? Are you experiencing the cold reality or unsettling concerns that your Microsoft Office workbooks, documents. Call us 1300102810",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-excel/upgrades-and-migration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-excel/upgrades-and-migration",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/upgrades-and-migration#breadcrumb",
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
          name: "Excel Experts Services",
          item: "https://www.officeexperts.com.au/services/microsoft-excel",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Upgrades and Migration",
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
        title={"Upgrades and Migration"}
        desktopImage={notes}
        mobileImage={codingMob}
        altDesk={"notes on a table"}
        altMob={"computer code"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegment3 />
      <ExpertsAwait />
      <PageSegmentDropdowns />
      <Contact />
    </>
  );
};

export default Page;
