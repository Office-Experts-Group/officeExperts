import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import VideoSegment from "./(components)/VideoSegment";
import VideoSegment2 from "./(components)/VideoSegment2";
import PageSegment8 from "./(components)/PageSegment8";

import glassesMob from "../../../../public/pageHeros/mob/glassesMob.webp";
import graph from "../../../../public/pageHeros/graph.webp";

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
        "https://www.officeexperts.com.au/services/by-business-solution/dashboards",
      url: "https://www.officeexperts.com.au/services/by-business-solution/dashboards",
      name: "Dashboard Experts | Excel Dashboard Demo | Office Expert",
      description:
        "We are experts in Data! VBA, dashboards, import/export, parsing and processing, formatting and automation.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-09-04T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/dashboards#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/dashboards",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/dashboards#breadcrumb",
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
          name: "Dashboards",
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
        title={"Dashboards and Reporting Solutions"}
        desktopImage={graph}
        mobileImage={glassesMob}
        altDesk={"graph on desk"}
        altMob={"glasses on a table"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <PageSegment8 />
      <VideoSegment />
      <VideoSegment2 />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
