export const metadata = {
  title: "Word Popup Forms | Custom VBA Data Entry Forms | Word Experts",
  description:
    "Custom Microsoft Word popup forms with guided data entry, validation, conditional logic and direct document integration. Reduce errors and keep every document consistent.",
  keywords: [
    "word popup forms",
    "word userform vba",
    "word data entry form",
    "word form validation",
  ],
  openGraph: {
    title: "Word Popup Forms | Custom VBA Data Entry Forms | Word Experts",
    description:
      "Custom Microsoft Word popup forms with guided data entry, validation, conditional logic and direct document integration.",
    url: "https://www.wordexperts.com.au/popup-forms",
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
    title: "Word Popup Forms | Custom VBA Data Entry Forms | Word Experts",
    description:
      "Custom Microsoft Word popup forms with guided data entry, validation, conditional logic and direct document integration.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/popup-forms",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
