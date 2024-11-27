import React from "react";
import Link from "next/link";

import styles from "../../styles/refundPolicy.module.css";

import ServiceHero from "../../components/ServiceHero";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/refund-policy/",
      url: "https://www.officeexperts.com.au/refund-policy/",
      name: "Refund Policy | Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au/#organization",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/refund-policy/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/refund-policy/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/refund-policy/#breadcrumb",
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
          name: "Refund Policy",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.officeexperts.com.au/#website",
      url: "https://www.officeexperts.com.au/",
      name: "Office Experts Group: Microsoft Excel Experts, Microsoft Access Database Experts, Microsoft Word Experts, PowerPoint Experts, Azure, Power BI, SQL Server, SharePoint, Microsoft Office 365",
      description:
        "Your Microsoft Office Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.officeexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.officeexperts.com.au/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
    },
    {
      "@type": "Organization",
      "@id": "https://www.officeexperts.com.au/#organization",
      name: "Office Experts Group",
      url: "https://www.officeexperts.com.au/",
      telephone: "1300 102 810",
      email: "consult@officeexperts.com.au",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 102 810",
          contactType: "customer service",
          email: "consult@officeexperts.com.au",
          availableLanguage: ["en", "en-AU"],
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "New South Wales",
        },
        {
          "@type": "AdministrativeArea",
          name: "Victoria",
        },
        {
          "@type": "AdministrativeArea",
          name: "Queensland",
        },
        {
          "@type": "AdministrativeArea",
          name: "Western Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "South Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tasmania",
        },
        {
          "@type": "AdministrativeArea",
          name: "Australian Capital Territory",
        },
        {
          "@type": "AdministrativeArea",
          name: "Northern Territory",
        },
      ],
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-AU",
        "@id": "https://www.officeexperts.com.au/#/schema/logo/image/",
        url: "/logo.png",
        contentUrl: "/logo.png",
        width: 1181,
        height: 1181,
        caption: "Office Experts Group",
      },
      image: {
        "@id": "https://www.officeexperts.com.au/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/MSOfficeExperts",
        "https://x.com/OfficeExpertsG1",
        "https://www.instagram.com/officeexpertsgroup",
        "https://www.linkedin.com/company/office-experts-group",
        "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
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
      <ServiceHero title="Refund Policy" />
      <div className={styles.refundPolicyContainer}>
        <div className={styles.policySection}>
          <h1 className={styles.mainTitle}>Refund Policy</h1>

          <p className={styles.introText}>
            This Refund Policy should be read in conjunction with our Service
            Agreement. Your rights under the{" "}
            <Link href={"/terms-and-conditions"}>Service Agreement</Link> can be
            found at section 15.
          </p>

          <article className={styles.policyArticle}>
            <h2 className={styles.sectionTitle}>
              1. Refunds for legal services provided
            </h2>
            <p>
              Office Experts Group is bound by Australian Consumer Law ('ACL')
              obligations to provide IT services with due care and skill within
              a reasonable period of time. These obligations constitute consumer
              guarantees by law.
            </p>

            <p>
              In the unlikely event that we have failed to meet a consumer
              guarantee, you are entitled to a reasonable remedy. This may
              include:
            </p>

            <ul className={styles.remedyList}>
              <li>discounting our fees</li>
              <li>providing you with a credit</li>
              <li>
                providing you with a full or partial refund of the fees that you
                have paid
              </li>
            </ul>

            <p>
              The remedy will depend on the circumstances and will be dealt with
              on a case-by-case basis.
            </p>

            <p>
              If you are not satisfied by or believe that the remedy we have
              offered you is reasonable, we will engage in dispute resolution,
              as per section 15 of our Services Agreement.
            </p>
          </article>

          <article className={styles.policyArticle}>
            <h2 className={styles.sectionTitle}>2. Online payment disputes</h2>
            <p>
              Online credit card payments are currently processed using a third
              party payment gateway service provided by Commonwealth Bank of
              Australia (CBA).
            </p>

            <p>
              If you believe there has been an error in an online payment you
              have made and you are seeking a refund, we recommend that you
              contact your financial institution to clarify the transaction.
            </p>

            <p>
              If your financial institution is unable to resolve the issue,
              please contact us and we will discuss the issue with CBA.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Page;
