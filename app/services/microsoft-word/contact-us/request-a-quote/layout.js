export const metadata = {
  title: "Request a Quote | Word Experts",
  description:
    "Use the form below for quotes and estimates include associated requirements, issues, budget and time constraints.",
  keywords: [
    // Core quote services
    "microsoft word quote services",
  ],
  openGraph: {
    title: "Request a Quote | Word Experts",
    description:
      "Use the form below for quotes and estimates include associated requirements, issues, budget and time constraints.",
    url: "https://www.wordexperts.com.au/contact-us/request-a-quote",
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
    canonical: "/contact-us/request-a-quote",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
