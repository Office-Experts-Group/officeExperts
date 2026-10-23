export const metadata = {
  title: "Word template conversions | Word Experts",
  description:
    "Professional Word template conversions in Australia. We convert Adobe, InDesign and PDF files into fully functional, on-brand Microsoft Word templates.",
  keywords: [
    // Core services
    "word template conversion",
  ],
  openGraph: {
    title: "Word template conversions | Word Experts",
    description:
      "Professional Word template conversions in Australia. We convert Adobe, InDesign and PDF files into fully functional, on-brand Microsoft Word templates.",
    url: "https://www.wordexperts.com.au/word-template-conversions",
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
    title: "Word template conversions | Word Experts",
    description:
      "Professional Word template conversions in Australia. We convert Adobe, InDesign and PDF files into fully functional, on-brand Microsoft Word templates.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-template-conversions",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
