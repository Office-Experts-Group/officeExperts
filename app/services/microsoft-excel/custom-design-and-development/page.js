import React from "react";

import Contact from "../../../../components/Contact";
import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";
import PageSegmentCenter from "./(components)/PageSegmentCenter";
import SegmentMainCopy from "./(components)/SegmentMainCopy";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Promo from "../../../../components/Promo";
import Contents from "./(components)/Contents";
import ContentsCopy from "./(components)/ContentsCopy";

import graphic from "../../../../public/pageHeros/graphic.webp";
import graphTableMob from "../../../../public/pageHeros/mob/graphTableMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/custom-design-and-development/",
      url: "https://www.officeexperts.com.au/services/microsoft-excel/custom-design-and-development/",
      name: "Custom Design and Development | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "We can build What You Need! We have extensive experience in all aspects of Excel custom design and development including. Call us 1300102810",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-excel/custom-design-and-development/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-excel/custom-design-and-development/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/custom-design-and-development/#breadcrumb",
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
          name: "Custom Design and Development",
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
      <ContentsCopy />
      <ServiceHero
        title="Custom Design and Development"
        desktopImage={graphic}
        mobileImage={graphTableMob}
        altDesk={"digital graphic"}
        altMob={"graphs on a table"}
      />
      <PageSegmentMain2 />
      <PageSegmentCenter />
      <SegmentMainCopy />
      <ExpertsAwait />
      <Promo
        h2="Custom Excel Solutions"
        p="Looking for bespoke Excel solutions? Our experts can automate, integrate, and transform your data processes for greater efficiency and performance."
      />
      <Contact />
    </>
  );
};

export default Page;
