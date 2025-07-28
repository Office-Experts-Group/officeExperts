import React from "react";

import Hero from "./(components)/Hero";
import Services from "./(components)/Services";
import CTAMain from "./(components)/CTAMain";
import IsRight from "./(components)/IsRight";
import CTAFull from "./(components)/CTAFull";
import Testimonials from "./(components)/Testimonials";
import SolutionsCarousel from "./(components)/SolutionsCarousel";
import Brands from "../../../components/Brands";
import Promo from "../../../components/Promo";
import Contact from "../../../components/Contact";

import { getHomePageSchema } from "../../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../../testimonials";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getHomePageSchema(testimonials)["@graph"],
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/microsoft-word",
      url: "https://www.officeexperts.com.au/services/microsoft-word",
      name: "Microsoft Word Services | Experts in MS Office Design",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-07-28T00:00:00+00:00",
      description:
        "We offer ongoing support and training, Microsoft Word services in Australia for your staff to learn specific tasks as required. Call us Today 1300 102 810",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-word#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/services/microsoft-word"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-word#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.officeexperts.com.au/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Our Microsoft Word Services",
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
      <div style={{ padding: "3rem 0" }}>
        <Promo
          h2="Master Your Documents"
          p="Professional Microsoft Word solutions to protect your brand, automate workflows, and empower your team to create consistent, high-quality documentation."
        />
      </div>
      <Contact />
    </>
  );
};

export default Page;
