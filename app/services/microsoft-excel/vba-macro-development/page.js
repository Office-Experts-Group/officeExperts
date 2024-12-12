import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegmentCenter from "./(components)/PageSegmentCenter";
import PageSegment3 from "./(components)/PageSegment3";
import Segment3Copy from "./(components)/Segment3Copy";
import Promo from "./(components)/Promo";

import puzzle from "../../../../public/pageHeros/puzzle.webp";
import puzzleMob from "../../../../public/pageHeros/mob/puzzleMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/vba-macro-development/",
      url: "https://www.officeexperts.com.au/services/microsoft-excel/vba-macro-development/",
      name: "VBA Macro Developers | Office VBA and Macro Development | VBA Programmers | Macro Programmers | Excel Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-excel/vba-macro-development/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-excel/vba-macro-development/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/vba-macro-development/#breadcrumb",
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
          name: "VBA Macro Development",
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
        title="VBA and Macro Development"
        desktopImage={puzzle}
        mobileImage={puzzleMob}
        altDesk={"people holding large puzzle pieces"}
        altMob={"people holding large puzzle pieces"}
      />
      <PageSegmentMain />
      <PageSegment3 />
      <PageSegmentCenter />
      <Segment3Copy />
      <Promo />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
