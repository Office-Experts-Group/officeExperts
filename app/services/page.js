import React from "react";
import dynamic from "next/dynamic";

export const revalidate = false;

// Keep ServiceHero static since it's above fold
import ServiceHero from "../../components/ServiceHero";

// Dynamically import components that use images
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"), {
  ssr: true,
});
const Contact = dynamic(() => import("../../components/Contact"), {
  ssr: true,
});
const PageSegmentMain = dynamic(
  () => import("./(components)/PageSegmentMain"),
  {
    ssr: true,
  }
);
const SolutionsCarousel = dynamic(
  () => import("./(components)/SolutionsCarousel"),
  {
    ssr: true,
  }
);

import handShake from "../../public/pageHeros/handShake.webp";
import handShakeMob from "../../public/pageHeros/mob/handShakeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/services/",
      url: "https://www.officeexperts.com.au/services/",
      name: "Microsoft Development Services | Office Experts Solutions Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      description:
        "Our Office Experts team specialises in services across all Microsoft Office products. Call us 1300 102 810 or Email us consult@officeexperts.com.au",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/services/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/services/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/services/#breadcrumb",
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
        title="Microsoft Development Services"
        desktopImage={handShake}
        mobileImage={handShakeMob}
        altDesk={"handshake"}
        altMob={"handshake"}
      />
      <PageSegmentMain />
      <SolutionsCarousel />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
