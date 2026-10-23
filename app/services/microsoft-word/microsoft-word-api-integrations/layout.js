export const metadata = {
  title: "Microsoft Word API Development & Integrations",
  description:
    "Expert Microsoft Word API development and custom integrations. Connect Word with CRM, SharePoint, databases and business systems. JavaScript specialists for Word automation solutions.",

  keywords: [
    // Core API/Development focus
    "microsoft word api development",
  ],

  openGraph: {
    title: "Microsoft Word API Development & Integrations",
    description:
      "Expert Microsoft Word API development and custom integrations. Connect Word with CRM, SharePoint, databases and business systems for automated document workflows.",
    url: "https://www.wordexperts.com.au/microsoft-word-api-integrations",
    siteName: "Word Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Microsoft Word API Development & Integrations",
    description:
      "Expert Microsoft Word API development and custom integrations. Connect Word with CRM, SharePoint, databases and business systems.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/microsoft-word-api-integrations",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
