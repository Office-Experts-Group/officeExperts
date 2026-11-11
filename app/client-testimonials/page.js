import React from "react";

import Contact from "@/components/Contact";
import TestimonialPage from "./(components)/TestimonialPage";
import ServiceHero from "@/components/ServiceHero";

import { generateTestimonialSchema } from "@/utils/schemaGenerators";
import { testimonials } from "@/testimonials";

import testimonialsPic from "@/public/pageHeros/testimonials.webp";
import testimonialsMob from "@/public/pageHeros/mob/testimonialsMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateTestimonialSchema(),

    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/client-testimonials",
      url: "https://www.officeexperts.com.au/client-testimonials",
      name: "Client Testimonials & Reviews | Office Experts Group",
      description:
        "Read testimonials from our satisfied clients across Australia. Honest reviews from Australian businesses.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-07-01T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/client-testimonials#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/client-testimonials"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/client-testimonials#breadcrumb",
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
          name: "Testimonials",
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
      <TestimonialPage testimonials={testimonials} />
      <Contact />
    </>
  );
};

export default Page;
