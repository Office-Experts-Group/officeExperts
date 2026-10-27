// app/services/microsoft-word/popup-forms/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import PopupFormsHero from "./(components)/PopupFormsHero";

// Below-the-fold components loaded dynamically
const PopupFormsProblem = dynamic(
  () => import("./(components)/PopupFormsProblem"),
);
const PopupFormsServices = dynamic(
  () => import("./(components)/PopupFormsServices"),
);
const PopupFormsUseCases = dynamic(
  () => import("./(components)/PopupFormsUseCases"),
);
const PopupFormsProcess = dynamic(
  () => import("./(components)/PopupFormsProcess"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contact = dynamic(() => import("@/components/Contact"));

import faqs from "../wordFaqs/popup-forms";
import faqSchema from "../wordFaqs/popupFormsSchema";

import popupForm from "@/public/pageHeros/popup.webp";
import popupFormMob from "@/public/pageHeros/mob/popupMob.webp";

// ── Page values (keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js)
const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/popup-forms";
const PAGE_TITLE = "Word Popup Forms | Office Experts";
const PAGE_DESCRIPTION =
  "Custom Microsoft Word popup forms with guided data entry, validation, conditional logic and direct document integration.";

const HERO_ALT = "Popup form to document diagram";

// Dates: datePublished converted from the Word Experts UTC value to AEDT
// (+11:00, January). dateModified is set by hand when content really changes.
const DATE_PUBLISHED = "2018-01-14T01:27:08+11:00";
const DATE_MODIFIED = "2026-10-26T00:00:00+11:00";

const caseStudies = [
  {
    href: "/case-studies/insurance-word-quoting-report-popup-form",
    linkText: "See the pop-up form",
    title:
      "Turning slow, error-prone quoting reports into one guided pop-up form in Word",
    description:
      "Staff completing quoting reports in Word had to hunt through the document for fields, with no way to tell afterwards whether any had been missed. We built a pop-up form that gathers every field in one place, flags missed mandatory fields, populates the report automatically, and keeps drop-down lists in one background copy the Administrator maintains for all templates.",
    image: "/case-studies/insurance-word-quoting-report-popup-form.webp",
    imageAlt: "Pop-up form for completing quoting reports in Word",
  },
  {
    href: "/case-studies/government-workplace-safety-interactive-word-forms",
    linkText: "Explore the content controls",
    title:
      "Rebuilding static assessment and referral forms into guided, tamper-proof Word documents",
    description:
      "A government workplace safety authority's complex Word forms were inconsistent and easy to break. We rebuilt the suite with structured styles, content controls (dropdown lists, text-only fields, checkboxes and image placeholders), dynamic tables and document protection, so staff tab through guided fields without altering the layout or deleting mandatory content.",
    image: "/case-studies/government-workplace-safety-interactive-formsLg.webp",
    imageAlt:
      "Guided, protected Word forms for a government workplace safety authority",
  },
];

// ── Structured data ────────────────────────────────────────
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
          name: "Popup Forms",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Word Popup Form Development",
      provider: {
        "@id": `${SITE_URL}#organization`,
      },
      description:
        "Professional Microsoft Word popup form development and automation services, including guided data capture, validation, conditional logic and document integration.",
      serviceType: "Form Development",
      category: "Document Automation",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Popup Form Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Guided Data Capture",
              description:
                "Custom VBA UserForms that guide staff through document data entry",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Validation & Error Checking",
              description:
                "Field validation, mandatory field enforcement and business rule checks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Conditional Logic & Branching",
              description:
                "Forms that adapt fields and requirements based on earlier answers",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Document & Field Integration",
              description:
                "Direct insertion of captured data into Word bookmarks, content controls and mail merge fields",
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
        title="Popup Forms in Word"
        desktopImage={popupForm}
        mobileImage={popupFormMob}
        altDesk={HERO_ALT}
        altMob={HERO_ALT}
      />
      <PopupFormsHero />
      <PopupFormsProblem />
      <PopupFormsServices />
      <PopupFormsUseCases />
      <PopupFormsProcess />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Some Pop-up form projects delivered to happy clients"
        links={caseStudies}
      />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
