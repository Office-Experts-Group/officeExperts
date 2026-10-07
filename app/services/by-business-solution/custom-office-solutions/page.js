// app/services/by-business-solution/custom-office-solutions/page.js
import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment8 from "./(components)/PageSegment8";
import RelatedLinks from "../../../../components/RelatedLinks";

import marker from "../../../../public/pageHeros/marker.webp";
import meetingMob from "../../../../public/pageHeros/mob/meetingMob.webp";

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
        "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions",
      url: "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions",
      name: "Custom Office Solutions | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-09-04T00:00:00+00:00",
      description:
        "Custom Office Solutions - Need an expert to help you with Excel, Access, Word, Outlook or PowerPoint. Call us 1300 102 810",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions#breadcrumb",
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
          name: "Custom Office Solutions",
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
        title={"Custom Office Solutions"}
        desktopImage={marker}
        mobileImage={meetingMob}
        altDesk={"marker on screen"}
        altMob={"meeting at an office"}
      />
      <PageSegmentMain />
      <PageSegment8 />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Custom Office solutions we've delivered"
        links={[
          {
            href: "/case-studies/corporate-group-multi-entity-master-template-suite",
            linkText: "See the Global Common template",
            title:
              "One shared Global Common template keeping four entities on-brand without four separate rebuilds",
            description:
              "A corporate group needed professional, consistent Word templates across four related entities without building and maintaining each one separately. We built a single Global Common template holding the shared styles and functionality, then a custom Master Template for each entity on top of it. A custom Formatting tab gives staff everyday tools such as custom page layouts, table insertion and style cleanup, and a copy/paste macro strips foreign formatting from pasted content and applies the approved styling.",
            image: "/case-studies/corporate-group-multi-entity-templatesLg.png",
            imageAlt:
              "Custom Word Master Templates for four entities of a corporate group",
          },
          {
            href: "/case-studies/food-manufacturer-excel-costing-workbook",
            linkText: "See the costing workbook",
            title:
              "Merging an array of clunky Excel workbooks into one automated costing system",
            description:
              "The client manufactures packaged food products and costed every product through an array of disconnected, in-house Excel workbooks. We rebuilt the system as a single Excel Costing Workbook, with a forms interface for building components and products, automatic cost updates that flow up to every product that uses them, and sale prices, gross and net margins calculated by state. Locked data sheets and an Admin password protect the core costing data.",
            image:
              "/case-studies/food-manufacturer-excel-costing-workbookLg.png",
            imageAlt:
              "Excel costing workbook with forms interface for a food manufacturer",
          },
        ]}
      />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
