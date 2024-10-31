import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header";

import "diui/css/diui.min.css";

export const metadata: Metadata = {
  title: "diui CSS library documentation",
  description: "Here you can find all the details about the diui CSS library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="di-body">{children}</body>
    </html>
  );
}
