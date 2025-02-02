import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";

import twoComputers from "../../../../public/pageHeros/twoComputers.webp";
import graph from "../../../../public/pageHeros/mob/graph.webp";

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
        "https://www.officeexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign",
      url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign",
      name: "Word Popup Form | Word Popup Window | Word Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign#breadcrumb",
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
          name: "Our Microsoft PowerPoint Services",
          item: "https://www.officeexperts.com.au/services/microsoft-powerpoint",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Existing Presentation Redesign",
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
        title="Existing Presentation Redesign"
        desktopImage={twoComputers}
        mobileImage={graph}
        altDesk={"two computers in an office"}
        altMob={"graph on a desk"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
