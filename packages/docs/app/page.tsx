import clsx from "clsx";
import styles from "./page.module.css";
import HomePage from "./home-page-content.mdx";
import { MainBanner } from "./ui/main-banner";

export default function Home() {
  return (
    <article>
      <MainBanner />
      <section className="di-container">
        <HomePage />
      </section>
    </article>
  );
}
