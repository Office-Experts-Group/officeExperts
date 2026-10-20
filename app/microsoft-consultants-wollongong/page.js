// app/microsoft-consultants-wollongong/page.js
import React from "react";
// Loads below-the-fold sections in separate chunks. They are still rendered on the server.
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import WollongongIntro from "./(components)/WollongongIntro";

const WollongongServices = dynamic(
  () => import("./(components)/WollongongServices"),
);
const WollongongContext = dynamic(
  () => import("./(components)/WollongongContext"),
);
const WollongongWhy = dynamic(() => import("./(components)/WollongongWhy"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

import { faqs } from "./(data)/wollongongFaqs";

import wollongong from "@/public/pageHeros/wollongong.webp";
import wollongongMob from "@/public/pageHeros/mob/wollongongMob.webp";

export const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-wollongong";

export const TITLE = "Microsoft Consultants Wollongong | Office Experts Group";

export const DESCRIPTION =
  "Illawarra businesses get custom Microsoft solutions, clear communication and ongoing support from a national team of senior specialists. Est. 2000";

// Case studies shown between the industries and the FAQ. Descriptions are taken from the
// case study summaries, and none claims a Wollongong client.
const caseStudies = [
  {
    href: "/case-studies/community-services-excel-consolidation-rebuild",
    title: "One workbook for four locations",
    image: "/case-studies/community-services-excelLg.png",
    description:
      "A 400MB linked spreadsheet across four sites became a row-based template with a one-click Power Query refresh.",
    linkText: "See the consolidation rebuild",
  },
  {
    href: "/case-studies/sporting-goods-agentic-ai-customer-service",
    title: "Agentic AI for customer service",
    image: "/case-studies/sporting-goods-agentic-customer-serviceLg.png",
    description:
      "A chained agentic AI system on Power Automate and Power Apps cut ticket resolution time from 48 hours to 3.",
    linkText: "See the AI service build",
  },
  {
    href: "/case-studies/professional-services-sharepoint-foundation-workshops",
    title: "SharePoint foundations",
    image: "/case-studies/professional-services-sharepoint-foundationLg.png",
    description:
      "Live workshops moved a team off shared logins and onto a proper site structure with Owners, Members and Visitors access.",
    linkText: "See the SharePoint workshops",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateLocalBusinessSchema({
      pageUrl: PAGE_URL,
      city: "Wollongong",
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
      name: TITLE,
      description: DESCRIPTION,
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
          name: "Microsoft Consultants Wollongong",
        },
      ],
    },

    // ── FAQPage: built from the same data as the visible FAQ ──
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
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
          title="Microsoft Consultants Wollongong"
          desktopImage={wollongong}
          mobileImage={wollongongMob}
          altDesk="Wollongong coastline"
          altMob="Wollongong coastline"
        />
        <WollongongIntro />
        <WollongongServices />
        <WollongongContext />
        <RelatedLinks
          theme="dark"
          eyebrow="Case studies"
          heading="Problems you will recognise, already solved"
          text="Projects for other clients that tackled the kind of issues Illawarra teams will recognise."
          links={caseStudies}
        />
        <WollongongWhy />
        <Contact />
      </main>
    </>
  );
};

export default Page;
