import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";

import support from "../../../../public/pageHeros/support.webp";
import teamMob from "../../../../public/pageHeros/mob/teamMob.webp";

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
        "https://www.officeexperts.com.au/services/microsoft-office-365/exchange-online-setup-and-support",
      url: "https://www.officeexperts.com.au/services/microsoft-office-365/exchange-online-setup-and-support",
      name: "Exchange 365 Setup and Support | Exchange 365 Experts | Office 365 Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-05-29T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-office-365/exchange-online-setup-and-support#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-office-365/exchange-online-setup-and-support",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-office-365/exchange-online-setup-and-support#breadcrumb",
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
          name: "Our Microsoft Office 365 Services",
          item: "https://www.officeexperts.com.au/services/microsoft-office-365",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Exchange Online Setup and Support",
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
        title="Setup and Assistance with Microsoft Office 365"
        desktopImage={support}
        mobileImage={teamMob}
        altDesk={"support team"}
        altMob={"team of people"}
      />
      <PageSegmentMain />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
