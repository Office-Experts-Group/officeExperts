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

import aboutUs from "../../public/pageHeros/aboutUs.webp";
import aboutUsMob from "../../public/pageHeros/mob/aboutUsMob.webp";

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
        title={"About Us"}
        desktopImage={aboutUs}
        mobileImage={aboutUsMob}
        altDesk={"Hands pointing in a circle"}
        altMob={"About Us"}
      />
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
