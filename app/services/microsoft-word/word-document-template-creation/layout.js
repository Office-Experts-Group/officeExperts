export const metadata = {
  title: "Word Document Template Creation - Word Experts",
  description:
    "Professional Microsoft Word template creation services. Custom document templates that maintain brand consistency and improve productivity. Call 1300 122 038.",
  keywords: ["word doc templates"],
  openGraph: {
    title: "Word Document Template Creation - Word Experts",
    description:
      "Professional Microsoft Word template creation services. Custom document templates that maintain brand consistency and improve productivity.",
    url: "https://www.wordexperts.com.au/word-document-template-creation",
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
  alternates: {
    canonical: "/word-document-template-creation",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Word Document Template Creation",
    description:
      "Professional Microsoft Word template creation services. Custom document templates that maintain brand consistency and improve productivity.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/word-document-template-creation",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
