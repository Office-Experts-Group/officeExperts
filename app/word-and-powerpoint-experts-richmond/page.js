import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationPages from "../(components)/LocationPages";
import CTAMainProps from "../(components)/CTAMainProps";
import ContactLocationSegment from "../../components/ContactLocationSegment";
import ServicesLocation from "../(components)/ServicesLocation";
import Promo from "../../components/Promo";
import GoodToKnow from "../about-us/(components)/GoodToKnow";

import richmond from "../../public/pageHeros/richmond.webp";
import richmondMob from "../../public/pageHeros/mob/richmondMob.webp";

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
      "https://www.officeexperts.com.au",
      "Office Experts Group",
      "Your Microsoft Office Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond",
      url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond",
      name: "Word and PowerPoint Experts - Richmond - Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2026-02-03T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond#breadcrumb",
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
          name: "Word and PowerPoint Experts - Richmond",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Richmond";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Word and PowerPoint Consultants ${location}`}
        desktopImage={richmond}
        mobileImage={richmondMob}
        altMob="Richmond"
        altDesk="Richmond"
      />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <Promo
        h2={"Let's do this!"}
        p={
          "Unlock the full potential of Microsoft Office with our expert-driven solutions—designed to enhance productivity and streamline your operations."
        }
      />
      <GoodToKnow />
      <ContactLocationSegment location={location} />
    </>
  );
};

export default Page;
