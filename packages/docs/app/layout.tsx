import "./globals.css";
// TODO switch to node_modules when finish development
import "../../lib/css/diui.css";

import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";

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
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
