import clsx from "clsx";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section>
      <div className={clsx(styles["heading-container"], "di-primary-background")} >
        <h1 className="di-h1">🇺🇦 diui docs</h1>
      </div>
    </section>
  );
}
