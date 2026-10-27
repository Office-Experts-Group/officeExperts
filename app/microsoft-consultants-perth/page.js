// app/microsoft-consultants-perth/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import PerthIntro from "./(components)/PerthIntro";

const PerthServices = dynamic(() => import("./(components)/PerthServices"));
const PerthContext = dynamic(() => import("./(components)/PerthContext"));
const PerthWhy = dynamic(() => import("./(components)/PerthWhy"));
const Contact = dynamic(() => import("@/components/Contact"));

import { generateLocalBusinessSchema } from "@/utils/schemaGenerators";

import perth from "@/public/pageHeros/perth.webp";
import perthMob from "@/public/pageHeros/mob/perthMob.webp";

const PAGE_URL = "https://www.officeexperts.com.au/microsoft-consultants-perth";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateLocalBusinessSchema({
      pageUrl: PAGE_URL,
      city: "Perth",
      regionCode: "WA",
      nearbyAreas: [], // optional
    }),

    // ── WebPage ──────────────────────────────────────────────────────────
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Microsoft Consultants Perth | Office Experts Group Australia",
      description:
        "Australia's leading Microsoft consultants with a local Perth team. For over 25 years we have provided software solutions across the entire Microsoft suite. Contact us for a free consultation.",
      about: { "@id": `${PAGE_URL}#localbusiness` },
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2026-05-18T00:00:00+08:00",
      dateModified: "2026-05-18T00:00:00+08:00",
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

    // ── BreadcrumbList ───────────────────────────────────────────────────
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
          name: "Microsoft Consultants Perth",
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
          title="Microsoft Consultants Perth"
          desktopImage={perth}
          mobileImage={perthMob}
          altDesk="Perth city skyline along the Swan River"
          altMob="Perth city skyline"
        />
        <PerthIntro />
        <PerthServices />
        <PerthContext />
        <PerthWhy />
        <Contact />
      </main>
    </>
  );
};

export default Page;
