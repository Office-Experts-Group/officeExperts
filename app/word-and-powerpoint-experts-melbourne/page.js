import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationPages from "../(components)/LocationPages";
import CTAMainProps from "../(components)/CTAMainProps";
import ContactLocationSegment from "../../components/ContactLocationSegment";
import ServicesLocation from "../(components)/ServicesLocation";
import Promo from "../../components/Promo";
import GoodToKnow from "../about-us/(components)/GoodToKnow";

import melbourne from "../../public/pageHeros/melbourne.webp";
import melbourneMob from "../../public/pageHeros/mob/melbourneMob.webp";

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
        "https://www.officeexperts.com.au/word-and-powerpoint-experts-melbourne",
      url: "https://www.officeexperts.com.au/word-and-powerpoint-experts-melbourne",
      name: "Word and PowerPoint Experts - Melbourne - Office Experts Group: Microsoft Excel Experts, Microsoft Access Database Experts, Microsoft Word Experts, PowerPoint Experts, Azure, Power BI, SQL Server, SharePoint, Microsoft Office 365",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#organization",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/word-and-powerpoint-experts-melbourne#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/word-and-powerpoint-experts-melbourne",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/word-and-powerpoint-experts-melbourne#breadcrumb",
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
          name: "Word and PowerPoint Experts - Melbourne",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Melbourne";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Word and PowerPoint Consultants ${location}`}
        desktopImage={melbourne}
        mobileImage={melbourneMob}
        altMob="Melbourne"
        altDesk="Melbourne"
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
