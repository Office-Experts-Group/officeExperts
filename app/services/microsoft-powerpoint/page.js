// app/services/microsoft-powerpoint/page.js

import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "@/components/ServiceHero";
import PowerPointIntro from "./(components)/PowerPointIntro";

const PowerPointTemplates = dynamic(
  () => import("./(components)/PowerPointTemplates"),
);
const PowerPointRedesign = dynamic(
  () => import("./(components)/PowerPointRedesign"),
);
const PowerPointAutomation = dynamic(
  () => import("./(components)/PowerPointAutomation"),
);
const PowerPointSupport = dynamic(
  () => import("./(components)/PowerPointSupport"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
const Testimonials = dynamic(() => import("../../(components)/Testimonials"));
const ExpertsAwait = dynamic(() => import("@/components/ExpertsAwait"));
const Contact = dynamic(() => import("@/components/Contact"));

import { getTestimonialsPageSchema } from "@/utils/testimonialSchemaGenerator";
import { testimonials } from "@/testimonials";

import powerpoint from "@/public/pageHeros/powerpoint.webp";
import powerpointMob from "@/public/pageHeros/mob/powerpointMob.webp";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-powerpoint";

// Case studies that show the work in practice (replaces the old tile carousel)
const caseStudyLinks = [
  {
    href: "/case-studies/advisory-branding-template-rollout",
    title: "Branding Template Rollout",
    image: "/case-studies/red-fox-advisory-brand-templatesLg.png",
    description:
      "Rebuilt an advisory firm's template suite from a single master template, so the new brand stays consistent.",
    linkText: "See the template rollout",
  },
  {
    href: "/case-studies/water-education-program-word-powerpoint-templates",
    title: "Education Program Templates",
    image: "/case-studies/water-education-program-templatesLg.png",
    description:
      "Translated an InDesign lesson design into working Word and PowerPoint templates with a slide master system for educators.",
    linkText: "Read the education case study",
  },
  {
    href: "/case-studies/government-department-enterprise-office-template-suite",
    title: "Enterprise Template Suite",
    image: "/case-studies/government-enterprise-office-templatesLg.png",

    description:
      "Redesigned 17 enterprise Word templates and built a PowerPoint framework so a state department's documents stay on brand.",
    linkText: "Read the government case study",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(testimonials)["@graph"],

    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Microsoft PowerPoint Consultants | Office Experts Group Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-10-21T00:00:00+00:00",
      description:
        "Expert Microsoft PowerPoint consultants across Australia. Custom templates and master slides, presentation redesign, VBA automation, training and support.",
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
    // The four services that used to have their own pages
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft PowerPoint Consulting",
      serviceType: "PowerPoint consulting",
      url: PAGE_URL,
      provider: {
        "@type": "Organization",
        name: "Office Experts Group",
        url: "https://www.officeexperts.com.au",
      },
      areaServed: { "@type": "Country", name: "Australia" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "PowerPoint services",
        itemListElement: [
          "Custom PowerPoint templates and master slides",
          "Existing presentation redesign",
          "PowerPoint automation with VBA",
          "PowerPoint user training and support",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
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
          name: "Microsoft PowerPoint",
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
        title="Microsoft PowerPoint"
        desktopImage={powerpoint}
        mobileImage={powerpointMob}
        altDesk="PowerPoint presentations and templates"
        altMob="PowerPoint presentations and templates"
      />
      <PowerPointIntro />
      <PowerPointTemplates />
      <PowerPointRedesign />
      <PowerPointAutomation />
      <PowerPointSupport />
      <RelatedLinks
        theme="dark"
        eyebrow="See it in practice"
        heading="PowerPoint projects we have delivered"
        text="Real examples of templates, redesigns and automation for Australian organisations."
        links={caseStudyLinks}
      />
      <Testimonials testimonials={testimonials} />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
