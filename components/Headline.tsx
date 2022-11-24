import styles from "../styles/Home.module.css";

type Mainpage = {
  title: string;
  page: string;
};

export function Headline(props: Mainpage) {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{props.page}.tsx</code>
      </p>
    </div>
  );
}
