// /app/services/page.js
// Server component: composes the /services hub from its section components.
// All content comes from ./servicesData.js
import React from "react";
import dynamic from "next/dynamic";

// ---- Existing site components ----
import ServiceHero from "../../components/ServiceHero";
import GroupIntro from "./(components)/GroupIntro";

// Below-the-fold components loaded dynamically (still server rendered)
const AiAutomationSection = dynamic(
  () => import("./(components)/AiAutomationSection"),
);
const PowerPlatformSection = dynamic(
  () => import("./(components)/PowerPlatformSection"),
);
const ExcelSection = dynamic(() => import("./(components)/ExcelSection"));
const WordSection = dynamic(() => import("./(components)/WordSection"));
const AccessSection = dynamic(() => import("./(components)/AccessSection"));
const PowerPointSection = dynamic(
  () => import("./(components)/PowerPointSection"),
);
const CustomDevSection = dynamic(
  () => import("./(components)/CustomDevSection"),
);
const Microsoft365Section = dynamic(
  () => import("./(components)/Microsoft365Section"),
);
const CaseStudyCallout = dynamic(
  () => import("./(components)/CaseStudyCallout"),
);
const ServicesFaq = dynamic(() => import("./(components)/ServicesFaq"));
const Contact = dynamic(() => import("../../components/Contact"));

// Hero images. Add these two files to /public/pageHeros (see README)
import servicesHero from "../../public/pageHeros/services.webp";
import servicesHeroMob from "../../public/pageHeros/mob/servicesMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import {
  pageMeta,
  groupIntro,
  navItems,
  ai,
  powerPlatformSection,
  excelSection,
  wordSection,
  accessSection,
  powerPointSection,
  customDevSection,
  microsoft365Section,
  caseStudyCallout,
  specialistSites,
  audiences,
  faqs,
} from "./servicesData";
import { toListItems } from "./servicesHelpers";

const PAGE_URL = `${pageMeta.siteUrl}${pageMeta.path}`;

// ── Structured data ────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      pageMeta.siteUrl,
      "Office Experts",
      "Australia-wide Microsoft Office, Power Platform and AI Experts",
    ),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: pageMeta.title,
      isPartOf: { "@id": `${pageMeta.siteUrl}#website` },
      description: pageMeta.description,
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: pageMeta.siteUrl,
        },
        { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
      ],
    },
    {
      // The eight service areas, each pointing at its section on this page
      "@type": "ItemList",
      "@id": `${PAGE_URL}#service-areas`,
      name: "Office Experts service areas",
      itemListElement: toListItems(
        navItems.map((item) => ({
          name: item.label,
          href: `${pageMeta.path}#${item.id}`,
        })),
        pageMeta.siteUrl,
      ),
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ServiceHero
        title="Microsoft Consulting and Development Services"
        desktopImage={servicesHero}
        mobileImage={servicesHeroMob}
        altDesk="Microsoft Office, Power Platform and AI services"
        altMob="Microsoft Office, Power Platform and AI services"
        darker={true}
      />

      {/* <ServicesNav items={navItems} /> */}
      <GroupIntro data={groupIntro} />
      <AiAutomationSection data={ai} />
      <PowerPlatformSection data={powerPlatformSection} />
      <ExcelSection data={excelSection} />
      <WordSection data={wordSection} />
      <AccessSection data={accessSection} />
      <PowerPointSection data={powerPointSection} />
      <CustomDevSection data={customDevSection} />
      <Microsoft365Section data={microsoft365Section} />
      <CaseStudyCallout data={caseStudyCallout} />
      <ServicesFaq data={faqs} />
      <Contact />
    </>
  );
};

export default Page;
