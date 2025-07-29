import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationPages from "../(components)/LocationPages";
import CTAMainProps from "../(components)/CTAMainProps";
import ContactLocationSegment from "../../components/ContactLocationSegment";
import ServicesLocation from "../(components)/ServicesLocation";
import Promo from "../../components/Promo";
import GoodToKnow from "../about-us/(components)/GoodToKnow";

import centralCoast from "../../public/pageHeros/melbourne.webp";
import centralCoastMob from "../../public/pageHeros/mob/melbourneMob.webp";

import { getHomePageSchema } from "../../utils/testimonialSchemaGenerator";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import { testimonials } from "../../testimonials";

import LocationSummary from "../(components)/LocationSummary";
import Testimonials from "../(components)/Testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    ...getHomePageSchema(testimonials, "office")["@graph"],

    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/office-and-office-365-experts-central-coast-nsw",
      url: "https://www.officeexperts.com.au/office-and-office-365-experts-central-coast-nsw",
      name: "Office and Office 365 Experts - Central Coast, NSW",
      description:
        "Leading Microsoft Office consultants on the Central Coast. Our experts specialise in custom Office development, integration, and business automation solutions.",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-07-29T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/office-and-office-365-experts-central-coast-nsw#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/office-and-office-365-experts-central-coast-nsw",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/office-and-office-365-experts-central-coast-nsw#breadcrumb",
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
          name: "Office and Office 365 Experts - Central Coast, NSW",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Central Coast, NSW";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Microsoft Office Consultants ${location}`}
        desktopImage={centralCoast}
        mobileImage={centralCoastMob}
        altDesk="Central Coast, NSW"
        altMob="Central Coast, NSW"
      />
      <LocationSummary location={location} service={"Microsoft Office"} />
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
      <Testimonials testimonials={testimonials} />
      <ContactLocationSegment location={location} />
    </>
  );
};

export default Page;
