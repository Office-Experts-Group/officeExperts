export const metadata = {
  title: "Corporate Global Template Solution - Microsoft Word",
  description:
    "Advanced Corporate Word Template Solutions enabling efficient creation of corporate documents, brand consistency and document integrity.",
  keywords: ["global word templates"],
  openGraph: {
    title: "Corporate Global Template Solution - Microsoft Word",
    description:
      "Advanced Corporate Word Template Solutions enabling efficient creation of corporate documents, brand consistency and document integrity.",
    url: "https://www.wordexperts.com.au/corporate-global-template-solution",
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
    title: "Corporate Global Template Solution - Microsoft Word",
    description:
      "Advanced Corporate Word Template Solutions enabling efficient creation of corporate documents, brand consistency and document integrity.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/corporate-global-template-solution",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
