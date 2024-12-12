import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import ExpertsAwait from "../../../components/ExpertsAwait";
import Contact from "../../../components/Contact";
import Testimonials from "../../(components)/Testimonials";
import PageSegmentMain from "./(components)/PageSegmentMain";
import SolutionsCarousel from "./(components)/SolutionsCarousel";

import { getTestimonialsPageSchema } from "../../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../../testimonials";

import longDesk from "../../../public/pageHeros/longDesk.webp";
import graphTableMob from "../../../public/pageHeros/mob/graphTableMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(testimonials),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/microsoft-powerpoint/",
      url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/",
      name: "Microsoft Powerpoint Services | Excel Specialist Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "Our developers and programmers across Australia have extensive experience. Get more information Visit our website www.officeexperts.com.au",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-powerpoint/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-powerpoint/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-powerpoint/#breadcrumb",
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
          name: "Our Microsoft PowerPoint Services",
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
      <ServiceHero
        title="Microsoft PowerPoint"
        desktopImage={longDesk}
        mobileImage={graphTableMob}
        altDesk={"long desk in an office"}
        altMob={"graph table on a desk"}
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
