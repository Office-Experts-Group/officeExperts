// app/services/microsoft-office/upgrades-and-migration/page.js

import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import MigrationHero from "./(components)/MigrationHero";
import Contact from "../../components/Contact";

import upgrades from "../../public/pageHeros/upgrades.webp";
import upgradesMob from "../../public/pageHeros/mob/upgradesMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

// ── Below-the-fold dynamic imports ───────────────────────
const MigrationProblem = dynamic(
  () => import("./(components)/MigrationProblem"),
);
const MigrationStack = dynamic(() => import("./(components)/MigrationStack"));
const MigrationPaths = dynamic(() => import("./(components)/MigrationPaths"));
const MigrationChallenges = dynamic(
  () => import("./(components)/MigrationChallenges"),
);
const MigrationScenarios = dynamic(
  () => import("./(components)/MigrationScenarios"),
);

// ── Schema ────────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration",
      url: "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration",
      name: "Microsoft Office Upgrades & Migration Services | Office Experts Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-05-01T00:00:00+00:00",
      description:
        "Expert Microsoft Office upgrades and migration services across Australia. We modernise legacy Excel workbooks, Access databases, and disconnected 365 environments. Get the full power from your Microsoft Office tools.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration#breadcrumb",
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
          name: "Our Microsoft Office Services",
          item: "https://www.officeexperts.com.au/services/microsoft-office",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Upgrades and Migration",
        },
      ],
    },
  ],
};

// ── Metadata ──────────────────────────────────────────────
export const metadata = {
  title:
    "Microsoft Office Upgrades & Migration Services | Office Experts Australia",
  description:
    "Expert Microsoft Office upgrades and migration services across Australia. We modernise legacy Excel workbooks, Access databases, and disconnected 365 environments. Get the full power from your Microsoft Office tools.",

  openGraph: {
    title:
      "Microsoft Office Upgrades & Migration Services | Office Experts Australia",
    description:
      "Expert Microsoft Office upgrades and migration services across Australia. We modernise legacy Excel workbooks, Access databases, and disconnected 365 environments -- connecting your tools into a system that actually works together.",
    url: "https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration",
    siteName: "Office Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: ["Microsoft Office upgrades", "Microsoft migration services"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Microsoft Office Upgrades & Migration Services | Office Experts Australia",
    description:
      "Expert Microsoft Office upgrades and migration services across Australia. We modernise legacy Excel workbooks, Access databases, and disconnected 365 environments. Get the full power from your Microsoft Office tools.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/services/microsoft-office/upgrades-and-migration",
  },
};

// ── Page ──────────────────────────────────────────────────
const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Upgrades and Migration"
        desktopImage={upgrades}
        mobileImage={upgradesMob}
        altDesk="Upgrading Microsoft Office"
        altMob="Upgrading Microsoft Office"
      />
      <MigrationHero />
      <MigrationProblem />
      <MigrationStack />
      <MigrationPaths />
      <MigrationChallenges />
      <MigrationScenarios />
      <Contact />
    </>
  );
};

export default Page;
