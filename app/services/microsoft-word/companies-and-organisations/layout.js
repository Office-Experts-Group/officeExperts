export const metadata = {
  title: "Word Template Designers | Word Experts - Microsoft Word",
  description:
    "Professional Word template solutions for companies and organisations. Custom document templates that protect corporate identity and improve efficiency.",

  keywords: [
    // Business focus
    "corporate word templates",
  ],
  openGraph: {
    title: "Word Template Designers | Word Experts - Microsoft Word",
    description:
      "Professional Word template solutions for companies and organisations. Custom document templates that protect corporate identity.",
    url: "https://www.wordexperts.com.au/companies-and-organisations",
    siteName: "Word Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Word Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },
  alternates: {
    canonical: "/companies-and-organisations",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Word Template Designers | Word Experts - Microsoft Word",
    description:
      "Professional Word template solutions for companies and organisations. Custom document templates that protect corporate identity.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/companies-and-organisations",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
