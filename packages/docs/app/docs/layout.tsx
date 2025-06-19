// import DocsNav from "./docs-nav";
import "./layout.css";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <aside>
        {/*<DocsNav />*/}
      </aside>
      <article className="di-container utils-page">{children}</article>
    </>
  );
}
