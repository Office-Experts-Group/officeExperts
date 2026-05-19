// app/microsoft-consultants-perth/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PerthIntro from "./(components)/PerthIntro";

const PerthServices = dynamic(() => import("./(components)/PerthServices"));
const PerthContext = dynamic(() => import("./(components)/PerthContext"));
const PerthWhy = dynamic(() => import("./(components)/PerthWhy"));
const Contact = dynamic(() => import("../../components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import perth from "../../public/pageHeros/perth.webp";
import perthMob from "../../public/pageHeros/mob/perthMob.webp";

const PAGE_URL = "https://www.officeexperts.com.au/microsoft-consultants-perth";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts Group",
      "Your Microsoft Office Design, Development and Consulting Experts",
    ),

    // ── LocalBusiness ────────────────────────────────────────────────────
    {
      "@type": "LocalBusiness",
      "@id": `${PAGE_URL}#localbusiness`,
      name: "Office Experts Group Perth",
      url: PAGE_URL,
      telephone: "1300102810",
      email: "consult@officeexperts.com.au",
      image: "https://www.officeexperts.com.au/logo.webp",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Perth",
        addressRegion: "WA",
        addressCountry: "AU",
      },
      areaServed: {
        "@type": "State",
        name: "Western Australia",
      },
      knowsAbout: [
        "Microsoft Excel",
        "Microsoft Word",
        "Microsoft Access",
        "Power Platform",
        "Microsoft 365",
        "VBA Development",
        "Custom Office Solutions",
      ],
    },

    // ── WebPage ──────────────────────────────────────────────────────────
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Microsoft Consultants Perth | Office Experts Group Australia",
      description:
        "Australia's leading Microsoft consultants with a local Perth team. For over 25 years we have provided software solutions across the entire Microsoft suite. Contact us for a free consultation.",
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
