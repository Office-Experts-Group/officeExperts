export const metadata = {
  title: "Corporate Identity | Word Experts",
  description:
    "Professional corporate identity protection expert Microsoft Word designers. Ensure brand consistency and document compliance across your organisation.",
  keywords: [
    // Core services
    "corporate document control",
  ],
  openGraph: {
    title: "Corporate Identity | Word Experts",
    description:
      "Professional corporate identity protection expert Microsoft Word designers. Ensure brand consistency and document compliance across your organisation.",

    url: "https://www.wordexperts.com.au/corporate-identity",
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
    title: "Corporate Identity | Word Experts",
    description:
      "Professional corporate identity protection expert Microsoft Word designers. Ensure brand consistency and document compliance across your organisation.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/corporate-identity",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
