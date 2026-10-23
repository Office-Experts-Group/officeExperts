// app/services/microsoft-word/accessibility/page.js
//
// Migrated from wordexperts.com.au/accessibility. Metadata lives in ./layout.js.
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
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
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const ExpertsAwait = dynamic(() => import("@/components/ExpertsAwait"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contact = dynamic(() => import("@/components/Contact"));

import faqs from "../wordFaqs/accessibility";
import faqSchema from "../wordFaqs/accessibilitySchema";

import accessibility from "@/public/pageHeros/accessibility.webp";
import accessibilityMob from "@/public/pageHeros/mob/accessibilityMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "@/utils/schemaGenerators";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/accessibility";
const PAGE_TITLE = "Microsoft Word Accessibility | Office Experts";
const PAGE_DESCRIPTION =
  "Accessible Word document creation and template services. WCAG-compliant documents, accessibility audits, and remediation services for government and enterprise.";

const SITE_URL = "https://www.officeexperts.com.au";
const HERO_ALT = "accessibility in word documents design";

const DATE_PUBLISHED = "2018-07-16T02:14:28+10:00";

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
      isPartOf: { "@id": `${SITE_URL}#website` },
      datePublished: DATE_PUBLISHED,
      dateModified: "2026-10-23T00:00:00+11:00",
      description: PAGE_DESCRIPTION,
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
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
          name: "Services",
          item: `${SITE_URL}/services/microsoft-word`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Accessibility",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Word Accessibility Solutions",
      provider: { "@id": `${SITE_URL}#organization` },
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

// Internal links are relative (no absolute self-links to officeexperts.com.au).
const caseStudies = [
  {
    href: "/case-studies/government-health-department-editable-pdf-forms",
    linkText: "Explore how the forms were built",
    title:
      "Turning brand templates into editable PDF forms staff can fill in and maintain",
    description:
      "A state government health department needed two internal forms on the same branded foundation as its other documents. We built both forms into its existing master template, converted them to editable PDFs using Adobe Acrobat Pro, and trained the client's team to make minor content changes themselves.",
    image: "/case-studies/government-health-editable-pdf-formsLg.webp",
    imageAlt:
      "Editable PDF forms built on a state government health department master template",
  },
  {
    href: "/case-studies/government-workplace-safety-interactive-word-forms",
    linkText: "View the protected form suite",
    title:
      "Rebuilding static assessment and referral forms into guided, tamper-proof Word documents",
    description:
      "A government workplace safety authority's complex Word forms were inconsistent and easy to break. We rebuilt the suite with structured styles, content controls (dropdown lists, text-only fields, checkboxes and image placeholders), dynamic tables and document protection, so staff tab through guided fields without altering the layout or deleting mandatory content.",
    image: "/case-studies/government-workplace-safety-interactive-formsLg.webp",
    imageAlt:
      "Guided, protected Word forms for a government workplace safety authority",
  },
];

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
        altDesk={HERO_ALT}
        altMob={HERO_ALT}
      />
      <PageSegmentMain />
      <AccessibilityStandards />
      <AccessibilityChecklist />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Past projects with built in accessibility"
        links={caseStudies}
      />
      <PageSegment4 />
      <AccessibilityProcess />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
