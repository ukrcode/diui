import HeadingsExample from "../ui/typography/headings-example";
import styles from "./page.module.css";

export default function Typography() {
  return (
    <article className={styles["typography-page"]}>
      <HeadingsExample />;
    </article>
  );
}
