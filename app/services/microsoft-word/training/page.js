import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contact from "../../../../components/Contact";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment8 from "./(components)/PageSegment8";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment5 from "./(components)/PageSegment5";
import Segment4Repeat from "./(components)/Segment4Repeat";
import FAQSection from "../../../../components/FAQSection";

import faqs from "../../../../faqs/training";
import Contents from "./(components)/Contents";

import support from "../../../../public/pageHeros/support.webp";
import coffeeMob from "../../../../public/pageHeros/mob/coffeeMob.webp";

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
        "https://www.officeexperts.com.au/services/microsoft-word/training",
      url: "https://www.officeexperts.com.au/services/microsoft-word/training",
      name: "Microsoft Word Training | Microsoft Word Help | Word Experts",
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
          "https://www.officeexperts.com.au/services/microsoft-word/training#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-word/training",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-word/training#breadcrumb",
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
          name: "Help and Training",
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
        title="Microsoft Word Help and Training"
        desktopImage={support}
        mobileImage={coffeeMob}
        altDesk={"support"}
        altMob={"coffee cup and laptop"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment8 />
      <PageSegment4 />
      <ExpertsAwait />
      <PageSegment5 />
      <Segment4Repeat />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
