import React from "react";

import styles from "../../styles/ccp.module.css";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/ccp",
      url: "https://www.officeexperts.com.au/ccp",
      name: "Credit Card Payments - Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2024-10-26T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/ccp#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/ccp"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/ccp#breadcrumb",
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
          name: "Credit Card Payments",
        },
      ],
    },
  ],
};

const Page = () => {
  return (
    <main className={styles.ccp}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h1>Online payments are currently unavailable</h1>
      <h2>We apologise for the inconvenience.</h2>
      <p>Please contact us directly for further assistance.</p>
    </main>
  );
};

export default Page;
