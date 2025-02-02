import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Promo from "../../../../components/Promo";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegmentCenter from "./(components)/PageSegmentCenter";
import PageSegment3 from "./(components)/PageSegment3";

import support from "../../../../public/pageHeros/support.webp";
import meetingMob from "../../../../public/pageHeros/mob/meetingMob.webp";

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
        "https://www.officeexperts.com.au/services/microsoft-excel/excel-support",
      url: "https://www.officeexperts.com.au/services/microsoft-excel/excel-support",
      name: "Excel One on One Training | Microsoft Excel Help Support and Training | Office Experts",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "Excel Help Resolve Your Issues Onsite or Remote Access Professional Guidance Highly Experienced Consultants Competitive Rates. Call us to get more info",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-excel/excel-support#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-excel/excel-support",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-excel/excel-support#breadcrumb",
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
          name: "Excel Experts Services",
          item: "https://www.officeexperts.com.au/services/microsoft-excel",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Microsoft Excel: Help and Training",
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
        title="Excel Support"
        desktopImage={support}
        mobileImage={meetingMob}
        altDesk={"support"}
        altMob={"meeting in an office"}
      />
      <PageSegmentMain />
      <PageSegmentCenter />
      <PageSegment3 />
      <ExpertsAwait />
      <Promo
        h2="Master Excel with Expert Training"
        p="Gain the skills you need with task-specific, cost-effective training. Whether remote or onsite, our experienced trainers are here to help you succeed."
      />
      <Contact />
    </>
  );
};

export default Page;
