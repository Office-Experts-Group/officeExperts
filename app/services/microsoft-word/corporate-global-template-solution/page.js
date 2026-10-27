import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const IFrame = dynamic(() => import("../(wordComponents)/IFrame"));
const Contact = dynamic(() => import("@/components/Contact"));
const BlackSegment = dynamic(() => import("./(components)/BlackSegment"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contents = dynamic(() => import("./(components)/Contents"));
const BookSegment = dynamic(() => import("./(components)/BookSegment"));
const BoxSegment = dynamic(() => import("./(components)/BoxSegment"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));

import faqs from "../wordFaqs/corporate-solutions";
import faqSchema from "../wordFaqs/corporateSolutionsSchema";

import templates from "@/public/pageHeros/templates.webp";
import templateMob from "@/public/pageHeros/mob/templateMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/corporate-global-template-solution";
const PAGE_TITLE = "Corporate Global Template Solution - Microsoft Word";
const PAGE_DESCRIPTION =
  "Advanced Corporate Word Template Solutions enabling efficient creation of corporate documents, brand consistency and document integrity.";
const SITE_URL = "https://www.officeexperts.com.au";

const HERO_ALT_DESKTOP = "word templates";
const HERO_ALT_MOBILE = "word templates";

// Converted from the WE value 2018-07-15T15:50:26+00:00
const DATE_PUBLISHED = "2018-07-16T01:50:26+10:00";
// Set by hand when content really changes (Word Experts → Office Experts rewording)
const DATE_MODIFIED = "2026-10-23T00:00:00+11:00";

const caseStudies = [
  {
    href: "/case-studies/corporate-group-multi-entity-master-template-suite",
    linkText: "See the Global Common template",
    title: "One shared Global Common template keeping four entities on-brand",
    description:
      "A corporate group needed consistent, professional templates across four related entities without four separate builds. We built a shared Global Common template, a custom Master Template for each entity on top of it, and a custom Formatting tab with a copy/paste macro that strips foreign formatting and applies approved styling automatically.",
    image: "/case-studies/corporate-group-multi-entity-templatesLg.png",
    imageAlt:
      "Master Templates for four entities built from one Global Common template",
  },
  {
    href: "/case-studies/sporting-organisation-multi-brand-word-template",
    linkText: "Explore the multi-brand template",
    title:
      "One Word Master Template and a colour theme for every discipline's brand",
    description:
      "A national sporting organisation runs several disciplines under one parent brand, each with its own colours. We built a single Word Master Template with a suite of discipline colour themes, so sub-templates pick up the right brand colours across covers, styles, numbering and tables. We also added more than 30 brand colours beyond Word's standard colour theme and trained the client's team to manage the templates.",
    image: "/case-studies/theme-swap-sample.webp",
    imageAlt:
      "Word colour themes for each discipline of a national sporting organisation",
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
          name: "Corporate Global Template Solution",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Corporate Global Template Solution",
      provider: {
        "@id": `${SITE_URL}#organization`,
      },
      description:
        "Advanced Corporate Word Template Solution for enterprise-wide document control and brand consistency",
      serviceType: "Enterprise Document Management",
      category: "Corporate Solutions",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Corporate Template Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Global Template Development",
              description: "Creation of enterprise-wide document templates",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Template Implementation",
              description: "Deployment and integration of corporate templates",
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
      <Contents />
      <ServiceHero
        title="Corporate Global Template Solution"
        desktopImage={templates}
        mobileImage={templateMob}
        altDesk={HERO_ALT_DESKTOP}
        altMob={HERO_ALT_MOBILE}
      />
      <PageSegmentMain />
      <IFrame />
      <div style={{ marginTop: "9rem" }}>
        <BookSegment />
      </div>
      <BlackSegment />
      <BoxSegment />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Corporate and multi-brand template projects we've delivered"
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
