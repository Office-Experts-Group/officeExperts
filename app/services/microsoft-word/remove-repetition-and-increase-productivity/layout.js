export const metadata = {
  title: "Word Document Automation Services | Word Experts Australia",
  description:
    "Automate repetitive Word tasks and increase productivity. Custom automation solutions for Microsoft Word documents and templates.",
  keywords: ["Word document automation"],
  openGraph: {
    title: "Word Document Automation Services | Word Experts Australia",
    description:
      "Automate repetitive Word tasks and increase productivity. Custom automation solutions for Microsoft Word documents and templates.",
    url: "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
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
    title: "Word Document Automation Services | Word Experts Australia",
    description:
      "Automate repetitive Word tasks and increase productivity. Custom automation solutions for Microsoft Word documents and templates.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/remove-repetition-and-increase-productivity",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
