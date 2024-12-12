import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import VideoSegment from "./(components)/VideoSegment";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQ from "../../../../components/FAQSection";

import faqs from "../../../../faqs/custom-formulas";

import tableGraph from "../../../../public/pageHeros/tableGraph.webp";
import glassesMob from "../../../../public/pageHeros/mob/glassesMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas/",
      url: "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas/",
      name: "Excel Formulas and Custom Formulas | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "We provide Office Microsoft Excel Help Support and Training in Australia. Visit www.officeexperts.com.au to get more info",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas/#breadcrumb",
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
          name: "Excel Experts Services",
          item: "https://www.officeexperts.com.au/services/microsoft-excel/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Excel Formulas and Custom Formulas",
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
        title={"Formulas and Custom Formulas"}
        desktopImage={tableGraph}
        mobileImage={glassesMob}
        altDesk={"table with graphs"}
        altMob={"glasses on a table"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <VideoSegment />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQ faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
