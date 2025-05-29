import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";

import marker from "../../../../public/pageHeros/marker.webp";
import glassesMob from "../../../../public/pageHeros/mob/glassesMob.webp";

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
        "https://www.officeexperts.com.au/services/microsoft-office-365/cloud-backup-with-onedrive",
      url: "https://www.officeexperts.com.au/services/microsoft-office-365/cloud-backup-with-onedrive",
      name: "Help OneDrive for Business | OneDrive Support | Microsoft Office 365",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-05-29T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-office-365/cloud-backup-with-onedrive#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-office-365/cloud-backup-with-onedrive",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-office-365/cloud-backup-with-onedrive#breadcrumb",
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
          name: "Cloud Backup with OneDrive",
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
        title="Cloud Backup with OneDrive"
        desktopImage={marker}
        mobileImage={glassesMob}
        altDesk={"marker with graphics"}
        altMob={"glasses on a desk"}
      />
      <PageSegmentMain />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
