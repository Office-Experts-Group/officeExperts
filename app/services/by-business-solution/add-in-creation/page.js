import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment7 from "./(components)/PageSegment7";

import deskGraph from "../../../../public/pageHeros/deskGraph.webp";
import seatMob from "../../../../public/pageHeros/mob/seatMob.webp";

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
        "https://www.officeexperts.com.au/services/by-business-solution/add-in-creation",
      url: "https://www.officeexperts.com.au/services/by-business-solution/add-in-creation",
      name: "Add-in Creation | Microsoft Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-05-29T00:00:00+00:00",
      description:
        "Why Use Add-Ins? Add-ins extend the functionality of Office products and can make new functionality available to all of your staff, documents. Call 1300102810",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/add-in-creation#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/add-in-creation",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/add-in-creation#breadcrumb",
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
          name: "Add-in Creation",
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
        title="Add-in Creation"
        desktopImage={deskGraph}
        mobileImage={seatMob}
        altDesk={"Desk with graphs"}
        altMob={"empty office chair"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegment7 />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
