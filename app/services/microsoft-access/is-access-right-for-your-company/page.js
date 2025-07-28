import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";
import Promo from "../../../../components/Promo";
import MiniTicks from "./(components)/MiniTicks";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";
import Contact from "../../../../components/Contact";
import Contents from "./(components)/Contents";

import faqs from "../../../../faqs/is-access-right-for-you";

import twoComputers from "../../../../public/pageHeros/twoComputers.webp";
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
        "https://www.officeexperts.com.au/services/microsoft-access/is-access-right-for-your-company",
      url: "https://www.officeexperts.com.au/services/microsoft-access/is-access-right-for-your-company",
      name: "Why To Choose Access for your Company | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-07-28T00:00:00+00:00",
      description:
        "We get asked this question all the time! Whether your solution is online and/or offline, we can help point you in the right direction to keep your business.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-access/is-access-right-for-your-company#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-access/is-access-right-for-your-company",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-access/is-access-right-for-your-company#breadcrumb",
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
          name: "Access Experts Services",
          item: "https://www.officeexperts.com.au/services/microsoft-access",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Is Access Right for your Company?",
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
        title="Is Microsoft Access the Right Technology for your Company?"
        desktopImage={twoComputers}
        mobileImage={graph}
        altDesk={"two computers at an office"}
        altMob={"graphs"}
      />
      <PageSegmentMain2 />
      <Promo
        h2="Just Ask The Office Experts"
        p="Whether your solution is online and/or offline, we can help point you in the right direction to keep your business ahead of the rest."
      />
      <MiniTicks />
      <ExpertsAwait />
      <div style={{ marginTop: "4rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
