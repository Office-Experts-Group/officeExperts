import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";
import ServicePageCards from "./(components)/ServicePageCards";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";

import PageSegment4 from "./(components)/PageSegment4";
import Segment4Repeat from "./(components)/Segment4Repeat";
import SegmentMainRepeat from "./(components)/SegmentMainRepeat";

import faqs from "../../../../faqs/power-pages";
import Contents from "./(components)/Contents";

import longDesk from "../../../../public/pageHeros/longDesk.webp";
import coffee from "../../../../public/pageHeros/mob/coffeeMob.webp";

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
        "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
      url: "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
      name: "Our Microsoft Power Pages Consulting Services - Office Experts Group: Microsoft Excel Experts, Microsoft Access Database Experts, Microsoft Word Experts, PowerPoint Experts, Azure, Power BI, SQL Server, SharePoint, Microsoft Office 365",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/#breadcrumb",
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
          name: "Our Microsoft Power Platform Services",
          item: "https://www.officeexperts.com.au/services/microsoft-power-platform/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Our Microsoft Power Pages Consulting Services",
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
      <Contents />
      <ServiceHero
        title="Microsoft Power Pages Services"
        desktopImage={longDesk}
        mobileImage={coffee}
        altDesk={"An office desk full of paperwork"}
        altMob={"office supplies and a cup of coffee"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <PageSegment4 />
      <SegmentMainRepeat />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
