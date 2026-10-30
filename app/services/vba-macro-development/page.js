// /services/vba-macro-development/page.js
import React from "react";
import dynamic from "next/dynamic";

// Above the fold: loaded normally
import ServiceHero from "@/components/ServiceHero";
import Contents from "./(components)/Contents";
import VbaIntro from "./(components)/VbaIntro";

// Below the fold: loaded on demand
const VbaApps = dynamic(() => import("./(components)/VbaApps"));
const VbaCapabilities = dynamic(() => import("./(components)/VbaCapabilities"));
const VbaWorkflow = dynamic(() => import("./(components)/VbaWorkflow"));
const VbaToolChoice = dynamic(() => import("./(components)/VbaToolChoice"));
const VbaAi = dynamic(() => import("./(components)/VbaAi"));
const VbaUpgrades = dynamic(() => import("./(components)/VbaUpgrades"));
const VbaAddins = dynamic(() => import("./(components)/VbaAddins"));
const VbaProcess = dynamic(() => import("./(components)/VbaProcess"));
const VbaFaq = dynamic(() => import("./(components)/VbaFaq"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

// Hero images are shared with the previous version of this page
import longDesk from "@/public/pageHeros/longDesk.webp";
import codingMob from "@/public/pageHeros/mob/codingMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/vba-macro-development";
const PAGE_TITLE = "VBA Macro Development for Excel, Word, Access & Outlook";
const PAGE_DESCRIPTION =
  "Custom VBA macros, forms and add-ins for Excel, Word, Access, PowerPoint and Outlook. Australian VBA developers, plus 64-bit and Office upgrade fixes.";

const SITE_URL = "https://www.officeexperts.com.au";
const HERO_ALT = "Long desk in an office";
const HERO_ALT_MOBILE = "Computer code on a screen";

const DATE_PUBLISHED = "2024-10-26T00:00:00+11:00";
const DATE_MODIFIED = "2026-10-30T00:00:00+11:00";

// The services this page covers, listed once and turned into the Service schema offer catalogue below
const services = [
  [
    "Custom VBA macros and automation",
    "Macros that automate repetitive work in Excel, Word, Access, PowerPoint and Outlook.",
  ],
  [
    "Custom forms and user interfaces",
    "VBA UserForms and popup forms with real-time validation that write into workbooks, documents and databases.",
  ],
  [
    "Custom ribbons and toolbars",
    "Custom ribbon tabs that put your most-used functions one click away.",
  ],
  [
    "Office add-in development",
    "VBA, VSTO and web add-ins that make your tools available across every file.",
  ],
  [
    "Macro upgrade and 64-bit compatibility fixes",
    "Reviewing and repairing macros that fail after an Office, Windows or Outlook upgrade.",
  ],
  [
    "External data connections and API integration",
    "Live connections from Office files to SQL Server, SharePoint, Dataverse, web APIs and third-party systems.",
  ],
  [
    "Automated reporting",
    "Reports, charts and pivot tables generated on demand or on a schedule.",
  ],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
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
      mainEntity: {
        "@id": `${PAGE_URL}#service`,
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
      // "By business solution" 301 redirects to /services, so it's left out of the trail
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
          name: "VBA Macro Development",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "VBA Macro Development",
      serviceType: "VBA macro development",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@type": "Organization",
        name: "Office Experts Group",
        url: SITE_URL,
      },
      areaServed: [
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "New Zealand" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "VBA services",
        itemListElement: services.map(([name, description]) => ({
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
      <Contents />
      <ServiceHero
        title="VBA Macro Development"
        desktopImage={longDesk}
        mobileImage={codingMob}
        altDesk={HERO_ALT}
        altMob={HERO_ALT_MOBILE}
      />
      <VbaIntro />
      <VbaApps />
      <VbaCapabilities />
      <VbaWorkflow />
      <VbaToolChoice />
      <VbaAi />
      <VbaUpgrades />
      <VbaAddins />
      <VbaProcess />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading=" A few VBA and automation projects"
        headingAccent="we've delivered"
        links={[
          {
            href: "/case-studies/insurance-word-quoting-report-popup-form",
            linkText: "See the pop-up form",
            title:
              "Turning slow, error-prone quoting reports into one guided pop-up form in Word",
            description:
              "The client's staff created quoting reports in Word from existing templates, hunting through each document to find and complete a large number of fields, with no way to tell afterwards whether any had been missed. We built a pop-up form that gathers every field in one place, checks that mandatory fields are complete and populates the report automatically. The drop-down lists behind it sit in a single background document that the Administrator maintains and rolls out to every template.",
            image:
              "/case-studies/insurance-word-quoting-report-popup-form.webp",
            imageAlt:
              "Pop-up form for completing quoting reports in Word for an insurance business",
          },
          {
            href: "/case-studies/corporate-group-multi-entity-master-template-suite",
            linkText: "See the copy/paste macro",
            title:
              "One shared Global Common template keeping four entities on-brand without four separate rebuilds",
            description:
              "A corporate group needed consistent, professional templates across four related entities. We built a custom Master Template for each entity from a single shared Global Common template, then added a custom Formatting tab with a copy/paste macro that strips foreign formatting out of pasted content and applies the approved styling automatically.",
            image:
              "/case-studies/corporate-group-multi-entity-templatesLg.webp",
            imageAlt:
              "Custom Word Master Templates for four entities of a corporate group",
          },
          {
            href: "/case-studies/food-manufacturer-excel-costing-workbook",
            linkText: "See the Excel costing workbook",
            title:
              "Merging an array of clunky Excel workbooks into one automated costing system",
            description:
              "A food manufacturer built and costed every product in disconnected, in-house Excel workbooks. Data didn't flow between them and key costing components were missing. We rebuilt it as a single Excel Costing Workbook with a forms interface, automatic cost updates and a restricted Admin view of the core costing data.",
            // Confirm this file exists in /public/case-studies (the other two are taken from the previous page)
            image:
              "/case-studies/food-manufacturer-excel-costing-workbookLg.png",
            imageAlt:
              "Excel costing workbook with a forms interface for a food manufacturer",
          },
        ]}
      />
      <VbaFaq />

      <Contact />
    </>
  );
};

export default Page;
