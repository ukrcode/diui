import ColorBgExample from "./color-bg-example";
import GradientBgExample from "./gradient-bg-example";

export default function ColorsBgPage() {
  return (
    <article style={{ width: "50%" }} className="utils-page">
      <ColorBgExample />

      <GradientBgExample />
    </article>
  );
}
