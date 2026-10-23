export const metadata = {
  title: "Google Docs to Microsoft Word Migration Services",
  description:
    "Professional Google Docs to Microsoft Word migration services. Seamless document conversion, custom template development, and enterprise migration solutions.",
  keywords: ["Google Docs to Word migration"],
  openGraph: {
    title: "Google Docs to Microsoft Word Migration Services",
    description:
      "Professional Google Docs to Microsoft Word migration services. Seamless document conversion with 100% formatting preservation, custom templates, and enterprise support.",
    url: "https://www.wordexperts.com.au/google-docs-to-word-migration",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Google Docs to Microsoft Word Migration Services",
    description:
      "Professional Google Docs to Microsoft Word migration with 100% formatting preservation. Custom templates, enterprise solutions, and ongoing support.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/google-docs-to-word-migration",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
