// app/accessibility/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

// Below-the-fold sections loaded dynamically to keep the initial bundle lean
const AccessibilityStandards = dynamic(
  () => import("./(components)/AccessibilityStandards"),
);
const AccessibilityChecklist = dynamic(
  () => import("./(components)/AccessibilityChecklist"),
);
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const AccessibilityProcess = dynamic(
  () => import("./(components)/AccessibilityProcess"),
);
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const Contact = dynamic(() => import("../../components/Contact"));

import faqs from "../../faqs/accessibility";
import faqSchema from "../../faqs/accessibilitySchema";

import accessibility from "../../public/pageHeros/accessibility.webp";
import accessibilityMob from "../../public/pageHeros/mob/accessibilityMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.wordexperts.com.au",
      "Word Experts",
      "Australia-wide Microsoft Word Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/accessibility",
      url: "https://www.wordexperts.com.au/accessibility",
      name: "Word Accessibility Solutions | Microsoft Word Accessibility | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T16:14:28+00:00",
      dateModified: "2026-09-11T00:00:00+00:00",
      description:
        "Accessible Word document creation and template services. WCAG-compliant documents, accessibility audits, and remediation services for government and enterprise.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/accessibility#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/accessibility"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/accessibility#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wordexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Accessibility",
          item: "https://www.wordexperts.com.au/accessibility",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.wordexperts.com.au/accessibility#service",
      name: "Word Accessibility Solutions",
      provider: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      description:
        "Professional Microsoft Word accessibility services including WCAG compliance and document remediation",
      serviceType: "Document Accessibility",
      category: "Accessibility Services",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Accessibility Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WCAG Compliance",
              description:
                "Document compliance with Web Content Accessibility Guidelines",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Accessibility Audit",
              description: "Comprehensive document accessibility assessment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Document Remediation",
              description:
                "Converting existing documents to accessible formats",
            },
          },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="Accessibility & Compliance"
        desktopImage={accessibility}
        mobileImage={accessibilityMob}
        altDesk={"accessibility in word documents design"}
        altMob={"accessibility in word documents design"}
      />
      <PageSegmentMain />
      <AccessibilityStandards />
      <AccessibilityChecklist />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Past projects with built in accessibility"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/government-health-department-editable-pdf-forms",
            linkText: "Explore how the forms were built",
            title:
              "Turning brand templates into editable PDF forms staff can fill in and maintain",
            description:
              "A state government health department needed two internal forms on the same branded foundation as its other documents. We built both forms into its existing master template, converted them to editable PDFs using Adobe Acrobat Pro, and trained the client's team to make minor content changes themselves.",
            image:
              "https://www.officeexperts.com.au/case-studies/government-health-editable-pdf-formsLg.png",
            imageAlt:
              "Editable PDF forms built on a state government health department master template",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/government-workplace-safety-interactive-word-forms",
            linkText: "View the protected form suite",
            title:
              "Rebuilding static assessment and referral forms into guided, tamper-proof Word documents",
            description:
              "A government workplace safety authority's complex Word forms were inconsistent and easy to break. We rebuilt the suite with structured styles, content controls (dropdown lists, text-only fields, checkboxes and image placeholders), dynamic tables and document protection, so staff tab through guided fields without altering the layout or deleting mandatory content.",
            image:
              "https://www.officeexperts.com.au/case-studies/government-workplace-safety-interactive-formsLg.webp",
            imageAlt:
              "Guided, protected Word forms for a government workplace safety authority",
          },
        ]}
      />
      <PageSegment4 />
      <AccessibilityProcess />
      <ExpertsAwait />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
