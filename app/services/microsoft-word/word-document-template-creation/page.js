// /services/microsoft-word/word-document-template-creation/page.js
import React from "react";
import dynamic from "next/dynamic";

// Above the fold: imported normally so they render in the initial HTML without a separate chunk
import ServiceHero from "@/components/ServiceHero";
import TemplateIntro from "./(components)/TemplateIntro";

// Below the fold: next/dynamic splits these into their own chunks (still server-rendered)
const TemplateDesignPrinciples = dynamic(
  () => import("./(components)/TemplateDesignPrinciples"),
);
const TemplateDocumentTypes = dynamic(
  () => import("./(components)/TemplateDocumentTypes"),
);
const TemplateStyleGuides = dynamic(
  () => import("./(components)/TemplateStyleGuides"),
);
const TemplateFeatures = dynamic(
  () => import("./(components)/TemplateFeatures"),
);
const TemplateWhyChoose = dynamic(
  () => import("./(components)/TemplateWhyChoose"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

import template from "@/public/pageHeros/template.webp";
import templateMob from "@/public/pageHeros/mob/templateMob2.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "@/utils/schemaGenerators";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/word-document-template-creation";
const PAGE_TITLE = "Word Document Template Creation Services";
const PAGE_DESCRIPTION =
  "Professional Microsoft Word template creation services. Custom document templates that maintain brand consistency and improve productivity.";

const SITE_URL = "https://www.officeexperts.com.au";
const HERO_ALT = "Word document template design";

const DATE_PUBLISHED = "2018-01-13T14:26:07+00:00";
const DATE_MODIFIED = "2026-10-27T00:00:00+11:00";

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
          name: "Word Document Template Creation",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Word Document Template Creation",
      serviceType: "Microsoft Word template design",
      description: PAGE_DESCRIPTION,
      provider: PROVIDER,
      areaServed: AREA_SERVED,
      category: "Document Design",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Word Template Creation Services",
        itemListElement: [
          offer(
            "Custom Word Template Design",
            "Branded templates for proposals, reports, letterheads, memos, agendas and meeting minutes",
          ),
          offer(
            "Template Suites",
            "Complete suites of cohesive templates so every document shares the same precision and style",
          ),
          offer(
            "Existing Document Transfer",
            "Moving your current documents into new templates with a consistent, brand-perfect finish",
          ),
          offer(
            "Style Guide Compliance",
            "Colours, fonts, heading hierarchy and spacing built to your brand guidelines",
          ),
          offer(
            "Quick Parts & Building Blocks",
            "Reusable content blocks such as chapter pages, image layouts, appendices, tables and terms and conditions",
          ),
          offer(
            "Accessible Template Design",
            "Accessible styles and headings, alternative text, structured tables and high-contrast colour schemes",
          ),
        ],
      },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#conversion-service`,
      name: "Design to Word Template Conversion",
      serviceType: "Document template conversion",
      description:
        "Converting Adobe InDesign layouts, PDFs and legacy documents into fully functional, brand-compliant Microsoft Word templates.",
      provider: PROVIDER,
      areaServed: AREA_SERVED,
      isRelatedTo: { "@id": `${PAGE_URL}#service` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Word Template Conversion Services",
        itemListElement: [
          offer(
            "InDesign to Word Conversion",
            "Turning Adobe InDesign layouts into practical Word templates that are easy for your team to use",
          ),
          offer(
            "PDF to Word Template Conversion",
            "Rebuilding PDF designs as robust, editable Word templates",
          ),
          offer(
            "Legacy Document Conversion",
            "Modernising older documents and designs into consistent, workflow-ready templates",
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
        title="Word Document Template Creation"
        desktopImage={template}
        mobileImage={templateMob}
        altDesk={HERO_ALT}
        altMob={HERO_ALT}
      />
      <TemplateIntro />
      <TemplateDesignPrinciples />
      <TemplateDocumentTypes />
      <TemplateStyleGuides />
      <TemplateFeatures />
      <TemplateWhyChoose />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Word template builds we've delivered"
        links={[
          {
            href: "/case-studies/committee-report-master-template-pdf-merge",
            linkText: "See the weekend turnaround",
            title:
              "Turning a multi-author committee report into one polished PDF over a weekend",
            description:
              "A local executive committee needed reports from several authors with limited Word experience combined into a single submission against an urgent deadline. We built a Master Template, transferred each author's content into it after hours and over the weekend, then merged the result with several supporting PDFs into one clean PDF.",
            image:
              "https://www.officeexperts.com.au/case-studies/committee-report-master-template-pdf-mergeLg.png",
            imageAlt:
              "Master Template and merged PDF for a multi-author committee report",
          },
          {
            href: "/case-studies/water-education-program-word-powerpoint-templates",
            linkText: "See the lesson templates",
            title:
              "Turning an InDesign lesson design into Word and PowerPoint templates educators can use",
            description:
              "The client's water education program had a lesson design built in InDesign, but curriculum writers across Western Australia needed to build lessons in Word and PowerPoint. We translated the design into working Word and PowerPoint templates, including Quick Parts for the Word layouts and a PowerPoint Slide Master system with precise placeholders, locked-down brand elements and purpose-built layouts for activities, diagrams and assessment pages.",
            image:
              "https://www.officeexperts.com.au/case-studies/water-education-program-templatesLg.png",
            imageAlt:
              "Word and PowerPoint lesson templates for a water education program",
          },
        ]}
      />
      <Contact />
    </>
  );
};

export default Page;
