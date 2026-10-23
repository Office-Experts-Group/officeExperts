export const metadata = {
  title: "Custom Toolbars and Ribbons | Word Experts",
  description:
    "Expert Microsoft Word toolbar and ribbon customisation services. Improve productivity with custom Word toolbars tailored to your business needs.",
  keywords: [
    // Core services
    "custom word toolbars",
  ],
  openGraph: {
    title: "Custom Toolbars and Ribbons | Word Experts",
    description:
      "Expert Microsoft Word toolbar and ribbon customisation services. Improve productivity with custom Word toolbars.",
    url: "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Custom Toolbars and Ribbons | Word Experts",
    description:
      "Expert Microsoft Word toolbar and ribbon customisation services. Improve productivity with custom Word toolbars.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/custom-toolbars-and-ribbons",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
