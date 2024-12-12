import React from "react";

import Hero from "./(components)/Hero";
import Services from "./(components)/Services";
import CTAMain from "./(components)/CTAMain";
import IsRight from "./(components)/IsRight";
import CTAFull from "./(components)/CTAFull";
import Testimonials from "./(components)/Testimonials";
import Brands from "../../../components/Brands";
import Promo from "../../../components/Promo";
import Contact from "../../../components/Contact";
import SolutionsCarousel from "./(components)/SolutionsCarousel";

import { getHomePageSchema } from "../../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../../testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getHomePageSchema(testimonials),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/microsoft-access/",
      url: "https://www.officeexperts.com.au/services/microsoft-access/",
      name: "Microsoft Access Services | Microsoft Access Experts AU",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "We offer ongoing support and training, microsoft access services in Australia for your staff to learn specific tasks as required. Call us Today 1300 102 810",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-access/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-access/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-access/#breadcrumb",
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
          name: "Access Experts Services",
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
          h2="We Deliver the Best Quality"
          p="Access Experts is our dedicated team for all your Microsoft Access needs "
        />
      </div>
      <Contact />
    </>
  );
};

export default Page;
