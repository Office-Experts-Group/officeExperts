// app/services/cloud-backup-with-onedrive/page.js
import React from "react";
import dynamic from "next/dynamic";

// Static imports — above the fold (the hero replaces the shared ServiceHero)
import OneDriveHero from "./(components)/OneDriveHero";
import OneDriveSyncVsBackup from "./(components)/OneDriveSyncVsBackup";

// Dynamically imported — below the fold
const OneDriveRecoveryWindows = dynamic(
  () => import("./(components)/OneDriveRecoveryWindows"),
);
const OneDriveSetup = dynamic(() => import("./(components)/OneDriveSetup"));
const OneDriveUpdates = dynamic(() => import("./(components)/OneDriveUpdates"));
const OneDriveCopilot = dynamic(() => import("./(components)/OneDriveCopilot"));
const OneDriveMigration = dynamic(
  () => import("./(components)/OneDriveMigration"),
);
const RelatedLinks = dynamic(() => import("@/components/RelatedLinks"));
// OneDriveFaq also outputs the FAQPage JSON-LD, built from the same questions it renders
const OneDriveFaq = dynamic(() => import("./(components)/OneDriveFaq"));
const OneDriveCta = dynamic(() => import("./(components)/OneDriveCta"));
const Contact = dynamic(() => import("@/components/Contact"));

const PAGE_URL =
  "https://www.officeexperts.com.au/services/cloud-backup-with-onedrive";
const PAGE_TITLE = "OneDrive Cloud Backup & Recovery for Businesses";
const PAGE_DESCRIPTION =
  "OneDrive setup, Microsoft 365 Backup, migration and file recovery for Australian businesses. Protect files from deletion, ransomware and staff turnover.";

const SITE_URL = "https://www.officeexperts.com.au";

const DATE_PUBLISHED = "2024-10-26T00:00:00+11:00";
const DATE_MODIFIED = "2026-11-11T00:00:00+11:00";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
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
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cloud Backup with OneDrive",
          item: PAGE_URL,
        },
      ],
    },
    // ── Service ──────────────────────────────
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "OneDrive Cloud Backup and Microsoft 365 Backup Services",
      serviceType: "Cloud backup and file storage consulting",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@type": "Organization",
        name: "Office Experts Group",
        url: SITE_URL,
        telephone: "1300102810",
        email: "consult@officeexperts.com.au",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "OneDrive and Backup Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "OneDrive setup and Known Folder Move",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft 365 Backup configuration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "File server, Dropbox and Google Drive migration to OneDrive and SharePoint",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Staff offboarding and unlicensed OneDrive clean-up",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Copilot oversharing review for OneDrive and SharePoint",
            },
          },
        ],
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
      <OneDriveHero />
      <OneDriveSyncVsBackup />
      <OneDriveRecoveryWindows />
      <OneDriveSetup />
      <OneDriveUpdates />
      <OneDriveCopilot />
      <OneDriveMigration />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="File and SharePoint projects"
        headingAccent="we've delivered"
        links={[
          {
            href: "/case-studies/professional-services-sharepoint-foundation-workshops",
            linkText: "See how the new structure was built",
            title:
              "Moving a team off shared logins onto a proper SharePoint foundation",
            description:
              "This professional services team ran email, files and calendars through one shared login, stored files like an old shared drive and had no audit trail of who changed what. Through three live workshops we mapped a new site and document library structure around their real workflows, built an Owners, Members and Visitors access model on security groups, and set a staged plan to retire both shared logins.",
            image:
              "/case-studies/professional-services-sharepoint-foundationLg.png",
            imageAlt:
              "SharePoint site structure and security group access model for a professional services team",
          },
          {
            href: "/case-studies/manufacturing-project-setup-automation",
            linkText: "Explore the folder automation",
            title:
              "Turning a new project email into a fully built job folder in seconds",
            description:
              "Every new project meant an admin manually building job folders across three SharePoint sites, renaming them and copying in templates, with naming errors surfacing weeks later. We built a Power Automate flow that reads the project notification email, creates and names every folder, adds the right starter templates and alerts an admin if anything fails. Setup dropped from around 30 minutes to under one, with zero naming errors since go-live.",
            image: "/case-studies/manufacturing-project-setupLg.webp",
            imageAlt:
              "Automated SharePoint job folder creation for a manufacturing company",
          },
        ]}
      />
      <OneDriveFaq />
      <OneDriveCta />
      <Contact />
    </>
  );
};

export default Page;
