import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import MeetTheTeam from "../../components/MeetTheTeam";
const Contact = dynamic(() => import("../../components/Contact"));

import handShake from "../../public/pageHeros/handShake.webp";
import handShakeMob from "../../public/pageHeros/mob/handShakeMob.webp";

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
      "@id": "https://www.wordexperts.com.au/meet-the-team",
      url: "https://www.wordexperts.com.au/meet-the-team",
      name: "Meet The Team - Word Experts - Microsoft Word Design, Development and Consulting",
      isPartOf: {
        "@id": "https://www.wordexperts.com.au#website",
      },
      datePublished: "2019-08-06T07:28:06+00:00",
      dateModified: "2026-03-09T00:00:00+00:00",
      description:
        "Meet our expert team of Microsoft Word consultants, developers, and designers. Professional Word template and document specialists across Australia.",
      breadcrumb: {
        "@id": "https://www.wordexperts.com.au/meet-the-team#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.wordexperts.com.au/meet-the-team"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.wordexperts.com.au/meet-the-team#breadcrumb",
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
          name: "Meet The Team",
          item: "https://www.wordexperts.com.au/meet-the-team",
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
        title={"Meet The Team"}
        desktopImage={handShake}
        mobileImage={handShakeMob}
        altDesk={"Handshake"}
        altMob={"Handshake"}
        isMeetTeam={true}
      />
      <MeetTheTeam />
      <Contact />
    </>
  );
};

export default Page;
