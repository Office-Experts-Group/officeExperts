// app/microsoft-consultants-cairns/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import CairnsIntro from "./(components)/CairnsIntro";

const CairnsIndustries = dynamic(
  () => import("./(components)/CairnsIndustries"),
);
const CairnsServices = dynamic(() => import("./(components)/CairnsServices"));
const CairnsApproach = dynamic(() => import("./(components)/CairnsApproach"));
const CairnsWhy = dynamic(() => import("./(components)/CairnsWhy"));
const Contact = dynamic(() => import("../../components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import cairns from "../../public/pageHeros/cairns.webp";
import cairnsMob from "../../public/pageHeros/mob/cairnsMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-cairns";

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
      name: "Office Experts Group Cairns",
      url: PAGE_URL,
      telephone: "1300102810",
      email: "consult@officeexperts.com.au",
      image: "https://www.officeexperts.com.au/logo.webp",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cairns",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Cairns",
        },
        {
          "@type": "AdministrativeArea",
          name: "Far North Queensland",
        },
      ],
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
      name: "Microsoft Consultants Cairns | Office Experts Group Australia",
      description:
        "Cairns-based Microsoft consultants backed by a national team of 25+ specialists. Over 25 years helping Far North Queensland businesses streamline operations with Excel, Word, Access, Power Platform and Microsoft 365.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2026-05-21T00:00:00+10:00",
      dateModified: "2026-05-21T00:00:00+10:00",
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
          name: "Microsoft Consultants Cairns",
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
          title="Microsoft Consultants Cairns"
          desktopImage={cairns}
          mobileImage={cairnsMob}
          altDesk="Cairns beaches, Far North Queensland"
          altMob="Palm Cove, Far North Queensland"
        />
        <CairnsIntro />
        <CairnsIndustries />
        <CairnsServices />
        <CairnsApproach />
        <CairnsWhy />
        <Contact />
      </main>
    </>
  );
};

export default Page;
