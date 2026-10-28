import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

// Below-the-fold components are split into separate chunks with next/dynamic.
// They are still server rendered (dynamic() keeps SSR on by default), so crawlers get the full HTML.
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const ExpertsAwait = dynamic(() => import("@/components/ExpertsAwait"));
const Contact = dynamic(() => import("@/components/Contact"));

import notes from "@/public/pageHeros/notes.webp";
import glassesMob from "@/public/pageHeros/mob/glassesMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/office-and-sql-server-integration",
      url: "https://www.officeexperts.com.au/services/office-and-sql-server-integration",
      name: "Office and SQL Server Integration | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-07-29T00:00:00+00:00",
      description:
        "We can setup custom solutions for you in Access, Excel, Word and Visual Studio which can modify and interact with SQL Server databases.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/office-and-sql-server-integration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/office-and-sql-server-integration",
          ],
        },
      ],
    },
    {
      // "By business solution" 301 redirects to /services, so it's left out of the trail
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/office-and-sql-server-integration#breadcrumb",
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
          name: "Office and SQL Server Integration",
          item: "https://www.officeexperts.com.au/services/office-and-sql-server-integration",
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
        title={"Microsoft Office and SQL Server Integration"}
        desktopImage={notes}
        mobileImage={glassesMob}
        altDesk={"notes on desk"}
        altMob={"glasses on a table"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
