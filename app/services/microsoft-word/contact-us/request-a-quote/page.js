import React from "react";

import Contact from "../../../components/Contact";
import ServiceHero from "../../../components/ServiceHero";
import CTAMain from "../(components)/CTAMain";

import calculator from "../../../public/pageHeros/calculator.webp";
import calcMob from "../../../public/pageHeros/mob/calcMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/contact-us/request-a-quote",
      url: "https://www.wordexperts.com.au/contact-us/request-a-quote",
      name: "Request a Quote | Office Experts Group",
      description:
        "Use the form below for quotes and estimates include associated requirements, issues, budget and time constraints.",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2019-03-22T04:43:26+00:00",
      dateModified: "2025-07-30T09:51:09+00:00",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/contact-us/request-a-quote#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/contact-us/request-a-quote"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/upgrades-and-migration#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wordexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: "https://www.wordexperts.com.au/contact-us",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Request a Quote",
          item: "https://www.wordexperts.com.au/contact-us/request-a-quote",
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
        title="Request a Quote"
        desktopImage={calculator}
        mobileImage={calcMob}
        altDesk={"calculator on a desk"}
        altMob={"calculator on a desk"}
      />
      <CTAMain />
      <Contact isQuote={true} />
    </>
  );
};

export default Page;
