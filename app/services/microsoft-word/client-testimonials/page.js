import React from "react";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../../components/Contact"));
const TestimonialPage = dynamic(() => import("./(components)/TestimonialPage"));
import ServiceHero from "../../components/ServiceHero";

import { getTestimonialsPageSchema } from "../../utils/testimonialSchemaGenerator";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import { testimonials } from "../../testimonials";
import { filterAndSortTestimonials } from "../../utils/filterTestimonials";

const serviceTestimonials =
  filterAndSortTestimonials(testimonials, "word") || testimonials;

import testimonialsPic from "../../public/pageHeros/testimonials.webp";
import testimonialsMob from "../../public/pageHeros/mob/testimonialsMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(serviceTestimonials, "word")["@graph"],
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.wordexperts.com.au",
      "Word Experts",
      "Australia-wide Microsoft Word Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/client-testimonials",
      url: "https://www.wordexperts.com.au/client-testimonials",
      name: "Testimonials - Word Experts - Microsoft Word Design, Development and Consulting",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2019-08-06T07:26:47+00:00",
      dateModified: "2026-07-02T00:00:00+00:00",
      description:
        "Read what our clients say about Word Experts' professional Microsoft Word services. Client testimonials from businesses across Australia.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/client-testimonials#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/client-testimonials"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/client-testimonials#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wordexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Testimonials",
          item: "https://www.wordexperts.com.au/client-testimonials",
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
        title="Client Testimonials"
        desktopImage={testimonialsPic}
        mobileImage={testimonialsMob}
        altDesk={"Wooden block with smiley face"}
        altMob={"five stars"}
      />
      <TestimonialPage testimonials={serviceTestimonials} />
      <Contact />
    </>
  );
};

export default Page;
