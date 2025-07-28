import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment5 from "./(components)/PageSegment5";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";
import Contact from "../../../../components/Contact";

import faqs from "../../../../faqs/corporate-identity";

import invoice from "../../../../public/pageHeros/invoice.webp";
import codingMob from "../../../../public/pageHeros/mob/codingMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-word/corporate-identity",
      url: "https://www.officeexperts.com.au/services/microsoft-word/corporate-identity",
      name: "Word/Corporate Global Template Solution / Corporate Governance Word Document | Protecting Word Documents | Word Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-07-28T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-word/corporate-identity#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-word/corporate-identity",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-word/corporate-identity#breadcrumb",
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
          name: "Our Microsoft Word Services",
          item: "https://www.officeexperts.com.au/services/microsoft-word",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Corporate Identity",
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
        title="Corporate Identity"
        desktopImage={invoice}
        mobileImage={codingMob}
        altDesk={"spreadsheet on a computer screen"}
        altMob={"code being written on a computer"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegment5 />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
