// app/microsoft-consultants-adelaide/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import AdelaideIntro from "./(components)/AdelaideIntro";

const AdelaideServices = dynamic(
  () => import("./(components)/AdelaideServices"),
);
const AdelaideContext = dynamic(() => import("./(components)/AdelaideContext"));
const AdelaideWhy = dynamic(() => import("./(components)/AdelaideWhy"));
const Contact = dynamic(() => import("@/components/Contact"));

import { generateLocalBusinessSchema } from "@/utils/schemaGenerators";

import adelaide from "@/public/pageHeros/adelaide.webp";
import adelaideMob from "@/public/pageHeros/mob/adelaideMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-adelaide";

const PAGE_DESCRIPTION =
  "Microsoft consultants supporting Adelaide businesses with custom Excel tools, Access databases, Power Platform development and practical AI automation.";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateLocalBusinessSchema({
      pageUrl: PAGE_URL,
      city: "Adelaide",
      regionCode: "SA",
      nearbyAreas: [], // optional
    }),

    // ── WebPage ──────────────────────────────
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Microsoft Consultants Adelaide | Office Experts Group Australia",
      description: PAGE_DESCRIPTION,
      about: { "@id": `${PAGE_URL}#localbusiness` },
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2026-10-20T00:00:00+10:30",
      dateModified: "2026-10-20T00:00:00+10:30",
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
          name: "Microsoft Consultants Adelaide",
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
          title="Microsoft Consultants Adelaide"
          desktopImage={adelaide}
          mobileImage={adelaideMob}
          altDesk="Adelaide city skyline"
          altMob="Adelaide city skyline"
        />
        <AdelaideIntro />
        <AdelaideServices />
        <AdelaideContext />
        <AdelaideWhy />
        <Contact />
      </main>
    </>
  );
};

export default Page;
