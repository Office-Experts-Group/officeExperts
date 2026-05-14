// app/microsoft-consultants-sydney/page.js
import React from "react";
import dynamic from "next/dynamic";

// Above-the-fold components loaded eagerly
import ServiceHero from "../../components/ServiceHero";
import SydneyIntro from "./(components)/SydneyIntro";

// Below-the-fold components loaded dynamically for performance
const SydneyServices = dynamic(() => import("./(components)/SydneyServices"));
const SydneyContext = dynamic(() => import("./(components)/SydneyContext"));
const SydneyWhy = dynamic(() => import("./(components)/SydneyWhy"));
const Contact = dynamic(() => import("../../components/Contact"));

// Schema utility functions shared across all pages
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

// Hero images — Sydney-specific assets
import sydney from "../../public/pageHeros/sydney.webp";
import sydneyMob from "../../public/pageHeros/mob/sydneyMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-sydney";

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

    // ── LocalBusiness ────────────────────────
    {
      "@type": "LocalBusiness",
      "@id": `${PAGE_URL}#localbusiness`,
      name: "Office Experts Group Sydney",
      url: PAGE_URL,
      telephone: "1300102810",
      email: "consult@officeexperts.com.au",
      image: "https://www.officeexperts.com.au/logo.webp",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "NSW",
        addressCountry: "AU",
      },
      areaServed: {
        "@type": "State",
        name: "New South Wales",
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

    // ── WebPage ──────────────────────────────
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Microsoft Consultants Sydney | Office Experts Group Australia",
      description:
        "Microsoft Office specialists operating nationally since 2000. Office Experts Group has local consultants in Sydney delivering expert solutions across the entire Microsoft suite.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2026-05-14T00:00:00+10:00",
      dateModified: "2026-05-14T00:00:00+10:00",
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
          name: "Microsoft Consultants Sydney",
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
          title="Microsoft Consultants Sydney"
          desktopImage={sydney}
          mobileImage={sydneyMob}
          altDesk="Sydney harbour and city skyline"
          altMob="Sydney harbour and city skyline"
        />
        <SydneyIntro />
        <SydneyServices />
        <SydneyContext />
        <SydneyWhy />
        <Contact />
      </main>
    </>
  );
};

export default Page;
