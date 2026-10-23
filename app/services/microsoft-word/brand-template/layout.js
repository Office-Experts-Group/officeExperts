export const metadata = {
  title: "Microsoft Word Brand Template Services | Word Experts",
  description:
    "Professional Microsoft Word brand template services. Custom document templates that ensure consistent branding and a professional appearance.",

  keywords: [
    // Core service keywords
    "Microsoft Word Brand Templates",
  ],

  openGraph: {
    title: "Microsoft Word Brand Template Services | Word Experts",
    description:
      "Professional Microsoft Word brand template services. Custom document templates that ensure consistent branding and professional appearance across your organisation.",
    url: "https://www.wordexperts.com.au/brand-template",
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
    title: "Microsoft Word Brand Template Services | Word Experts",
    description:
      "Professional Microsoft Word brand template services. Custom document templates that ensure consistent branding and professional appearance across your organisation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/brand-template",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
