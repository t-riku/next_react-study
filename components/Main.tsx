import styles from "../styles/Home.module.css";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

type Mainpage = {
  page: string;
};

export function Main(props: Mainpage) {
  console.log(props);
  return (
    <main className={styles.main}>
      <Headline
        title="Index Page"
        page={props.page}
        onClick={() => alert("クリック！")}
      >
        <code className={styles.code}>pages/{props.page}.tsx</code>
      </Headline>

      <Links />
    </main>
  );
}
