import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegmentMain from "./(components)/PageSegmentMain";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";
import Contact from "../../../../components/Contact";

import faqs from "../../../../faqs/accesibility";

import deskGraph from "../../../../public/pageHeros/deskGraph.webp";
import calcMob from "../../../../public/pageHeros/mob/calcMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-word/accessibility/",
      url: "https://www.officeexperts.com.au/services/microsoft-word/accessibility/",
      name: "Word Accessibility Solutions | Microsoft Word Accessibility | Word Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au/#organization",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-word/accessibility/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-word/accessibility/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-word/accessibility/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.officeexperts.com.au/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Our Microsoft Word Services",
          item: "https://www.officeexperts.com.au/services/microsoft-word/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Accessibility",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.officeexperts.com.au/#website",
      url: "https://www.officeexperts.com.au/",
      name: "Office Experts Group: Microsoft Excel Experts, Microsoft Access Database Experts, Microsoft Word Experts, PowerPoint Experts, Azure, Power BI, SQL Server, SharePoint, Microsoft Office 365",
      description:
        "Your Microsoft Office Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.officeexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.officeexperts.com.au/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
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
        title="Accessibility"
        desktopImage={deskGraph}
        mobileImage={calcMob}
        altDesk={"Graphs on a table"}
        altMob={"Calculator on a table"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
