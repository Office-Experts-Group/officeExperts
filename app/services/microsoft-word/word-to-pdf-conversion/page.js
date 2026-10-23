// app/word-to-pdf-conversion/page.js
import React from "react";
import dynamic from "next/dynamic";

import WordToPdfHeroServer from "./(components)/WordToPdfHeroServer";
import ServiceHero from "../../components/ServiceHero";

const WordToPdfProblem = dynamic(
  () => import("./(components)/WordToPdfProblem"),
);
const WordToPdfServices = dynamic(
  () => import("./(components)/WordToPdfServices"),
);
const WordToPdfComparison = dynamic(
  () => import("./(components)/WordToPdfComparison"),
);
const WordToPdfProcess = dynamic(
  () => import("./(components)/WordToPdfProcess"),
);
const WordToPdfFaq = dynamic(() => import("./(components)/WordToPdfFaq"));
const WordToPdfCta = dynamic(() => import("./(components)/WordToPdfCta"));
const Contact = dynamic(() => import("../../components/Contact"));

import wordToPdf from "../../public/pageHeros/wordToPdf.webp";
import wordToPdfMob from "../../public/pageHeros/mob/wordToPdfMob.webp";

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
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.wordexperts.com.au/word-to-pdf-conversion",
      url: "https://www.wordexperts.com.au/word-to-pdf-conversion",
      name: "Word to PDF Conversion & Fillable PDF Forms | Word Experts",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      about: {
        "@id": "https://www.wordexperts.com.au#organization",
      },
      datePublished: "2026-07-22T00:00:00+00:00",
      dateModified: "2026-07-22T00:00:00+00:00",
      description:
        "More than a free online Word to PDF converter. We build fillable, editable PDF forms in Adobe Acrobat and Word templates that convert reliably every time. Free Consultation.",
      inLanguage: "en-AU",
      breadcrumb: {
        "@id":
          "https://www.wordexperts.com.au/word-to-pdf-conversion#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/word-to-pdf-conversion#breadcrumb",
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
          name: "Word to PDF Conversion",
          item: "https://www.wordexperts.com.au/word-to-pdf-conversion",
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
        title="Word To PDF Conversions"
        desktopImage={wordToPdf}
        mobileImage={wordToPdfMob}
        altMob="Word to pdf conversion"
        altDesk="Word to pdf conversion"
      />
      <WordToPdfHeroServer />
      <WordToPdfProblem />
      <WordToPdfServices />
      <WordToPdfComparison />
      <WordToPdfProcess />
      <WordToPdfFaq />
      <WordToPdfCta />
      <Contact />
    </>
  );
};

export default Page;
