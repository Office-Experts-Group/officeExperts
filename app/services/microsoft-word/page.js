import React from "react";

import dynamic from "next/dynamic";

// Keep Hero static as it's above fold
import Hero from "./(wordComponents)/Hero";

// Dynamically import everything else
const Services = dynamic(() => import("./(wordComponents)/Services"));
const CTAMain = dynamic(() => import("@/app/(components)/CTAMain"));
const IsRight = dynamic(() => import("./(wordComponents)/IsRight"));
const LockedFormatting = dynamic(
  () => import("./(wordComponents)/LockedFormatting"),
);
const SolutionsCarousel = dynamic(
  () => import("./(wordComponents)/SolutionsCarousel"),
);
const CTAFull = dynamic(() => import("@/app/(components)/CTAFull"));
const Testimonials = dynamic(() => import("@/app/(components)/Testimonials"));
const Brands = dynamic(() => import("@/components/Brands"));
const Contact = dynamic(() => import("@/components/Contact"));
const GoodToKnow = dynamic(
  () => import("@/app/about-us/(components)/GoodToKnow"),
);
const OurTemplates = dynamic(() => import("./(wordComponents)/OurTemplates"));
const CopilotIntegration = dynamic(
  () => import("./(wordComponents)/CopilotIntegration"),
);
const FormatTab = dynamic(() => import("./(wordComponents)/FormatTab"));

import { testimonials } from "@/testimonials";

import faqSchema from "./wordFaqs/homeSchema";

const DESCRIPTION =
  "Our Word Experts team has Australia's leading Microsoft Word Designers & Developers. Australia-wide senior consultants with 25+yrs experience";
const TITLE = "Microsoft Word Consultants & Designers";

const BASE = "https://www.officeexperts.com.au";
const PAGE_URL = `${BASE}/services/microsoft-word`;

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Office Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 620,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/services/microsoft-word",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      datePublished: "2017-11-22T14:23:06+10:00",
      dateModified: "2026-10-23T13:40:00+10:00",
      isPartOf: { "@id": `${BASE}/#website` }, // must match the main site's WebSite @id
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${BASE}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Word Experts",
          item: PAGE_URL,
        },
      ],
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
      <Hero />
      <Services />
      <OurTemplates />
      <CTAMain />
      <CopilotIntegration />
      <FormatTab />
      <LockedFormatting />
      <IsRight />
      <SolutionsCarousel />
      <Testimonials testimonials={testimonials} />
      <CTAFull />
      <Brands isBelowFold={true} />
      <GoodToKnow />
      <Contact />
    </>
  );
};

export default Page;
