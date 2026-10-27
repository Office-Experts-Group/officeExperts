// /services/microsoft-word/word-template-conversions/page.js
import React from "react";
import dynamic from "next/dynamic";

// Above the fold: imported normally
import ServiceHero from "@/components/ServiceHero";
import TemplateHero from "./(components)/TemplateHero";

// Below the fold: split into separate chunks (still server rendered)
const ConversionBento = dynamic(() => import("./(components)/ConversionBento"));
const ConversionProblem = dynamic(
  () => import("./(components)/ConversionProblem"),
);
const ConversionComparison = dynamic(
  () => import("./(components)/ConversionComparison"),
);
const ConversionProcess = dynamic(
  () => import("./(components)/ConversionProcess"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const ConversionFaq = dynamic(() => import("./(components)/ConversionFaq"));
const ConversionCta = dynamic(() => import("./(components)/ConversionCta"));
const Contact = dynamic(() => import("@/components/Contact"));

import faqs from "../wordFaqs/wordTemplateConversions";

import conversion from "@/public/pageHeros/conversion.webp";
import conversionMob from "@/public/pageHeros/mob/conversionMob.webp";

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/microsoft-word/word-template-conversions`;
const PAGE_TITLE = "Word Template Conversions | Office Experts";
const PAGE_DESCRIPTION =
  "Professional Word template conversions in Australia. We convert Adobe, InDesign and PDF files into fully functional, on-brand Microsoft Word templates, and build fillable PDF forms from Word.";

const DATE_PUBLISHED = "2018-01-13T14:25:35+00:00";
const DATE_MODIFIED = "2026-10-27T00:00:00+11:00";

// Case studies shown in the RelatedLinks block
const CASE_STUDIES = [
  {
    href: "https://www.officeexperts.com.au/case-studies/government-health-master-template-document-transfer",
    linkText: "Explore the rebranded Master Template",
    title:
      "Rebranding a Master Template, then transferring a whole document set into it",
    description:
      "During an organisation-wide branding update, a state government health department needed a new Master Template for its intranet and every existing document brought across. We built the template with a Quick Part for a repeating element, then used our in-house transfer process to move the document set into it without corrupting content, followed by manual refinement for full brand alignment.",
    image:
      "https://www.officeexperts.com.au/case-studies/government-health-master-template-transferLg.png",
    imageAlt:
      "Rebranded Master Template and transferred documents for a state government health department",
  },
  {
    href: "https://www.officeexperts.com.au/case-studies/environmental-consultancy-word-template-rebuild",
    linkText: "Explore the structural fix",
    title:
      "Rebuilding a beautifully designed template that Word itself couldn't cope with",
    description:
      "The client's new Word templates looked exactly right, but hadn't been built the way Word needs to be built, which made them inefficient to use and prone to formatting errors. We rebuilt the entire suite on proper styles, headings and page structure, keeping the approved design intact.",
    image:
      "https://www.officeexperts.com.au/case-studies/environmental-consultancy-word-template-rebuildLg.png",
    imageAlt: "Word template suite rebuilt on proper styles and page structure",
  },
];

// Builds one Service node so each offering is described the same way
const buildService = (slug, name, description) => ({
  "@type": "Service",
  "@id": `${PAGE_URL}#${slug}`,
  name,
  serviceType: name,
  description,
  url: PAGE_URL,
  areaServed: { "@type": "Country", name: "Australia" },
  provider: { "@type": "Organization", name: "Office Experts", url: SITE_URL },
});

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
          name: "Word Template Conversions",
          item: PAGE_URL,
        },
      ],
    },
    buildService(
      "word-template-conversion",
      "Word Template Conversion",
      "Conversion of existing branded documents into fully functional, on-brand Microsoft Word templates built on proper styles, headings and page structure.",
    ),
    buildService(
      "adobe-to-word",
      "Adobe and InDesign to Word Conversion",
      "Adobe and InDesign layouts recreated as Word templates that match the original design and include the correct functionality.",
    ),
    buildService(
      "pdf-to-word",
      "PDF to Word Conversion",
      "Professional PDF to Word conversion that keeps the original design intact while making the document fully editable.",
    ),
    buildService(
      "word-to-pdf-fillable-forms",
      "Word to PDF and Fillable PDF Forms",
      "Word documents converted to PDF, including fillable PDF forms built in Adobe Acrobat Pro, and templates engineered to export to PDF reliably.",
    ),
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
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
        title="Word Template Conversions"
        desktopImage={conversion}
        mobileImage={conversionMob}
        altMob="Word template conversions"
        altDesk="Word template conversions"
      />
      <TemplateHero />
      <ConversionBento />
      <ConversionProblem />
      <ConversionComparison />
      <ConversionProcess />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Template conversion and document transfer projects"
        links={CASE_STUDIES}
      />
      <ConversionFaq />
      <ConversionCta />
      <Contact />
    </>
  );
};

export default Page;
