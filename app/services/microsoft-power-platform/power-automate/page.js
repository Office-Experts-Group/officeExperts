// /app/services/microsoft-power-platform/power-automate/page.js
import React from "react";
import dynamic from "next/dynamic";

import PautoHero from "./(components)/PautoHero";
import PautoIntro from "./(components)/PautoIntro";

const PautoCapabilities = dynamic(
  () => import("./(components)/PautoCapabilities"),
);
const PautoDocuments = dynamic(() => import("./(components)/PautoDocuments"));
const PautoApproach = dynamic(() => import("./(components)/PautoApproach"));
const PautoAgents = dynamic(() => import("./(components)/PautoAgents"));
const PautoFaq = dynamic(() => import("./(components)/PautoFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import { getCaseStudyBySlug } from "@/app/case-studies/caseStudies";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-power-platform/power-automate`;
const PAGE_NAME = "Power Automate";
const PAGE_TITLE = "Power Automate & AI Builder Consulting | Office Experts";
const PAGE_DESCRIPTION =
  "Power Automate consultants who streamline approvals, documents and email with AI Builder and Copilot Studio agents, built inside your Microsoft 365 tenant.";

// Kept from the Power Platform Experts page. dateModified is set by hand:
// +11:00 is AEDT, which runs from the first Sunday of October to the first
// Sunday of April.
const DATE_PUBLISHED = "2024-10-27T00:00:00+00:00";
const DATE_MODIFIED = "2026-11-16T00:00:00+11:00";

const PAUTO_CASE_STUDY_SLUGS = [
  "manufacturing-project-setup-automation",
  "sporting-goods-agentic-ai-customer-service",
  "healthcare-patient-form-followup-automation",
];

const pautoCaseStudyLinks = PAUTO_CASE_STUDY_SLUGS.map(getCaseStudyBySlug)
  .filter(Boolean)
  .map((s) => ({
    href: `/case-studies/${s.slug}`,
    title: s.title,
    description: s.truncatedDescription,
    image: s.image,
    linkText: s.linkText,
  }));

const PAUTO_OFFERS = [
  {
    name: "Flow automation and system integration",
    description:
      "Scheduled triggers, approvals, notifications and data sync across the platforms you already use.",
  },
  {
    name: "AI Builder document and invoice processing",
    description:
      "Prebuilt or custom AI Builder models that extract data from invoices, delivery dockets, forms and receipts.",
  },
  {
    name: "Intelligent approval workflows",
    description:
      "Approvals that route themselves, escalate when nothing is actioned and triage incoming email by intent.",
  },
  {
    name: "Copilot Studio autonomous agents",
    description:
      "Agents that monitor your systems around the clock and surface only genuine exceptions to your team.",
  },
  {
    name: "Cross-platform API orchestration",
    description:
      "Connecting Power Automate to Dynamics 365, Xero, MYOB, Salesforce, custom REST APIs and legacy systems.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}#website` },
      about: [
        { "@type": "Thing", name: "Microsoft Power Automate" },
        { "@type": "Thing", name: "AI Builder" },
        { "@type": "Thing", name: "Copilot Studio" },
        { "@type": "Thing", name: "Invoice Processing Automation" },
        { "@type": "Thing", name: "Intelligent Document Processing" },
      ],
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      inLanguage: "en-AU",
      potentialAction: [{ "@type": "ReadAction", target: [PAGE_URL] }],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Power Platform",
          item: `${SITE_URL}/services/microsoft-power-platform`,
        },
        { "@type": "ListItem", position: 4, name: PAGE_NAME, item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Power Automate and AI automation consulting",
      serviceType: "Power Automate consulting",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Australian businesses that use Microsoft 365",
      },
      serviceOutput:
        "Tested Power Automate flows, AI Builder models and Copilot Studio agents, built inside the client's Microsoft tenant, with documentation and training.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Power Automate services",
        itemListElement: PAUTO_OFFERS.map((o) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: o.name,
            description: o.description,
          },
        })),
      },
    },
  ],
};

const Page = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
    <PautoHero />
    <PautoIntro />
    <PautoCapabilities />
    <PautoDocuments />
    <PautoApproach />
    <PautoAgents />
    <RelatedLinks
      theme="light"
      eyebrow="Case Studies"
      heading="Power Automate projects in practice"
      links={pautoCaseStudyLinks}
    />
    <PautoFaq />
    <Contact />
  </>
);

export default Page;
