import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import Contact from "../../../components/Contact";
import FAQSection from "../../../components/FAQSection";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import PromoLink from "./(components)/PromoLink";
import BlackSegment from "./(components)/BlackSegment";

import graphMeeting from "../../../public/pageHeros/graphMeeting.webp";
import meetingMob from "../../../public/pageHeros/mob/meetingMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../utils/schemaGenerators";
import faqs from "../../../faqs/pivot";
import faqSchema from "../../../faqs/pivotSchema";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/power-pivot",
      url: "https://www.officeexperts.com.au/services/power-pivot",
      name: "Power Query | Excel Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      datePublished: "2025-04-10T00:00:00+00:00",
      dateModified: "2025-04-10T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/power-pivot#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/power-pivot",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/power-query#breadcrumb",
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
          name: "Power Query Services",
          item: "https://www.officeexperts.com.au/services/power-pivot",
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
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="Power Pivot"
        desktopImage={graphMeeting}
        mobileImage={meetingMob}
        altDesk={"graphs at a meeting"}
        altMob={"meeting at an office"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <BlackSegment />
      <PromoLink />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
