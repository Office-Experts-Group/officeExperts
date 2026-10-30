// /app/services/page.js
// Server component: composes the /services hub from its section components.
// Each section component holds its own content.
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import GroupIntro from "./(components)/GroupIntro";
// Small helper that builds the schema.org ItemList entries
import { toListItems } from "./servicesHelpers";

// Below the fold: dynamic imports (still server rendered)
const AiAutomationSection = dynamic(
  () => import("./(components)/AiAutomationSection"),
);
const PowerPlatformSection = dynamic(
  () => import("./(components)/PowerPlatformSection"),
);
const ExcelSection = dynamic(() => import("./(components)/ExcelSection"));
const WordSection = dynamic(() => import("./(components)/WordSection"));
const AccessSection = dynamic(() => import("./(components)/AccessSection"));
const PowerPointSection = dynamic(
  () => import("./(components)/PowerPointSection"),
);
const CustomDevSection = dynamic(
  () => import("./(components)/CustomDevSection"),
);
const Microsoft365Section = dynamic(
  () => import("./(components)/Microsoft365Section"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const ServicesFaq = dynamic(() => import("./(components)/ServicesFaq"));
const Contact = dynamic(() => import("@/components/Contact"));

// Hero images
import servicesHero from "@/public/pageHeros/services.webp";
import servicesHeroMob from "@/public/pageHeros/mob/servicesMob.webp";

const PAGE_URL = "https://www.officeexperts.com.au/services";
const PAGE_TITLE = "Microsoft Office, Power Platform and AI Services";
const PAGE_DESCRIPTION =
  "Word, Excel, Access, PowerPoint, Power Platform, Microsoft 365 and AI agent development from Australia's Microsoft Office specialists since 2000.";

const SITE_URL = "https://www.officeexperts.com.au";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      description: PAGE_DESCRIPTION,
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
      ],
    },
    {
      // The eight service areas, each pointing at its section on this page
      "@type": "ItemList",
      "@id": `${PAGE_URL}#service-areas`,
      name: "Office Experts service areas",
      itemListElement: toListItems(
        [
          { name: "AI and automation", href: "/services#ai-and-automation" },
          { name: "Power Platform", href: "/services#power-platform" },
          { name: "Excel", href: "/services#excel" },
          { name: "Word", href: "/services#word" },
          {
            name: "Access and databases",
            href: "/services#access-and-databases",
          },
          { name: "PowerPoint", href: "/services#powerpoint" },
          {
            name: "Custom development",
            href: "/services#custom-development",
          },
          {
            name: "Microsoft 365 and support",
            href: "/services#microsoft-365",
          },
        ],
        SITE_URL,
      ),
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
        title="Microsoft Consulting and Development Services"
        desktopImage={servicesHero}
        mobileImage={servicesHeroMob}
        altDesk="Microsoft Office, Power Platform and AI services"
        altMob="Microsoft Office, Power Platform and AI services"
        darker={true}
      />

      <GroupIntro />
      <AiAutomationSection />
      <PowerPlatformSection />
      <ExcelSection />
      <WordSection />
      <AccessSection />
      <PowerPointSection />
      <CustomDevSection />
      <Microsoft365Section />

      {/* RelatedLinks is a shared component, so this is the one section that takes props */}
      <RelatedLinks
        eyebrow="Proven results"
        heading="A few of the Results our"
        headingAccent="clients have seen"
        links={[
          {
            href: "/case-studies/rdao-application-ai-review-workflow",
            title:
              "Cutting a 6-7 day investment review down to 90 minutes with an AI agent workflow",
            description:
              "One person spent six to seven days manually researching each investment applicant. We built an AI agentic workflow that produces a detailed, referenced review in around 90 minutes.",
            image: "/case-studies/review-platform.webp",
            linkText: "See our AI agent review workflow",
          },
          {
            href: "/case-studies/life-insurance-real-time-competitive-intelligence",
            title:
              "Cutting competitor response time from two weeks to twelve minutes",
            description:
              "A bank's life insurance division was consistently late to competitor moves. We built an AI-driven system on its own Microsoft 365 tenancy that monitors competitors around the clock and routes prioritised alerts into Teams.",
            image:
              "/case-studies/life-insurance-competitive-intelligenceLg.png",
            linkText: "Explore our competitive intelligence system",
          },
          {
            href: "/case-studies/manufacturing-project-setup-automation",
            title:
              "Turning a new project email into a fully built job folder in seconds",
            description:
              "Staff built each new job folder by hand across multiple SharePoint sites. We built a Power Automate flow that reads the project details from the notification email and does the entire setup automatically.",
            image: "/case-studies/manufacturing-project-setupLg.webp",
            linkText: "See our automated project folder setup",
          },
        ]}
      />

      <ServicesFaq />
      <Contact />
    </>
  );
};

export default Page;
