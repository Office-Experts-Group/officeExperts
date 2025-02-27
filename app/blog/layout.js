export const metadata = {
  title: "Blog | Office Experts Australia",
  description:
    "Stay up to date with the latest Microsoft Office tips, tricks, and best practices from Office Experts Australia.",
  openGraph: {
    title: "Blog | Office Experts Australia",
    description:
      "Stay up to date with the latest Microsoft Office tips, tricks, and best practices from Office Experts Australia.",
    url: "https://www.officeexperts.com.au/blog",
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
    canonical: "/blog",
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
