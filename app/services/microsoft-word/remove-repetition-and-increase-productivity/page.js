import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Contact from "../../../../components/Contact";
import PageSegment4 from "./(components)/PageSegment4";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Promo from "../../../../components/Promo";
import FAQSection from "../../../../components/FAQSection";

import faqs from "../../../../faqs/remove-repitition";

import desk from "../../../../public/pageHeros/desk.webp";
import glassesMob from "../../../../public/pageHeros/mob/glassesMob.webp";

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
        "https://www.officeexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity",
      url: "https://www.officeexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity",
      name: "Word Remove Repetition | Word Increase Productivity | Word Document Services | Word Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity#breadcrumb",
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
          name: "Remove Repetition and Increase Productivity",
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
        title="Remove Repetition and Increase Productivity"
        desktopImage={desk}
        mobileImage={glassesMob}
        altDesk={"office desk items"}
        altMob={"reading glasses on a computer desk"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <Promo
        h2="Boost Productivity with Automated Document Templates"
        p="Our automation solutions make document creation faster and more consistent, allowing your team to focus on high-priority work while we handle the repetitive tasks."
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
