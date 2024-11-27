import React from "react";

import ServiceHero from "../../components/ServiceHero";
import MeetTheTeam from "../../components/MeetTheTeam";
import Contact from "../../components/Contact";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://officeexperts.com.au/meet-the-team/",
      url: "https://officeexperts.com.au/meet-the-team/",
      name: "Meet Our Microsoft Excel Experts",
      isPartOf: {
        "@id": "https://officeexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Meet our team of experienced Microsoft Excel consultants. Expert developers and consultants dedicated to delivering quality spreadsheet and automation solutions.",
      breadcrumb: {
        "@id": "https://officeexperts.com.au/meet-the-team/#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://officeexperts.com.au/meet-the-team/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://officeexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Meet the Team",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://officeexperts.com.au/#organization",
      name: "Office Experts",
      url: "https://officeexperts.com.au/",
      email: "excel@officeexperts.com.au",
      telephone: "1300 102 810",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 102 810",
          contactType: "customer service",
          email: "consult@officeexperts.com.au",
          availableLanguage: ["en", "en-AU"],
        },
      ],
      priceRange: "$50-$5000",
      paymentAccepted: "Credit Card, Cheque, Direct Debit",
      currenciesAccepted: "AUD",
      openingHours: "Mo-Fr 09:00-17:00",
      areaServed: [
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "New South Wales",
        },
        {
          "@type": "AdministrativeArea",
          name: "Victoria",
        },
        {
          "@type": "AdministrativeArea",
          name: "Queensland",
        },
        {
          "@type": "AdministrativeArea",
          name: "Western Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "South Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tasmania",
        },
        {
          "@type": "AdministrativeArea",
          name: "Australian Capital Territory",
        },
        {
          "@type": "AdministrativeArea",
          name: "Northern Territory",
        },
      ],
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-AU",
        "@id": "https://officeexperts.com.au/#/schema/logo/image/",
        url: "/logo.png",
        contentUrl: "/logo.png",
        width: 326,
        height: 107,
        caption: "Office Experts",
      },
      image: {
        "@id": "https://officeexperts.com.au/#/schema/logo/image/",
      },
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
      <ServiceHero title="Meet The Team" />
      <MeetTheTeam />
      <Contact />
    </>
  );
};

export default Page;
