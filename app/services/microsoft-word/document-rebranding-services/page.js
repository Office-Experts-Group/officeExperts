// /services/microsoft-word/document-rebranding-services/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import RebrandingIntro from "./(components)/RebrandingIntro";

// Everything below the first segment loads with next/dynamic
const RebrandingWhat = dynamic(() => import("./(components)/RebrandingWhat"));
const RebrandingWhy = dynamic(() => import("./(components)/RebrandingWhy"));
const RebrandingWho = dynamic(() => import("./(components)/RebrandingWho"));
const RebrandingIncluded = dynamic(
  () => import("./(components)/RebrandingIncluded"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import rebrand from "@/public/pageHeros/rebrand.webp";
import rebrandingMob from "@/public/pageHeros/mob/rebrandingMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/document-rebranding-services";
const PAGE_TITLE = "Document Rebranding Services | Office Experts";
const PAGE_DESCRIPTION =
  "Update your existing Microsoft Word documents to reflect your new brand, including logos, colours, fonts, layouts and corporate styling.";

const SITE_URL = "https://www.officeexperts.com.au";

const HERO_ALT_DESKTOP = "Rebuild and Rebrand";
const HERO_ALT_MOBILE = "alarm clock with time to rebranding";

// Converted from the Word Experts UTC value (2025-04-30T15:51:37+00:00)
const DATE_PUBLISHED = "2025-05-01T01:51:37+10:00";
// Set by hand: content reworded from Word Experts to Office Experts
const DATE_MODIFIED = "2026-10-23T00:00:00+11:00";

const caseStudies = [
  {
    href: "/case-studies/advisory-branding-template-rollout",
    linkText: "View the template suite rebuild",
    title:
      "Rebuilding a full Word template suite to lock a new brand in, not just apply it",
    description:
      "While updating its branding, the client's Word templates kept breaking, with formatting corruption and staff freely overriding brand elements. We rebuilt the suite from a single Master Template with eleven sub-templates, added a custom Formatting tab that locks down font and font-size controls, and built branded Quick Parts for cover pages and other template elements.",
    image: "/case-studies/red-fox-advisory-brand-templatesLg.png",
    imageAlt: "Branded Word template suite built from a single Master Template",
  },
  {
    href: "/case-studies/government-health-master-template-document-transfer",
    linkText: "See the document transfer process",
    title:
      "Rebranding a Master Template, then transferring a whole document set into it",
    description:
      "During an organisation-wide branding update, a state government health department needed a new Master Template for its intranet and every existing document brought across. We built the template with a Quick Part for a repeating element, then used our in-house transfer process to move the document set into it without corrupting content, followed by manual refinement for full brand alignment.",
    image: "/case-studies/government-health-master-template-transferLg.png",
    imageAlt:
      "Rebranded Master Template and transferred documents for a state government health department",
  },
  {
    href: "/case-studies/environmental-consultancy-word-template-rebuild",
    linkText: "Read about the full template rebuild",
    title:
      "Rebuilding a beautifully designed template that Word itself couldn't cope with",
    description:
      "The client's new Word templates looked exactly right, but hadn't been built the way Word needs to be built, which made them inefficient to use and prone to formatting errors. We rebuilt the entire suite on proper styles, headings and page structure, keeping the approved design intact.",
    image:
      "/case-studies/environmental-consultancy-word-template-rebuildLg.png",
    imageAlt: "Word template suite rebuilt on proper styles and page structure",
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
          name: "Document Rebranding Services",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      url: PAGE_URL,
      name: "Document Rebranding Services",
      serviceType: "Document Rebranding",
      provider: { "@id": `${SITE_URL}#organization` },
      description:
        "Professional document rebranding service that applies your updated brand identity to all of your business templates and documentation including Microsoft Word templates, PowerPoint presentations, and Excel spreadsheets.",
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "Audience",
        audienceType: "Businesses and Organizations",
      },
      serviceOutput: "Professionally branded document templates and styling",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Document Rebranding Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Template Rebranding & Redesign",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bulk Template Conversion",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Advanced Word Functionality",
            },
          },
        ],
      },
    },
  ],
};

const page = () => {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Document Rebranding Services"
        desktopImage={rebrand}
        mobileImage={rebrandingMob}
        altDesk={HERO_ALT_DESKTOP}
        altMob={HERO_ALT_MOBILE}
      />
      <RebrandingIntro />
      <RebrandingWhat />
      <RebrandingWhy />
      <RebrandingWho />
      <RebrandingIncluded />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Document rebranding projects we've delivered"
        links={caseStudies}
      />
      <Contact />
    </main>
  );
};

export default page;
