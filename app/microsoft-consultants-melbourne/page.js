// app/microsoft-consultants-melbourne/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import MelbourneIntro from "./(components)/MelbourneIntro";

// Dynamically imported below the fold
const MelbourneServices = dynamic(
  () => import("./(components)/MelbourneServices"),
);
const MelbourneContext = dynamic(
  () => import("./(components)/MelbourneContext"),
);
const MelbourneWhy = dynamic(() => import("./(components)/MelbourneWhy"));
const Contact = dynamic(() => import("../../components/Contact"));

import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import melbourne from "../../public/pageHeros/melbourne.webp";
import melbourneMob from "../../public/pageHeros/mob/melbourneMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-melbourne";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateLocalBusinessSchema({
      pageUrl: PAGE_URL,
      city: "Melbourne",
      regionCode: "VIC",
      nearbyAreas: [], // optional
    }),
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts Group",
      "Your Microsoft Office Design, Development and Consulting Experts",
    ),

    // ── WebPage ──────────────────────────────
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Microsoft Consultants Melbourne | Office Experts Group Australia",
      description:
        "Office Experts Group is an Australian Microsoft consultancy with specialists serving Melbourne and all major cities. Remote and on-site support. Get a free assessment today.",
      about: { "@id": `${PAGE_URL}#localbusiness` },
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2026-05-13T00:00:00+10:00",
      dateModified: "2026-05-13T00:00:00+10:00",
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

    // ── BreadcrumbList ───────────────────────
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
          name: "Microsoft Consultants Melbourne",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        <ServiceHero
          title="Microsoft Consultants Melbourne"
          desktopImage={melbourne}
          mobileImage={melbourneMob}
          altDesk="Melbourne skyline"
          altMob="Melbourne skyline"
        />
        <MelbourneIntro />
        <MelbourneServices />
        <MelbourneContext />
        <MelbourneWhy />
        <Contact />
      </main>
    </>
  );
};

export default Page;
