import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import BlackSegment from "./(components)/BlackSegment";
import PageSegment8 from "./(components)/PageSegment8";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment5 from "./(components)/PageSegment5";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contents from "./(components)/Contents";

import longDesk from "../../../../public/pageHeros/longDesk.webp";
import codingMob from "../../../../public/pageHeros/mob/codingMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development/",
      url: "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development/",
      name: "VBA Macro Development | Office Experts Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "We are VBA Macro Experts! Our highly experienced VBA macro programmers are ready to advise you of the best solution to take your business to the next level.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development/#breadcrumb",
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
          name: "Our Services By Business Solution",
          item: "https://www.officeexperts.com.au/services/by-business-solution/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "VBA Macro Development",
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
      <Contents />
      <ServiceHero
        title={"VBA Macro Development"}
        desktopImage={longDesk}
        mobileImage={codingMob}
        altDesk={"long desk in office"}
        altMob={"computer code on a screen"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment8 />
      <BlackSegment />
      <PageSegment4 />
      <PageSegment5 />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
