import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ContactLocationSegment from "../../components/ContactLocationSegment";
import LocationPages from "../(components)/LocationPages";
import CTAMainProps from "../(components)/CTAMainProps";
import LocationPromos from "../(components)/LocationPromos";

import richmond from "../../public/pageHeros/richmond.webp";
import richmondMob from "../../public/pageHeros/mob/richmondMob.webp";

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
        "https://www.officeexperts.com.au/office-and-office-365-experts-richmond",
      url: "https://www.officeexperts.com.au/office-and-office-365-experts-richmond",
      name: "Office and Office 365 Experts - Richmond",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/office-and-office-365-experts-richmond#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/office-and-office-365-experts-richmond",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/office-and-office-365-experts-richmond#breadcrumb",
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
          name: "Office and Office 365 Experts - Richmond",
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
        title={`Office and Office 365 Consultants ${location}`}
        desktopImage={richmond}
        mobileImage={richmondMob}
        altMob="Richmond"
        altDesk="Richmond"
      />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <LocationPromos location={location} />
      <p
        style={{
          textAlign: "center",
          fontStyle: "italic",
          margin: "2rem 1rem 6rem 1rem",
          color: "#046999;",
          fontWeight: "700",
        }}
      >
        <strong>NOTE* </strong>Our services are available Australia-wide via
        remote access which is typically the most cost and time effective
        method.
      </p>
      <ContactLocationSegment location={location} />
    </>
  );
};

export default Page;
