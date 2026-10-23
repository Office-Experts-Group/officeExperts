import React from "react";

const PAGE_URL =
  "https://www.officeexperts.com.au/services/microsoft-word/document-rebranding-services";
const PAGE_TITLE = "Document Rebranding Services | Office Experts";
const PAGE_DESCRIPTION =
  "Update your existing Microsoft Word documents to reflect your new brand, including logos, colours, fonts, layouts and corporate styling.";

const SITE_URL = "https://www.officeexperts.com.au";

export const metadata = {
  // Basic metadata
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  // OpenGraph
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Office Experts",
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

  // Additional metadata
  keywords: ["Document rebranding Services"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsAU",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "services/microsoft-word/document-rebranding-services",
  },
};

// Add structured data for the service
export default function RootLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Document Rebranding Services",
            serviceType: "Document Rebranding",
            provider: {
              "@type": "Organization",
              name: "Office Experts",
              url: SITE_URL,
              telephone: "1300122038",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Australia",
              },
            },
            description: PAGE_DESCRIPTION,
            offers: {
              "@type": "Offer",
              price: "",
              priceCurrency: "AUD",
              availability: "https://schema.org/InStock",
            },
            areaServed: {
              "@type": "Country",
              name: "Australia",
            },
            audience: {
              "@type": "Audience",
              audienceType: "Businesses and Organizations",
            },
            serviceOutput:
              "Professionally branded document templates and styling",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Document Rebranding Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Template Rebranding & Redesign",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Bulk Template Conversion",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Advanced Word Functionality",
                  },
                },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  );
}
