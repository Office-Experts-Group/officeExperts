// app/services/app-and-custom-development/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import AppDevIntro from "./(components)/AppDevIntro";

// Below-the-fold components loaded dynamically
const AppDevStack = dynamic(() => import("./(components)/AppDevStack"));
const AppDevPortals = dynamic(() => import("./(components)/AppDevPortals"));
const AppDevProcess = dynamic(() => import("./(components)/AppDevProcess"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contact = dynamic(() => import("@/components/Contact"));

import faqs from "@/faqs/app-and-custom-development";
import faqSchema from "@/faqs/appAndCustomDevelopmentSchema";

import customDev from "@/public/pageHeros/custom-development.webp";
import customDevMob from "@/public/pageHeros/mob/custom-development.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/app-and-custom-development`;

const relatedLinks = [
  {
    href: "/case-studies/film-crew-booking-system-access-nextjs-rebuild",
    title: "Film crew booking system rebuilt in Next.js",
    description:
      "A VM-locked Access 2000 database moved to Azure SQL Server, with the website rebuilt in Next.js for 10x faster load times.",
    linkText: "See the Next.js rebuild",
    image: "/case-studies/film-crew-booking-system-rebuildLg.png",
  },
  {
    href: "/case-studies/custom-quoting-tool",
    title: "Custom quoting tool",
    description:
      "A React-based tax depreciation calculator embedded in WordPress that gives property investors an instant emailed estimate.",
    linkText: "See the React quoting tool",
    image: "/case-studies/custom-quoting-tool.png",
  },
  {
    href: "/case-studies/building-consultants-inspection-crm",
    title: "Building consultants inspection CRM",
    description:
      "A SharePoint, Power Apps and Power Automate pipeline that handles inspection enquiries and generates quotes ready to email.",
    linkText: "See the inspection CRM",
    image: "/case-studies/gm-building-consultants-inspection-crmLg.png",
  },
  {
    href: "/case-studies/sporting-goods-agentic-ai-customer-service",
    title: "Agentic AI customer service for a sporting goods supplier",
    description:
      "A chained agentic AI system on Power Automate and Power Apps that cut ticket resolution time from 48 hours to 3.",
    linkText: "See the agentic AI build",
    image: "/case-studies/sporting-goods-agentic-customer-serviceLg.png",
  },
  {
    href: "/case-studies/internal-ai-proposal-assistant-azure-migration",
    title: "Internal AI proposal assistant",
    description:
      "A conversational assistant that drafts proposals into the real Word template, migrated fully inside the Azure tenant.",
    linkText: "See the AI proposal assistant",
    image: "/case-studies/internal-ai-proposal-assistant.png",
  },
  {
    href: "/case-studies/retail-power-bi-partner-reporting-security",
    title: "Secure partner reporting in Power BI",
    description:
      "Partner-facing reports locked down with Row-Level Security and verified with a real external account.",
    linkText: "See the secure reporting",
    image: "/case-studies/retail-power-bi-partner-securityLg.webp",
  },
];

// Services offered, used by the Service schema's offer catalogue
const offerings = [
  {
    name: "Custom Next.js and React web applications",
    description:
      "Portals, quoting and booking tools, workflow applications and legacy rebuilds with server-side rendering.",
  },
  {
    name: "WordPress and CRM web portals",
    description:
      "WordPress plugins and member areas, plus CRM customisation and integration with Microsoft Dynamics 365 and other platforms.",
  },
  {
    name: "Microsoft Power Platform solutions",
    description:
      "Power Apps, Power Automate, Power BI, Copilot Studio and Dataverse solutions.",
  },
  {
    name: "Power Pages portals",
    description:
      "Secure external portals with Dataverse table permissions, custom branding and Power Automate integration.",
  },
  {
    name: "AI integrations and custom AI agents",
    description:
      "Custom agents in Python and JavaScript, Copilot and Copilot Studio, language model integration, email triage and AI rescue and repair.",
  },
];

// ── Structured data ────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      SITE_URL,
      "Office Experts Group",
      "Your Microsoft Technology Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Custom App and Software Development | Office Experts Group",
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      datePublished: "2026-10-12T00:00:00+00:00",
      dateModified: "2026-10-20T00:00:00+00:00",
      description:
        "Custom Next.js and React apps, WordPress and CRM portals, Power Platform, Power Pages and AI integrations from Australian developers since 2000.",
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
          name: "App and Custom Development",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Custom App and Software Development",
      provider: {
        "@id": `${SITE_URL}#organization`,
      },
      description:
        "Custom application development across Next.js and React, WordPress and CRM portals, the Microsoft Power Platform, Power Pages and AI integrations.",
      serviceType: "Custom Software Development",
      category: "Application Development",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Custom Development Services",
        itemListElement: offerings.map(({ name, description }) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            description,
          },
        })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="App and Custom Development"
        desktopImage={customDev}
        mobileImage={customDevMob}
        altDesk={"Custom application development"}
        altMob={"Custom application development"}
      />
      <AppDevIntro />
      <AppDevStack />
      <AppDevPortals />
      <RelatedLinks
        theme="dark"
        eyebrow="Case studies"
        heading="Custom development in practice"
        text="See how we have built portals, quoting tools, CRMs and AI agents for Australian and international organisations."
        links={relatedLinks}
      />
      <AppDevProcess />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
