// /services/microsoft-word/custom-toolbars-and-ribbons/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import ToolbarsIntro from "./(components)/ToolbarsIntro";

const ExpertsAwait = dynamic(() => import("@/components/ExpertsAwait"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contact = dynamic(() => import("@/components/Contact"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const ToolbarsLifecycle = dynamic(
  () => import("./(components)/ToolbarsLifecycle"),
);
const ToolbarsApplyTab = dynamic(
  () => import("./(components)/ToolbarsApplyTab"),
);
const ToolbarsLockdown = dynamic(
  () => import("./(components)/ToolbarsLockdown"),
);
const ToolbarsLayout = dynamic(() => import("./(components)/ToolbarsLayout"));
const ToolbarsAutomation = dynamic(
  () => import("./(components)/ToolbarsAutomation"),
);

import faqs from "../wordFaqs/automation";
import faqSchema from "../wordFaqs/customToolbarsSchema";

import toolbars from "@/public/pageHeros/toolbars.webp";
import toolbarsMob from "@/public/pageHeros/mob/toolbarsMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons";
const PAGE_TITLE = "Custom Toolbars and Ribbons | Office Experts";
const PAGE_DESCRIPTION =
  "Expert Microsoft Word toolbar and ribbon customisation services. Improve productivity with custom Word toolbars.";

const SITE_URL = "https://www.officeexperts.com.au";

const HERO_ALT = "Custom toolbars and ribbons in Microsoft Word";

// Converted from the WE value (2018-07-15T16:04:37+00:00) to AEST.
const DATE_PUBLISHED = "2018-07-16T02:04:37+10:00";
// Set by hand when real content changes. Never new Date().
const DATE_MODIFIED = "2026-10-23T00:00:00+11:00";

const caseStudies = [
  {
    href: "/case-studies/legal-firm-template-suite-formatting-tab",
    linkText: "See the style guide templates",
    title:
      "Locking a law firm's style guide into templates staff couldn't quietly override",
    description:
      "Staff at a legal firm were editing documents to suit their own preferences rather than following the firm's style guide. We built a full document suite around the guide, built the firm's legal numbering lists into the templates, and added our custom Formatting tab for one-click access to them while locking down formatting controls.",
    image: "/case-studies/legal-firm-template-formatting-tabLg.png",
    imageAlt:
      "Word template suite and Formatting tab built around a legal firm's style guide",
  },
  {
    href: "/case-studies/government-department-enterprise-office-template-suite",
    linkText: "See the custom Word ribbon",
    title:
      "A custom Word ribbon that stops corporate templates breaking under everyday use",
    description:
      "After a major brand refresh, a state government department needed its Office environment modernised. We redesigned 17 enterprise Word templates, built a custom Formatting Control Tab that enforces approved styles, tables and numbering, and added controlled copy-and-paste with a one-click Styles Clean Up tool. The same project delivered a PowerPoint framework with 10 precinct-specific themes.",
    image: "/case-studies/government-enterprise-office-templatesLg.webp",
    imageAlt:
      "Custom Word ribbon and enterprise templates for a state government department",
  },
  {
    href: "/case-studies/corporate-group-multi-entity-master-template-suite",
    linkText: "Explore the four-entity suite",
    title: "One shared Global Common template keeping four entities on-brand",
    description:
      "A corporate group needed consistent, professional templates across four related entities without four separate builds. We built a shared Global Common template, a custom Master Template for each entity on top of it, and a custom Formatting tab with a copy/paste macro that strips foreign formatting and applies approved styling automatically.",
    image: "/case-studies/corporate-group-multi-entity-templatesLg.webp",
    imageAlt:
      "Master Templates for four entities built from one Global Common template",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      isPartOf: { "@id": `${SITE_URL}#website` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      description: PAGE_DESCRIPTION,
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
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
          name: "Microsoft Word",
          item: `${SITE_URL}/services/microsoft-word`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Custom Toolbars and Ribbons",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: "Custom Toolbars and Ribbons",
      description: PAGE_DESCRIPTION,
      provider: { "@id": `${SITE_URL}#organization` },
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
        title="Custom Toolbars and Ribbons"
        desktopImage={toolbars}
        mobileImage={toolbarsMob}
        altDesk={HERO_ALT}
        altMob={HERO_ALT}
      />
      <ToolbarsIntro />
      <ToolbarsLifecycle />
      <ToolbarsApplyTab />
      <ToolbarsLockdown />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Word ribbon projects we've delivered"
        links={caseStudies}
      />
      <ToolbarsLayout />
      <ToolbarsAutomation />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
