import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationPages from "../(components)/LocationPages";
import CTAMainProps from "../(components)/CTAMainProps";
import ContactLocationSegment from "../../components/ContactLocationSegment";
import ServicesLocation from "../(components)/ServicesLocation";
import Promo from "../../components/Promo";
import GoodToKnow from "../about-us/(components)/GoodToKnow";

import canberra from "../../public/pageHeros/melbourne.webp";
import canberraMob from "../../public/pageHeros/mob/melbourneMob.webp";

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
        "https://www.officeexperts.com.au/office-and-office-365-experts-canberra",
      url: "https://www.officeexperts.com.au/office-and-office-365-experts-canberra",
      name: "Office and Office 365 Experts - Canberra",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-03-26T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/office-and-office-365-experts-canberra#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/office-and-office-365-experts-canberra",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/office-and-office-365-experts-canberra#breadcrumb",
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
          name: "Office and Office 365 Experts - Canberra",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Canberra";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Microsoft Office Consultants ${location}`}
        desktopImage={canberra}
        mobileImage={canberraMob}
        altDesk="Canberra"
        altMob="Canberra"
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
