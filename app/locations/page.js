// app/locations/page.js
import React from "react";
import dynamic from "next/dynamic";

// Static imports: above the fold
import ConsultantsHero from "./(components)/ConsultantsHero";
import ConsultantsQuickLinks from "./(components)/ConsultantsQuickLinks";

// Dynamic imports: below the fold, split into their own chunks
const LocationGroups = dynamic(() => import("./(components)/LocationGroups"));
const ConsultantsProcess = dynamic(
  () => import("./(components)/ConsultantsProcess"),
);
const ConsultantsCta = dynamic(() => import("./(components)/ConsultantsCta"));
const Contact = dynamic(() => import("@/components/Contact"));

// Schema generators shared across all pages
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "@/utils/schemaGenerators";

// Location images
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

const PAGE_URL = "https://www.officeexperts.com.au/locations";
const PAGE_TITLE = "Microsoft Consultants Australia | Office Experts Group Locations";
const PAGE_DESCRIPTION =
  "Microsoft Office consulting services available across Australia. Remote support and on-site consultants in all major cities.";

const SITE_URL = "https://www.officeexperts.com.au";

const DATE_PUBLISHED = "2025-03-26T00:00:00+11:00";
const DATE_MODIFIED = "2026-11-11T00:00:00+11:00";

// Single source of truth: feeds the cards, the quick links, the stats and the schema
const locationData = [
  {
    id: "nsw",
    abbr: "NSW",
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
          "Serving the Northern Rivers region of NSW, our team delivers comprehensive Microsoft solutions for businesses of all sizes. We offer both remote and on-site support for Microsoft Office, Excel, Word, Access and Power Platform.",
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
    abbr: "VIC",
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
          "Located in the heart of Richmond, our specialists provide tailored Microsoft solutions for local businesses. We offer expert consulting for all Microsoft Office applications with a focus on task automation and improving business efficiency.",
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
    abbr: "QLD",
    sectionTitle: "Queensland",
    locations: [
      {
        name: "Brisbane, QLD",
        image: brisbane,
        alt: "Brisbane river and skyline",
        description:
          "Our Brisbane team provides comprehensive Microsoft Office consulting services across Southeast Queensland. We deliver custom solutions, training, and support for all Microsoft applications to help businesses maximise their productivity.",
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
        name: "Cairns, QLD",
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
    abbr: "WA",
    sectionTitle: "Western Australia",
    locations: [
      {
        name: "Perth, WA",
        image: perth,
        alt: "Perth skyline",
        description:
          "Our Perth consultants deliver expert Microsoft solutions to businesses throughout Western Australia. We provide specialised services in Excel, Word, Access, Power Platform and comprehensive Office consulting.",
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
    abbr: "SA",
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
    abbr: "ACT",
    sectionTitle: "Australian Capital Territory",
    locations: [
      {
        name: "Canberra, ACT",
        image: canberra,
        alt: "Canberra Parliament House",
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
    abbr: "NT",
    sectionTitle: "Northern Territory",
    locations: [
      {
        name: "Darwin, NT",
        image: darwin,
        alt: "Darwin harbour",
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

// Flat list of every location, used for the stats and the schema
const allLocations = locationData.flatMap((section) => section.locations);

// Quick links only need the state details and the city names
const sections = locationData.map(({ id, abbr, sectionTitle, locations }) => ({
  id,
  abbr,
  sectionTitle,
  cities: locations.map((location) => location.name.split(",")[0]),
}));

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": ["WebPage", "CollectionPage"],
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: PAGE_TITLE,
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      description: PAGE_DESCRIPTION,
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${PAGE_URL}#locations`,
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: PAGE_URL,
        },
      ],
    },
    // ── Every location, linked to its consultants page ──
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#locations`,
      name: "Office Experts Group locations",
      numberOfItems: allLocations.length,
      itemListElement: allLocations.map((location, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: location.name,
        url: `${SITE_URL}${location.serviceLinks.office}`,
      })),
    },
    // ── Service: consulting available in every listed area ──
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Microsoft Consulting Services Australia",
      serviceType: "Microsoft Office consulting, development and training",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@type": "Organization",
        name: "Office Experts Group",
        url: SITE_URL,
        telephone: "1300102810",
        email: "consult@officeexperts.com.au",
      },
      areaServed: [
        { "@type": "Country", name: "Australia" },
        ...allLocations.map((location) => location.name),
      ],
      availableChannel: [
        { "@type": "ServiceChannel", name: "Remote consulting and support" },
        { "@type": "ServiceChannel", name: "On-site consulting" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Consulting Services",
        itemListElement: [
          "Excel Consulting and Development",
          "Word Template and Document Automation",
          "Access Database Development",
          "Power Platform Solutions",
          "Microsoft Office Consulting",
          "Microsoft Support and Training",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
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

      <main>
        <ConsultantsHero locationCount={allLocations.length} />
        <ConsultantsQuickLinks sections={sections} />
        {locationData.map((section) => (
          <LocationGroups
            key={section.id}
            id={section.id}
            sectionTitle={section.sectionTitle}
            locations={section.locations}
          />
        ))}
        <ConsultantsProcess />
        <ConsultantsCta />
        <Contact />
      </main>
    </>
  );
};

export default Page;
