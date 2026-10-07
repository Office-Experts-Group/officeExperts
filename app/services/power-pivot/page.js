import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import Contact from "../../../components/Contact";
import FAQSection from "../../../components/FAQSection";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import PromoLink from "./(components)/PromoLink";
import BlackSegment from "./(components)/BlackSegment";
import RelatedLinks from "../../../components/RelatedLinks";

import graphMeeting from "../../../public/pageHeros/graphMeeting.webp";
import meetingMob from "../../../public/pageHeros/mob/meetingMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../utils/schemaGenerators";
import faqs from "../../../faqs/pivot";
import faqSchema from "../../../faqs/pivotSchema";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts",
      "Australia-wide Microsoft Office Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/power-pivot",
      url: "https://www.officeexperts.com.au/services/power-pivot",
      name: "Power Pivot | Office Experts",
      description:
        "Office Experts offers advanced Power Pivot training and consulting to help you model, analyse, and visualise complex data with ease.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      datePublished: "2025-04-10T00:00:00+00:00",
      dateModified: "2025-10-14T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/power-pivot#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/services/power-pivot"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/services/power-query#breadcrumb",
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
          name: "Power Pivot Services",
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
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Power Pivot projects we've delivered"
        links={[
          {
            href: "/case-studies/golf-supplier-sales-data-consolidation",
            linkText: "Read about out Power Pivot solution",
            title:
              "Turning a year of scattered supplier sales files into one automated summary",
            description:
              "The client received dozens of separate Excel files from its suppliers throughout the year, each detailing the sales made to every club and member. We built a Power Query and Power Pivot solution that pulls the raw files in automatically, categorises the data and produces summaries by supplier, club or member, month and quarter. A second workbook compares consecutive financial years, showing the quarter-on-quarter movement without any manual copy and paste.",
            image: "/case-studies/on-course-golf-sales-summaryLg.png",
            imageAlt:
              "Supplier sales summary workbook built with Power Query and Power Pivot",
          },
        ]}
      />
      <PromoLink />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
