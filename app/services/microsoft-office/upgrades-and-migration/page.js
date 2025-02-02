import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contact from "../../../../components/Contact";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegmentMain from "./(components)/PageSegmentMain";
import BlackSegment from "./(components)/BlackSegment";
import Segment4Repeat from "./(components)/Segment4Repeat";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contents from "./(components)/Contents";

import deskGraph from "../../../../public/pageHeros/deskGraph.webp";
import graph from "../../../../public/pageHeros/mob/graph.webp";

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
        "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration",
      url: "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration",
      name: "Office Upgrades And Migration | Office Experts Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "Stuck on an Old Version? Are you experiencing the cold reality or unsettling concerns that your Microsoft Office workbooks. Call us 1300 102 810",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration#breadcrumb",
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
          name: "Our Microsoft Office Services",
          item: "https://www.officeexperts.com.au/services/microsoft-office",
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
        title="Upgrades and Migration"
        desktopImage={deskGraph}
        mobileImage={graph}
        altDesk={"Desk with graphs"}
        altMob={"graph on a table"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment4 />
      <BlackSegment />
      <Segment4Repeat />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
