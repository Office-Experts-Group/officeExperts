// app/microsoft-consultants-gold-coast/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import GoldCoastIntro from "./(components)/GoldCoastIntro";

const GoldCoastServices = dynamic(
  () => import("./(components)/GoldCoastServices"),
);
const GoldCoastContext = dynamic(
  () => import("./(components)/GoldCoastContext"),
);
const GoldCoastWhy = dynamic(() => import("./(components)/GoldCoastWhy"));
const Contact = dynamic(() => import("@/components/Contact"));

import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

import goldCoast from "@/public/pageHeros/goldCoast.webp";
import goldCoastMob from "@/public/pageHeros/mob/goldCoastMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-gold-coast";

const PAGE_DESCRIPTION =
  "Need better business systems on the Gold Coast? Our Microsoft consultants build custom AI agents, databases, Power Apps and any other microsoft solution you need.";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateLocalBusinessSchema({
      pageUrl: PAGE_URL,
      city: "Gold Coast",
      regionCode: "QLD",
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
      name: "Microsoft Consultants Gold Coast | Office Experts Group Australia",
      description: PAGE_DESCRIPTION,
      about: { "@id": `${PAGE_URL}#localbusiness` },
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2026-10-20T00:00:00+10:00",
      dateModified: "2026-10-20T00:00:00+10:00",
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
          name: "Microsoft Consultants Gold Coast",
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
          title="Microsoft Consultants Gold Coast"
          desktopImage={goldCoast}
          mobileImage={goldCoastMob}
          altDesk="Gold Coast skyline and beach"
          altMob="Gold Coast skyline and beach"
        />
        <GoldCoastIntro />
        <GoldCoastServices />
        <GoldCoastContext />
        <GoldCoastWhy />
        <Contact />
      </main>
    </>
  );
};

export default Page;
