import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import FAQ from "../../../../components/FAQSection";

import { faqs } from "../../../../faqs/pivot-tables.js";

import graphTable from "../../../../public/pageHeros/graphTable.webp";
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
        "https://www.officeexperts.com.au/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions",
      url: "https://www.officeexperts.com.au/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions",
      name: "Pivot Tables | Charts and Reporting Solutions | Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-07-28T00:00:00+00:00",
      description:
        "We are Reporting Solution Experts! If you need help with charting, pivot charts, pivot tables or any other Excel features then our experts can help.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/pivot-tables-charts-and-reporting-solutions#breadcrumb",
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
          name: "Excel Experts Services",
          item: "https://www.officeexperts.com.au/services/microsoft-excel",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Pivot Tables, Charts and Reporting Solutions",
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
        title="Pivot Tables, Charts and Reporting"
        desktopImage={graphTable}
        mobileImage={graphTableMob}
        altDesk={"graphs on a table"}
        altMob={"graphs on a table"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <ExpertsAwait />
      <div style={{ marginTop: "6em" }}>
        <FAQ faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
