import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationPages from "../(components)/LocationPages";
import CTAMainProps from "../(components)/CTAMainProps";
import LocationPromos from "../(components)/LocationPromos";
import ContactLocationSegment from "../../components/ContactLocationSegment";

import centralCoast from "../../public/pageHeros/centralCoast.webp";
import centralCoastMob from "../../public/pageHeros/mob/centralCoastMob.webp";

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
        "https://www.officeexperts.com.au/excel-and-access-experts-central-coast-nsw",
      url: "https://www.officeexperts.com.au/excel-and-access-experts-central-coast-nsw",
      name: "Excel and Access Experts - Central Coast, NSW",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/excel-and-access-experts-central-coast-nsw#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/excel-and-access-experts-central-coast-nsw",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/excel-and-access-experts-central-coast-nsw#breadcrumb",
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
          name: "Excel and Access Experts - Central Coast, NSW",
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
        title={`Excel and Access Consultants ${location}`}
        desktopImage={centralCoast}
        mobileImage={centralCoastMob}
        altDesk="central coast New South Wales"
        altMob="central coast New South Wales"
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
