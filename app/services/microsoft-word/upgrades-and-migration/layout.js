export const metadata = {
  title: "Word Upgrades and Migration | Word Experts",
  description:
    "Expert Microsoft Word upgrade and migration services. Resolve formatting issues, maintain document integrity, and ensure smooth transitions.",
  keywords: [
    // Core services
    "microsoft word version upgrade",
    "microsoft word document migration",
  ],
  openGraph: {
    title: "Word Upgrades and Migration | Word Experts",
    description:
      "Expert Microsoft Word upgrade and migration services. Resolve formatting issues, maintain document integrity, and ensure smooth transitions.",
    url: "https://www.wordexperts.com.au/upgrades-and-migration",
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
    title: "Word Upgrades and Migration | Word Experts",
    description:
      "Expert Microsoft Word upgrade and migration services. Resolve formatting issues, maintain document integrity, and ensure smooth transitions.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/upgrades-and-migration",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
