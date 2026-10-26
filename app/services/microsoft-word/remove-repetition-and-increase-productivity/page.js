// /services/microsoft-word/document-automation/page.js
import React from "react";
import dynamic from "next/dynamic";

// Above the fold: imported normally so they render in the initial HTML without a separate chunk
import ServiceHero from "@/components/ServiceHero";
import AutomationMain from "./(components)/AutomationMain";

// Below the fold: next/dynamic splits these into their own chunks (still server-rendered)
const AutomationImpact = dynamic(
  () => import("./(components)/AutomationImpact"),
);
const AutomationAi = dynamic(() => import("./(components)/AutomationAi"));
const AutomationIntegration = dynamic(
  () => import("./(components)/AutomationIntegration"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

// Static image imports give Next.js the dimensions and a blur placeholder at build time
import repetition from "@/public/pageHeros/repetition.webp";
import repetitionMob from "@/public/pageHeros/mob/repetitionMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "@/utils/schemaGenerators";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/document-automation";
const PAGE_TITLE = "Word Document Automation Services";
const PAGE_DESCRIPTION =
  "Automate repetitive Word tasks with VBA macros, Building Blocks, smart templates, Copilot and custom AI agents. Australian Word automation experts since 2000.";

const SITE_URL = "https://www.officeexperts.com.au";
const HERO_ALT = "Microsoft Word automation flow";

const DATE_PUBLISHED = "2018-07-16T02:11:12+10:00";
const DATE_MODIFIED = "2026-10-26T00:00:00+11:00";

// Shared Australia-wide service area used by each Service node
const AREA_SERVED = { "@type": "Country", name: "Australia" };
const PROVIDER = { "@id": `${SITE_URL}#organization` };

// Small helper so each catalogue entry stays one line in the schema below
const offer = (name, description) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, description },
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      description: PAGE_DESCRIPTION,
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Word",
          item: `${SITE_URL}/services/microsoft-word`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Word Document Automation",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Word Document Automation",
      serviceType: "Microsoft Word document automation",
      description: PAGE_DESCRIPTION,
      provider: PROVIDER,
      areaServed: AREA_SERVED,
      category: "Productivity Solutions",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Word Automation Services",
        itemListElement: [
          offer(
            "VBA Macro Development",
            "Custom macros that run multi-step Word tasks at the click of a button",
          ),
          offer(
            "Building Blocks & Quick Parts",
            "Libraries of pre-formatted, reusable document elements",
          ),
          offer(
            "Header & Footer Automation",
            "Dynamic header and footer content that updates itself",
          ),
          offer(
            "One-Click Page Layouts",
            "Landscape, A3, multi-column and section break pages inserted on demand",
          ),
          offer(
            "Template Standardisation",
            "Locked templates that enforce brand standards across a team",
          ),
          offer(
            "End-to-End Workflow Automation",
            "Data merge, content population, PDF output and distribution",
          ),
        ],
      },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#ai-service`,
      name: "AI Document Automation for Microsoft Word",
      serviceType: "AI-assisted document automation",
      description:
        "Copilot in Word, Copilot Studio agents and custom-coded AI agents that draft content into structured Word templates for review.",
      provider: PROVIDER,
      areaServed: AREA_SERVED,
      isRelatedTo: { "@id": `${PAGE_URL}#service` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Document Automation Services",
        itemListElement: [
          offer(
            "Copilot in Word Setup",
            "Configuring Microsoft 365 Copilot and training staff to produce on-brand drafts",
          ),
          offer(
            "Copilot Studio Agents",
            "Agents grounded in SharePoint content that assemble first drafts",
          ),
          offer(
            "Custom AI Agent Development",
            "Python and JavaScript agents that write directly into Word templates",
          ),
          offer(
            "AI-Ready Word Templates",
            "Templates rebuilt with styles and content controls so AI output lands correctly",
          ),
        ],
      },
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
        title="Word Document Automation"
        desktopImage={repetition}
        mobileImage={repetitionMob}
        altDesk={HERO_ALT}
        altMob={HERO_ALT}
      />
      <AutomationMain />
      <AutomationImpact />
      <AutomationAi />
      <AutomationIntegration />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Projects that removed repetitive document work"
        links={[
          {
            href: "/case-studies/financial-planning-word-document-builder",
            linkText: "View the report builder",
            title:
              "Building each financial planning report from a pop-up form and a library of ready-made headings",
            description:
              "A financial planning client's reports combine free text with a large library of headings and content in three tiers. We built a Word document builder with a pop-up form for choosing only the items needed, automatic parent headings, custom Heading 3 items that format themselves, and a background library the Administrator maintains and rolls out to staff templates.",
            image:
              "https://www.officeexperts.com.au/case-studies/financial-planning-word-document-builder-libraryLg.webp",
            imageAlt:
              "Word document builder with a pop-up form and heading library for financial planning reports",
          },
          {
            href: "/case-studies/automated-proposal-generation-in-microsoft",
            linkText: "Explore the Access to SQL Server build",
            title:
              "Replacing 50-page proposals built by hand with a database-driven document generator",
            description:
              "A window and door installer was assembling proposals, quotes and contracts, often 50 pages or more, by hand from paper records and Excel. We designed an Access database, later migrated to SQL Server, where staff select the sections they need and the full Word document is generated with project and client details, quote tables, data and images.",
            image:
              "https://www.officeexperts.com.au/case-studies/windowline-proposals-databaseLg.png",
            imageAlt:
              "Access database generating long Word proposals and contracts",
          },
        ]}
      />
      <Contact />
    </>
  );
};

export default Page;
