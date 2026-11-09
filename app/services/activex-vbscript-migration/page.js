// app/services/activex-vbscript-migration/page.js
import React from "react";
import dynamic from "next/dynamic";

import MigrationHero from "./(components)/MigrationHero";

const AffectedCheck = dynamic(() => import("./(components)/AffectedCheck"));
const MigrationReplaces = dynamic(
  () => import("./(components)/MigrationReplaces"),
);
const MigrationFaq = dynamic(() => import("./(components)/MigrationFaq"));
const ExpertsAwait = dynamic(() => import("@/components/ExpertsAwait"));
const Promo = dynamic(() => import("@/components/Promo"));
const Contact = dynamic(() => import("@/components/Contact"));

const PAGE_URL =
  "https://www.officeexperts.com.au/services/activex-vbscript-migration";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Migrate Legacy ActiveX & VBScript Solutions",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      datePublished: "2026-07-29T00:00:00+00:00",
      dateModified: "2026-07-29T00:00:00+00:00",
      description:
        "Microsoft is disabling ActiveX and retiring VBScript across Office. We modernise your legacy macros and controls so nothing breaks.",
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
      <MigrationHero />
      <AffectedCheck />
      <MigrationReplaces />
      <MigrationFaq />

      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
