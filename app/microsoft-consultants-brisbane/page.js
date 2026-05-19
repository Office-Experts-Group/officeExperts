// app/microsoft-consultants-brisbane/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import BrisbaneIntro from "./(components)/BrisbaneIntro";

const BrisbaneServices = dynamic(
  () => import("./(components)/BrisbaneServices"),
);
const BrisbaneContext = dynamic(() => import("./(components)/BrisbaneContext"));
const BrisbaneWhy = dynamic(() => import("./(components)/BrisbaneWhy"));
const Contact = dynamic(() => import("../../components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import brisbane from "../../public/pageHeros/brisbane.webp";
import brisbaneMob from "../../public/pageHeros/mob/brisbaneMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-brisbane";

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
      name: "Office Experts Group Brisbane",
      url: PAGE_URL,
      telephone: "1300102810",
      email: "consult@officeexperts.com.au",
      image: "https://www.officeexperts.com.au/logo.webp",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brisbane",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
      areaServed: {
        "@type": "State",
        name: "Queensland",
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
      name: "Microsoft Consultants Brisbane | Office Experts Group Australia",
      description:
        "Nation-wide Microsoft consulting organisation with a local Brisbane team. Over 25yrs of experience helping Australian businesses with software solutions. Contact us for a free assessment today.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2026-05-19T00:00:00+10:00",
      dateModified: "2026-05-19T00:00:00+10:00",
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
          name: "Microsoft Consultants Brisbane",
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
          title="Microsoft Consultants Brisbane"
          desktopImage={brisbane}
          mobileImage={brisbaneMob}
          altDesk="Brisbane city skyline"
          altMob="Brisbane city skyline"
        />
        <BrisbaneIntro />
        <BrisbaneServices />
        <BrisbaneContext />
        <BrisbaneWhy />
        <Contact />
      </main>
    </>
  );
};

export default Page;
