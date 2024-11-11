import clsx from "clsx";
import styles from "./page.module.css";
import HomePage from "./home-page.mdx";

export default function Home() {
  return (
    <article>
      <div
        className={clsx(styles["heading-container"], "di-primary-background", "di-container")}
      >
        <h1 className="di-h1">🇺🇦 diui</h1>
        <p className="di-body-text">
          <span className="di-md-underline">неофіційна</span> CSS бібліотека
          побудована{" "}
          <span className="di-md-underline">на базі дизайн системи Дії</span>
        </p>
      </div>

      <section className="di-container">
        <HomePage />
      </section>
    </article>
  );
}
