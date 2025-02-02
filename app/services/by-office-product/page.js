import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import ExpertsAwait from "../../../components/ExpertsAwait";
import Contact from "../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import SolutionsCarousel from "./(components)/SolutionsCarousel";
import SolutionsCarouselReverse from "./(components)/SolutionsCarouselReverse";

import graphMeeting from "../../../public/pageHeros/graphMeeting.webp";
import meetingMob from "../../../public/pageHeros/mob/meetingMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/by-office-product",
      url: "https://www.officeexperts.com.au/services/by-office-product",
      name: "Office Product Services | Excel Consulting Solutions AU",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "Microsoft Office Consultancy and Assistance Services for Australia, Excel, Word, Access, PowerPoint, SharePoint. Contact us Consult@officeexperts.com.au",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-office-product#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-office-product",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-office-product#breadcrumb",
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
          name: "Services By Office Product",
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
        title="Services By Office Product"
        desktopImage={graphMeeting}
        mobileImage={meetingMob}
        altDesk={"graphs at a meeting"}
        altMob={"meeting at an office"}
      />
      <PageSegmentMain />
      <SolutionsCarousel />
      <SolutionsCarouselReverse />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
