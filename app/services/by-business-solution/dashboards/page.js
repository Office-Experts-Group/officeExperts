import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import VideoSegment from "./(components)/VideoSegment";
import VideoSegment2 from "./(components)/VideoSegment2";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/dashboards/",
      url: "https://www.officeexperts.com.au/services/by-business-solution/dashboards/",
      name: "Dashboard Experts | Excel Dashboard Demo | Office Expert",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "We are experts in Data! Data import/export, parsing and processing Data formatting automation Automated data manipulation solutions using VBA.Call us 1300102810",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/dashboards/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/dashboards/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/dashboards/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.officeexperts.com.au/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Our Services By Business Solution",
          item: "https://www.officeexperts.com.au/services/by-business-solution/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Dashboards",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.officeexperts.com.au/#organization",
      name: "Office Experts Group",
      url: "https://www.officeexperts.com.au/",
      telephone: "1300 102 810",
      email: "consult@officeexperts.com.au",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 102 810",
          contactType: "customer service",
          email: "consult@officeexperts.com.au",
          availableLanguage: ["en", "en-AU"],
        },
      ],
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
        "@id": "https://www.officeexperts.com.au/#/schema/logo/image/",
        url: "/images/logo.png",
        contentUrl: "/images/logo.png",
        width: 1181,
        height: 1181,
        caption: "Office Experts Group",
      },
      image: {
        "@id": "https://www.officeexperts.com.au/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/MSOfficeExperts",
        "https://x.com/OfficeExpertsG1",
        "https://www.instagram.com/officeexpertsgroup",
        "https://www.linkedin.com/company/office-experts-group",
        "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
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
      <ServiceHero title={"Dashboards and Reporting Solutions"} />
      <PageSegmentMain />
      <Segment4Repeat />
      <VideoSegment />
      <VideoSegment2 />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
