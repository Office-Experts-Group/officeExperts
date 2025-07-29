import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment7 from "./(components)/PageSegment7";

import deskGraph from "../../../../public/pageHeros/deskGraph.webp";
import seatMob from "../../../../public/pageHeros/mob/seatMob.webp";

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
        "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration",
      url: "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration",
      name: "3rd Party Application | Office Integration | Office Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-07-29T00:00:00+00:00",
      description:
        "Custom Office add-ins for Word, PowerPoint, Outlook and more. Our developers create seamless solutions that work across your entire Microsoft Office ecosystem.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration#breadcrumb",
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
          name: "3rd Party Application or Office Integration",
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
        title="Third Party Application or Office Integration"
        desktopImage={deskGraph}
        mobileImage={seatMob}
        altDesk={"Desk with graphs"}
        altMob={"empty office chair"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegment7 />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
