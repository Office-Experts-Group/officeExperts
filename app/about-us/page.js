// /about-us/page.js
import React from "react";
import dynamic from "next/dynamic";

// Static imports — above the fold (hero + first content section)
import AboutHero from "./(components)/AboutHero";
import AboutStory from "./(components)/AboutStory";

// Shared schema generators (ProfessionalService, Organization, WebSite nodes)
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/schemaGenerators";

// Testimonials data, passed into the shared Testimonials carousel
import { testimonials } from "@/testimonials";

// FAQ content — rendered in AboutWhyUs and reused below for the FAQPage schema
import faqs from "@/faqs/about-us";

// Dynamically imported — below the fold, each split into its own chunk
const Testimonials = dynamic(() => import("../(components)/Testimonials"));
const AboutEvolution = dynamic(() => import("./(components)/AboutEvolution"));
const GoodToKnow = dynamic(() => import("./(components)/GoodToKnow"));
const AboutWhyUs = dynamic(() => import("./(components)/AboutWhyUs"));
const MeetTheTeamSlider = dynamic(
  () => import("./(components)/MeetTheTeamSlider"),
);
const AboutCta = dynamic(() => import("./(components)/AboutCta"));
const Contact = dynamic(() => import("@/components/Contact"));

// Page-level constants — keep PAGE_URL, PAGE_TITLE and PAGE_DESCRIPTION in sync with layout.js
const PAGE_URL = "https://www.officeexperts.com.au/about-us";
const PAGE_TITLE = "About Us | Microsoft Office Consultants Since 2000";
const PAGE_DESCRIPTION =
  "Microsoft Office consultants specialising in Excel, Access, Outlook, Word and PowerPoint. Australia-wide development, support and integrations since 2000.";

const SITE_URL = "https://www.officeexperts.com.au";

const DATE_PUBLISHED = "2024-10-26T00:00:00+00:00";
const DATE_MODIFIED = "2026-11-12T00:00:00+11:00";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(),

    // AboutPage is the schema.org subtype of WebPage built for exactly this page
    {
      "@type": "AboutPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      about: {
        "@id": `${SITE_URL}#business`,
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

    // BreadcrumbList — item URL required on all positions including current page
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
          name: "About Us",
          item: PAGE_URL,
        },
      ],
    },

    // FAQPage — built from the same faqs array AboutWhyUs renders, so the two never drift.
    // Assumes each answer is a plain string (JSX answers would need a text-only copy here).
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
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

      <main>
        <AboutHero />
        <AboutStory />
        <Testimonials testimonials={testimonials} />
        <AboutEvolution />
        <GoodToKnow />
        <AboutWhyUs />
        <MeetTheTeamSlider />
        <AboutCta />
        <Contact />
      </main>
    </>
  );
};

export default Page;
