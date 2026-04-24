import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import ExpertsAwait from "../../../components/ExpertsAwait";
import Contact from "../../../components/Contact";
import Testimonials from "../../(components)/Testimonials";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import SolutionsCarousel from "./(components)/SolutionsCarousel";
import SolutionsCarouselReverse from "./(components)/SolutionsCarouselReverse";
import CTAFull from "../../(components)/CTAFull";

import { getTestimonialsPageSchema } from "../../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../../testimonials";

import longDesk from "../../../public/pageHeros/longDesk.webp";
import graphTableMob from "../../../public/pageHeros/mob/graphTableMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../utils/schemaGenerators";
import Ms365 from "./(components)/Ms365";
import Quote from "./(components)/Quote";
import PageSegmentFinal from "./(components)/Pagesegmentfinal";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(testimonials)["@graph"],
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/microsoft-office-365",
      url: "https://www.officeexperts.com.au/services/microsoft-office-365",
      name: "Microsoft Office 365 Consultants",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-04-24T00:00:00+00:00",
      description:
        "We offer best Microsoft office Services in Australia. Visit www.officeexperts.com.au to get more info or Email us Consult@officeexperts.com.au",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-office-365#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-office-365",
          ],
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
        title="Microsoft Office 365"
        desktopImage={longDesk}
        mobileImage={graphTableMob}
        altDesk={"desk in an office environment"}
        altMob={"graphs on a table"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <Quote />
      <Ms365 />
      <ExpertsAwait />
      <Testimonials testimonials={testimonials} />
      <SolutionsCarousel />
      <SolutionsCarouselReverse />
      <CTAFull />
      <PageSegmentFinal />
      <Contact />
    </>
  );
};

export default Page;
