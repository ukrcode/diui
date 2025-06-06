import type { Metadata } from "next";
import "./globals.css";

// TODO switch to node_modules when finish development
import "../../lib/css/diui.css";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";

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
      <body className="di-body di-page">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
