// app/microsoft-consultants-northern-rivers-nsw/page.js
import React from "react";
import dynamic from "next/dynamic";

// ServiceHero and the first component are above the fold, so import them directly
import ServiceHero from "../../components/ServiceHero";
import NorthernNswIntro from "./(components)/NorthernNswIntro";

// Below-the-fold components are loaded dynamically (still server rendered)
const NorthernNswStory = dynamic(
  () => import("./(components)/NorthernNswStory"),
);
const NorthernNswRegions = dynamic(
  () => import("./(components)/NorthernNswRegions"),
);
const NorthernNswPlatforms = dynamic(
  () => import("./(components)/NorthernNswPlatforms"),
);
const NorthernNswAi = dynamic(() => import("./(components)/NorthernNswAi"));
const NorthernNswResilience = dynamic(
  () => import("./(components)/NorthernNswResilience"),
);
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const NorthernNswFaq = dynamic(() => import("./(components)/NorthernNswFaq"));
const Contact = dynamic(() => import("../../components/Contact"));

// Page copy for the case study strip, and the structured data for the page
import { caseStudies } from "./northernNswData";
import schema from "./northernNswSchema";

// TODO: add this hero image pair, or swap for an existing one from public/pageHeros
import northernNsw from "../../public/pageHeros/northernRivers.webp";
import northernNswMob from "../../public/pageHeros/mob/northernRiversMob.webp";

const Page = () => {
  return (
    <>
      {/* Structured data: Organization, WebPage, Breadcrumb, Service and FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ServiceHero
        title="Microsoft Consultants in Northern NSW"
        desktopImage={northernNsw}
        mobileImage={northernNswMob}
        altDesk="Microsoft consulting for Northern NSW businesses"
        altMob="Microsoft consulting for Northern NSW businesses"
      />
      <NorthernNswIntro />
      <NorthernNswStory />
      <NorthernNswRegions />
      <NorthernNswPlatforms />
      <NorthernNswAi />
      <NorthernNswResilience />
      <RelatedLinks
        theme="dark"
        eyebrow="Related projects"
        heading="Work we have done in industries you will recognise"
        text="These projects were for clients across Australia. The problems, from slow quoting to spreadsheets that have outgrown themselves, will be familiar to many Northern NSW businesses."
        links={caseStudies}
      />
      <NorthernNswFaq />
      <Contact />
    </>
  );
};

export default Page;
