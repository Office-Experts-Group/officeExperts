// app/services/dashboards/page.js
import React from "react";
import dynamic from "next/dynamic";

// ServiceHero and the first section are above the fold, so they're imported directly
import ServiceHero from "@/components/ServiceHero";
import DashboardsIntro from "./(components)/DashboardsIntro";

// Below-the-fold sections are split into separate chunks (still server rendered)
const DashboardsPlatforms = dynamic(
  () => import("./(components)/DashboardsPlatforms"),
);
const DashboardsDataSources = dynamic(
  () => import("./(components)/DashboardsDataSources"),
);
const DashboardsAi = dynamic(() => import("./(components)/DashboardsAi"));
const DashboardsDemos = dynamic(() => import("./(components)/DashboardsDemos"));
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Contact = dynamic(() => import("@/components/Contact"));

// FAQ content and the FAQPage schema built from it
import faqs from "@/faqs/dashboards";
import faqSchema from "@/faqs/dashboardsSchema";

// Hero images (unchanged from the previous version of the page)
import dashboards from "@/public/pageHeros/dashboards.webp";
import dashboardsMob from "@/public/pageHeros/mob/dashboardsMob.webp";

// Shared schema builders used across the site

const SITE_URL = "https://www.officeexperts.com.au";
const PAGE_URL = `${SITE_URL}/services/dashboards`;

// ── Video structured data ──────────────────────────────────
// Duration, upload date and thumbnails come from Vimeo's oEmbed data.
const videos = [
  {
    "@type": "VideoObject",
    "@id": `${PAGE_URL}#video-power-bi`,
    name: "Power BI Dashboard Demo",
    description:
      "A two-minute walkthrough of a sample dashboard built in Power BI by Office Experts.",
    thumbnailUrl:
      "https://i.vimeocdn.com/video/720955981-2fa4036fbe0fe20862877796372f588589b81c0fdc56976cdf1ab7ad4191a71e-d_640?region=us",
    uploadDate: "2018-08-22",
    duration: "PT2M10S",
    embedUrl: "https://player.vimeo.com/video/286127973?h=12b183a3fa",
    publisher: { "@id": `${SITE_URL}#organization` },
  },
  {
    "@type": "VideoObject",
    "@id": `${PAGE_URL}#video-excel`,
    name: "Excel Dashboard Demo",
    description:
      "A five-minute demonstration of an Excel dashboard built by Office Experts.",
    thumbnailUrl:
      "https://i.vimeocdn.com/video/637844528-0509673fc73d6ac4bce8bfe501059bc6bc46e2c42829b99f6701254b1d5fbbc1-d_640?region=us",
    uploadDate: "2017-06-02",
    duration: "PT5M8S",
    embedUrl: "https://player.vimeo.com/video/219956072?h=08ba25eec7",
    publisher: { "@id": `${SITE_URL}#organization` },
  },
];

// ── Structured data ────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Dashboard Experts | Office Experts Group",
      description:
        "Power BI, Excel and web dashboards that bring all your data into one view, with AI that flags changes and answers questions in plain English.",
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-10-22T00:00:00+00:00",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      inLanguage: "en-AU",
      video: videos.map((v) => ({ "@id": v["@id"] })),
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
        },
      ],
    },
    {
      // "By business solution" 301 redirects to /services, so it's left out of the trail
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dashboards",
          item: PAGE_URL,
        },
      ],
    },
    ...videos,
  ],
};

// ── Case studies for the RelatedLinks section ──────────────
const caseStudies = [
  {
    href: "/case-studies/retail-power-bi-partner-reporting-security",
    linkText: "View the reporting dashboard",
    title:
      "Proving external partners could never see each other's Power BI data",
    description:
      "A retail data provider had partner-facing Power BI reports built but needed certainty that one wrong setting couldn't expose a partner's figures to another before external access went live. We reviewed the reports for design and usability, locked access down with Row-Level Security and tested with a real external account, matching every figure to the client's own numbers to the cent. Export options are now closed off for partners only, and adding a new partner is a simple task the internal team runs themselves.",
    image: "/case-studies/retail-power-bi-partner-securityLg.webp",
    imageAlt:
      "Partner-facing Power BI report secured with Row-Level Security for a retail data provider",
  },
  {
    href: "/case-studies/retail-analytics-automated-review-deck-generator",
    linkText: "See the deck generator",
    title:
      "Turning a days-long PowerPoint build into a one-click, 600+ slide deck",
    description:
      "The client was building large retailer review decks by hand, pulling figures out of Power BI and pasting them into slide templates one by one. We built a Python tool that reads a simple scope sheet, queries the client's existing Power BI data directly and assembles a fully branded deck of around 660 slides in under five minutes. The tool tailors what it includes to the audience, so a supplier version leaves out commercial detail that a retailer version includes.",
    image: "/case-studies/retail-analytics-deck-generatorLg.png",
    imageAlt:
      "Automated retailer review deck built from Power BI data for a retail analytics business",
  },
  {
    href: "/case-studies/financial-services-ai-risk-compliance-automation",
    linkText: "See the compliance dashboard",
    title:
      "Taking 24 unowned risks to full ownership and monthly reviews from 6 hours to 1",
    description:
      "The client, an FCA-regulated financial services firm, was running compliance on spreadsheets and scattered policy documents. We replaced the spreadsheet with a live SharePoint risk register, built AI agents that map risks to mitigations and controls, and deployed a Power BI and Power Apps compliance dashboard that shows real-time recommendations and assignments to staff in Microsoft Teams. Monthly review time fell from around 6 hours to 1, and all 24 risks that previously had no named owner are now assigned and tracked.",
    image: "/case-studies/financial-services-compliance-automationLg.png",
    imageAlt:
      "Compliance dashboard and risk register for a financial services firm",
  },
];

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
        title="Dashboards and Reporting Solutions"
        desktopImage={dashboards}
        mobileImage={dashboardsMob}
        altDesk="Power Platform and excel dashboards"
        altMob="Power Platform and excel dashboards"
      />
      <DashboardsIntro />
      <DashboardsPlatforms />
      <DashboardsDataSources />
      <DashboardsAi />
      <DashboardsDemos />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Dashboard and reporting projects we've delivered"
        links={caseStudies}
      />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
