import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";
import PageSegment3 from "./(components)/PageSegment3";
import PageSegment4New from "./(components)/PageSegment4New";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment5 from "./(components)/PageSegment5";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import PageSegment7 from "./(components)/PageSegment7";
import Contact from "../../../../components/Contact";
import CTAFull from "../../../(components)/CTAFull";
import Segment4Repeat from "./(components)/Segment4Repeat";
import Segment4Again from "./(components)/Segment4Again";
import Segment7Repeat from "./(components)/Segment7Repeat";
import Contents from "./(components)/Contents";

import longDesk from "../../../../public/pageHeros/longDesk.webp";
import graphTableMob from "../../../../public/pageHeros/mob/graphTableMob.webp";

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
        "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions",
      url: "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions",
      name: "Database Development and Solutions | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-03-26T00:00:00+00:00",
description: "Custom Microsoft database solutions built by certified experts. We design, develop and support Access databases, SQL Server solutions, and cloud database systems tailored to your business needs.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions#breadcrumb",
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
          name: "Our Services By Business Solution",
          item: "https://www.officeexperts.com.au/services/by-business-solution",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Microsoft Database Development and Solutions",
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
        title="Microsoft Database Development and Solutions"
        desktopImage={longDesk}
        mobileImage={graphTableMob}
        altDesk={"long desk in office"}
        altMob={"graphs on a table"}
      />
      <PageSegmentMain2 />
      <PageSegment3 />
      <PageSegment4New />
      <PageSegment5 />
      <ExpertsAwait />
      <PageSegment4 />
      <PageSegment7 />
      <Segment4Repeat />
      <CTAFull />
      <Segment4Again />
      <Segment7Repeat />
      <Contact />
    </>
  );
};

export default Page;
