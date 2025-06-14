import clsx from "clsx";
import styles from "./main-banner.module.scss";

export function MainBanner() {
  return (
    <div
      className={clsx(
        styles["heading-container"],
        "di-gr-bg-primary",
        "di-container"
      )}
    >
      <h1 className="di-h1">🇺🇦 diui</h1>
      <p className="di-text-body">
        <span className="di-underline-md">неофіційна</span> CSS бібліотека
        побудована{" "}
        <span className="di-underline-md">на базі дизайн-системи Дії</span>
      </p>
    </div>
  );
}
