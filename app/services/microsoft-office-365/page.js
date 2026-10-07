// app/services/microsoft-office-365/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

// Dynamically imported below the fold
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const Quote = dynamic(() => import("./(components)/Quote"));
const Ms365 = dynamic(() => import("./(components)/Ms365"));
const ExpertsAwait = dynamic(() => import("../../../components/ExpertsAwait"));
const Testimonials = dynamic(() => import("../../(components)/Testimonials"));
const SolutionsCarousel = dynamic(
  () => import("./(components)/SolutionsCarousel"),
);
const SolutionsCarouselReverse = dynamic(
  () => import("./(components)/SolutionsCarouselReverse"),
);
const CTAFull = dynamic(() => import("../../(components)/CTAFull"));
const PageSegmentFinal = dynamic(
  () => import("./(components)/Pagesegmentfinal"),
);
const RelatedLinks = dynamic(() => import("../../../components/RelatedLinks"));
const Contact = dynamic(() => import("../../../components/Contact"));

import { getTestimonialsPageSchema } from "../../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../../testimonials";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../utils/schemaGenerators";

import longDesk from "../../../public/pageHeros/longDesk.webp";
import graphTableMob from "../../../public/pageHeros/mob/graphTableMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-office-365";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(testimonials)["@graph"],
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Microsoft Office 365 Consultants",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-10-04T00:00:00+00:00",
      description:
        "Professional Office 365 consulting services including implementation, migration, business automation, and managed services across Australia.",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
        },
      ],
    },

    // ── BreadcrumbList ───────────────────────
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
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
          name: "Microsoft Office 365",
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

      <main>
        <ServiceHero
          title="Microsoft Office 365"
          desktopImage={longDesk}
          mobileImage={graphTableMob}
          altDesk="desk in an office environment"
          altMob="graphs on a table"
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
        <RelatedLinks
          theme="dark"
          eyebrow="Case Studies"
          heading="Office 365 solutions we have delivered"
          links={[
            {
              href: "/case-studies/professional-services-sharepoint-foundation-workshops",
              linkText: "See how the SharePoint foundation was built",
              title:
                "Moving a team off shared logins onto a proper SharePoint foundation",
              description:
                "The client's team ran its email, files and calendar through one shared login, with a second shared login for its bookings system, so nobody could see who had changed a file or remove someone cleanly when they left. We ran live SharePoint Foundation Workshops that produced a site structure built around how the team works, an Owners, Members and Visitors access model based on security groups, and a staged plan to retire both shared logins.",
              image:
                "/case-studies/professional-services-sharepoint-foundationLg.png",
              imageAlt:
                "SharePoint foundation workshops for a professional services team",
            },
            {
              href: "/case-studies/manufacturing-project-setup-automation",
              linkText: "Read how job folders are built automatically",
              title:
                "Cutting project setup from roughly 30 minutes to under a minute",
              description:
                "Every time the client won a new project, staff manually built the job folder across three SharePoint sites, renamed everything to match the naming convention and copied in templates. We built a Power Automate flow that reads the project details from the notification email and does the whole setup automatically, with error handling that notifies an admin if a step fails. Setup time fell from roughly 30 minutes to under 1 minute.",
              image: "/case-studies/manufacturing-project-setupLg.webp",
              imageAlt:
                "Automated SharePoint project folder setup for a manufacturing company",
            },
          ]}
        />
        <Contact />
      </main>
    </>
  );
};

export default Page;
