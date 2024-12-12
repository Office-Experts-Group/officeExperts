import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";

import notes from "../../../../public/pageHeros/notes.webp";
import glassesMob from "../../../../public/pageHeros/mob/glassesMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/",
      url: "https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/",
      name: "Office and SQL Server Integration | Office Expert Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "We can setup custom solutions for you in Access, Excel, Word and Visual Studio which can modify. Contact us 1300 102 810",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/#breadcrumb",
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
          name: "Our Services By Business Solution",
          item: "https://www.officeexperts.com.au/services/by-business-solution/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Office and SQL Server Integration",
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
