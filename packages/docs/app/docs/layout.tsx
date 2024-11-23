import type { Metadata } from "next";
import DocsNav from "./docs-nav";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <aside>
        <DocsNav />
      </aside>
      <article className="di-container">{children}</article>
    </>
  );
}
