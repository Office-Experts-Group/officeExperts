import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationPages from "../(components)/LocationPages";
import CTAMainProps from "../(components)/CTAMainProps";
import ContactLocationSegment from "../../components/ContactLocationSegment";
import ServicesLocation from "../(components)/ServicesLocation";
import Promo from "../../components/Promo";
import GoodToKnow from "../about-us/(components)/GoodToKnow";

import sydney from "../../public/pageHeros/sydney.webp";
import sydneyMob from "../../public/pageHeros/mob/sydneyMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney",
      url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney",
      name: "Word and Powerpoint Experts - Sydney",
      description:
        "Sydney's leading MS Word & PowerPoint consultants specialising in document design, presentation templates, automation solutions and corporate branding implementation.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-07-29T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney#breadcrumb",
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
          name: "Word and Powerpoint Experts - Sydney",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Sydney";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Word and PowerPoint Consultants ${location}`}
        desktopImage={sydney}
        mobileImage={sydneyMob}
        altMob="Sydney"
        altDesk="Sydney"
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
