import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Contact from "../../../../components/Contact";
import Segment4Repeat from "./(components)/Segment4Repeat";
import PageSegment5 from "./(components)/PageSegment5";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Promo from "../../../../components/Promo";
import FAQSection from "../../../../components/FAQSection";

import faqs from "../../../../faqs/popup-forms";

import notes from "../../../../public/pageHeros/notes.webp";
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
        "https://www.officeexperts.com.au/services/microsoft-word/popup-forms",
      url: "https://www.officeexperts.com.au/services/microsoft-word/popup-forms",
      name: "Word Popup Form | Word Popup Window | Word Experts",
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
          "https://www.officeexperts.com.au/services/microsoft-word/popup-forms#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-word/popup-forms",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-word/popup-forms#breadcrumb",
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
          name: "Popup Forms",
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
        title="Popup Forms"
        desktopImage={notes}
        mobileImage={graphTableMob}
        altDesk={"sticky notes on a table"}
        altMob={"graphs on an office table"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <PageSegment5 />
      <Promo
        h2="Empowering Your Documents with Seamless Integration"
        p="Our popup forms are designed to simplify data entry, reduce errors, and enhance document consistency, giving your team a more efficient and reliable way to work in Microsoft Word."
      />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
