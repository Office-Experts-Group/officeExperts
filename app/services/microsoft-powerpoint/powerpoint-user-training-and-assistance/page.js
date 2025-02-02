import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Promo from "../../../../components/Promo";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import PageSegment4 from "./(components)/PageSegment4";

import support from "../../../../public/pageHeros/support.webp";
import meetingMob from "../../../../public/pageHeros/mob/meetingMob.webp";

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
        "https://www.officeexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
      url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
      name: "PowerPoint Training | PowerPoint Assistance | PowerPoint Help | PowerPoint Experts",
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
          "https://www.officeexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance#breadcrumb",
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
          name: "PowerPoint User Training and Assistance",
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
        title="PowerPoint User Training and Assistance"
        desktopImage={support}
        mobileImage={meetingMob}
        altDesk={"support"}
        altMob={"meeting at an office"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <Promo
        h2={"Get Trained By Experts!"}
        p={
          "Our PowerPoint experts can instruct users on the best ways to create presentations giving guidance and helpful hints."
        }
      />
      <PageSegment4 />
      <Contact />
    </>
  );
};

export default Page;
