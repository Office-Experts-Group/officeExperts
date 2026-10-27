import React from "react";

import ServiceHero from "@/components/ServiceHero";
import LocationGroups from "./(components)/LocationGroups";
import LocationsIntro from "./(components)/LocationsIntro";
import Promo from "@/components/Promo";
import Contact from "@/components/Contact";

import australia from "@/public/pageHeros/australia.webp";
import australiaMob from "@/public/pageHeros/mob/australiaMob.webp";

// Import location images

import sydney from "@/public/pageHeros/sydney.webp";
import melbourne from "@/public/pageHeros/mob/melbourneMob.webp";
import brisbane from "@/public/pageHeros/mob/brisbaneMob.webp";
import perth from "@/public/pageHeros/mob/perthMob.webp";
import adelaide from "@/public/pageHeros/mob/adelaideMob.webp";
import canberra from "@/public/pageHeros/mob/canberraMob.webp";
import northernRivers from "@/public/pageHeros/mob/northernRiversMob.webp";
import wollongong from "@/public/pageHeros/mob/wollongongMob.webp";
import richmond from "@/public/pageHeros/mob/richmondMob.webp";
import darwin from "@/public/pageHeros/mob/darwinMob.webp";
import centralCoast from "@/public/pageHeros/mob/centralCoastMob.webp";
import goldCoast from "@/public/pageHeros/mob/goldCoastMob.webp";
import cairns from "@/public/pageHeros/mob/cairnsColourMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/locations",
      url: "https://www.officeexperts.com.au/locations",
      name: "Office Experts Locations | Australia-Wide Service",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2025-03-26T00:00:00+00:00",
      dateModified: "2026-10-20T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/locations#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/locations"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/locations#breadcrumb",
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
          name: "Locations",
        },
      ],
    },
  ],
};

