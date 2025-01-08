import React from "react";

import ServiceHero from "../../components/ServiceHero";
import MeetAlt from "./(components)/MeetAlt";
import Contact from "../../components/Contact";

import handShake from "../../public/pageHeros/handShake.webp";
import handShakeMob from "../../public/pageHeros/mob/handShakeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://officeexperts.com.au/meet-the-team/",
      url: "https://officeexperts.com.au/meet-the-team/",
      name: "Meet Our Microsoft Office Experts",
      isPartOf: {
        "@id": "https://officeexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Meet our team of experienced Microsoft Office consultants. Expert developers and consultants in all fields of Microsoft technologies.",
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
        title={"Meet Our Team"}
        desktopImage={handShake}
        mobileImage={handShakeMob}
        altDesk={"Handshake"}
        altMob={"Handshake"}
      />
      <MeetAlt />
      <Contact />
    </>
  );
};

export default Page;
