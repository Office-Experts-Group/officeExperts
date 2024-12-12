import React from "react";

import PageSegmentMain from "./(components)/PageSegmentMain";
import ServiceHero from "../../../../components/ServiceHero";
import Contact from "../../../../components/Contact";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import ServicePageCards from "./(components)/ServicePageCards";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment3 from "./(components)/PageSegment3";
import Segment3copy from "./(components)/Segment3copy";
import Segment4Copy from "./(components)/Segment4Copy";
import FAQ from "../../../../components/FAQSection";

import faqs from "../../../../faqs/add-in-development";
import Contents from "./(components)/Contents";

import party from "../../../../public/pageHeros/3rdParty.webp";
import coffeeMob from "../../../../public/pageHeros/mob/coffeeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/add-in-development/",
      url: "https://www.officeexperts.com.au/services/microsoft-excel/add-in-development/",
      name: "Add in Development | Excel add-ins | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "What is an Excel Add-In? An Excel add-in contains code that adds additional functionality to Excel, usually in the form of new functions. Call us 1300102810",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-excel/add-in-development/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-excel/add-in-development/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/add-in-development/#breadcrumb",
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
          name: "Add-in Development",
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
        title={"3rd Party Product Integration"}
        desktopImage={party}
        mobileImage={coffeeMob}
        altDesk={"lady in an office environment"}
        altMob={"coffee on an office desk"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegment3 />
      <ExpertsAwait />
      <Segment3copy />
      <Segment4Copy />
      <FAQ faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
