import React from "react";

export const metadata = {
  // Basic metadata
  title: "Document Rebranding Services | Word Experts",
  description:
    "Our Microsoft Word designers create custom templates with brand-consistent formatting and professional rebranding services.",

  // OpenGraph
  openGraph: {
    title: "Document Rebranding Services | Word Experts",
    description:
      "Our Microsoft Word designers create custom templates with brand-consistent formatting and professional rebranding services.",
    url: "https://www.wordexperts.com.au/document-rebranding-services",
    siteName: "Word Experts",
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
    site: "@WordExpertsAU",
    title: "Document Rebranding Services | Word Experts",
    description:
      "Our Microsoft Word designers create custom templates with brand-consistent formatting and professional rebranding services.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/document-rebranding-services",
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
              name: "Word Experts",
              url: "https://www.wordexperts.com.au",
              telephone: "+611300122038",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Australia",
              },
            },
            description:
              "Professional document rebranding service that applies your updated brand identity to all of your business templates and documentation including Microsoft Word templates, PowerPoint presentations, and Excel spreadsheets.",
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
