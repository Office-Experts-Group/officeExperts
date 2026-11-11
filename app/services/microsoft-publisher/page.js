// app/services/microsoft-publisher/page.js
import React from "react";
import dynamic from "next/dynamic";

import PublisherHero from "./(components)/PublisherHero";
import PublisherFaq, { faqs } from "./(components)/PublisherFaq";

// Dynamically imported, below the fold
const PublisherRetirement = dynamic(
  () => import("./(components)/PublisherRetirement"),
);
const PublisherConversion = dynamic(
  () => import("./(components)/PublisherConversion"),
);
const PublisherDestinations = dynamic(
  () => import("./(components)/PublisherDestinations"),
);
const PublisherPowerPoint = dynamic(
  () => import("./(components)/PublisherPowerPoint"),
);
const PublisherProcess = dynamic(
  () => import("./(components)/PublisherProcess"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Contact = dynamic(() => import("@/components/Contact"));

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-publisher";
const PAGE_TITLE = "Microsoft Publisher Migration and .pub File Conversion";
const PAGE_DESCRIPTION =
  "Microsoft Publisher has retired. We convert your .pub files and rebuild newsletters, brochures and forms as branded Word and PowerPoint templates.";

const SITE_URL = "https://www.officeexperts.com.au";

const DATE_PUBLISHED = "2024-10-27T00:00:00+00:00";
const DATE_MODIFIED = "2026-11-11T00:00:00+11:00";

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
          name: "Microsoft Publisher",
          item: PAGE_URL,
        },
      ],
    },
    // ── Service: what this page sells ──
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Publisher Migration",
      serviceType: "Document conversion and template development",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: { "@type": "Country", name: "Australia" },
      audience: {
        "@type": "BusinessAudience",
        name: "Organisations with Microsoft Publisher (.pub) files",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Publisher Migration Services",
        itemListElement: [
          "Publisher file audit and inventory",
          "Bulk .pub to PDF archiving",
          "Publisher to Word template rebuilds",
          "Publisher to PowerPoint template rebuilds",
          "Template training and support",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    // ── FAQPage: built from the same array PublisherFaq renders ──
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
      <PublisherHero />
      <PublisherRetirement />
      <PublisherConversion />
      <PublisherDestinations />
      <PublisherPowerPoint />
      <PublisherProcess />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Designed layouts rebuilt"
        headingAccent="for Word and PowerPoint"
        links={[
          {
            href: "/case-studies/water-education-program-word-powerpoint-templates",
            linkText: "Explore the lesson templates",
            title:
              "Turning an InDesign lesson design into Word and PowerPoint templates educators could actually use",
            description:
              "A water education program had a lesson template designed in InDesign, but curriculum writers across Western Australia worked in Word and PowerPoint. We translated the design into working Word and PowerPoint templates, with Quick Parts for each layout and a locked-down Slide Master system, so educators build consistent, branded lessons without wrestling with formatting.",
            image: "/case-studies/water-education-program-templatesLg.png",
            imageAlt:
              "Word and PowerPoint lesson templates rebuilt from an InDesign design",
          },
          {
            href: "/case-studies/environmental-consultancy-word-template-rebuild",
            linkText: "See the template rebuild",
            title:
              "Rebuilding a beautifully designed template that Word itself couldn't cope with",
            description:
              "The client's new templates looked exactly right, but they'd been laid out the way a design tool lays out a page, so simple edits pushed everything out of shape. We rebuilt the suite on proper Word styles, headings and page structure without changing the approved design, designing the formatting errors out rather than patching them.",
            image:
              "/case-studies/environmental-consultancy-word-template-rebuildLg.png",
            imageAlt:
              "Environmental consultancy Word templates rebuilt on proper styles",
          },
          {
            href: "/case-studies/sporting-organisation-multi-brand-word-template",
            linkText: "Explore the multi-brand template",
            title:
              "One Word Master Template and a colour theme for every discipline's brand",
            description:
              "A national sporting organisation was applying each discipline's branding to documents by hand. We built one Word Master Template with a colour theme per discipline, so covers, styles, numbering and tables all pick up the right brand colours, added more than 30 approved colours to Word, and trained the team to manage it.",
            image: "/case-studies/theme-swap-sample.webp",
            imageAlt:
              "Word Master Template switching between sporting discipline colour themes",
          },
        ]}
      />
      <PublisherFaq />
      <Contact />
    </>
  );
};

export default Page;
