import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentIntro from "./(components)/PageSegmentIntro";
import MicrosoftSolutions from "./(components)/MicrosoftSolutions";
import WebCapabilities from "./(components)/Webcapabilities";
import HowWeWork from "./(components)/Howwework";
import Contact from "../../../../components/Contact";

import graphic from "../../../../public/pageHeros/graphic.webp";
import graphTableMob from "../../../../public/pageHeros/mob/graphTableMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
      url: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
      name: "Microsoft Online Solutions | Power Pages, SharePoint & Custom Web Apps",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-04-24T00:00:00+00:00",
      description:
        "Custom online solutions using Microsoft 365, SharePoint, Power Platform and modern Web Development Frameworks to streamline your business.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/online-solutions#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/online-solutions#breadcrumb",
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
          name: "Our Services By Business Solution",
          item: "https://www.officeexperts.com.au/services/by-business-solution",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Online Solutions",
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
        title={"Custom Online Solutions"}
        desktopImage={graphic}
        mobileImage={graphTableMob}
        altDesk={"digital graphic"}
        altMob={"graphs on a table"}
      />
      <PageSegmentIntro />
      <MicrosoftSolutions />
      <WebCapabilities />
      <HowWeWork />
      <Contact />
    </>
  );
};

export default Page;
