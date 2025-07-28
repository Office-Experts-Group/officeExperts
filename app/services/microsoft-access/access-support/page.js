import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegmentCenter from "./(components)/PageSegmentCenter";
import MiniTicks from "./(components)/MiniTicks";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";
import Contact from "../../../../components/Contact";

import faqs from "../../../../faqs/access-support";

import support from "../../../../public/pageHeros/support.webp";
import handShakeMob from "../../../../public/pageHeros/mob/handShakeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-access/access-support",
      url: "https://www.officeexperts.com.au/services/microsoft-access/access-support",
      name: "Microsoft Access Support and Training | Office Expert",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-07-28T00:00:00+00:00",
      description:
        "We can offer you instant support and advice. Whether you are an individual. Visit www.officeexperts.com.au to get more info",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-access/access-support#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-access/access-support",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-access/access-support#breadcrumb",
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
          name: "Access Experts Services",
          item: "https://www.officeexperts.com.au/services/microsoft-access",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Microsoft Access: Help and Training",
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
        title="Help and Training"
        desktopImage={support}
        mobileImage={handShakeMob}
        altDesk={"support"}
        altMob={"handshake"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegmentCenter />
      <MiniTicks />
      <ExpertsAwait />
      <div style={{ marginTop: "4rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
