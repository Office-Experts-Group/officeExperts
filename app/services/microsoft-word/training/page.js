import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import TrainingHero from "./(components)/TrainingHero";

const TrainingNav = dynamic(() => import("./(components)/TrainingNav"));
const TrainingAssistance = dynamic(
  () => import("./(components)/TrainingAssistance"),
);
const TrainingSkills = dynamic(() => import("./(components)/TrainingSkills"));
const TrainingEfficiency = dynamic(
  () => import("./(components)/TrainingEfficiency"),
);
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const Contact = dynamic(() => import("../../components/Contact"));

import training from "../../public/pageHeros/training.webp";
import coffeeMob from "../../public/pageHeros/mob/coffeeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.wordexperts.com.au",
      "Word Experts",
      "Australia-wide Microsoft Word Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/training",
      url: "https://www.wordexperts.com.au/training",
      name: "Microsoft Word Training | Microsoft Word Help | Word Experts",
      description:
        "Professional Microsoft Word training and support services. Expert help with templates, documents, and automation. Available remotely or onsite across Australia.",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2018-07-15T15:59:22+00:00",
      dateModified: "2026-06-17T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/training#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/training"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/training#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wordexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Microsoft Word Training",
          item: "https://www.wordexperts.com.au/training",
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
        title="Microsoft Word Support and Training"
        desktopImage={training}
        mobileImage={coffeeMob}
        altDesk={"computer with word documents"}
        altMob={"coffee cup and laptop"}
      />
      <TrainingHero />
      <TrainingNav />
      <TrainingAssistance />
      <TrainingSkills />
      <TrainingEfficiency />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Word training and handover projects with past clients"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/legal-firm-word-training-workshop",
            linkText: "See the training session",
            title:
              "Turning a 90-minute Word training session into fewer formatting headaches across the firm",
            description:
              "A legal firm wanted stronger Word skills but was really facing inconsistent formatting, numbering issues in long documents and copy-and-paste problems. We delivered a live 90-minute Microsoft Teams session to around 29 legal professionals, built around the firm's own documents and covering Styles, multilevel numbering, Track Changes and PDF conversion.",
            image:
              "https://www.officeexperts.com.au/case-studies/legal-firm-word-training-workshopLg.png",
            imageAlt: "Live Word training session for a legal firm",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/government-health-department-editable-pdf-forms",
            linkText: "View the fillable form project",
            title:
              "Turning brand templates into editable PDF forms staff can fill in and maintain",
            description:
              "A state government health department needed two internal forms on the same branded foundation as its other documents. We built both forms into its existing master template, converted them to editable PDFs using Adobe Acrobat Pro, and trained the client's team to make minor content changes themselves.",
            image:
              "https://www.officeexperts.com.au/case-studies/government-health-editable-pdf-formsLg.png",
            imageAlt:
              "Editable PDF forms built on a state government health department master template",
          },
        ]}
      />
      <Contact />
    </>
  );
};

export default Page;
