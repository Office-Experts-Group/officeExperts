import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import ExpertsAwait from "../../../components/ExpertsAwait";
import Contact from "../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import SolutionsCarousel from "./(components)/SolutionsCarousel";
import SolutionsCarouselReverse from "./(components)/SolutionsCarouselReverse";

import graphMeeting from "../../../public/pageHeros/graphMeeting.webp";
import meetingMob from "../../../public/pageHeros/mob/meetingMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/by-business-solution/",
      url: "https://www.officeexperts.com.au/services/by-business-solution/",
      name: "Excel Custom Formula Service | Services By Business Solution",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "We can give you a quote or work to an hourly rate. Via remote access, we offer ongoing support and training, for your staff to learn specific tasks as required.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/#breadcrumb",
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
        title="Services By Business Solution"
        desktopImage={graphMeeting}
        mobileImage={meetingMob}
        altDesk={"graphs at a meeting"}
        altMob={"meeting at an office"}
      />
      <PageSegmentMain />
      <SolutionsCarousel />
      <SolutionsCarouselReverse />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
