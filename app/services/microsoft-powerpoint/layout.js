// app/services/microsoft-powerpoint/layout.js

// Metadata for the single consolidated PowerPoint page. The four child pages
// (templates, redesign, VBA, training) now redirect here.
export const metadata = {
  title: "PowerPoint Consultants Australia | Templates, Design & Training",
  description:
    "Expert Microsoft PowerPoint consultants across Australia. Custom templates and master slides, presentation redesign, VBA automation, training and support.",

  keywords: [
    "Microsoft PowerPoint consultation",
    "PowerPoint consultants Australia",
    "PowerPoint template design",
    "PowerPoint master slides",
    "PowerPoint redesign",
    "PowerPoint VBA automation",
    "PowerPoint training",
  ],

  alternates: {
    canonical: "/services/microsoft-powerpoint",
  },

  // OpenGraph
  openGraph: {
    title: "PowerPoint Consultants Australia | Templates, Design & Training",
    description:
      "Expert Microsoft PowerPoint consultants across Australia. Custom templates and master slides, presentation redesign, VBA automation, training and support.",
    url: "https://www.officeexperts.com.au/services/microsoft-powerpoint",
    siteName: "Office Experts Group",
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
    site: "@OfficeExpertsG1",
    title: "PowerPoint Consultants Australia | Templates, Design & Training",
    description:
      "Expert Microsoft PowerPoint consultants across Australia. Custom templates and master slides, presentation redesign, VBA automation, training and support.",
    images: ["/logo.png"],
  },
};

export default function PowerPointLayout({ children }) {
  return <>{children}</>;
}
