// app/microsoft-consultants-central-coast-nsw/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import CentralCoastIntro from "./(components)/CentralCoastIntro";

const CentralCoastServices = dynamic(
  () => import("./(components)/CentralCoastServices"),
);
const CentralCoastContext = dynamic(
  () => import("./(components)/CentralCoastContext"),
);
const CentralCoastFaq = dynamic(() => import("./(components)/CentralCoastFaq"));
const Contact = dynamic(() => import("../../components/Contact"));

import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import centralCoast from "../../public/pageHeros/centralCoast.webp";
import centralCoastMob from "../../public/pageHeros/mob/centralCoastMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-central-coast-nsw";

const PAGE_DESCRIPTION =
  "Microsoft consultants for the NSW Central Coast, helping businesses improve reporting, streamline manual processes and connect systems with custom Microsoft solutions.";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateLocalBusinessSchema({
      pageUrl: PAGE_URL,
      city: "Central Coast",
      regionCode: "NSW",
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
      name: "Microsoft Consultants Central Coast NSW | Office Experts Group",
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
          name: "Microsoft Consultants Central Coast NSW",
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
          title="Microsoft Consultants Central Coast NSW"
          desktopImage={centralCoast}
          mobileImage={centralCoastMob}
          altDesk="Central Coast NSW coastline"
          altMob="Central Coast NSW coastline"
        />
        <CentralCoastIntro />
        <CentralCoastServices />
        <CentralCoastContext />
        <CentralCoastFaq />
        <Contact />
      </main>
    </>
  );
};

export default Page;
