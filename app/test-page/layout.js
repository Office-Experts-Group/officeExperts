import React from "react";

export const metadata = {
  // Basic metadata
  title: "Test Page",
  description: "Not intended for public display.",

  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
