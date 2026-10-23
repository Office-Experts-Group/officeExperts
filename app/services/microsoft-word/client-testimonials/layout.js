export const metadata = {
  title: "Client Testimonials | Word Experts",
  description:
    "Read what our clients say about Word Experts' professional Microsoft Word services. Client testimonials from businesses across Australia.",
  keywords: ["word experts reviews"],
  openGraph: {
    title: "Client Testimonials | Word Experts",
    description:
      "Read what our clients say about Word Experts' professional Microsoft Word services. Client testimonials from businesses across Australia.",
    url: "https://www.wordexperts.com.au/client-testimonials",
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
    canonical: "/client-testimonials",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@WordExpertsAU",
    title: "Client Testimonials | Word Experts",
    description:
      "Read what our clients say about Word Experts' professional Microsoft Word services. Client testimonials from businesses across Australia.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/client-testimonials",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
