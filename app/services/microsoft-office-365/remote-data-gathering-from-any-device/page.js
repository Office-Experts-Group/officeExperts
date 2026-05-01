// app/services/microsoft-office-365/remote-data-gathering-from-any-device/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../../../components/ServiceHero";
import Introduction from "./(components)/Introduction";

const Contact = dynamic(() => import("../../../../components/Contact"));
const RDGCapabilities = dynamic(() => import("./(components)/RDGCapabilities"));
const RDGUseCases = dynamic(() => import("./(components)/RDGUseCases"));
const RDGHowItWorks = dynamic(() => import("./(components)/RDGHowItWorks"));

import remote from "../../../../public/pageHeros/remote.webp";
import remoteMob from "../../../../public/pageHeros/mob/remoteMob.webp";

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
        "https://www.officeexperts.com.au/services/microsoft-office-365/remote-data-gathering-from-any-device",
      url: "https://www.officeexperts.com.au/services/microsoft-office-365/remote-data-gathering-from-any-device",
      name: "Remote Data Gathering from Any Device | Office Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-05-01T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-office-365/remote-data-gathering-from-any-device#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-office-365/remote-data-gathering-from-any-device",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-office-365/remote-data-gathering-from-any-device#breadcrumb",
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
          name: "Remote Data Gathering from Any Device",
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
        title="Remote Data Gathering from Any Device"
        desktopImage={remote}
        mobileImage={remoteMob}
        altDesk={"remote data access with microsoft"}
        altMob={"remote data access with microsoft"}
      />
      <Introduction />
      <RDGCapabilities />
      <RDGUseCases />
      <RDGHowItWorks />
      <Contact />
    </>
  );
};

export default Page;
