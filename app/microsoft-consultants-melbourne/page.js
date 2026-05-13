// app/microsoft-consultants-melbourne/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import MelbourneIntro from "./(components)/MelbourneIntro";

// Dynamically imported below the fold
const MelbourneServices = dynamic(
  () => import("./(components)/MelbourneServices"),
);
const MelbourneContext = dynamic(
  () => import("./(components)/MelbourneContext"),
);
const MelbourneWhy = dynamic(() => import("./(components)/MelbourneWhy"));
const Contact = dynamic(() => import("../../components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import melbourne from "../../public/pageHeros/melbourne.webp";
import melbourneMob from "../../public/pageHeros/mob/melbourneMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/microsoft-consultants-melbourne";

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
      name: "Office Experts Group Melbourne",
      url: PAGE_URL,
      telephone: "1300102810",
      email: "consult@officeexperts.com.au",
      image: "https://www.officeexperts.com.au/logo.webp",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "VIC",
        addressCountry: "AU",
      },
      areaServed: {
        "@type": "State",
        name: "Victoria",
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
      name: "Microsoft Consultants Melbourne | Office Experts Group Australia",
      description:
        "Office Experts Group is an Australian Microsoft consultancy with specialists serving Melbourne and all major cities. Remote and on-site support. Get a free assessment today.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2026-05-13T00:00:00+10:00",
      dateModified: "2026-05-13T00:00:00+10:00",
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
          name: "Locations",
          item: "https://www.officeexperts.com.au/locations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Consultants Melbourne",
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
          title="Microsoft Consultants Melbourne"
          desktopImage={melbourne}
          mobileImage={melbourneMob}
          altDesk="Melbourne skyline"
          altMob="Melbourne skyline"
        />
        <MelbourneIntro />
        <MelbourneServices />
        <MelbourneContext />
        <MelbourneWhy />
        <Contact />
      </main>
    </>
  );
};

export default Page;
