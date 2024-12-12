import React from "react";

import Hero from "./(components)/Hero";
import Services from "./(components)/Services";
import CTAMain from "./(components)/CTAMain";
import IsRight from "./(components)/IsRight";
import SolutionsCarousel from "./(components)/SolutionsCarousel";
import CTAFull from "./(components)/CTAFull";
import Testimonials from "./(components)/Testimonials";
import Brands from "../../../components/Brands";
import Promo from "../../../components/Promo";
import Contact from "../../../components/Contact";

import { getHomePageSchema } from "../../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../../testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getHomePageSchema(testimonials),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/microsoft-excel/",
      url: "https://www.officeexperts.com.au/services/microsoft-excel/",
      name: "Microsoft Excel Consulting | Microsoft Excel Programming | Excel Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "Our Microsoft Excel programming services can enhance your productivity. Contact us now. Our expert Excel specialists are ready to help your business excel!",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-excel/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-excel/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.officeexperts.com.au/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Excel Experts Services",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.officeexperts.com.au/#website",
      url: "https://www.officeexperts.com.au/",
      name: "Office Experts Group: Microsoft Excel Experts, Microsoft Access Database Experts, Microsoft Word Experts, PowerPoint Experts, Azure, Power BI, SQL Server, SharePoint, Microsoft Office 365",
      description:
        "Your Microsoft Office Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.officeexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.officeexperts.com.au/?s={search_term_string}",
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
      <div style={{ padding: "3rem 0" }}>
        <Promo
          h2="We Deliver the Best Quality"
          p="Our Excel Experts team is a dedicated department of the Office Experts Group to handle all your Microsoft Excel requirements"
        />
      </div>
      <Contact />
    </>
  );
};

export default Page;
