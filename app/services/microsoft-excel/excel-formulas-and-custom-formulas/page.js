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

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";
import PageSegmentCenter from "./(components)/PageSegmentCenter";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas",
      url: "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas",
      name: "Excel Formulas and Custom Formulas | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-07-28T00:00:00+00:00",
      description:
        "Professional Excel support and training services via remote access or phone. Our expert consultants provide instant guidance, troubleshooting, and dedicated support for individuals and teams.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/excel-formulas-and-custom-formulas#breadcrumb",
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
          name: "Excel Formulas and Custom Formulas",
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
      <PageSegmentCenter />
      <div style={{ marginTop: "6rem" }}>
        <FAQ faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
