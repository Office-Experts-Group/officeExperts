import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import SecuritySection from "./(components)/SecuritySection";
import PerformanceSection from "./(components)/PerformanceSection";
import ReliabilitySection from "./(components)/ReliabilitySection";
import IntegrationSection from "./(components)/IntegrationSection";
import MaintenanceSection from "./(components)/MaintenanceSection";
// import FutureProofingSection from "./(components)/FutureProofingSection";
// import WhyChooseUs from "./(components)/WhyChooseUs";
import Contact from "../../../../components/Contact";

import Quote from "./(components)/Quote";
import sql from "../../../../public/pageHeros/sql.webp";
import sqlMob from "../../../../public/pageHeros/mob/sqlMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/sql-server-and-access-integration",
      url: "https://www.officeexperts.com.au/services/by-business-solution/sql-server-and-access-integration",
      name: "SQL Server and Microsoft Access Integration Benefits | Office Experts",
      description:
        "Upgrade your Access database with SQL Server backend for improved security, performance, and scalability. Expert migration services across Australia.",
      breadcrumb: {
        "@id":
          "https://www.officeexperts.com.au/services/by-business-solution/sql-server-and-access-integration/#breadcrumb",
      },
      inLanguage: "en-AU",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.officeexperts.com.au/services/by-business-solution/sql-server-and-access-integration",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/sql-server-and-access-integration/#breadcrumb",
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
          name: "By Business Solution",
          item: "https://www.officeexperts.com.au/services/by-business-solution",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "SQL Server and Access Integration",
          item: "https://www.officeexperts.com.au/services/by-business-solution/sql-server-and-access-integration",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.officeexperts.com.au/services/by-business-solution/sql-server-and-access-integration/#service",
      serviceType: "SQL Server and Microsoft Access Integration",
      provider: {
        "@type": "Organization",
        name: "Office Experts Group",
        url: "https://www.officeexperts.com.au",
        logo: {
          "@type": "ImageObject",
          url: "/logo.png",
        },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SQL Server Integration Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SQL Server Migration",
              description:
                "Complete Access to SQL Server backend migration with data conversion and testing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Security Configuration",
              description:
                "Advanced authentication, encryption and role-based access control setup",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Performance optimisation",
              description:
                "Query optimisation, indexing and server-side processing configuration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Azure SQL Integration",
              description:
                "Cloud-based SQL Server deployment for remote access and global collaboration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Training and Support",
              description:
                "Staff training, documentation and ongoing maintenance services",
            },
          },
        ],
      },
      description:
        "Professional SQL Server and Microsoft Access integration services including migration, security setup, performance optimisation and ongoing support.",
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
        title="Upgrade Your Access Database with a SQL Server Backend"
        desktopImage={sql}
        mobileImage={sqlMob}
        altDesk="random computer code"
        altMob="SQL digital design"
      />
      <PageSegmentMain />
      <SecuritySection />
      <Quote />
      <ReliabilitySection />
      <IntegrationSection />
      <PerformanceSection />
      <MaintenanceSection />
      {/* <FutureProofingSection /> */}
      {/* <WhyChooseUs /> */}
      <Contact />
    </>
  );
};

export default Page;
