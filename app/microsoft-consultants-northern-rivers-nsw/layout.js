// app/microsoft-consultants-northern-rivers-nsw/layout.js
// Metadata only. The route renders its children untouched.
const TITLE = "Microsoft Consultants Northern NSW | Office Experts Group";
const DESCRIPTION =
  "Home to our head office. We’ve helped Northern Rivers businesses and clients nationwide get more from Microsoft for over 25 years.";
export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["microsoft consultants northern nsw"],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.officeexperts.com.au/microsoft-consultants-northern-rivers-nsw",
    siteName: "Office Experts",
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
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/microsoft-consultants-northern-rivers-nsw",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
