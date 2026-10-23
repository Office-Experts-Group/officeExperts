export const metadata = {
  title: "Meet The Team - Word Experts",
  description:
    "Meet our expert team of Microsoft Word consultants, developers, and designers. Professional Word template and document specialists across Australia.",
  keywords: [
    // Team expertise
    "Word Experts team",
  ],
  openGraph: {
    title: "Meet The Team - Word Experts",
    description:
      "Meet our expert team of Microsoft Word consultants, developers, and designers. Professional Word specialists across Australia.",
    url: "https://www.wordexperts.com.au/meet-the-team",
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
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Meet The Team - Word Experts",
    description:
      "Meet our expert team of Microsoft Word consultants, developers, and designers. Professional Word specialists across Australia.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/meet-the-team",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
