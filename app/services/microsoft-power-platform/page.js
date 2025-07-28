import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import ExpertsAwait from "../../../components/ExpertsAwait";
import Contact from "../../../components/Contact";
import Testimonials from "../../(components)/Testimonials";
import PageSegmentMain from "./(components)/PageSegmentMain";
import SolutionsCarousel from "./(components)/SolutionsCarousel";

import { getTestimonialsPageSchema } from "../../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../../testimonials";

import penPoint from "../../../public/pageHeros/penPoint.webp";
import glassesMob from "../../../public/pageHeros/mob/glassesMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(testimonials)["@graph"],
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-power-platform",
      url: "https://www.officeexperts.com.au/services/microsoft-power-platform",
      name: "Our Microsoft Power Platform Services - Office Experts Group: Microsoft Excel Experts, Microsoft Access Database Experts, Microsoft Word Experts, PowerPoint Experts, Azure, Power BI, SQL Server, SharePoint, Microsoft Office 365",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-07-28T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-power-platform#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-power-platform",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-power-platform#breadcrumb",
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
          name: "Our Microsoft Power Platform Services",
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
      <ServiceHero
        title="Microsoft Power Platform"
        desktopImage={penPoint}
        mobileImage={glassesMob}
        altDesk={"pen pointing to a point"}
        altMob={"glasses on a desk"}
      />
      <PageSegmentMain />
      <SolutionsCarousel />
      <Testimonials testimonials={testimonials} />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
