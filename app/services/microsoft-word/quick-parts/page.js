// /services/microsoft-word/quick-parts/page.js
import React from "react";
import dynamic from "next/dynamic";

// Above the fold — imported normally so they render in the initial HTML
import ServiceHero from "@/components/ServiceHero";
import QuickPartsIntro from "./(components)/QuickPartsIntro";

// Below the fold — split into separate chunks with next/dynamic (still SSR)
const QuickPartsGallery = dynamic(
  () => import("./(components)/QuickPartsGallery"),
);
const QuickPartsTypes = dynamic(() => import("./(components)/QuickPartsTypes"));
const QuickPartsProcess = dynamic(
  () => import("./(components)/QuickPartsProcess"),
);
const QuickPartsSystem = dynamic(
  () => import("./(components)/QuickPartsSystem"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contact = dynamic(() => import("@/components/Contact"));

// FAQ content and its FAQPage schema (kept in the shared faqs directory)
import faqs from "@/faqs/quick-parts";
import faqSchema from "@/faqs/quickPartsSchema";

// Hero images carried over from the Word Experts page
import quickParts from "@/public/pageHeros/quickParts.webp";
import quickPartsMob from "@/public/pageHeros/mob/quickPartsMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/quick-parts";
const PAGE_TITLE = "Microsoft Word Quick Parts Services";
const PAGE_DESCRIPTION =
  "Custom Microsoft Word Quick Parts and Building Blocks galleries, built into your templates so your team inserts approved, on-brand content in one click.";

const SITE_URL = "https://www.officeexperts.com.au";
const WORD_URL = `${SITE_URL}/services/microsoft-word`;
const HERO_ALT = "Microsoft Word ribbon wth quick parts";
const HERO_ALT_MOB = "Microsoft Word ribbon wth quick parts";

// Original Word Experts publish date (13 Jan 2018 UTC), converted to AEDT
const DATE_PUBLISHED = "2018-01-14T01:26:38+11:00";
const DATE_MODIFIED = "2026-10-26T00:00:00+11:00";

// Builds one Offer for the service's OfferCatalog
const offer = (name, description) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, description },
});

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
      about: {
        "@id": `${PAGE_URL}#service`,
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
          item: WORD_URL,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Quick Parts",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Word Quick Parts Development",
      serviceType: "Microsoft Word Quick Parts and Building Blocks development",
      description:
        "Design, build and organisation-wide deployment of Microsoft Word Quick Parts, AutoText and Building Blocks galleries stored in your templates.",
      url: PAGE_URL,
      provider: {
        "@id": `${SITE_URL}#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Businesses, professional firms and government organisations using Microsoft Word",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: PAGE_URL,
        availableLanguage: "en-AU",
      },
      // Sibling Word services that pair with Quick Parts on this page
      isRelatedTo: [
        {
          "@type": "Service",
          name: "Word Popup Forms",
          url: `${WORD_URL}/popup-forms`,
        },
        {
          "@type": "Service",
          name: "Custom Toolbars and Ribbons",
          url: `${WORD_URL}/custom-toolbars-and-ribbons`,
        },
        {
          "@type": "Service",
          name: "Corporate Global Template Solution",
          url: `${WORD_URL}/corporate-global-template-solution`,
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Quick Parts Services",
        itemListElement: [
          offer(
            "Quick Parts Content Audit",
            "Review of existing documents to identify repeated content and confirm the approved version of each block.",
          ),
          offer(
            "Building Blocks Development",
            "Reusable cover pages, clauses, tables, signature blocks and layouts built on your template styles with fields and content controls.",
          ),
          offer(
            "Gallery Organisation and Custom Ribbons",
            "Naming, categorising and placing building blocks in the right galleries, with optional custom ribbon access.",
          ),
          offer(
            "Organisation-wide Deployment",
            "Storing Quick Parts in your template or a global add-in and deploying from a network drive or SharePoint.",
          ),
          offer(
            "Quick Parts Training and Maintenance",
            "Staff training on inserting and updating building blocks, plus ongoing library updates.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="Quick Parts"
        desktopImage={quickParts}
        mobileImage={quickPartsMob}
        altDesk={HERO_ALT}
        altMob={HERO_ALT_MOB}
      />
      <QuickPartsIntro />
      <QuickPartsGallery />
      <QuickPartsTypes />
      <QuickPartsProcess />
      <QuickPartsSystem />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Quick Parts projects we've delivered"
        links={[
          {
            href: "/case-studies/advisory-branding-template-rollout",
            linkText: "See how the brand was locked in",
            title:
              "Rebuilding a full Word template suite to lock a new brand in, not just apply it",
            description:
              "While updating its branding, the client's Word templates kept breaking, with formatting corruption and staff freely overriding brand elements. We rebuilt the suite from a single Master Template with eleven sub-templates, added a custom Formatting tab that locks down font and font-size controls, and built branded Quick Parts for cover pages and other template elements.",
            image:
              "https://www.officeexperts.com.au/case-studies/red-fox-advisory-brand-templatesLg.png",
            imageAlt:
              "Branded Word template suite built from a single Master Template",
          },
          {
            href: "/case-studies/water-education-program-word-powerpoint-templates",
            linkText: "Explore the Quick Parts and Slide Master",
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
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
