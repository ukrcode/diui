import ColorBgPage from "./color-bg-page.mdx";
import GradientBgPage from "./gradient-bg-page.mdx";

export default function ColorsBgPage() {
  return (
    <article className="di-container">
      <section style={{ display: "flex", gap: "1rem" }}>
        <div>
          <ColorBgPage />
        </div>

        <div>
          <GradientBgPage />
        </div>
      </section>
    </article>
  );
}
