// Layout file for /mail-merge route
export const metadata = {
  // Basic metadata
  title: "Mail Merge Services | Microsoft Word Experts Australia",
  description:
    "Streamline your document creation with professional Mail Merge solutions. Word Experts helps Australian businesses automate letters, invoices, labels, and emails using Microsoft Word and Excel.",

  // Keywords for SEO
  keywords: [
    // Core service keywords
    "mail merge services",
  ],

  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Mail Merge Services | Microsoft Word Experts Australia",
    description:
      "Streamline your document creation with professional Mail Merge solutions. Word Experts helps Australian businesses automate letters, invoices, labels, and emails using Microsoft Word and Excel.",
    url: "https://www.wordexperts.com.au/mail-merge",
    siteName: "Word Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Mail Merge Services | Microsoft Word Experts Australia",
    description:
      "Professional Mail Merge solutions for Australian businesses. Automate letters, invoices, labels, and emails with Microsoft Word and Excel.",
    images: ["/logo.png"],
  },

  // Canonical URL for SEO
  alternates: {
    canonical: "/mail-merge",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
