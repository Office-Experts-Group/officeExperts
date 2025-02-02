import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import PageSegment4 from "./(components)/PageSegment4";
import SegmentMainRepeat from "./(components)/SegmentMainRepeat";

import faqs from "../../../../faqs/power-bi";

import graph from "../../../../public/pageHeros/mob/graph.webp";
import graphMeeting from "../../../../public/pageHeros/graphMeeting.webp";

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
        "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
      url: "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
      name: "Power BI Services | Power BI Consulting Company | Power BI",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "We build reports and dashboards which connect your Power BI services to your financial and accounting systems, databases, Azure services and spreadsheets.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-bi#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-bi#breadcrumb",
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
          name: "Our Microsoft Power Platform Services",
          item: "https://www.officeexperts.com.au/services/microsoft-power-platform",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Power BI Services",
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
        title="Microsoft Power BI Services"
        desktopImage={graphMeeting}
        mobileImage={graph}
        altDesk={"graphs on a table"}
        altMob={"graphs on a table"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <SegmentMainRepeat />
      <PageSegment4 />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
