import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../../../components/ServiceHero";
import BPAIntro from "./(components)/BPAIntro";

const BPADocProcessing = dynamic(
  () => import("./(components)/BPADocProcessing"),
);
const BPAApprovals = dynamic(() => import("./(components)/BPAApprovals"));
const BPAEmailTriage = dynamic(() => import("./(components)/BPAEmailTriage"));
const BPAReplaces = dynamic(() => import("./(components)/BPAReplaces"));
const BPAProcess = dynamic(() => import("./(components)/BPAProcess"));
const Promo = dynamic(() => import("../../../../components/Promo"));
const BPAFaq = dynamic(() => import("./(components)/BPAFaq"));
const Contact = dynamic(() => import("../../../../components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";

import party from "../../../../public/pageHeros/3rdParty.webp";
import coffeeMob from "../../../../public/pageHeros/mob/coffeeMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-office-365/business-process-automation";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),

    // ── WebPage ──────────────────────────────
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Business Process Automation & AI Integration | Office Experts Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-04-29T00:00:00+00:00",
      description:
        "Expert business process automation using the entire Microsoft Suite. From Power Platform, 365 and custom web applications. Our 25+ consultants will save you time and money.",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      about: [
        { "@type": "Thing", name: "AI Builder" },
        { "@type": "Thing", name: "Power Automate" },
        { "@type": "Thing", name: "Microsoft Copilot" },
        { "@type": "Thing", name: "Invoice Processing Automation" },
        { "@type": "Thing", name: "Document Intelligence" },
        { "@type": "Thing", name: "Email Triage Automation" },
        { "@type": "Thing", name: "Business Process Automation" },
      ],
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
          name: "Services",
          item: "https://www.officeexperts.com.au/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Office 365",
          item: "https://www.officeexperts.com.au/services/microsoft-office-365",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Business Process Automation",
        },
      ],
    },

    // ── HowTo — 5-phase delivery process ────
    {
      "@type": "HowTo",
      name: "How Office Experts builds AI-powered business process automation",
      description:
        "From process discovery to live automation, five phases we follow to deliver Power Automate solutions for Australian businesses.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Process Discovery",
          text: "We map your current manual workflows, email, spreadsheet, paper form, and approval chains. We can rank automation candidates by volume, rule-based complexity, and business impact.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "AI Model Design",
          text: "If there is no 'out-of-the-box' solution, we can train custom AI Builder models on your specific invoice layouts, form types, and email classification categories.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Flow Architecture",
          text: "We design the complete flow covering triggers, AI model calls, approval routing, error handling, escalation paths, and audit logging.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Build & Test",
          text: "We build inside your Microsoft 365 tenant using your real data. Every flow is tested against edge cases and exception scenarios before going live.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Handover & Support",
          text: "Full documentation, hands-on training, and optional ongoing support including AI model retraining as document formats and processes evolve.",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────
// Page component
// ─────────────────────────────────────────────
const Page = () => {
  return (
    <>
      {/* Page-level JSON-LD (WebPage, Breadcrumb, HowTo, Org, Service) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* FAQPage JSON-LD is injected by BPAFaq.jsx */}

      {/* ── Hero ── */}
      <ServiceHero
        title="Business Process Automation & AI Workflows"
        desktopImage={party}
        mobileImage={coffeeMob}
        altDesk={"lady in an office environment"}
        altMob={"coffee on a desk"}
      />
      <BPAIntro />
      <BPADocProcessing />
      <BPAApprovals />
      <BPAEmailTriage />
      <BPAReplaces />
      <BPAProcess />
      <Promo
        h2={"Let's Do This!"}
        p={
          "Once you have decided to take advantage of our services, we will carefully customise those services to match your requirements, keeping you informed every step of the way. We realise that our success is hinged on our ability to ensure your own"
        }
      />
      <BPAFaq />
      <Contact />
    </>
  );
};

export default Page;
