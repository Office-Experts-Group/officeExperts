import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import VideoSegment from "./(components)/VideoSegment";
import VideoSegment2 from "./(components)/VideoSegment2";
import PageSegment8 from "./(components)/PageSegment8";
import RelatedLinks from "../../../../components/RelatedLinks";

import glassesMob from "../../../../public/pageHeros/mob/glassesMob.webp";
import graph from "../../../../public/pageHeros/graph.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts",
      "Australia-wide Microsoft Office Development and Consulting Experts",
    ),
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

      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Dashboard and reporting projects we've delivered"
        links={[
          {
            href: "/case-studies/retail-analytics-automated-review-deck-generator",
            linkText: "See the deck generator",
            title:
              "Turning a days-long PowerPoint build into a one-click, 600+ slide deck",
            description:
              "The client was building large retailer review decks by hand, pulling figures out of Power BI and pasting them into slide templates one by one. We built a Python tool that reads a simple scope sheet, queries the client's existing Power BI data directly and assembles a fully branded deck of around 660 slides in under five minutes. The tool tailors what it includes to the audience, so a supplier version leaves out commercial detail that a retailer version includes.",
            image: "/case-studies/retail-analytics-deck-generatorLg.png",
            imageAlt:
              "Automated retailer review deck built from Power BI data for a retail analytics business",
          },
          {
            href: "/case-studies/financial-services-ai-risk-compliance-automation",
            linkText: "See the compliance dashboard",
            title:
              "Taking 24 unowned risks to full ownership and monthly reviews from 6 hours to 1",
            description:
              "The client, an FCA-regulated financial services firm, was running compliance on spreadsheets and scattered policy documents. We replaced the spreadsheet with a live SharePoint risk register, built AI agents that map risks to mitigations and controls, and deployed a Power BI and Power Apps compliance dashboard that shows real-time recommendations and assignments to staff in Microsoft Teams. Monthly review time fell from around 6 hours to 1, and all 24 risks that previously had no named owner are now assigned and tracked.",
            image:
              "/case-studies/financial-services-compliance-automationLg.png",
            imageAlt:
              "Compliance dashboard and risk register for a financial services firm",
          },
        ]}
      />
      <VideoSegment />
      <VideoSegment2 />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
