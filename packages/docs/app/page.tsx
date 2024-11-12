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
          <span className="di-underline-md">неофіційна</span> CSS бібліотека
          побудована{" "}
          <span className="di-underline-md">на базі дизайн системи Дії</span>
        </p>
      </div>

      <section className="di-container">
        <HomePage />
      </section>
    </article>
  );
}
