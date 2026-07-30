// app/services/activex-vbscript-migration/page.js
import React from "react";
import dynamic from "next/dynamic";

import MigrationHero from "./(components)/MigrationHero";
import ServiceHero from "../../../components/ServiceHero";

const AffectedCheck = dynamic(() => import("./(components)/AffectedCheck"));
const MigrationReplaces = dynamic(
  () => import("./(components)/MigrationReplaces"),
);
const MigrationFaq = dynamic(() => import("./(components)/MigrationFaq"));
const ExpertsAwait = dynamic(() => import("../../../components/ExpertsAwait"));
const Promo = dynamic(() => import("../../../components/Promo"));
const Contact = dynamic(() => import("../../../components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../utils/schemaGenerators";

import migrate from "../../../public/pageheros/migrate.webp";
import migrateMob from "../../../public/pageheros/mob/migrateMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/activex-vbscript-migration";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts Group",
      "Australia-wide Microsoft Office Programming, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Migrate Legacy ActiveX & VBScript Solutions | Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      datePublished: "2026-07-29T00:00:00+00:00",
      dateModified: "2026-07-29T00:00:00+00:00",
      description:
        "Microsoft is disabling ActiveX and retiring VBScript across Word, Excel, PowerPoint and Access. Our consultants modernise your legacy macros and controls so nothing breaks.",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
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
          name: "ActiveX & VBScript Migration",
          item: PAGE_URL,
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
        title="Modernise Your Legacy ActiveX & VBScript Systems"
        desktopImage={migrate}
        mobileImage={migrateMob}
        altDesk={"old computer evolving into newer model"}
        altMob={"old computer evolving into newer model"}
      />
      <MigrationHero />
      <AffectedCheck />
      <MigrationReplaces />
      <MigrationFaq />

      <ExpertsAwait />
      <Promo
        h2="Stop Waiting For Something To Break"
        p="Get ahead of the ActiveX and VBScript changes before they cost you downtime. Our consultants will audit your systems and map out exactly what needs attention."
      />
      <Contact />
    </>
  );
};

export default Page;
