export const metadata = {
  title: "Government Department Word Document Solutions | Word Experts",
  description:
    "25 years of expertise delivering Microsoft Word solutions for government departments. Accessible documents, compliant templates, and secure document management solutions.",
  keywords: [
    // Core services
    "government word templates",
  ],
  openGraph: {
    title: "Government Department Word Document Solutions | Word Experts",
    description:
      "25 years of expertise delivering Microsoft Word solutions for government departments. Accessible documents, compliant templates, and secure document management solutions.",
    url: "https://www.wordexperts.com.au/government-departments",
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
    title: "Government Department Word Document Solutions | Word Experts",
    description:
      "25 years of expertise delivering Microsoft Word solutions for government departments. Accessible documents, compliant templates, and secure document management solutions.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/government-departments",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
