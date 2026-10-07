import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import RelatedLinks from "../../../../components/RelatedLinks";

import pen from "../../../../public/pageHeros/pen.webp";
import graphTableMob from "../../../../public/pageHeros/mob/graphTableMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
      url: "https://www.officeexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
      name: "Custom Designed PowerPoint Templates | PowerPoint Design | Office Experts",
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
          "https://www.officeexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations#breadcrumb",
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
          name: "Custom PowerPoint Templates and Presentations",
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
        title="Custom PowerPoint Templates and Presentations"
        desktopImage={pen}
        mobileImage={graphTableMob}
        altDesk={"pen in an office"}
        altMob={"graph table on a desk"}
      />
      <PageSegmentMain />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="PowerPoint template projects we've delivered"
        links={[
          {
            href: "/case-studies/government-department-enterprise-office-template-suite",
            linkText: "See the precinct themes",
            title:
              "A PowerPoint framework with 10 precinct-specific themes for a state department",
            description:
              "After a major brand refresh, the client needed its Office environment brought into line. We rebuilt its PowerPoint presentation framework with expanded slide layouts, icon libraries, accessibility guidance and improved data visualisation, then built 10 additional precinct-specific themes so each precinct keeps its own identity within the corporate brand. The same project redesigned 17 enterprise Word templates.",
            image: "/case-studies/government-enterprise-office-templatesLg.png",
            imageAlt:
              "PowerPoint framework and precinct themes for a state government department",
          },
          {
            href: "/case-studies/water-education-program-word-powerpoint-templates",
            linkText: "Explore the Slide Master system",
            title:
              "Turning an InDesign lesson design into Word and PowerPoint templates educators can use",
            description:
              "The client's water education program had a lesson design built in InDesign, but curriculum writers across Western Australia needed to build lessons in Word and PowerPoint. We translated the design into working Word and PowerPoint templates, including a PowerPoint Slide Master system with precise placeholders, locked-down brand elements and purpose-built layouts for activities, diagrams and assessment pages.",
            image: "/case-studies/water-education-program-templatesLg.png",
            imageAlt:
              "Word and PowerPoint lesson templates for a water education program",
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
