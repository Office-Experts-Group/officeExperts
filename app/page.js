import React from "react";
import dynamic from "next/dynamic";

// Keep Hero static as it's above fold
import Hero from "./(components)/Hero";

// Dynamically import everything else
const Services = dynamic(() => import("./(components)/Services"));
const CTAMain = dynamic(() => import("./(components)/CTAMain"));
const IsRight = dynamic(() => import("./(components)/IsRight"));
const SolutionsCarousel = dynamic(() =>
  import("./(components)/SolutionsCarousel")
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
} from "../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getHomePageSchema(testimonials, "office")["@graph"],
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/",
      url: "https://www.officeexperts.com.au",
      name: "Microsoft Office Services | Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "We provide Microsoft office services, Custom office Solutions, VBA and Macro Development, Cloud Based Solution with Azure. Call us today 1300 102 810",
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
    {
      "@type": "WebSite",
      "@id": "https://www.officeexperts.com.au#website",
      url: "https://www.officeexperts.com.au",
      name: "Office Experts Group: Microsoft Excel Experts, Microsoft Access Database Experts, Microsoft Word Experts, PowerPoint Experts, Azure, Power BI, SQL Server, SharePoint, Microsoft Office 365",
      description:
        "Your Microsoft Office Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.officeexperts.com.au?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
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
