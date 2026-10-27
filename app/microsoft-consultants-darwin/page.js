// app/microsoft-consultants-darwin/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import DarwinIntro from "./(components)/DarwinIntro";

const DarwinServices = dynamic(() => import("./(components)/DarwinServices"));
const DarwinContext = dynamic(() => import("./(components)/DarwinContext"));
const DarwinWhy = dynamic(() => import("./(components)/DarwinWhy"));
const Contact = dynamic(() => import("@/components/Contact"));

import { generateLocalBusinessSchema } from "@/utils/schemaGenerators";

// TODO: add these two images (see hand-off notes)
import darwin from "@/public/pageHeros/darwin.webp";
import darwinMob from "@/public/pageHeros/mob/darwinMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-darwin";

const PAGE_DESCRIPTION =
  "Microsoft consulting for Darwin businesses, from Excel and Access development to workflow automation and AI solutions, delivered by our Australia-wide team.";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateLocalBusinessSchema({
      pageUrl: PAGE_URL,
      city: "Darwin",
      regionCode: "NT",
      nearbyAreas: [], // optional
    }),

    // ── WebPage ──────────────────────────────
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Microsoft Consultants Darwin | Office Experts Group Australia",
      description: PAGE_DESCRIPTION,
      about: { "@id": `${PAGE_URL}#localbusiness` },
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2026-10-20T00:00:00+09:30",
      dateModified: "2026-10-20T00:00:00+09:30",
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
          name: "Microsoft Consultants Darwin",
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
          title="Microsoft Consultants Darwin"
          desktopImage={darwin}
          mobileImage={darwinMob}
          altDesk="Darwin waterfront"
          altMob="Darwin waterfront"
        />
        <DarwinIntro />
        <DarwinServices />
        <DarwinContext />
        <DarwinWhy />
        <Contact />
      </main>
    </>
  );
};

export default Page;
