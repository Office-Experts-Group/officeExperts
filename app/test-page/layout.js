import React from "react";

export const metadata = {
  // Basic metadata
  title: "Test Page for Content",
  description:
    "Internal use only",
  robots: {
    follow: false,
    index: false
  }
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
