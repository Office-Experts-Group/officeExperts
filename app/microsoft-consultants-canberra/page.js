// app/microsoft-consultants-canberra/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import CanberraIntro from "./(components)/CanberraIntro";

const CanberraServices = dynamic(
  () => import("./(components)/CanberraServices"),
);
const CanberraContext = dynamic(() => import("./(components)/CanberraContext"));
const CanberraWhy = dynamic(() => import("./(components)/CanberraWhy"));
const Contact = dynamic(() => import("@/components/Contact"));

import { generateLocalBusinessSchema } from "@/utils/schemaGenerators";

import canberra from "@/public/pageHeros/canberra.webp";
import canberraMob from "@/public/pageHeros/mob/canberraMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-canberra";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateLocalBusinessSchema({
      pageUrl: PAGE_URL,
      city: "Canberra",
      regionCode: "ACT",
      nearbyAreas: [], // optional
    }),

    // ── WebPage ──────────────────────────────
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Microsoft Consultants Canberra | Office Experts Group",
      description:
        "Canberra businesses supported by an Australia-wide Microsoft consulting team. Over 25 years experience improving workflows, reporting, document systems and business efficiency.",
      about: { "@id": `${PAGE_URL}#localbusiness` },
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2026-05-20T00:00:00+10:00",
      dateModified: "2026-05-20T00:00:00+10:00",
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
          name: "Microsoft Consultants Canberra",
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
          title="Microsoft Consultants Canberra"
          desktopImage={canberra}
          mobileImage={canberraMob}
          altDesk="Canberra city and Parliament House"
          altMob="Canberra city skyline"
        />
        <CanberraIntro />
        <CanberraServices />
        <CanberraContext />
        <CanberraWhy />
        <Contact />
      </main>
    </>
  );
};

export default Page;
