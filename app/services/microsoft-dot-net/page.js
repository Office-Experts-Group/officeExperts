import React from "react";

import Contact from "../../../components/Contact";
import ExpertsAwait from "../../../components/ExpertsAwait";
import ServiceHero from "../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment7 from "./(components)/PageSegment7";

import desk from "../../../public/pageHeros/desk.webp";
import seatMob from "../../../public/pageHeros/mob/seatMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/microsoft-dot-net",
      url: "https://www.officeexperts.com.au/services/microsoft-dot-net",
      name: "Microsoft .NET Services | C# | VB.net | VSTO | Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-03-26T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-dot-net#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-dot-net",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-dot-net#breadcrumb",
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
          name: "Microsoft .NET",
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
        title={"Microsoft .NET"}
        desktopImage={desk}
        mobileImage={seatMob}
        altDesk={"desk"}
        altMob={"empty office chair"}
      />
      <PageSegmentMain />
      <PageSegment7 />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
