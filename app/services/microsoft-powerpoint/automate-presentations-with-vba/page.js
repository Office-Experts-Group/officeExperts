import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import RelatedLinks from "../../../../components/RelatedLinks";

import whiteBoard from "../../../../public/pageHeros/whiteBoard.webp";
import coffeeMob from "../../../../public/pageHeros/mob/coffeeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts Group",
      "Australia-wide Microsoft Office Programming, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba",
      url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba",
      name: "VBA Automation Experts | Macro Automation Experts | Excel Experts",
      description:
        "Our team of PowerPoint consultants and programmers provide data linking services, VBA automation solutions and brand consistency for PowerPoint presentations.",
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
          "https://www.officeexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba#breadcrumb",
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
          name: "Automate Presentations with VBA",
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
        title="Automate Presentations with VBA"
        desktopImage={whiteBoard}
        mobileImage={coffeeMob}
        altDesk={"whiteboard in office"}
        altMob={"coffee on a desk"}
      />
      <PageSegmentMain />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="PowerPoint automation projects we've delivered"
        links={[
          {
            href: "/case-studies/retail-analytics-automated-review-deck-generator",
            linkText: "See how the deck builds itself",
            title:
              "Turning a days-long PowerPoint build into a one-click deck of around 660 slides",
            description:
              "The client's analyst built large retailer review decks by hand, pulling figures out of Power BI and pasting them into templates slide by slide. We built a Python tool that reads a simple scope sheet, queries the client's Power BI data directly, and assembles a fully branded deck of around 660 slides in under five minutes.",
            image: "/case-studies/retail-analytics-deck-generatorLg.png",
            imageAlt:
              "Automatically generated review deck for a retail analytics business",
          },
        ]}
      />
      <Segment4Repeat />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
