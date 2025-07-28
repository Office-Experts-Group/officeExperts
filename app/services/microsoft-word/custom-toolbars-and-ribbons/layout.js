import React from "react";

export const metadata = {
  title: "Word Custom Toolbars and Ribbons | Office Experts Group",
  description:
    "Expert customisation of Microsoft Word toolbars and ribbons to improve productivity and streamline document creation. Our team delivers automated solutions for efficient business documentation.",

  openGraph: {
    title: "Word Custom Toolbars and Ribbons | Office Experts Group",
    description:
      "Expert customisation of Microsoft Word toolbars and ribbons to improve productivity and streamline document creation. Our team delivers automated solutions for efficient business documentation.",
    url: "https://www.officeexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons",
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

  alternates: {
    canonical: "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Custom Toolbars and Ribbons | Office Experts Group",
    description:
      "Expert customisation of Microsoft Word toolbars and ribbons to improve productivity and streamline document creation. Our team delivers automated solutions for efficient business documentation.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
