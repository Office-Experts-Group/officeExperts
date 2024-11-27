import React from "react";

import ServiceHero from "../../components/ServiceHero";
import AboutUsMain from "./(components)/AboutUsMain";
import Testimonials from "../(components)/Testimonials";
import WhyChooseUs from "./(components)/WhyChooseUs";
import GoodToKnow from "./(components)/GoodToKnow";
import MeetTheTeamSlider from "./(components)/MeetTheTeamSlider";
import Promo from "./(components)/Promo";
import Contact from "../../components/Contact";
import ExpertsAwait from "../../components/ExpertsAwait";

import { getAboutPageSchema } from "../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getAboutPageSchema(testimonials),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/about-us/",
      url: "https://www.officeexperts.com.au/about-us/",
      name: "Excel Advanced Reporting | Excel Developer Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "We are specialists in Microsoft Excel, Microsoft Access, Microsoft Outlook, Microsoft Word, and Microsoft PowerPoint. Email us Consult@officeexperts.com.au",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/about-us/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/about-us/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/about-us/#breadcrumb",
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
          name: "About Us: Design, Development and Consulting Services Australia",
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
      <ServiceHero title={"About Us"} />
      <AboutUsMain />
      <Testimonials testimonials={testimonials} />
      <GoodToKnow />
      <WhyChooseUs />
      <MeetTheTeamSlider />
      <ExpertsAwait />
      <div style={{ margin: "6rem 0" }}>
        <Promo />
      </div>
      <Contact />
    </>
  );
};

export default Page;
