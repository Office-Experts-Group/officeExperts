import React from "react";

import styles from "../../styles/blog.module.scss";

import {
  generateOrganizationSchema,
  generateProfessionalServiceSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/blog",
      url: "https://www.officeexperts.com.au/blog",
      name: "Blog | Office Experts Australia",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-01-23T00:00:00+00:00",
      dateModified: "2024-01-23T00:00:00+00:00",
      description:
        "Stay up to date with the latest Microsoft Office tips, tricks, and best practices from Office Experts Australia.",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/blog#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/blog"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/blog#breadcrumb",
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
          name: "Blog",
        },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className={styles.blogContainer}>
        <h1>Blog</h1>
        <p>This page is currently under construction.</p>
      </main>
    </>
  );
}
