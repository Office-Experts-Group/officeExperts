export const metadata = {
  title: "Contact Us | Word Experts",
  description:
    "Contact Word Experts for professional Microsoft Word solutions. Expert consultants across Australia available onsite or by remote access. Call 1300 122 038.",
  keywords: [
    // Contact methods
    "contact word experts",
  ],
  openGraph: {
    title: "Contact Us | Word Experts",
    description:
      "Contact Word Experts for professional Microsoft Word solutions. Expert consultants across Australia.",
    url: "https://www.wordexperts.com.au/contact-us",
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
    title: "Contact Word Experts | Professional Microsoft Word Solutions",
    description:
      "Contact Word Experts for professional Microsoft Word solutions. Expert consultants across Australia.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/contact-us",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
