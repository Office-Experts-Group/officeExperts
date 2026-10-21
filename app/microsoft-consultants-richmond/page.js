// app/microsoft-consultants-richmond/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import RichmondIntro from "./(components)/RichmondIntro";

const RichmondServices = dynamic(
  () => import("./(components)/RichmondServices"),
);
const RichmondContext = dynamic(() => import("./(components)/RichmondContext"));
const RichmondWhy = dynamic(() => import("./(components)/RichmondWhy"));
const Contact = dynamic(() => import("@/components/Contact"));

import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

// TODO: add these two images (see hand-off notes)
import richmond from "@/public/pageHeros/richmond.webp";
import richmondMob from "@/public/pageHeros/mob/richmondMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-richmond";

const PAGE_DESCRIPTION =
  "Microsoft consulting for Richmond businesses: Excel, Word, Access, Power Platform, Microsoft 365, AI agents and custom builds. 25+ years. Free assessment.";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateLocalBusinessSchema({
      pageUrl: PAGE_URL,
      city: "Richmond",
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
      name: "Microsoft Consultants Richmond | Office Experts Group Australia",
      description: PAGE_DESCRIPTION,
      about: { "@id": `${PAGE_URL}#localbusiness` },
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2026-10-20T00:00:00+11:00",
      dateModified: "2026-10-20T00:00:00+11:00",
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
          name: "Microsoft Consultants Richmond",
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
          title="Microsoft Consultants Richmond"
          desktopImage={richmond}
          mobileImage={richmondMob}
          altDesk="Richmond and the Melbourne skyline"
          altMob="Richmond and the Melbourne skyline"
        />
        <RichmondIntro />
        <RichmondServices />
        <RichmondContext />
        <RichmondWhy />
        <Contact />
      </main>
    </>
  );
};

export default Page;
