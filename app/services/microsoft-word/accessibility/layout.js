export const metadata = {
  title: "Microsoft Word Accessibility | Word Experts",
  description:
    "Accessible Word document creation and template services. WCAG-compliant documents, accessibility audits, and remediation services for government and enterprise.",

  keywords: [
    // Core accessibility
    "word accessibility solutions",
  ],
  openGraph: {
    title: "Microsoft Word Accessibility | Word Experts",
    description:
      "Accessible Word document creation and template services. WCAG-compliant documents, accessibility audits, and remediation services for government and enterprise.",
    url: "https://www.wordexperts.com.au/accessibility",
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
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Microsoft Word Accessibility | Word Experts",
    description:
      "Accessible Word document creation and template services. WCAG-compliant documents, accessibility audits, and remediation services for government and enterprise.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/accessibility",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
