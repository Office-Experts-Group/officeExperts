import React from "react";

import ServiceHero from "../../components/ServiceHero";
import AboutUsMain from "./(components)/AboutUsMain";
import Testimonials from "../(components)/Testimonials";
import WhyChooseUs from "./(components)/WhyChooseUs";
import GoodToKnow from "./(components)/GoodToKnow";
import MeetTheTeamSlider from "./(components)/MeetTheTeamSlider";
import Contact from "../../components/Contact";
import Promo from "../../components/Promo";
import ExpertsAwait from "../../components/ExpertsAwait";

import { getAboutPageSchema } from "../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../testimonials";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import aboutUs from "../../public/pageHeros/aboutUs.webp";
import aboutUsMob from "../../public/pageHeros/mob/aboutUsMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    // Review + AggregateRating nodes (3 reviews on about page)
    ...getAboutPageSchema(testimonials)["@graph"],

    // Organization (company identity, sameAs social links etc.)
    generateOrganizationSchema(),

    // LocalBusiness / ProfessionalService
    generateProfessionalServiceSchema(),

    // WebSite (same on every page — generated from shared utility)
    generateWebSiteSchema(
      "https://www.officeexperts.com.au",
      "Office Experts Group",
      "Your Microsoft Office Design, Development and Consulting Experts",
    ),

    // WebPage — describes this specific about us page
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/about-us#webpage",
      url: "https://www.officeexperts.com.au/about-us",
      name: "About Us | Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au#business",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-02-03T00:00:00+00:00",
      description:
        "Microsoft Office consultants specialising in Excel, Access, Outlook, Word and PowerPoint. Australia-wide consulting, support and system integration since 2000.",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/about-us#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/about-us"],
        },
      ],
    },

    // BreadcrumbList — item URL required on all positions including current page
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/about-us#breadcrumb",
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
          name: "About Us",
          item: "https://www.officeexperts.com.au/about-us",
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
      <Promo
        h2={"Let's Do This!"}
        p={
          "Once you have decided to take advantage of our services, we will carefully customise those services to match your requirements, keeping you informed every step of the way. We realise that our success is hinged on our ability to ensure your own"
        }
      />
      <Contact />
    </>
  );
};

export default Page;
