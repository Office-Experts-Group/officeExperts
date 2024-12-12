import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Contact from "../../../../components/Contact";
import Segment4Repeat from "./(components)/Segment4Repeat";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";

import faqs from "../../../../faqs/fill-in-forms";

import penPoint from "../../../../public/pageHeros/penPoint.webp";
import glassesMob from "../../../../public/pageHeros/mob/glassesMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-word/fill-in-forms/",
      url: "https://www.officeexperts.com.au/services/microsoft-word/fill-in-forms/",
      name: "Expert Creation of Word Fill in Forms | Word Fill In Form Experts | Word Experts",
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
          "https://www.officeexperts.com.au/services/microsoft-word/fill-in-forms/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-word/fill-in-forms/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-word/fill-in-forms/#breadcrumb",
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
          name: "Fill In Forms",
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
        title="Fill In Forms"
        desktopImage={penPoint}
        mobileImage={glassesMob}
        altDesk={"pointing a pen at a computer screen"}
        altMob={"reading glasses on a table"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
