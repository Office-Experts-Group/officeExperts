import React from "react";
import dynamic from "next/dynamic";

// Keep Hero static as it's above fold
import Hero from "./(components)/Hero";

// Dynamically import everything else
const Services = dynamic(() => import("./(components)/Services"));
const CTAMain = dynamic(() => import("./(components)/CTAMain"));
const IsRight = dynamic(() => import("./(components)/IsRight"));
const SolutionsCarousel = dynamic(
  () => import("./(components)/SolutionsCarousel"),
);
const CTAFull = dynamic(() => import("./(components)/CTAFull"));
const Testimonials = dynamic(() => import("./(components)/Testimonials"));
const Brands = dynamic(() => import("../components/Brands"));
const Promo = dynamic(() => import("../components/Promo"));
const Contact = dynamic(() => import("../components/Contact"));

import { getHomePageSchema } from "../utils/testimonialSchemaGenerator";
import { testimonials } from "../testimonials";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    // Review + AggregateRating nodes (3 reviews on home page)
    ...getHomePageSchema(testimonials)["@graph"],

    // LocalBusiness / ProfessionalService
    generateProfessionalServiceSchema(),

    // Organization (company identity, sameAs social links etc.)
    generateOrganizationSchema(),

    // WebSite (same on every page — generated from shared utility)
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts Group",
      "Your Microsoft Office Design, Development and Consulting Experts",
    ),

    // WebPage — describes this specific page
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/#webpage",
      url: "https://www.officeexperts.com.au",
      name: "Microsoft Office Consulting & Solutions | Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#business",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-02-03T00:00:00+00:00",
      description:
        "Professional Microsoft Office consulting and support services across Australia. Custom solutions in Excel, Access, Word, Power Platform and Office 365. Call 1300 102 810.",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au"],
        },
      ],
    },

    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeexperts.com.au",
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
      <Hero />
      <Services />
      <CTAMain />
      <IsRight />
      <SolutionsCarousel />
      <Testimonials testimonials={testimonials} />
      <Brands />
      <CTAFull />
      <Promo
        h2="Automate & Innovate"
        p="Reduce costs and boost productivity with custom Microsoft Office solutions. Our experts deliver tailored automation, reporting, and integration services across Australia."
      />
      <Contact />
    </>
  );
};

export default Page;