const Page = () => {
  const locationData = [
    {
      id: "nsw",
      sectionTitle: "New South Wales",
      locations: [
        {
          name: "Sydney, NSW",
          image: sydney,
          alt: "Sydney skyline",
          description:
            "Our Sydney team provides expert Microsoft consulting services across the Greater Sydney metropolitan area. From custom Office development to troubleshooting and implementations, our team offers responsive support for all your Microsoft software needs.",
          serviceLinks: {
            excel: "/microsoft-consultants-sydney",
            word: "/microsoft-consultants-sydney",
            access: "/microsoft-consultants-sydney",
            powerplatform: "/microsoft-consultants-sydney",
            office: "/microsoft-consultants-sydney",
          },
          supportLink: "/microsoft-support-and-training-sydney",
        },
        {
          name: "Central Coast, NSW",
          image: centralCoast,
          alt: "Central Coast region",
          description:
            "On the beautiful Central Coast region of NSW, our team provides Microsoft solutions for a variety of businesses. Working either through remote access and online support, or on-site support for the entire Microsoft suite.",
          serviceLinks: {
            excel: "/microsoft-consultants-central-coast-nsw",
            word: "/microsoft-consultants-central-coast-nsw",
            access: "/microsoft-consultants-central-coast-nsw",
            powerplatform: "/microsoft-consultants-central-coast-nsw",
            office: "/microsoft-consultants-central-coast-nsw",
          },
          supportLink: "/microsoft-support-and-training-central-coast-nsw",
        },
        {
          name: "Wollongong, NSW",
          image: wollongong,
          alt: "Wollongong coastline",
          description:
            "Our Wollongong team serves the Illawarra region with specialised Microsoft consulting services. We provide expert solutions for businesses seeking to optimise their Microsoft software infrastructure and improve productivity.",
          serviceLinks: {
            excel: "/microsoft-consultants-wollongong",
            word: "/microsoft-consultants-wollongong",
            access: "/microsoft-consultants-wollongong",
            powerplatform: "/microsoft-consultants-wollongong",
            office: "/microsoft-consultants-wollongong",
          },
          supportLink: "/microsoft-support-and-training-wollongong",
        },
        {
          name: "Northern Rivers, NSW",
          image: northernRivers,
          alt: "Northern Rivers region",
          description:
            "Serving the Northern Rivers region of NSW, our team delivers comprehensive Microsoft solutions for businesses of all sizes. We offer both remote and on-site support for Microsoft Office, Excel, Word, Access, and powerplatform.",
          serviceLinks: {
            excel: "/microsoft-consultants-northern-rivers-nsw",
            word: "/microsoft-consultants-northern-rivers-nsw",
            access: "/microsoft-consultants-northern-rivers-nsw",
            powerplatform: "/microsoft-consultants-northern-rivers-nsw",
            office: "/microsoft-consultants-northern-rivers-nsw",
          },
          supportLink: "/microsoft-support-and-training-northern-rivers-nsw",
        },
      ],
    },
    {
      id: "vic",
      sectionTitle: "Victoria",
      locations: [
        {
          name: "Melbourne, VIC",
          image: melbourne,
          alt: "Melbourne cityscape",
          description:
            "Our Melbourne team delivers expert Microsoft consulting services throughout the Greater Melbourne area. We specialise in custom Office development, database solutions, and business process automation using the entire Microsoft suite.",
          serviceLinks: {
            excel: "/microsoft-consultants-melbourne",
            word: "/microsoft-consultants-melbourne",
            access: "/microsoft-consultants-melbourne",
            powerplatform: "/microsoft-consultants-melbourne",
            office: "/microsoft-consultants-melbourne",
          },
          supportLink: "/microsoft-support-and-training-melbourne",
        },
        {
          name: "Richmond, VIC",
          image: richmond,
          alt: "Richmond area",
          description:
            "Located in the heart of Richmond, our specialists provides tailored Microsoft solutions for local businesses. We offer expert consulting for all Microsoft Office applications with a focus on task automation and improving business efficiency.",
          serviceLinks: {
            excel: "/microsoft-consultants-richmond",
            word: "/microsoft-consultants-richmond",
            access: "/microsoft-consultants-richmond",
            powerplatform: "/microsoft-consultants-richmond",
            office: "/microsoft-consultants-richmond",
          },
          supportLink: "/microsoft-support-and-training-richmond",
        },
      ],
    },
    {
      id: "qld",
      sectionTitle: "Queensland",
      locations: [
        {
          name: "Brisbane, QLD",
          image: brisbane,
          alt: "Brisbane river and skyline",
          description:
            "Our Brisbane team provides comprehensive Microsoft Office consulting services across Southeast Queensland. We deliver custom solutions, training, and support for all Microsoft applications to help businesses maximize their productivity.",
          serviceLinks: {
            excel: "/microsoft-consultants-brisbane",
            word: "/microsoft-consultants-brisbane",
            access: "/microsoft-consultants-brisbane",
            powerplatform: "/microsoft-consultants-brisbane",
            office: "/microsoft-consultants-brisbane",
          },
          supportLink: "/microsoft-support-and-training-brisbane",
        },
        {
          name: "Gold Coast, QLD",
          image: goldCoast,
          alt: "Gold Coast skyline and beaches",
          description:
            "Our Gold Coast team specialises in Microsoft Office consulting and training for local businesses. From Excel automation to Word templates, Access databases, and Power Platform solutions, we provide tailored services to improve efficiency and productivity.",
          serviceLinks: {
            excel: "/microsoft-consultants-gold-coast",
            word: "/microsoft-consultants-gold-coast",
            access: "/microsoft-consultants-gold-coast",
            powerplatform: "/microsoft-consultants-gold-coast",
            office: "/microsoft-consultants-gold-coast",
          },
          supportLink: "/microsoft-support-and-training-gold-coast",
        },
        {
          name: "Cairns",
          image: cairns,
          alt: "Palm Cove, Palm avenue",
          description:
            "The Cairns Office team are there to provide effective solutions for Far North Queensland businesses. We specialise in custom Office development, database solutions, and business process automation using the entire Microsoft suite.",
          serviceLinks: {
            office: "/microsoft-consultants-cairns",
          },
        },
      ],
    },
    {
      id: "wa",
      sectionTitle: "Western Australia",
      locations: [
        {
          name: "Perth, WA",
          image: perth,
          alt: "Perth skyline",
          description:
            "Our Perth consultants deliver expert Microsoft solutions to businesses throughout Western Australia. We provide specialised services in Excel, Word, Access, powerplatform and comprehensive Office consulting.",
          serviceLinks: {
            excel: "/microsoft-consultants-perth",
            word: "/microsoft-consultants-perth",
            access: "/microsoft-consultants-perth",
            powerplatform: "/microsoft-consultants-perth",
            office: "/microsoft-consultants-perth",
          },
          supportLink: "/microsoft-support-and-training-perth",
        },
      ],
    },
    {
      id: "sa",
      sectionTitle: "South Australia",
      locations: [
        {
          name: "Adelaide, SA",
          image: adelaide,
          alt: "Adelaide city view",
          description:
            "Serving South Australia businesses, our Adelaide team provides expert Microsoft Office consulting and development services. We specialise in creating custom solutions that address unique business challenges.",
          serviceLinks: {
            excel: "/microsoft-consultants-adelaide",
            word: "/microsoft-consultants-adelaide",
            access: "/microsoft-consultants-adelaide",
            powerplatform: "/microsoft-consultants-adelaide",
            office: "/microsoft-consultants-adelaide",
          },
          supportLink: "/microsoft-support-and-training-adelaide",
        },
      ],
    },
    {
      id: "act",
      sectionTitle: "Australian Capital Territory",
      locations: [
        {
          name: "Canberra, ACT",
          image: canberra,
          alt: "Canberra parliament house",
          description:
            "Our Canberra team specialises in Microsoft solutions for government departments and local businesses. We provide expert consulting for all Microsoft Office applications with a focus on security and compliance.",
          serviceLinks: {
            excel: "/microsoft-consultants-canberra",
            word: "/microsoft-consultants-canberra",
            access: "/microsoft-consultants-canberra",
            powerplatform: "/microsoft-consultants-canberra",
            office: "/microsoft-consultants-canberra",
          },
          supportLink: "/microsoft-support-and-training-canberra",
        },
      ],
    },
    {
      id: "nt",
      sectionTitle: "Northern Territory",
      locations: [
        {
          name: "Darwin, NT",
          image: darwin,
          alt: "Darwin harbor",
          description:
            "Our Northern Territory team delivers specialised Microsoft Office consulting services to Darwin businesses and organisations. We provide remote and on-site support for all Microsoft applications.",
          serviceLinks: {
            excel: "/microsoft-consultants-darwin",
            word: "/microsoft-consultants-darwin",
            access: "/microsoft-consultants-darwin",
            powerplatform: "/microsoft-consultants-darwin",
            office: "/microsoft-consultants-darwin",
          },
          supportLink: "/microsoft-support-and-training-darwin",
        },
      ],
    },
  ];

  const locationCount = locationData.reduce(
    (total, section) => total + section.locations.length,
    0,
  );

  const sections = locationData.map(({ id, sectionTitle }) => ({
    id,
    sectionTitle,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Our Locations"
        desktopImage={australia}
        mobileImage={australiaMob}
        altDesk="Australia map"
        altMob="man holding Australia flag"
      />
      <LocationsIntro locationCount={locationCount} sections={sections} />
      {locationData.map((section) => (
        <LocationGroups
          key={section.id}
          id={section.id}
          sectionTitle={section.sectionTitle}
          locations={section.locations}
        />
      ))}

      <Promo
        h2={"Need Microsoft expertise in your area?"}
        p={
          "Contact us today to discover how our local and remote services can help your business leverage the full power of Microsoft Office applications."
        }
      />
      <Contact />
    </>
  );
};

export default Page;
