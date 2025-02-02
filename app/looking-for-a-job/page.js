import React from "react";

import Contact from "../../components/Contact";
import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment7 from "./(components)/PageSegment7";
import Promo from "../../components/Promo";
import BlackSegment from "./(components)/BlackSegment";

import resume from "../../public/pageHeros/resume.webp";
import resumeMob from "../../public/pageHeros/mob/resumeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebSite",
      "@id": "https://www.officeexperts.com.au#website",
      url: "https://www.officeexperts.com.au",
      name: "Office experts",
      description: "Microsoft Excel, Microsoft Access, Power BI, MS Office",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.officeexperts.com.au?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/looking-for-a-job",
      url: "https://www.officeexperts.com.au/looking-for-a-job",
      name: "Looking for a job?",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/looking-for-a-job#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/looking-for-a-job"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/looking-for-a-job#breadcrumb",
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
          name: "Looking for a job?",
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
        title={"Looking for a job?"}
        desktopImage={resume}
        mobileImage={resumeMob}
        altDesk={"Resume"}
        altMob={"Resume"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <BlackSegment />
      <Promo
        h2={"We're looking for contractors"}
        p={
          "All of our consultants work as independent contractors, not as employees. Our consultants are responsible for communicating with clients to scope, quote, implement and deliver projects."
        }
      />
      <PageSegment7 />
      <Contact />
    </>
  );
};

export default Page;
